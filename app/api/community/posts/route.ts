import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            walletAddress: true,
            name: true,
            handle: true
          }
        },
        comments: {
          include: {
            author: {
              select: {
                walletAddress: true,
                name: true,
                handle: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, content, tags, walletAddress } = await request.json()

    if (!title || !content || !walletAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Find or create user by wallet address
    let user = await prisma.user.findUnique({
      where: { walletAddress }
    })

    if (!user) {
      user = await prisma.user.create({
        data: {
          walletAddress,
          email: `${walletAddress}@sigma-labs.com`, // Temporary email
          handle: walletAddress.slice(0, 8),
          name: `User_${walletAddress.slice(0, 6)}`
        }
      })
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        tags: tags || null,
        authorId: user.id
      },
      include: {
        author: {
          select: {
            walletAddress: true,
            name: true,
            handle: true
          }
        },
        comments: {
          include: {
            author: {
              select: {
                walletAddress: true,
                name: true,
                handle: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    return NextResponse.json(post)
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
} 
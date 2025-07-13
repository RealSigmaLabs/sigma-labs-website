import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const { content, postId, walletAddress } = await request.json()

    if (!content || !postId || !walletAddress) {
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

    const comment = await prisma.comment.create({
      data: {
        content,
        postId,
        authorId: user.id
      },
      include: {
        author: {
          select: {
            walletAddress: true,
            name: true,
            handle: true
          }
        }
      }
    })

    return NextResponse.json(comment)
  } catch (error) {
    console.error('Error creating comment:', error)
    return NextResponse.json(
      { error: 'Failed to create comment' },
      { status: 500 }
    )
  }
} 
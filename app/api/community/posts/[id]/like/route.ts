import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { action } = await request.json() // 'like' or 'unlike'
    const postId = params.id

    if (!postId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const post = await prisma.post.findUnique({
      where: { id: postId }
    })

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      )
    }

    const newLikes = action === 'like' ? post.likes + 1 : Math.max(0, post.likes - 1)

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { likes: newLikes },
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

    return NextResponse.json(updatedPost)
  } catch (error) {
    console.error('Error updating post likes:', error)
    return NextResponse.json(
      { error: 'Failed to update post likes' },
      { status: 500 }
    )
  }
} 
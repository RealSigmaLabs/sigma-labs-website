import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { action } = await request.json() // 'like' or 'unlike'
    const commentId = params.id

    if (!commentId || !action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const comment = await prisma.comment.findUnique({
      where: { id: commentId }
    })

    if (!comment) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      )
    }

    const newLikes = action === 'like' ? comment.likes + 1 : Math.max(0, comment.likes - 1)

    const updatedComment = await prisma.comment.update({
      where: { id: commentId },
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

    return NextResponse.json(updatedComment)
  } catch (error) {
    console.error('Error updating comment likes:', error)
    return NextResponse.json(
      { error: 'Failed to update comment likes' },
      { status: 500 }
    )
  }
} 
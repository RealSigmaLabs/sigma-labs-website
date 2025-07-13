'use client'

import { useState, useEffect } from 'react'

interface TypingTextProps {
  text: string
  speed?: number
  className?: string
  animate?: boolean
}

export function TypingText({ 
  text, 
  speed = 50, 
  className = '', 
  animate = true 
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!animate) {
      setDisplayText(text)
      return
    }

    // Reset when text changes
    setDisplayText('')
    setCurrentIndex(0)

    if (text.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= text.length) {
          clearInterval(interval)
          return prev
        }
        setDisplayText(text.slice(0, prev + 1))
        return prev + 1
      })
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, animate])

  return (
    <span className={`cyberpunk-font-thin ${className}`}>
      {displayText}
      {animate && currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  )
} 
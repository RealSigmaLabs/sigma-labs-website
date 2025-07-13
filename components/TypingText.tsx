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
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!animate || hasAnimated) {
      setDisplayText(text)
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setHasAnimated(true)
    }
  }, [currentIndex, text, speed, animate, hasAnimated])

  return (
    <span className={`cyberpunk-font-thin ${className}`}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
} 
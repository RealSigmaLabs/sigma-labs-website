'use client'

import { useState, useEffect } from 'react'

interface ChangingNumberProps {
  finalValue: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function ChangingNumber({ 
  finalValue, 
  duration = 2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}: ChangingNumberProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Reset state
    setCurrentValue(0)
    setHasStarted(false)

    const startAnimation = () => {
      setHasStarted(true)
      const startTime = Date.now()
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const newValue = Math.floor(finalValue * easeOutQuart)
        
        setCurrentValue(newValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          // Ensure final value is set
          setCurrentValue(finalValue)
        }
      }

      requestAnimationFrame(animate)
    }

    // Start animation after a small delay
    const timer = setTimeout(startAnimation, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [finalValue, duration])

  // Fallback to ensure final value is set
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      setCurrentValue(finalValue)
    }, duration + 500)

    return () => clearTimeout(fallbackTimer)
  }, [finalValue, duration])

  return (
    <span className={`changing-number ${className}`}>
      {prefix}{currentValue.toLocaleString()}{suffix}
    </span>
  )
}

interface StatsSectionProps {
  stats: Array<{
    value: number
    label: string
    prefix?: string
    suffix?: string
  }>
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="cyberpunk-text-block p-6 text-center">
          <div className="cyberpunk-font text-3xl font-bold text-black mb-2">
            <ChangingNumber 
              finalValue={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </div>
          <div className="cyberpunk-font-medium text-black">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
} 
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { TypingText } from './TypingText'

interface InteractiveCardProps {
  title: React.ReactNode
  description: string
  details?: string
  className?: string
  icon?: React.ReactNode
}

export function InteractiveCard({ 
  title, 
  description, 
  details, 
  className = '', 
  icon 
}: InteractiveCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      className={`cyberpunk-text-block cursor-pointer transition-all duration-300 hover:scale-105 ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setIsExpanded(!isExpanded)}
      layout
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            {icon && <div className="flex-shrink-0">{icon}</div>}
            <div>
              <h3 className="cyberpunk-font text-lg font-semibold text-black mb-2">{title}</h3>
              <TypingText 
                text={description}
                speed={30}
                className="cyberpunk-font-medium text-black"
                animate={true}
              />
            </div>
          </div>
          {details && (
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-black" />
              ) : (
                <ChevronDown className="h-5 w-5 text-black" />
              )}
            </motion.div>
          )}
        </div>
        
        <AnimatePresence>
          {isExpanded && details && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-black"
            >
              <TypingText 
                text={details}
                speed={20}
                className="cyberpunk-font-thin text-black text-sm"
                animate={true}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
} 
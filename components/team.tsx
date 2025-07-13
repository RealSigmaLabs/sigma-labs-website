'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { TypingText } from './TypingText'
import { X } from 'lucide-react'

export function Team() {
  const [showComingSoon, setShowComingSoon] = useState(false)
  const [popupMessage, setPopupMessage] = useState('')

  const handleComingSoon = (message: string) => {
    setPopupMessage(message)
    setShowComingSoon(true)
  }

  const closePopup = () => {
    setShowComingSoon(false)
  }

  return (
    <div className="bg-primary-500 py-24 sm:py-32 cyberpunk-bg cyberpunk-grid">
      <div className="cyberpunk-3d-elements">
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
      </div>
      
      <div className="cyberpunk-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyberpunk-font text-4xl font-bold tracking-tight text-black sm:text-5xl glitch"
            data-text="MEET THE TEAM"
          >
            MEET THE TEAM
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="cyberpunk-text-block p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-black">
              <Image
                src="/images/team/Goku.png"
                alt="Goku"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="cyberpunk-font text-xl font-bold text-black mb-2">Goku</h3>
            <p className="cyberpunk-font-medium text-black mb-2">@gokunocool</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="cyberpunk-text-block p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-black">
              <Image
                src="/images/team/Mr.RC.png"
                alt="Mr.RC"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="cyberpunk-font text-xl font-bold text-black mb-2">Mr.RC</h3>
            <p className="cyberpunk-font-medium text-black mb-2">@mrryanchi</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="cyberpunk-text-block p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-black">
              <Image
                src="/images/team/Daksh.png"
                alt="Daksh"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="cyberpunk-font text-xl font-bold text-black mb-2">Daksh</h3>
            <p className="cyberpunk-font-medium text-black mb-2">@hyfidaksh</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="cyberpunk-text-block p-6 text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-black">
              <Image
                src="/images/team/DaShuai.png"
                alt="DaShuai"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="cyberpunk-font text-xl font-bold text-black mb-2">DaShuai</h3>
            <p className="cyberpunk-font-medium text-black mb-2">@ezshine</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="cyberpunk-text-block p-8 max-w-4xl mx-auto">
            <h3 className="cyberpunk-font text-2xl font-bold text-black mb-4 glitch" data-text="JOIN US">
              JOIN US
            </h3>
            <div className="border-t border-black my-6"></div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => handleComingSoon('Community features are being developed. Stay tuned!')}
                className="cyberpunk-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Join Community
              </button>
              <button 
                onClick={() => handleComingSoon('Team application feature is being developed. Stay tuned!')}
                className="cyberpunk-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
              >
                Apply to Join the Team
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closePopup}
        >
          <div 
            className="bg-yellow-300 border-2 border-black p-8 rounded-lg shadow-lg max-w-md mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-black hover:text-gray-700 transition-colors duration-200"
              aria-label="Close popup"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-2xl font-bold text-black cyberpunk-font mb-4 text-center pr-8">
              Coming Soon
            </h3>
            <p className="text-black cyberpunk-font-thin text-center">
              {popupMessage}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  )
} 
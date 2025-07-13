'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Stats() {
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
        <div className="relative">
          {/* Team Image positioned absolutely behind text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute right-0"
            style={{ 
              bottom: '0px',
              top: 'auto',
              height: 'auto',
              maxHeight: 'none',
              overflow: 'visible',
              zIndex: 99999,
              position: 'absolute',
              pointerEvents: 'none'
            }}
          >
            <div className="relative" style={{ overflow: 'visible' }}>
              <Image
                src="/images/stock/Team.png"
                alt="Team"
                width={640}
                height={480}
                className="rounded-lg"
                style={{ 
                  maxWidth: 'none',
                  width: '640px',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  maxHeight: 'none',
                  overflow: 'visible',
                  position: 'relative'
                }}
              />
            </div>
          </motion.div>

          {/* Text content positioned above the image */}
          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="cyberpunk-font text-4xl font-bold tracking-tight text-black sm:text-5xl glitch mb-16"
              data-text="OUR COOK"
            >
              OUR COOK
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="cyberpunk-text-block p-8 text-center max-w-md">
                <div className="cyberpunk-font text-6xl font-bold text-black mb-4">
                  1
                </div>
                <div className="cyberpunk-font-medium text-black text-xl mb-6">
                  Project Out of 30
                </div>
                <Link href="/projects">
                  <button className="cyberpunk-button px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                    Explore Projects
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Transition Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-1 bg-black mt-8"
        />
      </div>
    </div>
  )
} 
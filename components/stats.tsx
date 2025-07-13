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
        {/* Centered heading on top */}
        <div className="flex justify-center w-full mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyberpunk-font text-4xl font-bold tracking-tight text-black sm:text-5xl glitch text-center"
            data-text="OUR COOK"
          >
            OUR COOK
          </motion.h2>
        </div>
        {/* Row for box and image on desktop, stacked on mobile */}
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-8 md:gap-16 w-full">
          {/* 1 out of 30 projects box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end w-full md:w-auto"
          >
            <div className="cyberpunk-text-block p-8 text-center max-w-md mx-auto md:w-[400px] md:h-[340px] flex flex-col justify-center items-center">
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
          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start w-full md:w-auto"
            style={{ position: 'relative', pointerEvents: 'none' }}
          >
            <Image
              src="/images/stock/Team.png"
              alt="Team"
              width={600}
              height={510}
              className="rounded-lg w-full md:w-[600px] h-[240px] md:h-[510px] object-cover"
              style={{ maxWidth: '100%', height: '100%', objectFit: 'cover', display: 'block', overflow: 'visible', position: 'relative' }}
            />
          </motion.div>
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
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TypingText } from './TypingText'
import { CodeBackground } from './CodeBackground'
import './glitch.css'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-primary-500 cyberpunk-bg cyberpunk-grid">
      {/* Background Code Animation */}
      <CodeBackground />
      
      {/* 3D Background Elements */}
      <div className="cyberpunk-3d-elements">
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
        <div className="cyberpunk-3d-element"></div>
      </div>
      
      {/* Animated Particles */}
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Large Logo on the Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-start"
          >
            <Image
              src="/images/logo/center.png"
              alt="Sigma Labs Logo"
              width={500}
              height={500}
              className="w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[500px]"
              priority
            />
          </motion.div>

          {/* Content on the Right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="cyberpunk-font text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black mb-6 glitch"
              data-text="SIGMA LABS"
            >
              SIGMA LABS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8"
            >
              <TypingText 
                text="A lab cooking up projects the market actually vibes with."
                speed={80}
                className="cyberpunk-font-thin text-xl md:text-2xl lg:text-3xl text-black"
                animate={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="/projects" className="cyberpunk-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2 justify-center">
                Explore Projects
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="cyberpunk-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300">
                Join Community
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
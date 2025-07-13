'use client'

import { motion } from 'framer-motion'
import { InteractiveCard } from './InteractiveCard'
import { TypingText } from './TypingText'

export function WhySigma() {
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
            data-text="WHY SIGMA"
          >
            WHY SIGMA
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <TypingText 
              text="Let's be real: the crypto space is cooked."
              speed={60}
              className="cyberpunk-font-thin text-lg text-black"
              animate={true}
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InteractiveCard
              title="Too many AI wrappers"
              description="Everyone's slapping AI on blockchain for some generic BS with zero product-market fit."
              details="Most projects just rebrand existing AI tools with blockchain buzzwords. No real innovation, just marketing fluff."
              className="cyberpunk-text-block h-full p-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InteractiveCard
              title="Too many memes"
              description="Memes are fine, but 99% of them are just price-driven hype instead of actual community-driven culture."
              details="Real memes build communities. Fake memes just pump and dump. We want the real deal."
              className="cyberpunk-text-block h-full p-6"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <InteractiveCard
              title="Too few original ideas"
              description="Whitepapers these days? Snoozefest. Most 'new' ideas are just recycled junk, barely focused on real users."
              details="We need fresh perspectives, real problems, and actual solutions. Not copy-paste whitepapers."
              className="cyberpunk-text-block h-full p-6"
            />
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full h-px bg-black mb-16"
        />

        {/* What Sigma stands for */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="cyberpunk-font text-3xl font-bold text-black mb-8 glitch" data-text="WHAT SIGMA STANDS FOR">
            WHAT SIGMA STANDS FOR
          </h3>
          
          <div className="cyberpunk-text-block p-8 max-w-4xl mx-auto mb-8">
            <TypingText 
              text="Being different. Being fun. Being dedicated."
              speed={50}
              className="cyberpunk-font text-3xl font-bold text-black mb-6"
              animate={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="cyberpunk-text-block p-6 text-center"
            >
              <TypingText 
                text="Got fun, out-of-the-box ideas that mainstream founders would never touch?"
                speed={40}
                className="cyberpunk-font-medium text-black"
                animate={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="cyberpunk-text-block p-6 text-center"
            >
              <TypingText 
                text="Got real problems you want solved in Web3?"
                speed={40}
                className="cyberpunk-font-medium text-black"
                animate={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="cyberpunk-text-block p-6 text-center"
            >
              <TypingText 
                text="Want to bring every digital app you've used IRL on-chain?"
                speed={40}
                className="cyberpunk-font-medium text-black"
                animate={true}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <TypingText 
              text="You're one of us."
              speed={60}
              className="cyberpunk-font text-3xl font-bold text-black glitch"
              animate={true}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { InteractiveCard } from './InteractiveCard'
import { TypingText } from './TypingText'
import { Rocket, Users, Code, Lock, DollarSign, Zap, Target, Calendar, Gift, TrendingUp } from 'lucide-react'

export function Mission() {
  return (
    <div id="mission" className="bg-primary-500 py-24 sm:py-32 cyberpunk-bg cyberpunk-grid">
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
        {/* Main Mission Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyberpunk-font text-5xl font-bold tracking-tight text-black sm:text-6xl glitch mb-8"
            data-text="OUR MISSION"
          >
            OUR MISSION
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="cyberpunk-text-block p-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Target className="w-8 h-8 text-black" />
              <span className="cyberpunk-font text-2xl text-black">launching</span>
              <span className="cyberpunk-font text-4xl font-bold text-black bg-yellow-300 px-4 py-2 rounded-lg border-2 border-black">
                30
              </span>
              <span className="cyberpunk-font text-2xl text-black">Projects in</span>
              <span className="cyberpunk-font text-4xl font-bold text-black bg-yellow-300 px-4 py-2 rounded-lg border-2 border-black">
                12
              </span>
              <span className="cyberpunk-font text-2xl text-black">Months</span>
            </div>
          </motion.div>
        </div>

        {/* Core Objectives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <InteractiveCard
              title={
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-black" />
                  <span>Build the Most Passionate Dev Community</span>
                </div>
              }
              description="We're here to create the best developer resources—tutorials, workshops, and host gatherings that actually matter."
              details="At Sigma Labs, we're building more than just projects. We're cultivating the most passionate developer community in the game. Our focus is on creating meaningful resources that developers actually want to use—real tutorials, hands-on workshops, and gatherings that foster genuine connections and learning."
              className="cyberpunk-text-block h-full p-8"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InteractiveCard
              title={
                <div className="flex items-center gap-3">
                  <Rocket className="w-6 h-6 text-black" />
                  <span>launching 30 projects</span>
                </div>
              }
              description="Completely level up the user experience on Solana, together with the community."
              details="Our ambitious goal is to launch 30 projects in just 12 months, each designed to revolutionize the user experience on Solana. These aren't just any projects—they're community-driven initiatives that will set new standards for what's possible on the fastest blockchain."
              className="cyberpunk-text-block h-full p-8"
            />
          </motion.div>
        </div>

        {/* Project Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="cyberpunk-font text-3xl font-bold text-black mb-4 glitch" data-text="ALONG WITH THE 30 PROJECTS">
              ALONG WITH THE 30 PROJECTS
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Open Source Everything</h4>
              </div>
              <TypingText 
                text="Everything's open-sourced. No locked doors, no BS."
                speed={50}
                className="cyberpunk-font-thin text-black text-lg"
                animate={true}
              />
            </div>

            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Learn While You Ape</h4>
              </div>
              <TypingText 
                text="Every project comes with DEMOs, livestreams, and tutorials. Learn while you ape."
                speed={50}
                className="cyberpunk-font-thin text-black text-lg"
                animate={true}
              />
            </div>

            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Real Value, No Fluff</h4>
              </div>
              <TypingText 
                text="Built to pump existing Solana coins and communities. Real value, no fluff."
                speed={50}
                className="cyberpunk-font-thin text-black text-lg"
                animate={true}
              />
            </div>

            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Community Driven</h4>
              </div>
              <TypingText 
                text="Devs and the community are in the driver's seat. Pitch ideas, drop feedback, shape updates—let's build together."
                speed={50}
                className="cyberpunk-font-thin text-black text-lg"
                animate={true}
              />
            </div>
          </div>
        </motion.div>

        {/* Tokenomics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="cyberpunk-font text-3xl font-bold text-black mb-4 glitch" data-text="ALL 30 PROJECTS WILL LAUNCH A CORRESPONDING UTILITY TOKEN">
              ALL 30 PROJECTS WILL LAUNCH A CORRESPONDING UTILITY TOKEN
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Real Use, No Cap</h4>
              </div>
              <TypingText 
                text="Every project drops its own utility token. Real use, no cap."
                speed={50}
                className="cyberpunk-font-thin text-black text-lg"
                animate={true}
              />
            </div>

            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">PMF Testing</h4>
              </div>
              <TypingText 
                text="Tokens hit the market to experiment with PMF. The crowd decides if it bangs or flops."
                speed={50}
                className="cyberpunk-font-thin text-black text-lg"
                animate={true}
              />
            </div>

            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Team Allocation</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="cyberpunk-font-thin text-black text-lg">Team apes</span>
                  <span className="cyberpunk-font text-2xl font-bold text-black bg-yellow-300 px-3 py-1 rounded border border-black">
                    10%
                  </span>
                  <span className="cyberpunk-font-thin text-black text-lg">at launch.</span>
                </div>
                <TypingText 
                  text="Locked for 12 months, but the rest? Fully in the community's hands."
                  speed={50}
                  className="cyberpunk-font-thin text-black text-lg"
                  animate={true}
                />
              </div>
            </div>

            <div className="cyberpunk-text-block p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-black" />
                <h4 className="cyberpunk-font text-xl font-bold text-black">Mad Buybacks</h4>
              </div>
              <div className="space-y-2">
                <TypingText 
                  text="Profits = mad buybacks."
                  speed={50}
                  className="cyberpunk-font-thin text-black text-lg"
                  animate={true}
                />
                <div className="flex items-center gap-2">
                  <span className="cyberpunk-font text-2xl font-bold text-black bg-yellow-300 px-3 py-1 rounded border border-black">
                    30%
                  </span>
                  <span className="cyberpunk-font-thin text-black text-lg">of profits go straight to repurchasing tokens—separate from the team's lil 10%.</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Solana Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="cyberpunk-text-block p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-black" />
              <h3 className="cyberpunk-font text-3xl font-bold text-black glitch" data-text="ALL ON SOLANA">
                ALL ON SOLANA
              </h3>
            </div>
            <TypingText 
              text="Fast chain, no delays, let's send it."
              speed={60}
              className="cyberpunk-font-thin text-black text-xl"
              animate={true}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 
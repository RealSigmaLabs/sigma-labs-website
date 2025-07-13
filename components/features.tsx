'use client'

import { motion } from 'framer-motion'
import { Code, BookOpen, Users, Zap, Shield, Globe } from 'lucide-react'

const features = [
  {
    name: 'Innovative Projects',
    description: 'Discover cutting-edge projects from blockchain to AI, built by our community of innovators.',
    icon: Code,
  },
  {
    name: 'Comprehensive Courses',
    description: 'Learn from expert-led courses covering the latest technologies and development practices.',
    icon: BookOpen,
  },
  {
    name: 'Vibrant Community',
    description: 'Connect with fellow builders, share knowledge, and collaborate on exciting projects.',
    icon: Users,
  },
  {
    name: 'Fast & Secure',
    description: 'Built with modern technologies ensuring fast performance and secure authentication.',
    icon: Zap,
  },
  {
    name: 'Privacy First',
    description: 'Your data is protected with industry-standard security and privacy practices.',
    icon: Shield,
  },
  {
    name: 'Global Access',
    description: 'Access our platform from anywhere in the world, 24/7.',
    icon: Globe,
  },
]

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400"
          >
            Everything you need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            A complete platform for innovation and learning
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Sigma Labs provides everything you need to innovate, learn, and build the future. 
            From project discovery to community engagement, we've got you covered.
          </motion.p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600 dark:text-primary-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 
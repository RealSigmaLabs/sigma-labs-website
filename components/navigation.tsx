'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Courses', href: '/courses' },
  { name: 'Community', href: '/community' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)

  const handleConnectWallet = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowComingSoon(true)
  }

  const closePopup = () => {
    setShowComingSoon(false)
  }

  return (
    <header className="bg-primary-500 border-b-2 border-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sigma Labs</span>
            <Image
              src="/images/logo/horizontal.png"
              alt="Sigma Labs"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="cyberpunk-font-medium text-lg font-semibold leading-6 text-black hover:text-gray-700 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={handleConnectWallet}
            className="cyberpunk-button px-6 py-2 text-lg font-semibold hover:scale-105 transition-transform duration-300"
          >
            Connect Wallet
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <motion.div
        className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-500 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sigma Labs</span>
              <Image
                src="/images/logo/horizontal.png"
                alt="Sigma Labs"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="cyberpunk-font-medium -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-black hover:text-primary-500 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={(e) => {
                    handleConnectWallet(e)
                    setMobileMenuOpen(false)
                  }}
                  className="cyberpunk-button -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:scale-105 transition-transform duration-300"
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
              Wallet connection feature is being developed. Stay tuned!
            </p>
          </div>
        </motion.div>
      )}
    </header>
  )
} 
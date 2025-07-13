'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletModalButton } from '@solana/wallet-adapter-react-ui'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Courses', href: '/courses' },
  { name: 'Community', href: '/community' },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { publicKey } = useWallet()

  // Helper to shorten address
  const shortenAddress = (address: string) => address.slice(0, 4) + '...' + address.slice(-4)

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
          {publicKey ? (
            <span className="cyberpunk-font-medium text-lg font-semibold text-black px-6 py-2 bg-yellow-300 rounded border border-black">
              {shortenAddress(publicKey.toBase58())}
            </span>
          ) : (
            <WalletModalButton className="cyberpunk-button px-6 py-2 text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Connect Wallet
            </WalletModalButton>
          )}
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
                    // handleConnectWallet(e) // This function is removed
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
      {/* This section is removed as per the new_code, as the wallet connection is now handled by the Solana wallet adapter modal. */}
    </header>
  )
} 
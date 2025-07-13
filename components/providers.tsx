'use client'

import { SessionProvider } from 'next-auth/react'
import { WalletProvider } from '@/components/wallet-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <WalletProvider>
        {children}
      </WalletProvider>
    </SessionProvider>
  )
} 
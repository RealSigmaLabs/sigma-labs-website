import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navigation } from '@/components/navigation'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sigma Labs',
  description: 'Discover cutting-edge projects, courses, and join our community of innovators at Sigma Labs.',
  keywords: ['innovation', 'projects', 'courses', 'community', 'technology', 'learning'],
  authors: [{ name: 'Sigma Labs Team' }],
  creator: 'Sigma Labs',
  publisher: 'Sigma Labs',
  icons: {
    icon: '/images/logo/center.png',
    shortcut: '/images/logo/center.png',
    apple: '/images/logo/center.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Sigma Labs',
    description: 'Discover cutting-edge projects, courses, and join our community of innovators at Sigma Labs.',
    url: 'http://localhost:3000',
    siteName: 'Sigma Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sigma Labs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sigma Labs',
    description: 'Discover cutting-edge projects, courses, and join our community of innovators at Sigma Labs.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
} 
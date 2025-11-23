/**
 * Memory Layer Root Layout
 * Built with Kiro for Kiroween 2025 🎃
 */

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memory Layer - Universal AI Memory',
  description: 'Never lose context again. Capture and enhance your AI conversations across ChatGPT, Claude, Gemini, and Grok.',
  keywords: ['AI', 'Memory', 'ChatGPT', 'Claude', 'Gemini', 'Grok', 'Context'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-900`}>
        {children}
      </body>
    </html>
  )
}

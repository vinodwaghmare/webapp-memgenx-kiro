/**
 * Navbar Component
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-purple-900/80 backdrop-blur-md border-b border-purple-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🧠</span>
            <span className="text-xl font-bold text-white">Memory Layer</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-purple-200 hover:text-white transition">
              Features
            </Link>
            <Link href="#pricing" className="text-purple-200 hover:text-white transition">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-purple-200 hover:text-white transition">
              Dashboard
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:bg-purple-700">
                Sign In
              </Button>
            </Link>
            <Link href="/login">
              <Button className="spooky-gradient text-white hover:opacity-90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

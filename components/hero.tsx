/**
 * Hero Component
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-purple-800/50 border border-purple-600 rounded-full px-4 py-2 mb-8">
          <span className="text-2xl">🎃</span>
          <span className="text-purple-200">Built for Kiroween 2025</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Never Lose
          <br />
          <span className="spooky-text">Context Again</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-3xl mx-auto">
          Capture and enhance your AI conversations across ChatGPT, Claude, Gemini, and Grok with universal memory.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/login">
            <Button size="lg" className="spooky-gradient text-white text-lg px-8 py-6 hover:opacity-90 glow">
              Get Started Free
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="text-white border-purple-600 hover:bg-purple-800 text-lg px-8 py-6">
              Learn More
            </Button>
          </Link>
        </div>

        {/* Floating Icon */}
        <div className="mt-20 animate-float">
          <span className="text-9xl">🧠</span>
        </div>
      </div>
    </section>
  )
}

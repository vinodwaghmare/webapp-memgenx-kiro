/**
 * Memory Layer Landing Page
 * Built with Kiro for Kiroween 2025 🎃
 */

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Pricing } from '@/components/pricing'
import { CTA } from '@/components/cta'

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-purple-700/50 py-8">
        <div className="container mx-auto px-4 text-center text-purple-300">
          <p>© 2025 Memory Layer. Built with Kiro for Kiroween 2025 🎃</p>
        </div>
      </footer>
    </div>
  )
}

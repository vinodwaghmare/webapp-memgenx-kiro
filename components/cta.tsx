/**
 * CTA Component
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="spooky-gradient rounded-3xl p-12 md:p-20 text-center glow">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Never Lose Context?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are enhancing their AI conversations with Memory Layer.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/login">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-100 text-lg px-8 py-6">
                Get Started Free
              </Button>
            </Link>
            <Link href="#pricing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

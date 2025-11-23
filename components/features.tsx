/**
 * Features Component
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: '💾',
    title: 'Universal Memory',
    description: 'Capture conversations from ChatGPT, Claude, Gemini, and Grok in one place.'
  },
  {
    icon: '🔍',
    title: 'Semantic Search',
    description: 'Find relevant past conversations using vector search and AI-powered retrieval.'
  },
  {
    icon: '⚡',
    title: 'Context Enhancement',
    description: 'Automatically enhance your prompts with relevant context from past conversations.'
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Your data is encrypted and stored securely with Supabase authentication.'
  },
  {
    icon: '🚀',
    title: 'Real-time Sync',
    description: 'Instant synchronization across all your devices and platforms.'
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Track your usage, see insights, and manage your subscription tiers.'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Everything you need to never lose context in your AI conversations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-purple-800/30 border-purple-600 hover:bg-purple-800/50 transition">
              <CardHeader>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-200">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * Pricing Component
 * Built with Kiro for Kiroween 2025 🎃
 */

'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for trying out Memory Layer',
    features: [
      '100 memories per day',
      'Basic search',
      'ChatGPT integration',
      'Email support'
    ],
    cta: 'Get Started',
    href: '/login',
    popular: false
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'For power users who need more',
    features: [
      '1,000 memories per day',
      'Semantic search',
      'All platform integrations',
      'Priority support',
      'Export functionality',
      'Advanced analytics'
    ],
    cta: 'Upgrade to Pro',
    href: '/login',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$29.99',
    period: 'per month',
    description: 'For teams and organizations',
    features: [
      'Unlimited memories',
      'Advanced AI features',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    href: '/login',
    popular: false
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Choose the plan that's right for you. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? 'bg-purple-700/50 border-orange-500 border-2 glow-orange' 
                  : 'bg-purple-800/30 border-purple-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader>
                <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-purple-200">
                  {plan.description}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-purple-200 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Link href={plan.href} className="w-full">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'spooky-gradient text-white hover:opacity-90' 
                        : 'bg-purple-700 text-white hover:bg-purple-600'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

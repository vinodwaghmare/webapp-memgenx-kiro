# Web App Design Specification

**Feature**: Memory Layer Web Application  
**Version**: 1.0  
**Created**: 2025-11-18  
**Status**: Implemented  

## Overview

This document defines the technical design for the Memory Layer web application, a Next.js 14 application with App Router that provides a landing page, dashboard, and user interface for the Memory Layer system.

## Architecture

### Technology Stack

**Frontend Framework**
- Next.js 14 with App Router
- React 18 with Server Components
- TypeScript for type safety

**Styling**
- Tailwind CSS for utility-first styling
- shadcn/ui for component library
- Custom Halloween theme (purple/orange)

**State Management**
- React hooks (useState, useEffect)
- Server Components for data fetching
- Client Components for interactivity

**Authentication**
- Supabase Auth integration
- JWT token management
- Protected routes

## Component Architecture

### Page Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Landing page
├── dashboard/
│   └── page.tsx        # Dashboard with analytics
└── globals.css         # Global styles
```

### Component Hierarchy

```
Landing Page
├── Navbar
├── Hero
├── Problem
├── Solution
├── Features
├── HowItWorks
├── Pricing
└── CTA

Dashboard
├── Navbar
├── Stats Cards
├── Charts
│   ├── MemoryPieChart
│   ├── PlatformPieChart
│   ├── UsagePieChart
│   └── DailyUsageChart
└── Recent Memories List
```

## Design Patterns

### 1. Component Composition

**Pattern**: Compose complex UIs from simple, reusable components

```typescript
// Landing page composition
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>
    </div>
  )
}
```

**Benefits**:
- Reusable components
- Easy to maintain
- Clear separation of concerns

### 2. Server and Client Components

**Pattern**: Use Server Components by default, Client Components when needed

```typescript
// Server Component (default)
export default function DashboardPage() {
  // Fetch data on server
  return <DashboardUI />
}

// Client Component (interactive)
'use client'
export function MemoryPieChart() {
  // Client-side interactivity
  return <PieChart />
}
```

**Benefits**:
- Better performance
- Reduced JavaScript bundle
- SEO friendly

### 3. shadcn/ui Integration

**Pattern**: Use shadcn/ui components for consistent UI

```typescript
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

<Card className="bg-purple-800/30 border-purple-600">
  <CardHeader>
    <CardTitle className="text-white">Total Memories</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold text-white">1,234</div>
  </CardContent>
</Card>
```

**Benefits**:
- Consistent design system
- Accessible components
- Customizable with Tailwind

### 4. Responsive Design

**Pattern**: Mobile-first responsive design with Tailwind

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature) => (
    <FeatureCard key={feature.id} {...feature} />
  ))}
</div>
```

**Benefits**:
- Works on all devices
- Progressive enhancement
- Better user experience

## Data Flow

### Landing Page Flow

```
User visits site
    ↓
Server renders landing page
    ↓
Client hydrates interactive components
    ↓
User clicks "Get Started"
    ↓
Redirect to Supabase Auth
    ↓
Return to dashboard
```

### Dashboard Flow

```
User authenticated
    ↓
Fetch user data from Supabase
    ↓
Fetch memories from backend API
    ↓
Render dashboard with charts
    ↓
Real-time updates via polling
```

## Styling System

### Theme Configuration

**Color Palette**:
```typescript
// tailwind.config.ts
colors: {
  purple: {
    900: '#1e1b4b',
    800: '#2e1065',
    700: '#4c1d95',
    600: '#6366f1',
  },
  orange: {
    900: '#7c2d12',
    800: '#9a3412',
    600: '#ea580c',
    400: '#fb923c',
  }
}
```

**Custom Utilities**:
```css
.spooky-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.spooky-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Animation System

**Floating Animation**:
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

**Glow Effect**:
```css
.glow {
  box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
}
```

## Component Specifications

### Navbar Component

**Purpose**: Site navigation and authentication

**Props**: None

**State**:
- `isAuthenticated`: boolean
- `user`: User object or null

**Behavior**:
- Shows "Sign In" when not authenticated
- Shows user avatar when authenticated
- Responsive mobile menu

### Hero Component

**Purpose**: Landing page hero section

**Props**: None

**Features**:
- Large heading with gradient text
- CTA buttons
- Floating brain icon animation
- Stats preview

### Chart Components

**Purpose**: Visualize memory analytics

**Types**:
- `MemoryPieChart`: Memory distribution by type
- `PlatformPieChart`: Usage by AI platform
- `UsagePieChart`: Daily quota usage
- `DailyUsageChart`: Timeline of daily usage

**Library**: recharts

**Props**:
```typescript
interface ChartProps {
  data?: ChartData[]
  width?: number
  height?: number
}
```

## Performance Optimizations

### 1. Image Optimization

```typescript
import Image from 'next/image'

<Image
  src="/brain-icon.png"
  alt="Memory Layer"
  width={100}
  height={100}
  priority
/>
```

### 2. Code Splitting

```typescript
// Dynamic imports for heavy components
const HeavyChart = dynamic(() => import('@/components/heavy-chart'), {
  loading: () => <Skeleton />,
  ssr: false
})
```

### 3. Font Optimization

```typescript
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
```

## Accessibility

### WCAG 2.1 AA Compliance

**Color Contrast**:
- Text on background: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

**Keyboard Navigation**:
- All interactive elements accessible via keyboard
- Logical tab order
- Skip to main content link

**Screen Readers**:
- Semantic HTML elements
- ARIA labels where needed
- Alt text for images

## Error Handling

### Error Boundaries

```typescript
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Something went wrong!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{error.message}</p>
          <Button onClick={reset}>Try again</Button>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Loading States

```typescript
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600" />
    </div>
  )
}
```

## Security Considerations

### Authentication

- JWT tokens stored in httpOnly cookies
- CSRF protection enabled
- Secure session management

### API Communication

- HTTPS only
- API keys in environment variables
- Rate limiting on client side

### Content Security Policy

```typescript
// next.config.js
headers: [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline';"
  }
]
```

## Testing Strategy

### Unit Tests

- Component rendering
- User interactions
- State management

### Integration Tests

- Page navigation
- Form submissions
- API integration

### E2E Tests

- User flows
- Authentication
- Dashboard functionality

## Deployment

### Build Configuration

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
NEXT_PUBLIC_BACKEND_URL=https://api.memorylayer.com
```

### Vercel Deployment

- Automatic deployments from main branch
- Preview deployments for PRs
- Environment variables configured
- Custom domain setup

## Future Enhancements

### Phase 2 Features

1. **Real-time Updates**: WebSocket integration for live memory updates
2. **Advanced Search**: Full-text search with filters
3. **Memory Management**: Edit, delete, organize memories
4. **Team Collaboration**: Share memories with team members
5. **Export Features**: PDF, CSV, JSON export options
6. **Dark/Light Mode**: Theme toggle
7. **PWA Support**: Installable web app with offline support

### Technical Improvements

1. **Performance**: Implement virtual scrolling for large lists
2. **Caching**: Add Redis caching layer
3. **Analytics**: Integrate analytics tracking
4. **Monitoring**: Add error tracking and performance monitoring
5. **Testing**: Increase test coverage to 80%+

## Correctness Properties

### CP-1: Responsive Design
**Property**: Application must be fully functional on all screen sizes
**Verification**: Test on mobile (320px), tablet (768px), desktop (1024px+)

### CP-2: Accessibility
**Property**: Application must meet WCAG 2.1 AA standards
**Verification**: Automated accessibility testing with axe-core

### CP-3: Performance
**Property**: First Contentful Paint < 1.5s, Time to Interactive < 3s
**Verification**: Lighthouse performance score > 90

### CP-4: Type Safety
**Property**: All components must have proper TypeScript types
**Verification**: No TypeScript errors in build

### CP-5: Component Reusability
**Property**: UI components must be reusable across pages
**Verification**: Components used in multiple locations without duplication

---

**Built with Kiro using Spec-Driven Development**  
**Status**: ✅ All design patterns implemented  
**Next Steps**: Implement Phase 2 features

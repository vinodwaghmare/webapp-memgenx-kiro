# Memory Layer Web App

> Built with Kiro for Kiroween 2025 🎃

A Next.js 14 web application for viewing, searching, and managing your AI conversation memories with a spooky Halloween theme.

## 🎯 Features

- **Landing Page**: Beautiful hero section with spooky theme
- **Dashboard**: View and search your memories
- **Authentication**: Supabase Auth with Google OAuth
- **Pricing**: Multi-tier subscription plans
- **Admin Panel**: User management and analytics
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Halloween-themed purple/orange design

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## 📁 Project Structure

```
webapp-kiro1/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── dashboard/         # Dashboard pages
│   ├── login/             # Login page
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── hero.tsx          # Hero section
│   ├── navbar.tsx        # Navigation
│   └── pricing.tsx       # Pricing section
├── lib/                   # Utilities
│   ├── supabase/         # Supabase client
│   └── utils.ts          # Helper functions
├── public/                # Static assets
└── styles/                # Global styles
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Supabase project
- Backend API running

### Installation

```bash
# Clone repository
git clone <repo-url>
cd webapp-kiro1

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_BACKEND_URL=https://your-backend.onrender.com
```

## 📖 Pages

### Landing Page (`/`)
- Hero section with spooky animation
- Problem/Solution sections
- Features showcase
- Pricing tiers
- Call-to-action

### Dashboard (`/dashboard`)
- Memory timeline
- Search functionality
- Usage stats
- Quick actions

### Login (`/login`)
- Google OAuth sign-in
- Email/password option
- Redirect to dashboard

### Pricing (`/pricing`)
- Free, Pro, Enterprise tiers
- Feature comparison
- Stripe checkout integration

## 🎨 Styling

### Tailwind Configuration

The app uses a custom Tailwind theme with:
- Purple/orange gradient (Halloween theme)
- Dark mode by default
- Custom animations
- Responsive breakpoints

### shadcn/ui Components

Pre-installed components:
- Button
- Card
- Dialog
- Input
- Select
- Toast

Add more with:
```bash
npx shadcn-ui@latest add <component-name>
```

## 🔐 Authentication

### Supabase Setup

1. Create Supabase project
2. Enable Google OAuth provider
3. Add redirect URLs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://your-app.vercel.app/auth/callback` (production)
4. Copy URL and anon key to `.env.local`

### Protected Routes

Use middleware to protect routes:

```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  // Check authentication
  // Redirect to /login if not authenticated
}
```

## 📊 Dashboard Features

### Memory Timeline
- Infinite scroll
- Search and filter
- Date range selection
- Export functionality

### Usage Stats
- Daily API calls
- Memories stored
- Tier limits
- Upgrade prompts

### Search
- Full-text search
- Semantic search (vector)
- Filter by date, platform
- Sort by relevance

## 💳 Pricing Integration

### Stripe Setup

1. Create Stripe account
2. Create products and prices
3. Add price IDs to `.env.local`
4. Configure webhook endpoint

### Subscription Tiers

- **Free**: 100 memories/day
- **Pro**: 1,000 memories/day, $9.99/month
- **Enterprise**: Unlimited, $29.99/month

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables in Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_BACKEND_URL`

## 🧪 Testing

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📝 Built with Kiro

This web app was built using Kiro's features:

### Vibe Coding
- Generated Next.js pages and components
- Created shadcn/ui component integrations
- Built authentication flow

### Spec-Driven Development
- Followed webapp-spec.md for consistent design
- Coordinated with backend API contracts

### Agent Hooks
- Automated type checking
- Component validation
- Style linting

### Steering Docs
- shadcn/ui usage patterns
- Next.js App Router best practices
- TypeScript conventions

## 🎃 Kiroween 2025

Part of the Memory Layer Frankenstein project for Kiroween 2025.

**Category**: Frankenstein  
**Built with**: Kiro AI IDE

---

*Never lose context again. 🎃*

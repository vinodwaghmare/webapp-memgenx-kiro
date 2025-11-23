# Contributing to Memory Layer Web App

Thank you for your interest in contributing to the Memory Layer Web App! This project is open source under the MIT License and welcomes contributions from the community.

## 🎯 Ways to Contribute

### 1. Code Contributions

- **Bug Fixes** - Fix issues and improve stability
- **New Features** - Add new functionality
- **Performance** - Optimize code and improve load times
- **Accessibility** - Enhance WCAG compliance
- **Documentation** - Improve or add documentation

### 2. Non-Code Contributions

- **Bug Reports** - Report issues you encounter
- **Feature Requests** - Suggest new features
- **Documentation** - Improve README, guides, or comments
- **Design** - Suggest UI/UX improvements
- **Testing** - Test on different devices and browsers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Code editor (VS Code recommended)
- Basic knowledge of Next.js, TypeScript, and Tailwind CSS

### Setup Development Environment

1. **Fork the Repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/memory-layer-webapp.git
   cd memory-layer-webapp
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your credentials
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

6. **Open in Browser**
   ```
   http://localhost:3000
   ```

## 📋 Development Workflow

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or updates
- `style/` - Code style changes

### 2. Make Your Changes

Follow the project's coding standards:

- **TypeScript** - Use strict types, no `any`
- **Components** - Follow React best practices
- **Styling** - Use Tailwind CSS classes
- **Formatting** - Code will be auto-formatted on save (Prettier)
- **Linting** - Code will be auto-linted on save (ESLint)

### 3. Test Your Changes

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Type check
npx tsc --noEmit
```

### 4. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add dark mode toggle to navbar"
# or
git commit -m "fix: resolve mobile menu not closing on link click"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test additions or updates
- `chore:` - Maintenance tasks

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill out the PR template
5. Submit the pull request

## 📖 Coding Standards

### TypeScript

Follow the conventions in [.kiro/steering/typescript-conventions.md](./.kiro/steering/typescript-conventions.md):

```typescript
// ✅ Good
interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  onClick: () => void
}

export function Button({ variant = 'default', onClick }: ButtonProps) {
  return <button onClick={onClick}>Click me</button>
}

// ❌ Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>Click me</button>
}
```

### Next.js

Follow the conventions in [.kiro/steering/nextjs-conventions.md](./.kiro/steering/nextjs-conventions.md):

```typescript
// ✅ Good - Server Component
export default async function Page() {
  const data = await fetchData()
  return <div>{data}</div>
}

// ✅ Good - Client Component (when needed)
'use client'
export default function InteractiveComponent() {
  const [state, setState] = useState()
  return <button onClick={() => setState()}>Click</button>
}
```

### shadcn/ui

Follow the conventions in [.kiro/steering/shadcn-ui-patterns.md](./.kiro/steering/shadcn-ui-patterns.md):

```typescript
// ✅ Good
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click me</Button>
  </CardContent>
</Card>
```

### Styling

Use Tailwind CSS classes:

```typescript
// ✅ Good
<div className="flex items-center justify-between p-4 bg-purple-800 rounded-lg">
  <h2 className="text-2xl font-bold text-white">Title</h2>
</div>

// ❌ Bad - Avoid inline styles
<div style={{ display: 'flex', padding: '16px' }}>
  <h2 style={{ fontSize: '24px' }}>Title</h2>
</div>
```

## 🧪 Testing Guidelines

### Manual Testing

1. **Functionality** - Test all features work as expected
2. **Responsive** - Test on mobile, tablet, desktop
3. **Browsers** - Test on Chrome, Firefox, Safari, Edge
4. **Accessibility** - Test keyboard navigation and screen readers
5. **Performance** - Check load times and Lighthouse scores

### Automated Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build test
npm run build
```

## 📝 Pull Request Guidelines

### PR Title

Use clear, descriptive titles:

- ✅ `feat: add dark mode toggle to navbar`
- ✅ `fix: resolve mobile menu not closing on link click`
- ✅ `docs: update installation instructions in README`
- ❌ `update code`
- ❌ `fix bug`

### PR Description

Include:

1. **What** - What changes were made
2. **Why** - Why these changes were needed
3. **How** - How the changes were implemented
4. **Testing** - How you tested the changes
5. **Screenshots** - For UI changes (before/after)

Example:

```markdown
## What
Added a dark mode toggle button to the navbar.

## Why
Users requested the ability to switch between light and dark themes.

## How
- Added a toggle button component
- Implemented theme switching logic using localStorage
- Updated Tailwind config for theme support

## Testing
- Tested on Chrome, Firefox, Safari
- Tested on mobile and desktop
- Verified theme persists on page reload

## Screenshots
[Before/After screenshots]
```

### PR Checklist

Before submitting, ensure:

- [ ] Code follows project conventions
- [ ] TypeScript types are correct (no `any`)
- [ ] Code is formatted (Prettier)
- [ ] Code is linted (ESLint)
- [ ] Changes are tested manually
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation is updated (if needed)
- [ ] Commit messages are clear
- [ ] PR description is complete

## 🎨 Using Kiro AI IDE

This project was built with Kiro AI IDE. If you're using Kiro:

### Steering Docs

The `.kiro/steering/` folder contains best practices:
- [shadcn-ui-patterns.md](./.kiro/steering/shadcn-ui-patterns.md)
- [nextjs-conventions.md](./.kiro/steering/nextjs-conventions.md)
- [typescript-conventions.md](./.kiro/steering/typescript-conventions.md)

These docs guide Kiro's code generation.

### Agent Hooks

The `.kiro/hooks/` folder contains automated workflows:
- Type checking on save
- Linting on save
- Formatting on save

Set these up in your Kiro IDE for automatic quality checks.

### Specs

The `.kiro/specs/` folder contains feature specifications:
- [landing-page-spec.md](./.kiro/specs/landing-page-spec.md)
- [ui-components-spec.md](./.kiro/specs/ui-components-spec.md)

Use these as templates for new features.

## 🐛 Reporting Bugs

### Before Reporting

1. Check if the bug has already been reported
2. Try to reproduce the bug
3. Gather relevant information

### Bug Report Template

```markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Screenshots
If applicable, add screenshots

## Environment
- OS: [e.g., Windows 11, macOS 14]
- Browser: [e.g., Chrome 120, Firefox 121]
- Node.js: [e.g., 18.17.0]
- npm: [e.g., 9.6.7]

## Additional Context
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Problem It Solves
What problem does this feature solve?

## Proposed Solution
How should this feature work?

## Alternatives Considered
What other solutions did you consider?

## Additional Context
Any other relevant information
```

## 📞 Getting Help

- **Documentation**: [Complete Documentation Index](./DOCUMENTATION_INDEX.md)
- **Kiro AI IDE**: [kiro.ai](https://kiro.ai)
- **GitHub Issues**: [Report an issue](https://github.com/your-repo/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-repo/discussions)

## 🎓 Learning Resources

### Project Documentation

- [Kiro Development Showcase](./KIRO_DEVELOPMENT_SHOWCASE.md)
- [Prompts Used](./.kiro/KIRO_PROMPTS_USED.md)
- [Development Logs](./.kiro/logs/)

### External Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Kiro AI IDE](https://kiro.ai)

## 🏆 Recognition

Contributors will be:
- Listed in the project's contributors
- Mentioned in release notes (for significant contributions)
- Credited in the README (for major features)

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

<div align="center">

**Thank you for contributing to Memory Layer Web App!** 🎃

[Back to README](./README.md) • [View License](./LICENSE) • [Documentation Index](./DOCUMENTATION_INDEX.md)

</div>

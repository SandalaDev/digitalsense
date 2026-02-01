# Claude Code Guidelines for Digital Sense Zambia Ltd

## Project Overview

Corporate sales/profile website for **Digital Sense Zambia Ltd** - an integrated systems company focusing on Energy, IT, and Software solutions.

**Tech Stack:**
- Next.js 16.1.4 (App Router)
- React 19.2.3
- Tailwind CSS 4 (with native CSS variables)
- TypeScript 5 (strict mode)
- Framer Motion 11 (animations)
- Radix UI (accessible primitives)
- Lucide React (icons)

---

## Critical Rules

### 1. Always Use Bun

Use `bun` as the package manager and runtime for everything unless absolutely impossible.

```bash
# Installing dependencies
bun install

# Adding a package
bun add <package-name>

# Adding a dev dependency
bun add -d <package-name>

# Running scripts
bun run <script>

# Type checking
bun run tsc --noEmit

# Linting
bun run lint
```

### 2. Check Dev Server Before Starting

**ALWAYS** check if the dev server is already running before attempting to start it:

```bash
# Check if port 3000 is in use (Windows)
netstat -ano | findstr :3000

# Check if port 3000 is in use (Unix/Mac)
lsof -i :3000
```

If the server is running, do NOT start another instance.

### 3. Run Dev Server with Forced Bun Runtime

Always use this exact command to start the dev server (avoids shebang issues, forces bun runtime):

```bash
bun --bun run next dev
```

**Never use:**
- `bun run dev` (may use Node via shebang)
- `npm run dev`
- `yarn dev`
- `next dev` directly

---

## Project Structure

```
ds/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header + Footer)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Design tokens & global styles
│   └── favicon.ico
├── components/
│   ├── home/                    # Homepage-specific components
│   │   ├── HeroSlider.tsx       # Hero carousel
│   │   ├── AnimatedSection.tsx  # Scroll-triggered animations
│   │   ├── GlassButton.tsx      # Glass-morphism buttons
│   │   └── StatsCounter.tsx     # Animated number counters
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Sticky header with nav
│   │   └── Footer.tsx           # Footer with links
│   ├── ui/                      # Shadcn-style UI primitives
│   │   ├── button.tsx           # CVA button variants
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── accordion.tsx
│   └── shared/                  # Shared utilities
│       └── ImageWithFallback.tsx
├── lib/
│   └── utils.ts                 # cn() utility for class merging
└── public/                      # Static assets (logos, SVGs)
```

---

## Code Conventions

### Component Guidelines

1. **Use functional components only** - no class components
2. **Add `'use client'`** at the top of components that:
   - Use React hooks (useState, useEffect, etc.)
   - Have event handlers (onClick, onChange, etc.)
   - Use browser APIs
   - Use Framer Motion animations
3. **Server components by default** - omit `'use client'` for static/non-interactive components
4. **Define TypeScript interfaces** for all component props:

```tsx
interface MyComponentProps {
  title: string;
  isActive?: boolean;
  children: React.ReactNode;
}

export function MyComponent({ title, isActive = false, children }: MyComponentProps) {
  // ...
}
```

### File Naming

- Components: `PascalCase.tsx` (e.g., `HeroSlider.tsx`)
- Utilities: `camelCase.ts` (e.g., `utils.ts`)
- Directories: `lowercase` (e.g., `components/`, `lib/`)

### Imports

Use the `@/` path alias for root-relative imports:

```tsx
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/home/AnimatedSection';
```

---

## Styling Guidelines

### Tailwind 4 Approach

This project uses Tailwind CSS 4 with CSS custom properties defined in `globals.css`.

1. **Use Tailwind utility classes** as the primary styling method
2. **Use CSS variables** for colors, spacing, and design tokens
3. **Use the `cn()` utility** for conditional/merged classes:

```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'p-4 rounded-lg',
  isActive && 'bg-accent text-white',
  className
)} />
```

### Design Tokens

Access design tokens via CSS variables or Tailwind theme:

```tsx
// Colors
className="bg-primary text-primary-foreground"
className="bg-accent text-accent-foreground"

// Spacing (use Tailwind's scale which references CSS vars)
className="p-4 m-8 gap-6"

// Border radius
className="rounded-lg rounded-xl rounded-2xl"

// Shadows
className="shadow-sm shadow-md shadow-lg"
```

### Color Palette

| Token | Usage |
|-------|-------|
| `primary` | Deep navy - main actions, text, backgrounds |
| `accent` | Electric cyan - CTAs, highlights, hover states |
| `success` | Energy green - positive indicators |
| `neutral` | Grayscale - borders, secondary text |

### Glass-Morphism Effect

Use the `.glass` utility class for glass-morphism:

```tsx
<div className="glass p-6 rounded-xl">
  {/* Content with frosted glass effect */}
</div>
```

### Responsive Design

Follow mobile-first approach:

```tsx
// Base styles for mobile, then breakpoints for larger screens
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
className="text-xl md:text-2xl lg:text-4xl"
className="px-4 md:px-8 lg:px-12"
```

---

## Animation Guidelines

### Framer Motion

Use Framer Motion for complex animations:

```tsx
'use client';

import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Animated content */}
</motion.div>
```

### Scroll-Triggered Animations

Use `AnimatedSection` wrapper for fade-in-up on scroll:

```tsx
import { AnimatedSection } from '@/components/home/AnimatedSection';

<AnimatedSection delay={0.2}>
  <h2>This fades in when scrolled into view</h2>
</AnimatedSection>
```

### CSS Animations

For simple animations, use the predefined CSS classes:

```tsx
className="animate-fade-in-up"
className="animate-fade-in"
className="animate-slide-in-left"
className="animate-slide-in-right"
className="animate-scale-in"
```

---

## Component Patterns

### UI Components (Shadcn-style)

Use CVA for component variants:

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);
```

### Images

Always use `ImageWithFallback` or Next.js `Image` with proper dimensions:

```tsx
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

<ImageWithFallback
  src="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

For external images (only Unsplash is configured):

```tsx
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/..."
  alt="Description"
  fill
  className="object-cover"
/>
```

---

## Icons

Use Lucide React for all icons:

```tsx
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

<ArrowRight className="w-5 h-5" />
<Phone className="w-4 h-4 text-accent" />
```

Common icons in use:
- Navigation: `Menu`, `X`, `ChevronDown`, `ChevronRight`, `ArrowRight`
- Contact: `Phone`, `Mail`, `MapPin`
- Social: `Linkedin`, `Twitter`, `Github`
- Features: `Zap`, `Shield`, `CheckCircle`, `Server`, `Monitor`, `Code`

---

## Forms

Use React Hook Form for form state:

```tsx
'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface FormData {
  email: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} placeholder="Email" />
      <Button type="submit">Send</Button>
    </form>
  );
}
```

---

## Adding New Pages

1. Create a new directory in `app/` with `page.tsx`:

```tsx
// app/about/page.tsx
import { AnimatedSection } from '@/components/home/AnimatedSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <AnimatedSection>
        <h1>About Us</h1>
      </AnimatedSection>
    </main>
  );
}
```

2. Add metadata for SEO:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Digital Sense',
  description: 'Learn about Digital Sense Zambia Ltd',
};
```

---

## Common Tasks

### Adding a New Component

1. Create file in appropriate directory (`components/home/`, `components/ui/`, etc.)
2. Use TypeScript interface for props
3. Add `'use client'` if interactive
4. Export as named export

### Adding a New Package

```bash
bun add <package-name>
# or for dev dependency
bun add -d <package-name>
```

### Building for Production

```bash
bun --bun run next build
```

### Running Production Build

```bash
bun --bun run next start
```

### Type Checking

```bash
bun run tsc --noEmit
```

### Linting

```bash
bun run lint
```

---

## Do's and Don'ts

### Do:
- Use semantic HTML elements
- Provide accessible alt text for images
- Use CSS variables for colors (maintains theme consistency)
- Use `cn()` for conditional classes
- Keep components small and focused
- Use TypeScript interfaces for all props
- Follow mobile-first responsive design

### Don't:
- Don't use inline styles (use Tailwind classes)
- Don't use `any` type in TypeScript
- Don't skip alt text on images
- Don't hardcode colors (use design tokens)
- Don't create unnecessary abstractions
- Don't use npm/yarn (use bun)
- Don't start dev server without checking if it's already running

---

## External Resources

- External images: Only `images.unsplash.com` is allowed (configured in `next.config.ts`)
- To add more domains, update `next.config.ts`:

```ts
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'example.com' },
  ],
}
```

---

## Troubleshooting

### Dev server won't start
1. Check if already running: `netstat -ano | findstr :3000`
2. Kill existing process if needed
3. Use correct command: `bun --bun run next dev`

### Styles not applying
1. Check if using correct CSS variable names
2. Verify `cn()` usage for conditional classes
3. Clear `.next` cache: `rm -rf .next && bun --bun run next dev`

### TypeScript errors
1. Run `bun run tsc --noEmit` to check all errors
2. Ensure interfaces match component props
3. Check import paths use `@/` alias

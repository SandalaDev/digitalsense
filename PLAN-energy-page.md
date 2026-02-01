# Implementation Plan: Energy & Electrical Engineering Page

## Audit Summary

### Design Token Comparison

| Token Category | Figma | Next.js | Status |
|---------------|-------|---------|--------|
| Primary Colors | 11 shades | 11 shades | Aligned |
| Accent Colors | 10 shades | 10 shades | Aligned |
| Success Colors | 10 shades | 10 shades | Aligned |
| Warning Colors | 10 shades | Missing | **NEEDS SYNC** |
| Danger Colors | 10 shades | Missing | **NEEDS SYNC** |
| Neutral Colors | 11 shades | 11 shades | Aligned |
| Glassmorphism | Complete | Complete | Aligned |
| Spacing | 13 steps | 13 steps | Aligned |
| Shadows | 6 levels | 6 levels | Aligned |
| Animation | Complete | Complete | Aligned |
| Chart Colors | 5 colors | Missing | **NEEDS SYNC** |
| Sidebar Tokens | Complete | Missing | **NEEDS SYNC** |
| Switch Token | Present | Missing | **NEEDS SYNC** |

### Figma-Specific Classes Not in Next.js

| Class | Purpose | Action |
|-------|---------|--------|
| `text-energy` | Green accent for energy content | Add as alias |
| `text-gradient-energy` | Gradient text for energy headings | Add new class |
| `bg-energy` | Button/badge background | Add as alias |
| `bg-gradient-energy` | Icon/card gradient background | Add new class |
| `bg-neutral-950` | Very dark section backgrounds | Already in Tailwind |
| `bg-neutral-50` | Light section backgrounds | Already in Tailwind |

### Component Import Differences

| Figma | Next.js | Adaptation |
|-------|---------|------------|
| `motion/react` | `framer-motion` | Change imports |
| `react-router-dom` | Next.js App Router | Use `next/link` |
| `Header/Footer` in page | In `layout.tsx` | Remove from page |
| `ImageWithFallback` path | Different path | Update imports |

---

## Implementation Plan

### Phase 1: Sync Design Tokens (globals.css)

**File:** `app/globals.css`

Add the following missing tokens:

```css
/* Warning Colors */
--color-warning-50 through --color-warning-900

/* Danger Colors */
--color-danger-50 through --color-danger-900

/* Chart Colors */
--chart-1 through --chart-5

/* Sidebar Tokens */
--sidebar, --sidebar-foreground, etc.

/* Switch Token */
--switch-background

/* Energy-specific aliases */
--energy: var(--color-success-500)
--energy-light: var(--color-success-400)

/* New utility classes */
.text-energy { color: var(--color-success-500) }
.bg-energy { background: var(--color-success-500) }
.text-gradient-energy { /* gradient */ }
.bg-gradient-energy { /* gradient */ }
```

**Also add to `@theme inline` block:**
```css
--color-chart-1 through --color-chart-5
--color-sidebar, etc.
--color-switch-background
```

---

### Phase 2: Create Energy Page Route

**New directory structure:**
```
app/
└── capabilities/
    └── energy-systems/
        └── page.tsx          # Main energy page
```

**File:** `app/capabilities/energy-systems/page.tsx`

- Adapt from `EnergySystems.tsx`
- Remove Header/Footer (handled by layout)
- Change `motion/react` to `framer-motion`
- Use `next/link` for internal links
- Add page metadata for SEO

---

### Phase 3: Create Energy-Specific Components

**New components:**
```
components/
└── energy/
    ├── EnergyCalculator.tsx      # Interactive load calculator
    ├── SystemConfigurations.tsx  # System type selector
    ├── EnergyFAQ.tsx             # Expandable FAQ
    └── EnergyHero.tsx            # Hero section (optional)
```

#### 3.1 EnergyCalculator.tsx
- Interactive load calculation form
- Add/remove electrical loads
- Real-time kWh calculations
- Critical vs non-critical load tracking
- System sizing recommendations

#### 3.2 SystemConfigurations.tsx
- Tab-based system selector
- Grid-tied, Off-grid, Hybrid, Battery-only
- Architecture diagrams
- Power flow scenarios
- Applications and limitations

#### 3.3 EnergyFAQ.tsx
- 9 comprehensive FAQ items
- Expandable accordion pattern
- HTML content support for formatting

---

### Phase 4: Update Navigation

**File:** `components/layout/Header.tsx`

Add "Capabilities" dropdown with:
- Energy & Electrical Systems → `/capabilities/energy-systems`
- (Future: IT Infrastructure, Software Solutions)

---

### Phase 5: Add Page Metadata

**File:** `app/capabilities/energy-systems/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Energy & Electrical Systems | Digital Sense',
  description: 'Solar PV, battery storage, and electrical infrastructure solutions. Grid-tied, hybrid, and off-grid systems engineered for reliability and ROI.',
  keywords: ['solar panels', 'battery storage', 'electrical systems', 'Zambia', 'net-metering'],
};
```

---

## Detailed File Changes

### 1. globals.css Updates

**Add after Success colors (line ~65):**
```css
/* Warning: Amber - Alerts, operational monitoring */
--color-warning-50: oklch(0.97 0.02 80);
--color-warning-100: oklch(0.94 0.04 80);
--color-warning-200: oklch(0.88 0.08 80);
--color-warning-300: oklch(0.80 0.12 80);
--color-warning-400: oklch(0.72 0.15 80);
--color-warning-500: oklch(0.65 0.18 80);
--color-warning-600: oklch(0.55 0.15 80);
--color-warning-700: oklch(0.45 0.12 80);
--color-warning-800: oklch(0.35 0.08 80);
--color-warning-900: oklch(0.25 0.04 80);

/* Danger: Red - Risk, critical systems */
--color-danger-50: oklch(0.97 0.02 25);
--color-danger-100: oklch(0.94 0.04 25);
--color-danger-200: oklch(0.88 0.08 25);
--color-danger-300: oklch(0.78 0.12 25);
--color-danger-400: oklch(0.65 0.15 25);
--color-danger-500: oklch(0.55 0.18 25);
--color-danger-600: oklch(0.45 0.15 25);
--color-danger-700: oklch(0.35 0.12 25);
--color-danger-800: oklch(0.25 0.08 25);
--color-danger-900: oklch(0.15 0.04 25);
```

**Add after animation timing (line ~160):**
```css
/* Chart Colors */
--chart-1: var(--color-accent-400);
--chart-2: var(--color-success-500);
--chart-3: var(--color-primary-500);
--chart-4: var(--color-warning-500);
--chart-5: var(--color-danger-400);

/* Sidebar Tokens */
--sidebar: oklch(0.985 0 0);
--sidebar-foreground: var(--color-neutral-900);
--sidebar-primary: var(--color-primary-600);
--sidebar-primary-foreground: oklch(0.985 0 0);
--sidebar-accent: oklch(0.97 0 0);
--sidebar-accent-foreground: var(--color-neutral-900);
--sidebar-border: var(--color-neutral-200);
--sidebar-ring: var(--color-primary-400);

/* Switch Token */
--switch-background: var(--color-neutral-300);
```

**Add dark mode overrides:**
```css
/* Charts - Dark Mode */
--chart-1: var(--color-accent-500);
--chart-2: var(--color-success-400);
--chart-3: var(--color-primary-400);
--chart-4: var(--color-warning-400);
--chart-5: var(--color-danger-500);

/* Sidebar - Dark Mode */
--sidebar: oklch(0.12 0.01 264);
--sidebar-foreground: oklch(0.98 0 0);
/* ... etc */

--switch-background: var(--color-neutral-700);
```

**Add energy utility classes (after .text-gradient-accent):**
```css
/* Energy-specific utilities */
.text-energy {
  color: var(--color-success-500);
}

.bg-energy {
  background-color: var(--color-success-500);
}

.text-gradient-energy {
  background: linear-gradient(135deg, var(--color-success-400) 0%, var(--color-accent-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-gradient-energy {
  background: linear-gradient(135deg, var(--color-success-500) 0%, var(--color-accent-500) 100%);
}
```

---

## Task Checklist

### Phase 1: Token Sync
- [ ] Add warning color palette to globals.css
- [ ] Add danger color palette to globals.css
- [ ] Add chart colors to globals.css
- [ ] Add sidebar tokens to globals.css
- [ ] Add switch-background token to globals.css
- [ ] Add dark mode overrides for new tokens
- [ ] Update @theme inline block with new mappings
- [ ] Add energy utility classes (.text-energy, .bg-energy, .text-gradient-energy, .bg-gradient-energy)

### Phase 2: Create Page
- [ ] Create `app/capabilities/energy-systems/` directory
- [ ] Create `page.tsx` with adapted content from Figma
- [ ] Add page metadata for SEO
- [ ] Test page renders correctly

### Phase 3: Create Components
- [ ] Create `components/energy/` directory
- [ ] Adapt `EnergyCalculator.tsx` from Figma
- [ ] Adapt `SystemConfigurations.tsx` from Figma
- [ ] Adapt `EnergyFAQ.tsx` from Figma
- [ ] Update imports (motion/react → framer-motion)
- [ ] Test all interactive components

### Phase 4: Navigation
- [ ] Update Header.tsx with Capabilities dropdown
- [ ] Add link to Energy Systems page
- [ ] Test navigation works on desktop and mobile

### Phase 5: Final Testing
- [ ] Verify all animations work
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Verify form interactions work
- [ ] Check all internal links
- [ ] Run `bun run lint` to check for issues
- [ ] Run `bun run tsc --noEmit` for type checking

---

## Key Adaptation Notes

1. **Motion library import:** Change `motion/react` → `framer-motion`
2. **Remove Header/Footer:** They're in layout.tsx, not individual pages
3. **Link component:** Use `next/link` instead of react-router's `Link`
4. **Image component:** Use existing `ImageWithFallback` from `@/components/shared/`
5. **Page wrapper:** Use `<main>` instead of `<div>` for semantic HTML
6. **Add `pt-20`:** Account for fixed header height

---

## Estimated Scope

| Phase | Files | LOC (approx) |
|-------|-------|--------------|
| Token Sync | 1 | +120 |
| Energy Page | 1 | ~600 |
| Components | 3 | ~800 |
| Navigation | 1 | ~50 |
| **Total** | **6** | **~1,570** |

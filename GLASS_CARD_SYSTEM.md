# Glass Card Component System - Technical Documentation

## Overview

A complete, reusable frosted glass card component system with dramatic glowing hover effects. Designed for modern premium UI with glassmorphism design patterns.

## Color Specifications

### Base Colors (from CSS variables)
- **Background**: `hsl(15 40% 8%)` - Deep warm brown/black
- **Card Background**: `hsl(15 40% 12%)` - Slightly lighter card surface
- **Primary (Orange)**: `hsl(25 95% 55%)` - Vibrant orange accent
- **Muted Foreground**: `0 0% 70%` - Light gray text
- **White Foreground**: `0 0% 98%` - Near-white text

### Gradient Colors (Hover/Premium States)
- **Orange**: `#FF8A3D` (hsl(25 95% 55%))
- **Red-Orange**: `#FF6B4A` (hsl(15 85% 45%))
- **Deep Red**: `#FF1654` (hsl(340 85% 50%))

## Component Classes

### `.glass-card`
**Base frosted glass card component**

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Features:**
- Frosted glass effect with 10px blur
- Semi-transparent white background (5% opacity)
- Subtle border for depth
- Smooth cubic-bezier transitions

**Hover State:**
```
transform: scale(1.03)
border: 1px solid rgba(255, 165, 100, 0.4)
box-shadow: Multiple layered glows (inner, medium, outer, dramatic)
```

### `.glass-card.premium`
**Enhanced card for featured/popular items**

```css
.glass-card.premium {
  background: linear-gradient(135deg, 
    rgba(255, 138, 61, 0.15) 0%, 
    rgba(255, 106, 74, 0.1) 50%, 
    rgba(255, 22, 84, 0.05) 100%);
  border: 1px solid rgba(255, 165, 100, 0.3);
}
```

**Enhanced Hover Glow:**
- Stronger outer glow effects
- More vibrant orange/red tones
- Box-shadow with 4 layers for depth

### `.glass-section-bg`
**Full-width background container with animated gradient**

Features:
- Dark gradient background
- Animated radial glow points
- Floating animation effect
- Perfect for section backgrounds

### `.glass-badge`
**Small label/badge styling**

```css
.glass-badge {
  padding: 0.375rem 0.75rem;
  background: rgba(255, 138, 61, 0.2);
  border: 1px solid rgba(255, 138, 61, 0.4);
  border-radius: 9999px;
  color: hsl(25 95% 70%);
}
```

### `.glass-card-content`
**Content wrapper (manages z-index for overlays)**

Used to ensure content appears above gradient overlays and pseudo-elements.

## React Components

### `<GlassCard />`

**Props:**
- `children`: ReactNode - Card content
- `className`: string - Additional Tailwind classes
- `premium`: boolean - Enable premium styling (default: false)
- `interactive`: boolean - Show cursor-pointer (default: true)

**Example:**
```tsx
<GlassCard premium={true}>
  <div className="glass-card-content p-8">
    <h3 className="text-xl font-bold text-foreground">Premium Plan</h3>
    <p className="text-muted-foreground">Best for growing teams</p>
  </div>
</GlassCard>
```

### `<GlassBadge />`

**Props:**
- `children`: ReactNode - Badge text
- `className`: string - Additional classes

**Example:**
```tsx
<GlassBadge>Most Popular</GlassBadge>
```

### `<GlassSection />`

**Props:**
- `children`: ReactNode - Section content
- `className`: string - Additional classes

**Example:**
```tsx
<GlassSection className="py-20">
  {/* Multiple cards */}
</GlassSection>
```

## Implementation Guide

### Step 1: Import Components
```tsx
import { GlassCard, GlassBadge, GlassSection } from '@/components/GlassCard';
```

### Step 2: Structure Your Cards
```tsx
<GlassCard premium={isFeatured}>
  <div className="glass-card-content p-8">
    {/* Your content here */}
  </div>
</GlassCard>
```

### Step 3: Wrap in GlassSection for Full-Width Backgrounds
```tsx
<GlassSection className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cards */}
    </div>
  </div>
</GlassSection>
```

## Animation Details

### Hover Transition
- **Duration**: 0.4s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) (standard material easing)
- **Transform**: scale(1.03) - 3% growth

### Glow Effect Layers (Hover)
1. **Inner Glow**: Inset 0 1px 2px with orange (0.2 opacity)
2. **Medium Glow**: 0 0 20px orange (0.4 opacity)
3. **Outer Glow**: 0 0 40px red-orange (0.25 opacity)
4. **Dramatic Glow**: 0 0 60px deep red (0.15 opacity)

### Background Animation
- **Animation**: gradient-float
- **Duration**: 15s
- **Loop**: Infinite, ease-in-out
- Effect: Subtle movement of radial glow points

## Accessibility Considerations

✅ **Color Contrast**: Foreground text (white) on dark card backgrounds meets WCAG AA standards
✅ **Hover States**: Clear visual feedback with transform and glow
✅ **Keyboard Navigation**: No custom event handlers, uses standard HTML elements
✅ **Reduced Motion**: Consider adding `prefers-reduced-motion` media query for users

**Recommended Addition:**
```css
@media (prefers-reduced-motion: reduce) {
  .glass-card {
    transition: none;
  }
  .glass-section-bg::before {
    animation: none;
  }
}
```

## Responsive Design

- Grid layouts automatically stack on mobile (use `md:grid-cols-3`)
- Cards maintain frosted glass effect at all breakpoints
- Glow effects scale proportionally
- Touch-friendly on mobile (no reliance on hover)

## Performance Optimization

1. **Backdrop Filter**: Hardware-accelerated on modern browsers
2. **Transform**: Uses GPU-accelerated `scale()` instead of width/height changes
3. **Box-Shadow**: Multiple shadows handled efficiently by browser
4. **Animation**: Requested animation frame for smooth 60fps playback

## Browser Compatibility

✅ Chrome/Edge 76+
✅ Firefox 103+
✅ Safari 15.4+
✅ Mobile browsers with backdrop-filter support

**Fallback**: Cards display without blur effect in older browsers (still functional)

## Customization

### Adjust Blur Amount
```css
.glass-card {
  backdrop-filter: blur(20px); /* Increase/decrease as needed */
}
```

### Change Glow Colors
Update CSS variables in `src/index.css`:
```css
--brand-orange: 25 95% 55%;
--brand-orange-dark: 15 85% 45%;
```

### Modify Border Radius
```css
.glass-card {
  border-radius: 1.5rem; /* Adjust roundness */
}
```

## File Structure

```
src/
├── components/
│   ├── GlassCard.tsx          # Main component
│   └── GlassCardExamples.tsx  # Usage examples
├── index.css                   # All CSS styling
└── tailwind.config.ts          # Tailwind configuration
```

## Usage Checklist

- [ ] Import GlassCard, GlassBadge, GlassSection
- [ ] Wrap content with `.glass-card-content` div
- [ ] Add `p-8` or appropriate padding to content wrapper
- [ ] Use `premium` prop for featured cards
- [ ] Apply proper text color classes (`text-foreground`, `text-muted-foreground`)
- [ ] Test hover state on desktop and mobile
- [ ] Verify text contrast for accessibility
- [ ] Check responsive layout on multiple breakpoints

## Support

For issues or enhancements, refer to the component definition in `src/components/GlassCard.tsx` or CSS in `src/index.css`.

# D'CORE Theme - Quick Start Guide

## 🚀 Quick Examples

### Example 1: Using the Theme Hook

```tsx
import { useTheme } from '@/contexts/ThemeContext';

export function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
```

### Example 2: Creating a Custom Button

```tsx
import { DCoreButton } from '@/components/DCoreButton';

export function MyButtons() {
  return (
    <div className="gap-4">
      <DCoreButton variant="primary" size="large">
        Get Started
      </DCoreButton>
      <DCoreButton variant="secondary">
        Learn More
      </DCoreButton>
      <DCoreButton variant="primary" disabled>
        Disabled Button
      </DCoreButton>
    </div>
  );
}
```

### Example 3: Creating a Feature Card

```tsx
import { GlassCard } from '@/components/GlassCard';
import { DCoreButton } from '@/components/DCoreButton';

export function FeatureCard() {
  return (
    <GlassCard variant="default" interactive>
      <h3>Amazing Feature</h3>
      <p>Description of your feature here</p>
      <ul>
        <li>✓ Benefit 1</li>
        <li>✓ Benefit 2</li>
        <li>✓ Benefit 3</li>
      </ul>
      <DCoreButton variant="primary">Learn More</DCoreButton>
    </GlassCard>
  );
}
```

### Example 4: Creating a Custom Section

```tsx
import { GlassCard } from '@/components/GlassCard';

export function MyCustomSection() {
  return (
    <section className="my-section">
      <div className="container">
        <h2 className="section-title">My Custom Section</h2>
        <p className="section-subtitle">
          Subtitle text goes here
        </p>
        
        <div className="features-grid">
          {features.map((feature) => (
            <GlassCard key={feature.id} interactive>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Example 5: Using CSS Variables in Custom Styles

```css
.my-custom-element {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  color: var(--text-primary);
  border-radius: 24px;
  padding: 32px;
}

.my-custom-element:hover {
  background: rgba(91, 155, 213, 0.1);
  transform: translateY(-4px);
}
```

### Example 6: Responsive Grid

```tsx
export function ResponsiveGrid() {
  return (
    <div className="features-grid">
      {/* 
        Automatically responsive:
        - Mobile: 1 column
        - Tablet: 2 columns
        - Desktop: 3 columns
      */}
      {items.map((item) => (
        <GlassCard key={item.id}>{item.content}</GlassCard>
      ))}
    </div>
  );
}
```

### Example 7: Animated Background

```tsx
export function AnimatedHero() {
  return (
    <section className="hero">
      {/* Animated orbs background */}
      <div className="hero-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      
      {/* Content */}
      <div className="hero-content">
        <h1>Your Amazing Headline</h1>
      </div>
    </section>
  );
}
```

## 🎨 Color Usage Reference

### In CSS:
```css
.element {
  /* Backgrounds */
  background: var(--bg-primary);
  background: var(--bg-secondary);
  background: var(--bg-tertiary);
  
  /* Glass Effects */
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  
  /* Text */
  color: var(--text-primary);
  color: var(--text-secondary);
  color: var(--text-tertiary);
  
  /* Accents */
  color: var(--accent-primary);
  color: var(--accent-secondary);
  
  /* Buttons */
  background: var(--btn-primary-bg);
  background: var(--btn-secondary-bg);
  
  /* Glow Effects */
  box-shadow: var(--glow-primary);
  box-shadow: var(--glow-secondary);
}
```

### In Components:
```tsx
import { useTheme } from '@/contexts/ThemeContext';

export function ColorDisplay() {
  const { theme } = useTheme();
  
  return (
    <div style={{
      color: 'var(--text-primary)',
      backgroundColor: 'var(--bg-secondary)',
    }}>
      Current theme: {theme}
    </div>
  );
}
```

## 🔄 Common Customizations

### Change Primary Color

Edit `src/styles/themes.css`:
```css
:root[data-theme="light"] {
  --accent-primary: #YOUR_NEW_COLOR;
  --btn-primary-bg: #YOUR_NEW_COLOR;
}

:root[data-theme="dark"] {
  --accent-primary: #YOUR_NEW_COLOR;
  --btn-primary-hover: #YOUR_LIGHTER_COLOR;
}
```

### Add Custom Animation

Add to `src/styles/animations.css`:
```css
@keyframes myCustomAnimation {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-my-custom {
  animation: myCustomAnimation 0.5s ease-out;
}
```

### Create New Button Variant

Add to `src/components/DCoreButton.css`:
```css
.dcore-btn-tertiary {
  background: transparent;
  border: 2px solid var(--accent-primary);
  color: var(--accent-primary);
}

.dcore-btn-tertiary:hover {
  background: var(--accent-primary);
  color: white;
}
```

## 📱 Responsive Classes

```tsx
// Desktop only
<div className="desktop-only">Content</div>

// Mobile only
<div className="mobile-only">Content</div>

// Full width
<div className="w-full">Content</div>

// Margin/Padding
<div className="gap-4 mt-4 mb-4 px-4 py-4">
  Content
</div>

// Flexbox
<div className="flex flex-col flex-center gap-4">
  Content
</div>
```

## ⚙️ Configuration

### Theme Constants (in `ThemeContext.tsx`):
- Light mode: 'light'
- Dark mode: 'dark'
- Storage key: 'dcore-theme'

### Default Theme:
- First loads from localStorage
- Falls back to system preference
- Default to 'light' if no preference

### Color Scheme:
- Light: Bright backgrounds, dark text
- Dark: Dark backgrounds, light text
- Both use same D'CORE blue (#5B9BD5)

## 🐛 Debugging Tips

### Theme not changing:
```tsx
// Check if context is available
import { useTheme } from '@/contexts/ThemeContext';
console.log(useTheme()); // Should log { theme, toggleTheme, setTheme }
```

### Colors not applying:
```css
/* Check CSS variable is defined */
body {
  --check-color: var(--accent-primary, red);
  background: var(--check-color); /* Should not be red */
}
```

### Animations not playing:
```css
/* Check prefers-reduced-motion setting */
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled here */
}
```

### Glass effect not visible:
```css
/* Ensure backdrop-filter is supported */
.glass {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); /* Safari */
  filter: blur(20px); /* Fallback */
}
```

## 📚 File Quick Reference

| File | Purpose |
|------|---------|
| `ThemeContext.tsx` | Theme state management |
| `themes.css` | Color variables definitions |
| `animations.css` | Reusable animations |
| `responsive.css` | Breakpoint definitions |
| `globals.css` | Global styles & utilities |
| `DCoreButton.*` | Button component |
| `GlassCard.*` | Card component |
| `DCoreNavbar.*` | Navigation component |

## 🚀 Performance Tips

1. Use CSS variables instead of computing colors
2. Use CSS transforms for animations (better performance)
3. Enable hardware acceleration with `will-change`
4. Reduce blur effects on mobile devices
5. Lazy load images in sections
6. Use `prefers-reduced-motion` for accessibility

## 🎯 Best Practices

✅ Always wrap app with `<ThemeProvider>`
✅ Use CSS variables for colors, not hardcoded hex
✅ Prefer CSS animations over JavaScript
✅ Test theme switching on all pages
✅ Ensure focus indicators are visible
✅ Test on real mobile devices
✅ Check color contrast ratios
✅ Use semantic HTML elements
✅ Add alt text to all images
✅ Test keyboard navigation

## 🔗 Related Documentation

- Full guide: `DCORE_THEME_IMPLEMENTATION.md`
- Completion summary: `IMPLEMENTATION_COMPLETE.md`
- Original prompt: `GLASS_CARD_SYSTEM.md`

---

Happy building with D'CORE Systems! 🎉

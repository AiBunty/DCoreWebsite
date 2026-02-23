# Navbar Master Standard - DCore Systems Website

## Overview
This document serves as the **master of truth** for navbar implementation across all website pages. All new pages must adhere to this standard to maintain consistency across the entire site.

## Navbar Structure

### Logo & Branding
- **Logo Image**: Use the Ai Bunty logo (not text)
- **Light Mode Logo**: `/assets/ai-bunty-logo-new.png`
- **Dark Mode Logo**: `/assets/ai-bunty-logo-dark.png`
- **Logo Size**: 32px height
- **Logo + Text**: "Ai Bunty" text next to logo

### Navigation Links
All pages must include these navigation links:
1. Home - `/`
2. Features - `/`
3. Pricing - `/`
4. Compare - `/`

**Important**: All links point to `/` (home page) since we use client-side routing for the React app.

### Theme Toggle
- Button with moon (🌙) emoji in dark mode
- Button with sun (☀️) emoji in light mode
- Toggle switches between light and dark themes
- Syncs with localStorage key: `dcore-theme`

## Implementation Guides

### For React Components (TypeScript/TSX)
**Reference**: `src/components/DCoreNavbar.tsx`

```tsx
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { DCoreButton } from './DCoreButton';
import { useTheme } from '@/contexts/ThemeContext';
import './DCoreNavbar.css';
import aiBuntyLogoLight from '@/assets/ai-bunty-logo-new.png';
import aiBuntyLogoDark from '@/assets/ai-bunty-logo-dark.png';

export function DCoreNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-glass' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">
          <img
            src={theme === 'dark' ? aiBuntyLogoDark : aiBuntyLogoLight}
            alt="Dcore Systems AI automation logo"
            className="navbar-logo"
          />
          <span className="navbar-text">Ai Bunty</span>
        </div>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/compare">Compare</a>
        </div>

        <div className="navbar-actions">
          <ThemeToggle />
          <DCoreButton variant="primary" size="default">
            Get Started
          </DCoreButton>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
```

### For HTML Pages (Static HTML)

#### CSS Styles Required
```css
.sticky-header {
    position: sticky;
    top: 0;
    z-index: 40;
    backdrop-filter: blur(10px);
    background: rgba(10, 25, 47, 0.85);
    border-bottom: 1px solid rgba(91, 155, 213, 0.2);
}

.header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.navbar-brand {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    transition: opacity 0.3s;
}

.navbar-brand:hover {
    opacity: 0.8;
}

.navbar-logo {
    height: 32px;
    width: auto;
}

.navbar-text {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
}

.navbar-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.navbar-menu a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s;
}

.navbar-menu a:hover {
    color: var(--blue-primary);
}

.theme-toggle {
    background: rgba(91, 155, 213, 0.2);
    border: 1px solid rgba(91, 155, 213, 0.3);
    border-radius: 0.5rem;
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--text-secondary);
    font-size: 1rem;
}

.theme-toggle:hover {
    background: rgba(91, 155, 213, 0.3);
}

/* Light Theme Overrides */
html[data-theme="light"] .navbar-text {
    color: var(--text-primary);
}

html[data-theme="light"] .navbar-menu a {
    color: var(--text-secondary);
}

html[data-theme="light"] .navbar-menu a:hover {
    color: var(--blue-primary);
}
```

#### HTML Structure
```html
<header class="sticky-header">
    <div class="header-content">
        <a href="/" class="navbar-brand">
            <img id="navbar-logo" src="/assets/ai-bunty-logo-new.png" alt="Dcore Systems" class="navbar-logo">
            <span class="navbar-text">Ai Bunty</span>
        </a>
        <nav class="navbar-menu">
            <a href="/">Home</a>
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Compare</a>
            <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">
                <span id="theme-icon">🌙</span>
            </button>
        </nav>
    </div>
</header>
```

#### JavaScript Function for Theme Toggle
```javascript
function applyTheme(theme) {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const logo = document.getElementById('navbar-logo');
  
  if (theme === 'light') {
    html.setAttribute('data-theme', 'light');
    icon.textContent = '🌙';
    if (logo) logo.src = '/assets/ai-bunty-logo-new.png';
    localStorage.setItem('dcore-theme', 'light');
  } else {
    html.setAttribute('data-theme', 'dark');
    icon.textContent = '☀️';
    if (logo) logo.src = '/assets/ai-bunty-logo-dark.png';
    localStorage.setItem('dcore-theme', 'dark');
  }
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// On page load
document.addEventListener('DOMContentLoaded', function() {
  const theme = localStorage.getItem('dcore-theme') || 'light';
  applyTheme(theme);
});
```

## Theme System

### CSS Variables Used
```css
:root[data-theme="light"] {
    --bg-primary: #f5f7fa;
    --bg-secondary: #ffffff;
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --blue-primary: #5B9BD5;
    --blue-light: #74ADE0;
    --blue-dark: #4A8AC4;
}

:root[data-theme="dark"] {
    --bg-primary: #0a192f;
    --bg-secondary: #0f1f35;
    --text-primary: #ffffff;
    --text-secondary: #b0b0b0;
    --blue-primary: #5B9BD5;
    --blue-light: #74ADE0;
    --blue-dark: #4A8AC4;
}
```

### LocalStorage Key
- **Key**: `dcore-theme`
- **Values**: `'light'` or `'dark'`
- **Default**: `'light'`

## Pages Using This Standard

### React Pages (Using DCoreNavbar)
- Home page
- Features page
- Pricing page
- Compare page
- Book Demo page
- And all other React-based pages

### HTML Static Pages
- [x] onboarding-form.html
- [x] onboarding-success.html
- [x] privacy-policy.html
- [x] terms-of-use.html
- [x] refund-policy.html
- [x] affiliate-policy.html
- [x] disclaimer.html

## Checklist for New Pages

When creating a new page, ensure it includes:

- [ ] **Logo Image** (not text): `/assets/ai-bunty-logo-new.png` and `/assets/ai-bunty-logo-dark.png`
- [ ] **Standard Navigation Links**: Home, Features, Pricing, Compare
- [ ] **Theme Toggle Button**: With moon/sun emoji
- [ ] **localStorage Sync**: Uses `dcore-theme` key
- [ ] **Light/Dark Mode Support**: Implements CSS variables
- [ ] **Responsive Design**: Mobile hamburger menu for React pages
- [ ] **Data Attribute**: Uses `data-theme="light|dark"` for theme switching

## Breaking Changes from Previous Implementation

### Old Way (❌ Deprecated)
- Using text "DCore Systems" as logo
- Hardcoded logo files (`logo-light.png`, `logo-dark.png`)
- localStorage key: `theme`
- Theme classes: `.light-theme` on html element
- Different navbar per page

### New Way (✅ Current Standard)
- Using Ai Bunty logo images with brand name
- Using `ai-bunty-logo-new.png` and `ai-bunty-logo-dark.png`
- localStorage key: `dcore-theme`
- Theme data attribute: `data-theme="light|dark"`
- Unified navbar across all pages

## Support

For questions or clarifications about navbar implementation, refer to:
- React Component: `src/components/DCoreNavbar.tsx`
- Navbar CSS: `src/components/DCoreNavbar.css`
- Example HTML Pages: `public/privacy-policy.html`

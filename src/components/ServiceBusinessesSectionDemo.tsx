/**
 * ServiceBusinessesSection Component Usage
 * 
 * A compact, premium carousel section showcasing service industries
 * with auto-sliding, pause-on-hover, and responsive design.
 * 
 * FEATURES:
 * - Infinite loop carousel with auto-slide
 * - Auto-pauses on hover
 * - 3 cards desktop / 2 tablet / 1 mobile
 * - Dot indicators for navigation
 * - Fully clickable cards
 * - Sustainable responsive design
 * - Accessibility compliant
 * - Dark theme support
 * - Reduced motion support
 * 
 * USAGE:
 * 
 * 1. Import the component:
 *    import { ServiceBusinessesSection } from "@/components/ServiceBusinessesSection";
 * 
 * 2. Add to your page/layout:
 *    <ServiceBusinessesSection />
 * 
 * 3. The component comes with pre-populated industries. To customize:
 *    - Edit the industries array in ServiceBusinessesSection.tsx
 *    - Update descriptions to be 6-8 words max
 *    - Modify emoji icons as needed
 *    - Update link paths to your routing structure
 * 
 * STYLING CUSTOMIZATION:
 * - Component uses CSS custom properties (--text-primary, --blue-primary, etc.)
 * - Respects existing theme configuration
 * - Modify ServiceBusinessesSection.css for design changes
 * - Supports both light and dark themes
 * 
 * RESPONSIVE BREAKPOINTS:
 * - desktop: 1024px+ (3 cards)
 * - tablet: 769-1023px (2 cards)
 * - mobile: <768px (1 card)
 * 
 * ANIMATION DEFAULTS:
 * - Auto-slide interval: 4 seconds
 * - Card transition: smooth (300ms)
 * - Pause on hover enabled by default
 * 
 * PERFORMANCE:
 * - Uses efficient state management with useRef for intervals
 * - Cleanup on unmount to prevent memory leaks
 * - Optimized for smooth 60fps animations
 */

import { ServiceBusinessesSection } from "@/components/ServiceBusinessesSection";

export function ServiceBusinessesSectionDemo() {
  return (
    <div>
      <ServiceBusinessesSection />
    </div>
  );
}

/**
 * To use in your main App or layout:
 * 
 * import { ServiceBusinessesSection } from "@/components/ServiceBusinessesSection";
 * 
 * export function HomePage() {
 *   return (
 *     <>
 *       <HeroSection />
 *       <ServiceBusinessesSection />
 *       <FeaturesSection />
 *       <CTASection />
 *       <Footer />
 *     </>
 *   );
 * }
 */

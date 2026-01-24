import { DCoreNavbar } from '@/components/DCoreNavbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ShowcaseSection } from '@/components/ShowcaseSection';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function DcoreThemePage() {
  return (
    <>
      <DCoreNavbar />
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
}

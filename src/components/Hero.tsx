import { memo } from 'react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import HeroBackground from './Hero/HeroBackground';
import HeroContent from './Hero/HeroContent';
import ScrollIndicator from './Hero/ScrollIndicator';

const Hero = memo(() => {
  const scrollToSection = useScrollToSection();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center pt-20">
        <HeroContent 
          onBookSession={() => scrollToSection('contact')}
          onViewWork={() => scrollToSection('portfolio')}
        />
      </div>

      <ScrollIndicator />
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
import { memo } from 'react';
import heroImage from '@/assets/hero-photographer.jpg';

const HeroBackground = memo(() => {
  return (
    <div className="absolute inset-0">
      <img 
        src={heroImage} 
        alt="Professional Photography" 
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
    </div>
  );
});

HeroBackground.displayName = 'HeroBackground';

export default HeroBackground;
import { memo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, Video } from 'lucide-react';
import HeroStats from './HeroStats';

interface HeroContentProps {
  onBookSession: () => void;
  onViewWork: () => void;
}

const HeroContent = memo(({ onBookSession, onViewWork }: HeroContentProps) => {
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
          <Camera size={16} />
          Professional Photography & Videography
        </span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-foreground mb-6 leading-tight">
        Capturing Your
        <span className="block text-accent">Perfect Moments</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
        Mengabadikan momen spesial Anda dengan sentuhan profesional. 
        Dari pernikahan romantis hingga konten bisnis yang memukau.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button 
          variant="hero" 
          size="xl"
          onClick={onBookSession}
          className="group"
        >
          Book Your Session
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </Button>
        
        <Button 
          variant="outline" 
          size="xl"
          onClick={onViewWork}
          className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
        >
          <Video size={20} />
          View Our Work
        </Button>
      </div>

      <HeroStats />
    </div>
  );
});

HeroContent.displayName = 'HeroContent';

export default HeroContent;
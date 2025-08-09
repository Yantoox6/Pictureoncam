import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOnLightBackground, setIsOnLightBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Change to dark text when scrolling past hero section (which is typically dark)
      setIsOnLightBackground(scrollY > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-muted/20 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className={`font-serif text-2xl font-bold transition-colors duration-300 ${
            isOnLightBackground ? 'text-foreground' : 'text-white'
          }`}>
            PictureOnCam
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`hover:text-accent transition-colors font-medium ${
                isOnLightBackground ? 'text-foreground' : 'text-white'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-accent transition-colors font-medium ${
                isOnLightBackground ? 'text-foreground' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-accent transition-colors font-medium ${
                isOnLightBackground ? 'text-foreground' : 'text-white'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-accent transition-colors font-medium ${
                isOnLightBackground ? 'text-foreground' : 'text-white'
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className={`hover:text-accent transition-colors font-medium ${
                isOnLightBackground ? 'text-foreground' : 'text-white'
              }`}
            >
              Testimonials
            </button>
            <Button 
              variant="accent" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isOnLightBackground ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-left hover:text-accent transition-colors font-medium ${
                  isOnLightBackground ? 'text-foreground' : 'text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-left hover:text-accent transition-colors font-medium ${
                  isOnLightBackground ? 'text-foreground' : 'text-white'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-left hover:text-accent transition-colors font-medium ${
                  isOnLightBackground ? 'text-foreground' : 'text-white'
                }`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className={`text-left hover:text-accent transition-colors font-medium ${
                  isOnLightBackground ? 'text-foreground' : 'text-white'
                }`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className={`text-left hover:text-accent transition-colors font-medium ${
                  isOnLightBackground ? 'text-foreground' : 'text-white'
                }`}
              >
                Testimonials
              </button>
              <Button 
                variant="accent" 
                size="sm"
                onClick={() => scrollToSection('contact')}
                className="w-fit"
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
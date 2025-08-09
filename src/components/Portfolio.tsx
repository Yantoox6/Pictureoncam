import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Video, Eye } from 'lucide-react';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioCorporate from '@/assets/portfolio-corporate.jpg';
import portfolioEvent from '@/assets/portfolio-event.jpg';
import portofolioProduct from '@/assets/portofolio-product.jpg';
import portofolioPreWedding from '@/assets/portofolio-preweding.jpg';
import portofolioGrandannivceleb from '@/assets/portofolio-grandanniverceleb.jpg';
import portofolioBirthday from '@/assets/portofolio-birthday.jpg';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: "Romantic Wedding Ceremony",
      category: "wedding",
      type: "Photography",
      image: portfolioWedding,
      description: "Beautiful outdoor wedding with golden hour lighting"
    },
    {
      id: 2,
      title: "Corporate Team Building",
      category: "corporate",
      type: "Photography & Video",
      image: portfolioCorporate,
      description: "Professional corporate event documentation"
    },
    {
      id: 3,
      title: "Grand Anniversary Celebration",
      category: "event",
      type: "Videography",
      image: portofolioGrandannivceleb,
      description: "Elegant anniversary party with stunning venue"
    },
    {
      id: 4,
      title: "Pre-Wedding Session",
      category: "wedding",
      type: "Photography",
      image: portofolioPreWedding,
      description: "Intimate pre-wedding photoshoot in natural setting"
    },
    {
      id: 5,
      title: "Product Launch Event",
      category: "product",
      type: "Photography & Video",
      image: portofolioProduct,
      description: "High-end product launch with celebrity guests"
    },
    {
      id: 6,
      title: "Birthday Celebration",
      category: "event",
      type: "Photography",
      image: portofolioBirthday,
      description: "Joyful birthday party with family and friends"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'event', label: 'Events' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Eye size={16} />
            Our Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Showcase of Our
            <span className="text-accent"> Best Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat koleksi karya terbaik kami yang menggambarkan dedikasi dan 
            keahlian dalam mengabadikan momen-momen berharga.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "accent" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  {item.type.includes('Photography') && <Camera size={16} />}
                  {item.type.includes('Video') && <Video size={16} />}
                  <span className="text-sm font-medium">{item.type}</span>
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>

              <Button 
                size="icon"
                variant="accent"
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Eye size={16} />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ingin melihat lebih banyak karya kami? Hubungi kami untuk portofolio lengkap.
          </p>
          <Button variant="accent" size="lg">
            View Complete Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import { Button } from '@/components/ui/button';
import { Camera, Video, Users, Building2, Heart, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Photography & Videography",
      description: "Mengabadikan momen bahagia pernikahan Anda dengan detail yang sempurna dan sentuhan romantis.",
      features: ["Pre-wedding photoshoot", "Wedding ceremony coverage", "Reception documentation", "Same-day highlight video"],
      price: "Starting from IDR 3,500,000"
    },
    {
      icon: Building2,
      title: "Corporate & Business Content",
      description: "Konten visual profesional untuk meningkatkan brand awareness dan kredibilitas bisnis Anda.",
      features: ["Product photography", "Corporate events", "Team portraits", "Marketing content creation"],
      price: "Starting from IDR 1,500,000"
    },
    {
      icon: Calendar,
      title: "Event Documentation",
      description: "Layanan dokumentasi komprehensif untuk berbagai jenis acara dan perayaan spesial.",
      features: ["Birthday celebrations", "Anniversary parties", "Cultural events", "Live streaming services"],
      price: "Starting from IDR 2,000,000"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Camera size={16} />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Professional Services
            <span className="text-accent"> Tailored for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dari momen intim hingga acara besar, kami menyediakan layanan fotografi 
            dan videografi profesional yang disesuaikan dengan kebutuhan Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              <div className="mb-6">
                <service.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-6">
                <div className="text-lg font-semibold text-accent mb-4">
                  {service.price}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                  onClick={scrollToContact}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
            Need Something Different?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kami juga menyediakan layanan kustom untuk kebutuhan khusus Anda. 
            Konsultasikan project Anda dengan tim kami untuk solusi terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
              <Video size={16} className="text-accent" />
              <span className="text-sm font-medium">Drone Photography</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
              <Camera size={16} className="text-accent" />
              <span className="text-sm font-medium">360° Virtual Tours</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full">
              <Users size={16} className="text-accent" />
              <span className="text-sm font-medium">Live Streaming</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
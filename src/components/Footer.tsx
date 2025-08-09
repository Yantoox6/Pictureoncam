import { Camera, Heart, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wedding Photography',
    'Corporate Events',
    'Product Photography',
    'Video Production',
    'Event Documentation',
    'Content Creation'
  ];

  const contactInfo = [
    { icon: Phone, text: '+62 812-3456-7890' },
    { icon: Mail, text: 'info@pictureoncam.com' },
    { icon: MapPin, text: 'Jakarta, Indonesia' }
  ];

  const socialLinks = [
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Youtube, url: '#', label: 'Youtube' }
  ];

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="text-accent" size={28} />
              <h3 className="text-2xl font-serif font-bold">PictureOnCam</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Mengabadikan momen berharga Anda dengan sentuhan profesional dan artistik. 
              Kepercayaan Anda adalah kehormatan bagi kami.
            </p>
            <div className="flex items-center gap-2 text-accent">
              <Heart size={16} />
              <span className="text-sm font-medium">Made with passion in Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center gap-3">
                  <contact.icon className="text-accent" size={16} />
                  <span className="text-primary-foreground/80 text-sm">{contact.text}</span>
                </li>
              ))}
            </ul>

            <div>
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-primary-foreground/10 p-2 rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-all transform hover:scale-110"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © {currentYear} PictureOnCam. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
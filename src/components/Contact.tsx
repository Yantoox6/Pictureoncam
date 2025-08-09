import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+62 812-3456-7890", "+62 821-9876-5432"],
      action: "Call us for immediate response"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@pictureoncam.com", "booking@pictureoncam.com"],
      action: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["Jakarta, Indonesia", "Available nationwide"],
      action: "We serve across Indonesia"
    }
  ];

  const socialLinks = [
    { icon: Instagram, url: "#", label: "@pictureoncam" },
    { icon: Facebook, url: "#", label: "PictureOnCam Studio" },
    { icon: Youtube, url: "#", label: "PictureOnCam Channel" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Send size={16} />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Capture Your
            <span className="text-accent"> Perfect Moments?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mari diskusikan project Anda dengan tim profesional kami. 
            Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan fotografi dan videografi Anda.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+62 812-3456-7890"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography & Videography</option>
                    <option value="corporate">Corporate & Business Content</option>
                    <option value="event">Event Documentation</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project, event date, location, and any specific requirements..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full">
                <Send size={20} />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 shadow-soft hover:shadow-medium transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <info.icon className="text-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">{detail}</p>
                        ))}
                        <p className="text-sm text-accent mt-1">{info.action}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <Card className="p-6 shadow-soft">
              <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="bg-accent/10 p-3 rounded-lg text-accent hover:bg-accent hover:text-accent-foreground transition-colors group"
                    title={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Stay updated with our latest work and behind-the-scenes content
              </p>
            </Card>

            {/* Quick Contact */}
            <Card className="p-6 shadow-soft bg-accent/5">
              <h4 className="font-semibold text-foreground mb-3">Need Immediate Response?</h4>
              <p className="text-muted-foreground mb-4">
                For urgent bookings or last-minute requests, contact us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="accent" size="sm" className="flex-1">
                  <Phone size={16} />
                  Call Now
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail size={16} />
                  Quick Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
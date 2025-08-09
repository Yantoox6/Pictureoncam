import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & David Chen",
      role: "Wedding Couple",
      rating: 5,
      text: "PictureOnCam berhasil mengabadikan hari pernikahan kami dengan sempurna! Setiap foto dan video menggambarkan emosi dan kebahagiaan yang kami rasakan. Tim yang sangat profesional dan hasilnya melampaui ekspektasi.",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Amanda Putri",
      role: "CEO, Boutique Fashion",
      rating: 5,
      text: "Sebagai owner bisnis fashion, saya sangat puas dengan hasil foto produk dan konten marketing yang dibuat. Kualitas foto sangat profesional dan membantu meningkatkan penjualan online kami secara signifikan.",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Michael Tan",
      role: "Event Organizer",
      rating: 5,
      text: "Sudah beberapa kali menggunakan jasa PictureOnCam untuk event-event besar. Mereka selalu deliver hasil yang outstanding dan tepat waktu. Tim yang sangat reliable dan kreatif dalam menangkap momen-momen penting.",
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "Rina & Bobby",
      role: "Anniversary Celebration",
      rating: 5,
      text: "Video anniversary kami dibuat dengan sangat cinematic dan touching. Semua keluarga terharu melihat hasilnya. Terima kasih PictureOnCam sudah membuat momen spesial kami menjadi abadi!",
      image: "/api/placeholder/80/80"
    },
    {
      id: 5,
      name: "PT. Inovasi Teknologi",
      role: "Technology Company",
      rating: 5,
      text: "Documentation untuk corporate event dan team building kami sangat profesional. Hasilnya digunakan untuk company profile dan marketing materials. Sangat merekomendasikan untuk kebutuhan corporate!",
      image: "/api/placeholder/80/80"
    },
    {
      id: 6,
      name: "Keluarga Wijaya",
      role: "Family Portrait",
      rating: 5,
      text: "Session family portrait bersama PictureOnCam sangat menyenangkan. Photographer sangat sabar dengan anak-anak dan berhasil menangkap karakter masing-masing anggota keluarga dengan sempurna.",
      image: "/api/placeholder/80/80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? "text-accent fill-accent" : "text-muted-foreground"} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Quote size={16} />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            What Our Clients
            <span className="text-accent"> Say About Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah beberapa testimoni 
            dari klien yang telah mempercayakan momen berharga mereka kepada kami.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-lg p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-muted/30 rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
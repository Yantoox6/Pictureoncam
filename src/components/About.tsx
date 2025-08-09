import { memo } from 'react';
import { Camera, Heart, Users, Zap } from 'lucide-react';
import FeatureCard from './About/FeatureCard';
import ValueCard from './About/ValueCard';

const features = [
  {
    icon: Camera,
    title: 'Professional Equipment',
    description: 'Menggunakan peralatan terdepan untuk hasil maksimal'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Tim berpengalaman dengan keahlian terspesialisasi'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Hasil berkualitas tinggi dengan waktu pengerjaan optimal'
  },
  {
    icon: Heart,
    title: 'Personal Touch',
    description: 'Pendekatan personal untuk setiap klien'
  }
];

const values = [
  {
    title: 'Quality First',
    description: 'Kualitas adalah prioritas utama dalam setiap karya yang kami hasilkan'
  },
  {
    title: 'Trust & Reliability',
    description: 'Membangun kepercayaan melalui konsistensi dan kehandalan layanan'
  },
  {
    title: 'Creative Innovation',
    description: 'Selalu menghadirkan inovasi kreatif untuk hasil yang memukau'
  }
];

const About = memo(() => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart size={16} />
              About PictureOnCam
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Passion Meets
              <span className="text-accent"> Professionalism</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kami adalah tim profesional yang berdedikasi mengabadikan momen-momen berharga 
              dalam hidup Anda dengan kualitas terbaik dan sentuhan artistik yang memukau.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Our Story
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Bermula dari passion terhadap seni visual, PictureOnCam hadir untuk memberikan 
                layanan fotografi dan videografi profesional. Kami percaya bahwa setiap momen 
                memiliki cerita unik yang layak diabadikan dengan sempurna.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dengan pengalaman lebih dari 5 tahun dan portofolio yang beragam, kami telah 
                membantu ratusan klien mengabadikan momen spesial mereka, dari pernikahan 
                romantis hingga konten bisnis yang professional.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-8">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
import { memo } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = memo(({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-soft">
      <Icon className="text-accent mb-4" size={32} />
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
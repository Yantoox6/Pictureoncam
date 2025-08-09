import { memo } from 'react';

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = memo(({ title, description }: ValueCardProps) => {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
});

ValueCard.displayName = 'ValueCard';

export default ValueCard;
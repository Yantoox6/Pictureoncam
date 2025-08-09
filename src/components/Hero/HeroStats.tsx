import { memo } from 'react';

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Projects Done' },
  { value: '5+', label: 'Years Experience' }
];

const HeroStats = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-lg">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
          <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
});

HeroStats.displayName = 'HeroStats';

export default HeroStats;
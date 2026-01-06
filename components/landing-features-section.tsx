'use client';

import { Brain, Coins, Globe, Network, Shield, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Intelligent Systems",
    description:
      "AI embedded as a foundational layer with intelligent assistance, adaptive gameplay analysis, and evolving player models to increase retention and accelerate skill development.",
  },
  {
    icon: <Coins className="h-6 w-6" />,
    title: "Web3 Economy",
    description:
      "Verifiable digital ownership and player-driven economy with blockchain-based assets. Web3 features are optional while offering enhanced functionality for engaged users.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Scalable Infrastructure",
    description:
      "Cloud-based infrastructure supporting persistent engagement, global matchmaking, and continuous iteration – critical for building a durable gaming product.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Fair Competition",
    description:
      "Competitive integrity is central with matchmaking, ranking systems, and progression mechanics designed to reward skill and consistency.",
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "Social Infrastructure",
    description:
      "Global leaderboards, tournaments, private rooms, and community-driven competition designed to generate network effects and increase retention.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Extensible Framework",
    description:
      "Technology stack designed to support expansion into additional strategy-based games and competitive formats beyond Mahjong.",
  },
];

/**
 * Landing page features section component.
 * Displays a grid of feature cards with icons, titles, and descriptions.
 */
export const LandingFeaturesSection = ({ title = 'Platform Differentiators', className }: { title?: string, className?: string }) => {
  return (
    <section id='features' className={cn('py-20 px-4', className)}>
      <div className='container mx-auto max-w-6xl'>
        <ScrollAnimation variant='fadeUp' delay={0.1}>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 text-foreground'>
            {title}
          </h2>
        </ScrollAnimation>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              variant='fadeUp'
              delay={0.1 + index * 0.1}
            >
              <Card className='border-border bg-card'>
                <CardContent className='pt-6'>
                  <div
                    className={cn(
                      'flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4',
                      index % 2 === 0 ? 'text-accent' : 'text-secondary'
                    )}
                  >
                    {feature.icon}
                  </div>
                  <h3 className='text-xl font-semibold mb-2 text-card-foreground'>
                    {feature.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

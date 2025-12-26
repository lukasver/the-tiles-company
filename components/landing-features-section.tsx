import { Trophy, Sparkles, Shield, Users, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Trophy className="h-6 w-6 text-primary" />,
    title: 'Play Your Way',
    description:
      'Multiple Mahjong styles, tournaments, casual tables, and private rooms with customizable rules for every preference.',
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: 'AI-Powered Learning',
    description:
      'Intelligent assistance that helps newcomers learn while providing experienced players with post-game insights.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Fair & Transparent',
    description:
      'Balanced matchmaking, consistent rule enforcement, and continuous monitoring for competitive integrity.',
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: 'Social Experience',
    description:
      'Built-in chat, friend lists, private tables, leaderboards, and match replays to share memorable moments.',
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: 'Cross-Platform',
    description:
      'Browser-based platform that works seamlessly on desktop, tablet, and mobile. No downloads required.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Classic Design',
    description:
      'Modern aesthetics meet traditional Mahjong visuals with smooth animations and customizable themes.',
  },
];

/**
 * Landing page features section component.
 * Displays a grid of feature cards with icons, titles, and descriptions.
 */
export const LandingFeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Everything You Need to Play
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


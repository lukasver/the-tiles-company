import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Landing page Web3 section component.
 * Displays information about the Web3 infrastructure and The Tiles Company.
 */
export const LandingWeb3Section = ({
  href,
}: {
  href: string;
}) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm mb-6">
          <Zap className="h-4 w-4" />
          Powered by Web3 Infrastructure
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
          Built on The Tiles Company
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Mahjong Stars is powered by The Tiles Company blockchain layer, bringing transparency, ownership, and
          rewards to your gaming experience. Earn $TILE tokens through gameplay and tournaments.
        </p>
        <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer nofollow">
            Learn About Web3 Features
          </a>
        </Button>
      </div>
    </section>
  );
};


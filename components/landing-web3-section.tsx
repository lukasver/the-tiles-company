'use client';

import { Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ScrollAnimation } from './ui/scroll-animation';
import { cn } from '@/lib/utils';

/**
 * Landing page Web3 section component.
 * Displays information about the Web3 infrastructure and The Tiles Company.
 */
export const LandingWeb3Section = ({ href, className }: { href?: string, className?: string }) => {
  // href is kept for API consistency but not currently used in this component
  void href;
  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <ScrollAnimation variant="fadeUp" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm mb-6">
              <Zap className="h-4 w-4" />
              Digital Ownership & Token Economy
            </div>
          </ScrollAnimation>
          <ScrollAnimation variant="fadeUp" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
              Web3 Integration & Sustainable Incentives
            </h2>
          </ScrollAnimation>
          <ScrollAnimation variant="fadeUp" delay={0.3}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Mahjong Stars incorporates Web3 principles to introduce verifiable digital ownership and an open,
              player-driven economy. Participation in Web3 features is optional, maintaining accessibility for
              traditional players.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ScrollAnimation variant="fadeUp" delay={0.4}>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Native Token Economy</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A native token designed to support governance, marketplace activity, and long-term incentive
                  alignment. Token emission rewards meaningful participation rather than speculation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Governance and protocol-level decision-making</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Marketplace transactions and advanced features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Long-term incentive programs and ecosystem rewards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeUp" delay={0.5}>
            <Card className="border-border bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">Digital Asset Ownership</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Select in-game assets exist as blockchain-based digital items, enabling transparent ownership,
                  trading, and long-term value alignment between players and the platform.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  By separating core gameplay from token dependency, Mahjong Stars maintains regulatory flexibility
                  while capturing the upside of a Web3-native economy.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

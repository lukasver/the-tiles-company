'use client';

import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollAnimation } from './ui/scroll-animation';
import { cn } from '@/lib/utils';

/**
 * Landing page roadmap section component.
 * Displays information about the platform roadmap and future plans.
 */
export const LandingRoadmapSection = ({ href = '/roadmap', className }: { href?: string, className?: string }) => {
  return (
    <section className={cn("py-20 px-4 bg-secondary text-secondary-foreground", className)}>
      <div className="container mx-auto max-w-4xl text-center">
        <ScrollAnimation variant="fadeUp" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Building the Future of Gaming
          </h2>
        </ScrollAnimation>
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <p className="text-xl mb-8 opacity-90 text-balance">
            Mahjong Stars is being built as a long-term platform with a clear roadmap, modular architecture, and an
            expanding ecosystem.
          </p>
        </ScrollAnimation>
        <ScrollAnimation variant="fadeUp" delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Button size="lg" variant={'secondary'}>
              <div className="flex items-center justify-center gap-2">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  View Roadmap
                </a>
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </div>
            </Button>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

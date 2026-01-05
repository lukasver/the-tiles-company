'use client';

import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

/**
 * Landing page Web3 section component.
 * Displays information about the Web3 infrastructure and The Tiles Company.
 */
export const LandingWeb3Section = ({ href }: { href: string }) => {
  return (
    <section className='py-20 px-4'>
      <div className='container mx-auto max-w-4xl text-center'>
        <ScrollAnimation variant='fadeIn' delay={0.1}>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm mb-6'>
            <Zap className='h-4 w-4' />
            Web3 Infrastructure
          </div>
        </ScrollAnimation>
        <ScrollAnimation variant='fadeUp' delay={0.2}>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance'>
            Built by The Tiles Company
          </h2>
        </ScrollAnimation>
        <ScrollAnimation variant='fadeUp' delay={0.3}>
          <p className='text-lg text-muted-foreground leading-relaxed mb-8'>
            Mahjong Stars is powered by a blockchain layer,
            bringing transparency, ownership, and rewards to your gaming
            experience. Earn $TILE tokens through gameplay, events and tournaments.
          </p>
        </ScrollAnimation>
        <ScrollAnimation variant='scale' delay={0.4}>
          <Button
            size='lg'
            variant='outline'
            className='px-8 bg-transparent'
            asChild
          >
            <a href={href} target='_blank' rel='noopener noreferrer nofollow'>
              Learn About Web3 Features
            </a>
          </Button>
        </ScrollAnimation>
      </div>
    </section>
  );
};

'use client';

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import BackgroundWrapper from './bg-wrapper';

/**
 * Landing page about section component.
 * Displays a centered title and description about the product.
 */
export const LandingAboutSection = () => {
  return (
    <BackgroundWrapper
      withGradient={false}
      className=''
    >
      <section className='relative py-40 sm:py-60 px-4 bg-muted/30 before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-32 before:bg-gradient-to-b before:from-5% after:to before:from-[#060912] before:to-transparent before:pointer-events-none before:z-10 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-32 after:bg-gradient-to-t after:from-[#060912] after:to-transparent after:pointer-events-none after:z-10'>
        <div className='container mx-auto max-w-4xl'>
          <ScrollAnimation variant='fadeUp' delay={0.1}>
            <h2 className='text-4xl md:text-5xl font-bold text-center mb-6 text-foreground text-balance'>
              Built for Scale and Longevity
            </h2>
          </ScrollAnimation>
          <ScrollAnimation variant='fadeUp' delay={0.2}>
            <p className='text-lg text-secondary text-center leading-relaxed'>
              Mahjong Stars reimagines online Mahjong by focusing on what players
              actually care about: fair play, smooth gameplay, and meaningful
              competition. Many existing platforms feel outdated, fragmented, or
              overly complex. Mahjong Stars takes a different approach: clean
              design, transparent mechanics, and a player-first experience.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

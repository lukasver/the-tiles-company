'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { cn } from '@/lib/utils';

/**
 * Landing page call-to-action section component.
 * Displays a prominent CTA with title, description, and action buttons.
 */
export const LandingCtaSection = ({ href, className }: { href: string, className?: string }) => {
  return (
    <section className={cn('py-20 px-4 bg-secondary text-secondary-foreground', className)}>
      <div className='container mx-auto max-w-4xl text-center'>
        <ScrollAnimation variant='scale' delay={0.1}>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-balance'>
            Ready to Play?
          </h2>
        </ScrollAnimation>
        <ScrollAnimation variant='fadeUp' delay={0.2}>
          <p className='text-lg md:text-xl mb-8 opacity-90 text-balance'>
            Join thousands of players worldwide. Subscribe to our newsletter to
            know first when we launch.
          </p>
        </ScrollAnimation>
        <ScrollAnimation variant='fadeUp' delay={0.3}>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
            <Button
              size='lg'
              className='bg-background text-foreground hover:bg-background/90 px-8'
              asChild
            >
              <a href={href} target='_blank' rel='noopener'>
                Subscribe
                <ArrowRight className='ml-2 h-4 w-4' />
              </a>
            </Button>
            <Button
              size='lg'
              variant='secondary'
              // className='border-secondary-foreground/20 text-secondary-foreground hover:bg-primary px-8 bg-transparent'
              asChild
            >
              <a
                href='mailto:info@thetilescompany.io'
                target='_blank'
                rel='noopener noreferrer nofollow'
              >
                Contact Us
              </a>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

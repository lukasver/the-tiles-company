'use client';

import { motion, useInView } from 'motion/react';
import { useRef, ReactNode, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  /**
   * Animation variant to use
   * - fadeUp: Fades in and slides up
   * - fadeIn: Simple fade in
   * - scale: Fades in and scales up
   * - slideLeft: Slides in from the left
   * - slideRight: Slides in from the right
   */
  variant?: 'fadeUp' | 'fadeIn' | 'scale' | 'slideLeft' | 'slideRight';
  /**
   * Delay before animation starts (in seconds)
   */
  delay?: number;
  /**
   * Duration of the animation (in seconds)
   */
  duration?: number;
  /**
   * Margin for the intersection observer (negative values trigger earlier)
   */
  margin?: string;
  /**
   * Whether to animate only once or every time it enters viewport
   */
  once?: boolean;
}

const animationVariants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

/**
 * ScrollAnimation component that animates children when they enter the viewport.
 * Uses motion/react for smooth spring-based animations.
 * Automatically disables animations on mobile devices and when user prefers reduced motion.
 */
export const ScrollAnimation = ({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.5,
  margin = '-10%',
  once = true,
}: ScrollAnimationProps) => {
  const ref = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  const isInView = useInView(ref, {
    once,

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    margin: margin as any,
  });

  useEffect(() => {
    /**
     * Check if animations should be disabled:
     * 1. User prefers reduced motion
     * 2. Device is mobile (screen width < 768px)
     */
    const checkShouldAnimate = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.innerWidth < 768;
      setShouldAnimate(!prefersReducedMotion && !isMobile);
    };

    // Check on mount
    checkShouldAnimate();

    // Check on resize
    window.addEventListener('resize', checkShouldAnimate);
    
    // Check on media query change
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkShouldAnimate);

    return () => {
      window.removeEventListener('resize', checkShouldAnimate);
      mediaQuery.removeEventListener('change', checkShouldAnimate);
    };
  }, []);

  const springConfig = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
    mass: 1,
  };

  // If animations are disabled, render without motion
  if (!shouldAnimate) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={animationVariants[variant]}
      transition={{
        ...springConfig,
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};

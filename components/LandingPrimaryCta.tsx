"use client";
import clsx from 'clsx';
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { VideoPlayer } from './VideoPlayer';
import Image from 'next/image';
import { GlowBg } from './glow-bg';

/**
 * A simple CSS mask component that fades content top and bottom to transparent
 */
export const FadeMask = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    fadeHeight?: string;
  }
>(({ children, className, fadeHeight = '3rem' }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('overflow-hidden', className)}
      style={{
        maskImage: `linear-gradient(to bottom, transparent 0%, black ${fadeHeight}, black calc(100% - ${fadeHeight}), transparent 100%)`,
        WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black ${fadeHeight}, black calc(100% - ${fadeHeight}), transparent 100%)`,
      }}
    >
      {children}
    </div>
  );
});

FadeMask.displayName = 'FadeMask';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      mass: 1,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
      mass: 1,
      delay: 0.3,
    },
  },
};

const LandingPrimaryCtaContent = ({
  className,
  childrenClassName,
  textPosition = 'left',
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  children,
}: {
  className?: string;
  childrenClassName?: string;
  textPosition?: 'center' | 'left';
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      className={clsx(
        'flex flex-col gap-4',
        textPosition === 'center'
          ? 'items-center text-center'
          : 'justify-center',
        className,
      )}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {leadingComponent && (
        <motion.div variants={itemVariants}>{leadingComponent}</motion.div>
      )}

      {titleComponent ? (
        <motion.div variants={itemVariants}>{titleComponent}</motion.div>
      ) : (
        title && (
          <motion.h1
            className="text-2xl md:text-3xl lg:text-5xl leading-tight font-semibold md:max-w-2xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
        )
      )}

      {descriptionComponent ? (
        <motion.div variants={itemVariants}>{descriptionComponent}</motion.div>
      ) : (
        description && (
          <motion.p
            className="md:text-lg md:max-w-xl"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        )
      )}

      {children && (
        <motion.div
          className={clsx(
            'flex flex-wrap gap-4 mt-2',
            textPosition === 'center' ? 'justify-center' : 'justify-start',
            childrenClassName,
          )}
          variants={itemVariants}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title, description and an image.
 * Optionally, it can have actions (children), leading components and a background glow.
 */
export const LandingPrimaryImageCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'left',
  imageSrc,
  imageAlt = '',
  imagePosition = 'right',
  imagePerspective = 'none',
  imageShadow = 'hard',
  minHeight = 350,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right' | 'center';
  imagePerspective?:
  | 'none'
  | 'left'
  | 'right'
  | 'bottom'
  | 'bottom-lg'
  | 'paper';
  imageShadow?: 'none' | 'soft' | 'hard';
  minHeight?: number;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow || imagePerspective !== 'none'
          ? 'relative overflow-hidden'
          : '',
        imagePerspective === 'paper' ? 'md:pb-24' : '',
        className,
      )}
    >
      {effectComponent ? (
        <FadeMask
          className={clsx(
            'absolute inset-0 h-full w-full pointer-events-none opacity-50',
            effectClassName,
          )}
          fadeHeight="4rem"
          aria-hidden="true"
        >
          {effectComponent}
        </FadeMask>
      ) : null}

      {imageSrc && withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
              imagePosition === 'center' ? 'top-5' : ' -top-1/3',
              imagePerspective === 'paper' ? 'opacity-70' : 'opacity-100',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 gap-8 relative',
          imagePosition === 'center'
            ? 'flex flex-col container-narrow'
            : 'grid lg:grid-cols-2 max-w-full container-wide items-center',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
        style={{
          minHeight,
        }}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            'relative z-10',
            imagePosition === 'left' && 'lg:col-start-2 lg:row-start-1',
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>

        {imageSrc ? (
          <>
            {imagePosition === 'center' ? (
              <motion.section
                className={clsx('w-full mt-6 md:mt-8')}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <Image
                  className={clsx(
                    'w-full rounded-md overflow-hidden',
                    imageShadow === 'soft' && 'shadow-md',
                    imageShadow === 'hard' && 'hard-shadow',
                  )}
                  src={imageSrc}
                  alt={imageAlt}
                  width={1000}
                  height={1000}
                />
              </motion.section>
            ) : null}

            {imagePosition === 'left' || imagePosition === 'right' ? (
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <Image
                  className={clsx(
                    'w-full rounded-md relative z-10',
                    imageShadow === 'soft' && 'shadow-md',
                    imageShadow === 'hard' && 'hard-shadow',
                    imagePerspective === 'left' && 'lg:perspective-left',
                    imagePerspective === 'right' && 'lg:perspective-right',
                    imagePerspective === 'bottom' && 'lg:perspective-bottom',
                    imagePerspective === 'bottom-lg' &&
                    'lg:perspective-bottom-lg',
                    imagePerspective === 'paper' &&
                    'lg:ml-[7%] lg:perspective-paper',
                    imagePerspective === 'none' ? 'my-4' : 'my-8',
                  )}
                  alt={imageAlt}
                  src={imageSrc}
                  width={1000}
                  height={1000}
                />
              </motion.div>
            ) : null}
          </>
        ) : null}
      </div>

      {footerComponent}
    </section>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title, description and a video.
 * Optionally, it can have actions (children), leading components and a background glow.
 */
export const LandingPrimaryVideoCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'left',
  videoSrc,
  videoPoster,
  videoPosition = 'right',
  videoMaxWidth = 'none',
  videoShadow = 'hard',
  muted = true,
  autoPlay = false,
  controls = false,
  loop = false,
  minHeight = 350,
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  videoSrc?: string;
  videoPoster?: string;
  videoPosition?: 'left' | 'right' | 'center';
  videoMaxWidth?: string;
  videoShadow?: 'none' | 'soft' | 'hard';
  muted?: boolean;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  minHeight?: number;
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        withBackgroundGlow ? 'relative overflow-hidden' : '',
        className,
      )}
    >
      {effectComponent ? (
        <FadeMask
          className={clsx(
            'absolute inset-0 h-full w-full pointer-events-none opacity-50',
            effectClassName,
          )}
          fadeHeight="4rem"
          aria-hidden="true"
        >
          {effectComponent}
        </FadeMask>
      ) : null}

      <div
        className={clsx(
          'w-fit p-6 flex flex-col gap-8 relative z-10',
          videoPosition === 'center'
            ? 'container-narrow'
            : 'max-w-full container-wide grid lg:grid-cols-2 items-center',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
        style={{
          minHeight,
        }}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            'relative z-10',
            videoPosition === 'left' && 'lg:col-start-2 lg:row-start-1',
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>

        {videoSrc ? (
          <>
            {withBackgroundGlow ? (
              <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
                <GlowBg
                  className={clsx(
                    'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
                    videoPosition === 'center' ? 'top-5' : ' -top-1/3',
                  )}
                  variant={backgroundGlowVariant}
                />
              </div>
            ) : null}

            {videoPosition === 'center' ? (
              <motion.section
                className={clsx('w-full mt-6 md:mt-8')}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <VideoPlayer
                  className={clsx(
                    'w-full rounded-md overflow-hidden',
                    videoShadow === 'soft' && 'shadow-md',
                    videoShadow === 'hard' && 'hard-shadow',
                  )}
                  poster={videoPoster}
                  src={videoSrc}
                  autoPlay={autoPlay}
                  controls={controls}
                  loop={loop}
                  muted={muted}
                  maxWidth={videoMaxWidth}
                  variant={variant}
                />
              </motion.section>
            ) : null}

            {videoPosition === 'left' || videoPosition === 'right' ? (
              <motion.div
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
              >
                <VideoPlayer
                  className={clsx(
                    'w-full rounded-md overflow-hidden',
                    videoShadow === 'soft' && 'shadow-md',
                    videoShadow === 'hard' && 'hard-shadow',
                  )}
                  poster={videoPoster}
                  src={videoSrc}
                  autoPlay={autoPlay}
                  controls={controls}
                  loop={loop}
                  muted={muted}
                  maxWidth={videoMaxWidth}
                  variant={variant}
                />
              </motion.div>
            ) : null}
          </>
        ) : null}
      </div>

      {footerComponent}
    </section>
  );
};

/**
 * A component meant to be used in the landing page as the primary Call to Action section.
 *
 * A section that shows a title & description.
 * Optionally, it can have actions (children) and a background.
 */
export const LandingPrimaryTextCtaSection = ({
  children,
  className,
  innerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  leadingComponent,
  footerComponent,
  textPosition = 'center',
  withBackground = false,
  withBackgroundGlow = false,
  variant = 'primary',
  backgroundGlowVariant = 'primary',
  effectComponent,
  effectClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  innerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  leadingComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
  textPosition?: 'center' | 'left';
  withBackground?: boolean;
  withBackgroundGlow?: boolean;
  variant?: 'primary' | 'secondary';
  backgroundGlowVariant?: 'primary' | 'secondary';
  effectComponent?: React.ReactNode;
  effectClassName?: string;
}) => {
  return (
    <section
      className={clsx(
        'relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16',
        withBackground && variant === 'primary'
          ? 'bg-primary-100/20 dark:bg-primary-900/10'
          : '',
        withBackground && variant === 'secondary'
          ? 'bg-secondary-100/20 dark:bg-secondary-900/10'
          : '',
        className,
      )}
    >
      {effectComponent ? (
        <FadeMask
          className={clsx(
            'absolute inset-0 h-full w-full pointer-events-none opacity-50',
            effectClassName,
          )}
          fadeHeight="4rem"
          aria-hidden="true"
        >
          {effectComponent}
        </FadeMask>
      ) : null}

      {withBackgroundGlow ? (
        <div className="hidden lg:flex justify-center w-full h-full absolute pointer-events-none">
          <GlowBg
            className={clsx(
              'w-full lg:w-1/2 h-auto z-0 dark:opacity-50',
              textPosition === 'center' ? 'top-5' : ' -top-1/3',
            )}
            variant={backgroundGlowVariant}
          />
        </div>
      ) : null}

      <div
        className={clsx(
          'w-full p-6 flex flex-col gap-8 relative z-10',
          textPosition === 'center'
            ? 'container-narrow'
            : 'max-w-full container-wide',
          textPosition === 'center' ? 'items-center' : 'items-start',
          innerClassName,
        )}
      >
        <LandingPrimaryCtaContent
          className={clsx(
            textPosition === 'center' ? 'items-center' : 'items-start',
          )}
          childrenClassName={clsx(
            textPosition === 'center' ? 'items-center' : '',
          )}
          title={title}
          titleComponent={titleComponent}
          description={description}
          descriptionComponent={descriptionComponent}
          textPosition={textPosition}
          leadingComponent={leadingComponent}
        >
          {children}
        </LandingPrimaryCtaContent>
      </div>

      {footerComponent}
    </section>
  );
};

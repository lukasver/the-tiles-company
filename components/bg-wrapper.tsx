import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

function BackgroundWrapper({
  children,
  className,
  url,
  withGradient = true,
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
  withGradient?: boolean;
}) {

  return (
    <div className={cn('relative', withGradient && 'after:content-[""] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-background', className)}>
      {children}
      {!url && <div className='absolute inset-0 bg-[url(/assets/bg2-ov.png)] bg-cover bg-center -z-50!' />}
      {url && <Image
        src={url}
        alt="bg"
        width={1440}
        height={1024}
        className={cn("w-full h-full object-cover absolute z-[-1] inset-0",

        )}
        priority
      />}
    </div>
  );
}

export default BackgroundWrapper;

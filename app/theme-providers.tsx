'use client';

import { siteConfig } from '@/lib/config';
import { ThemeProvider } from 'next-themes';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={siteConfig.theme}
      forcedTheme='dark'
    // enableSystem
    >
      {children}
    </ThemeProvider>
  );
}

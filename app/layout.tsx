import type { Metadata, Viewport } from "next";
import { Inter, Syne } from 'next/font/google';
import "./globals.css";
import "./custom.css";
import { siteConfig } from '@/lib/config';
import { ThemeProviders } from './theme-providers';

const displayFont = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-sans',
});

const baseFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});




export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: './',
    siteName: siteConfig.title,
    images: [siteConfig.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteConfig.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteConfig.title,
    card: 'summary_large_image',
    images: [siteConfig.socialBanner],
  },
};

export const viewport: Viewport = {
  themeColor: '#000',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${baseFont.variable} ${displayFont.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="flex flex-col bg-white text-black antialiased dark:bg-gray-950 dark:text-white min-h-screen">
        <ThemeProviders

        >
          <div className="w-full flex flex-col justify-between items-center font-sans">
            {/* <SearchProvider> */}
            <main className="w-full flex flex-col items-center mb-auto">
              {children}
            </main>
            {/* </SearchProvider> */}
          </div>
        </ThemeProviders>
      </body>
    </html >
  );
}


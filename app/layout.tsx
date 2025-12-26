import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./custom.css";
import { siteConfig } from '@/lib/config';
import { ThemeProviders } from './theme-providers';
import { fontClash, fontTeachers } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    'Mahjong',
    'online Mahjong',
    'Mahjong Stars',
    'Web3 gaming',
    'blockchain gaming',
    'AI Mahjong',
    'Mahjong tournaments',
    'TILE token',
    'The Tiles Company',
    'browser-based Mahjong',
    'digital Mahjong',
    'social Mahjong',
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.siteUrl,
    },
  ],
  creator: siteConfig.author,
  publisher: siteConfig.businessName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,
    locale: siteConfig.locale,
    type: 'website',
  },
  alternates: {
    canonical: siteConfig.siteUrl,
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
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@MahjongStars',
    site: '@MahjongStars',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  category: 'Gaming',
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
      className={`${fontTeachers.variable} ${fontClash.variable} scroll-smooth antialiased`}
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


import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';
import { LightRays } from '@/components/ui/light-rays';
import { Hero } from '@/components/hero';
import { LandingAboutSection } from '@/components/landing-about-section';
import { LandingFeaturesSection } from '@/components/landing-features-section';
import { LandingTeamSection } from '@/components/landing-team-section';
import { LandingWeb3Section } from '@/components/landing-web3-section';
import { LandingCtaSection } from '@/components/landing-cta-section';
import { LandingFaqSection } from '@/components/landing-faq-section';
import { applyUTM } from '@/lib/utm';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';
import { StructuredData } from '@/components/structured-data';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Mahjong Stars reimagines online Mahjong with Web3 technology, AI-powered learning, and a player-first experience. Play traditional Mahjong in a modern, browser-based platform.',
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
  openGraph: {
    title: `${siteConfig.title} - A New Generation of Online Mahjong`,
    description: 'Mahjong Stars reimagines online Mahjong with Web3 technology, AI-powered learning, and a player-first experience.',
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.title} - A New Generation of Online Mahjong`,
    description: 'Mahjong Stars reimagines online Mahjong with Web3 technology, AI-powered learning, and a player-first experience.',
    creator: '@MahjongStars',
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  category: 'Gaming',
};

export default async function Home() {

  return (
    <div className="grid grid-rows-[auto_minmax(100vh,1fr)_auto] w-full items-center fancy-overlay">


      <div className="mx-auto w-full container">
        <Header className="mb-0 lg:mb-0" />
      </div>
      <section className="relative size-full grid place-items-center bg-radial from-accent/50 from-15% via-40% to-65% via-primary to-background">
        <InteractiveGridPattern
          className={cn("",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
          width={30}
          height={30}
          squares={[200, 200]}
          squaresClassName="hover:fill-secondary"
        />
        <LightRays
          color="#4a0000"
          speed={3}

        />

        <Hero />

      </section>
      {/* <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {ids.map(id => <Tweet key={id} id={id.toString()} />)}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </section> */}

      <LandingAboutSection />
      <LandingFeaturesSection />
      <LandingTeamSection />
      <LandingWeb3Section href={applyUTM("/docs", {
        source: "thetilescompany.io",
        medium: "landing_page",
        campaign: "web3_features",
        content: "web3_section",
      })} />
      <LandingCtaSection href={applyUTM("https://www.mahjongstars.com/#newsletter", {
        source: "thetilescompany.io",
        medium: "landing_page",
        campaign: "newsletter_signup",
        content: "hero",
      })} />
      <LandingFaqSection />

      <Footer />
      <StructuredData />
    </div >
  );
}

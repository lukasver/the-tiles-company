import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
import BackgroundWrapper from '@/components/bg-wrapper';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Home',
  description: 'The Tiles Company\'s Mahjong Stars reimagines online Mahjong with Web3 technology, AI-powered learning, and a player-first experience. Play traditional Mahjong in a modern, browser-based platform.',
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
    description: 'The Tiles Company\'s Mahjong Stars reimagines online Mahjong with Web3 technology, AI-powered learning, and a player-first experience.',
    url: siteConfig.siteUrl,
    siteName: siteConfig.title,

    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.title} - A New Generation of Online Mahjong`,
    description: 'The Tiles Company\'s Mahjong Stars reimagines online Mahjong with Web3 technology, AI-powered learning, and a player-first experience.',
    creator: '@MahjongStars',
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  category: 'Gaming',
};

export default async function Home() {

  return (
    <div className="grid grid-rows-auto w-full items-center fancy-overlay">


      <BackgroundWrapper
        url="/assets/bg.webp"
      >
        <div className="mx-auto w-full container">
          <Header className="mb-0 lg:mb-0" />
        </div>
        <section className="relative h-screen w-screen grid place-items-center bg-transparent z-9">
          {/* bg-radial from-accent/50 from-15% via-40% to-65% via-primary to-background"> */}
          {/* <InteractiveGridPattern
          className={cn("",
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
          width={30}
          height={30}
          squares={[200, 200]}
          squaresClassName="hover:fill-secondary"
        /> */}


          <Hero />

        </section>
      </BackgroundWrapper>

      {/* <section className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {ids.map(id => <Tweet key={id} id={id.toString()} />)}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
      </section> */}
      <LandingAboutSection />
      <LandingFeaturesSection
        className={cn("relative bg-gradient-to-br from-black/30 via-primary/90 to-black/30",
          `before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-32 before:bg-gradient-to-b before:from-[#060912] before:to-50% before:to-transparent before:pointer-events-none before:z-10
         after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-32 after:bg-gradient-to-t after:from-[#060912] after:to-50% fter:to-transparent after:pointer-events-none after:z-10`
        )}
      />
      <LandingTeamSection
        title="Experienced Founding Team"
      />
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

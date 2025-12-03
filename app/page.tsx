import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LandingFaqCollapsibleSection } from '@/components/LandingFaqCollapsible';
import { cn } from '@/lib/utils';
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';
import { LightRays } from '@/components/ui/light-rays';
import { Hero } from '@/components/hero';


// const ids = [
//   '1995889255382753564',
//   '1962893383040442509',
//   '1957789584999305566',
//   '1960374741157527612',
//   '1994059961492492343',
//   '1965778954431746104',
// ]

// const Tweet = async ({ id }: { id: string }) => {
//   try {
//     const tweet = await getTweet(id)
//     return tweet ? <EmbeddedTweet tweet={tweet} /> : null
//   } catch (error) {
//     console.error(error)
//     return null
//   }
// }

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



      <LandingFaqCollapsibleSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about The Tiles Company and our Mahjong Star offerings."
        faqItems={[
          {
            question: 'What is The Tiles Company?',
            answer:
              'The Tiles Company is the Web3 infrastructure studio behind MJS, building the platform, AI systems, and tokenized economy that power the game\'s next evolution in social mahjong.',
          },
          {
            question: 'What role does the $TILE token play?',
            answer:
              '$TILE is the core utility token that underpins MJS\' Web3 economy, enabling rewards, premium gameplay features, and long-term value alignment between players, partners, and the platform.',
          },
          {
            question: 'How does The Tiles Company use AI?',
            answer:
              'The Tiles Company integrates hybrid AI so players can train avatars on their own strategies, keep games liquid 24/7, and participate in matches even when they are offline. It also allows for more efficient and accurate game analysis and decision-making.',
          },
          {
            question: 'Why is The Tiles Company focused on Web3?',
            answer:
              'By leveraging Web3 rails, The Tiles Company can offer secure wallet integration, on-chain monetization, and transparent tokenomics that turn traditional mahjong engagement into a scalable, global digital gaming economy.',
          },
        ]}
        withBackground
      />

      <Footer />
    </div >
  );
}

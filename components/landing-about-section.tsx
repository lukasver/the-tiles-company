/**
 * Landing page about section component.
 * Displays a centered title and description about the product.
 */
export const LandingAboutSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground text-balance">
          A Modern Home for a Timeless Game
        </h2>
        <p className="text-lg text-muted-foreground text-center leading-relaxed">
          Mahjong Stars reimagines online Mahjong by focusing on what players actually care about: fair play, smooth
          gameplay, and meaningful competition. Many existing platforms feel outdated, fragmented, or overly complex.
          Mahjong Stars takes a different approach: clean design, transparent mechanics, and a player-first
          experience.
        </p>
      </div>
    </section>
  );
};


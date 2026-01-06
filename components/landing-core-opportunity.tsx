import { Brain, Globe, Coins, TrendingUp } from 'lucide-react'

export const LandingCoreOpportunitySection = () => {
  return (<section className="py-20 px-4 bg-muted/30">
    <div className="container mx-auto max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">Core Opportunity</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Global Market</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A globally recognised game with hundreds of millions of players worldwide
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
            <Brain className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">AI-Driven Systems</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Intelligent systems that enhance retention and engagement
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
            <Coins className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Web3 Economy</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A Web3-enabled economy with structured token emission
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground">Scalable Growth</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Infrastructure designed for long-term, sustainable growth
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

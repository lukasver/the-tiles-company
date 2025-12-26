import { Card, CardContent } from '@/components/ui/card';
import { faqItems } from '@/lib/faq';


/**
 * Landing page FAQ section component.
 * Displays frequently asked questions using Card components.
 */
export const LandingFaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


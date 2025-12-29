"use client";

import { Card, CardContent } from '@/components/ui/card';
import { faqItems } from '@/lib/faq';
import { ScrollAnimation } from '@/components/ui/scroll-animation';


/**
 * Landing page FAQ section component.
 * Displays frequently asked questions using Card components.
 */
export const LandingFaqSection = () => {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <ScrollAnimation variant="fadeUp" delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Frequently Asked Questions
          </h2>
        </ScrollAnimation>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <ScrollAnimation
              key={index}
              variant="fadeUp"
              delay={0.1 + index * 0.1}
            >
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};


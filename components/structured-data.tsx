import { siteConfig } from '@/lib/config';
import { faqItems } from '@/lib/faq';


/**
 * Generates JSON-LD structured data for SEO.
 * Includes Organization, WebSite, and FAQPage schemas.
 */
export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.businessName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/icon.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [
      siteConfig.twitter,
      ...(siteConfig.github ? [siteConfig.github] : []),
      ...(siteConfig.linkedin ? [siteConfig.linkedin] : []),
      ...(siteConfig.youtube ? [siteConfig.youtube] : []),
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'Customer Service',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.businessName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mahjong Stars',
    applicationCategory: 'Game',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'A modern, browser-based online Mahjong platform that combines traditional gameplay with AI-powered learning tools and Web3 technology.',
    url: siteConfig.siteUrl,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.businessName,
    },
  };

  const structuredData = [
    organizationSchema,
    websiteSchema,
    faqSchema,
    softwareApplicationSchema,
  ];

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}


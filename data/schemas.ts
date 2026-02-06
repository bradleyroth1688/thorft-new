// Centralized Schema.org data builders

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "THOR Financial Technologies",
    alternateName: "THOR Financial Technologies, LLC",
    url: "https://thorft.com",
    logo: "https://thorft.com/images/thor-logo-white.png",
    description:
      "THOR Financial Technologies is a registered investment adviser providing technology-driven, systematic model portfolios and actively managed ETFs for registered investment advisors. The firm uses proprietary signal processing technology to manage risk across all investment strategies.",
    foundingDate: "2009",
    founder: personSchema(),
    address: {
      "@type": "PostalAddress",
      streetAddress: "327 W Pittsburgh St",
      addressLocality: "Greensburg",
      addressRegion: "PA",
      postalCode: "15601",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "welcome@thoranalytics.com",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: [
      "https://www.linkedin.com/in/brad-roth-8a4a8619a/",
      "https://www.youtube.com/@BRoth_THOR",
      "https://x.com/Bradr_thor",
      "https://thorfunds.com",
    ],
    areaServed: "US",
    knowsAbout: [
      "systematic investing",
      "model portfolios",
      "signal processing",
      "risk management",
      "ETFs",
      "adaptive investing",
      "RIA services",
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 1 },
    slogan: "Technology-Driven Investment Solutions for Advisors",
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    name: "Brad Roth",
    jobTitle: "Founder & Chief Investment Officer",
    worksFor: {
      "@type": "Organization",
      name: "THOR Financial Technologies",
    },
    url: "https://thorft.com/team/",
    sameAs: [
      "https://www.linkedin.com/in/brad-roth-8a4a8619a/",
      "https://www.youtube.com/@BRoth_THOR",
      "https://x.com/Bradr_thor",
    ],
    knowsAbout: [
      "quantitative finance",
      "signal processing",
      "systematic investing",
      "risk management",
      "ETFs",
    ],
    description:
      "Brad Roth is the Founder and Chief Investment Officer of THOR Financial Technologies. With over two decades of experience in quantitative finance, he built THOR's proprietary signal processing methodology for detecting market regime changes. He hosts the Behind the Ticker podcast (94+ episodes) and authored 'Little Reasons, Big Consequences.'",
  };
}

export function podcastSeriesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastSeries",
    name: "Behind the Ticker",
    description:
      "ETF industry conversations with the people building the funds. Host Brad Roth talks strategy, structure, and the stories behind the ticker.",
    url: "https://thorft.com/podcast/",
    author: personSchema(),
    webFeed: [
      "https://open.spotify.com/show/1TJpgOAqctOCnjij9KTxNS",
      "https://podcasts.apple.com/us/podcast/behind-the-ticker/id1681873507",
    ],
    image: "https://thorft.com/images/thor-logo-white.png",
    numberOfEpisodes: 94,
  };
}

export function podcastEpisodeSchema(ep: {
  guest: string;
  title: string;
  date: string;
  duration: string;
  youtubeId: string;
  slug: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: `${ep.guest} — Behind the Ticker`,
    description: ep.description.replace(/<[^>]*>/g, "").substring(0, 300),
    url: `https://thorft.com/podcast/${ep.slug}/`,
    datePublished: ep.date,
    duration: ep.duration,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "Behind the Ticker",
      url: "https://thorft.com/podcast/",
    },
    associatedMedia: {
      "@type": "VideoObject",
      name: ep.title,
      embedUrl: `https://www.youtube.com/embed/${ep.youtubeId}`,
      uploadDate: ep.date,
    },
  };
}

export function bookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Little Reasons, Big Consequences: Why Your Investment Returns Stink",
    author: personSchema(),
    url: "https://thorft.com/book/",
    description:
      "A 12-chapter exploration of the behavioral mistakes that destroy investor wealth. The core thesis: investors underperform due to behavior, not bad strategies. By Brad Roth, Founder & CIO of THOR Financial Technologies.",
    genre: "Business & Finance",
    numberOfPages: 12,
    inLanguage: "en",
  };
}

export function modelProductSchema(model: {
  name: string;
  slug: string;
  tagline: string;
  description: string[];
  benchmark: string;
  minimum: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: `THOR ${model.name} Model Portfolio`,
    description: model.description[0],
    url: `https://thorft.com/models/${model.slug}/`,
    provider: {
      "@type": "FinancialService",
      name: "THOR Financial Technologies",
      url: "https://thorft.com",
    },
    category: model.category,
    offers: {
      "@type": "Offer",
      description: `Minimum investment: ${model.minimum}. Management fee: 0.20%.`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://thorft.com${item.url}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    description: opts.description,
    url: `https://thorft.com${opts.url}`,
    isPartOf: {
      "@type": "WebSite",
      name: "THOR Financial Technologies",
      url: "https://thorft.com",
    },
    publisher: {
      "@type": "Organization",
      name: "THOR Financial Technologies",
    },
  };
}

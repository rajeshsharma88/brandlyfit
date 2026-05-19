export interface ServiceStep {
  num: string
  title: string
  body: string
}

export interface ServiceResult {
  value: string
  label: string
  caption: string
}

export interface StackTool {
  name: string
  role: string
}

export interface ServiceFull {
  index: string
  slug: string
  name: string
  shortDesc: string
  tagline: string
  // Hero
  heroLine: string       // supporting line under the service name
  heroAccent: string     // the one italic word in heroLine
  // SEO
  metaTitle: string
  metaDesc: string
  // Content
  whatItIs: string
  howWeRunIt: ServiceStep[]
  aiEdge: {
    headline: string
    body: string
    bullets: string[]
  }
  stack: StackTool[]
  results: ServiceResult[]
}

export const SERVICES: ServiceFull[] = [
  {
    index: '01',
    slug: 'meta-ads',
    name: 'Meta Ads',
    tagline: 'Facebook + Instagram performance',
    shortDesc: 'Performance creative and media in one shop. We ship 50 ad variants a month, not 5.',
    heroLine: 'Fifty creatives a month. Not five.',
    heroAccent: 'Not five.',
    metaTitle: 'Meta Ads — Brandlyfit',
    metaDesc: 'AI-native Meta Ads management for D2C brands. We ship 50 creative variants a month, run the media, and cut CAC — all in one engagement.',
    whatItIs:
      'Meta Ads is still the single highest-leverage paid channel for D2C brands in India. The brands that win aren\'t spending more — they\'re testing more. We run Meta Ads as a creative-first discipline: build the assets fast with AI, put them in the right structure, and let the algorithm do its job with real signal. Most agencies run 4–6 creatives. We run 50.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Creative audit',
        body: 'Week one: we review everything your account has ever run. We identify what worked, what failed, and why. Your next 30 days of creative come directly from these findings, not from guesswork.',
      },
      {
        num: '02',
        title: 'Account restructure',
        body: 'We rebuild your campaign structure around the Meta algorithm\'s preferences — broad targeting, consolidated budgets, clear funnel stages. No legacy spaghetti.',
      },
      {
        num: '03',
        title: 'AI creative engine',
        body: 'We set up a production pipeline using AI tools for copy, image variants, and video cuts. You get 40–60 new ad variants per month without adding a single designer.',
      },
      {
        num: '04',
        title: 'Optimization loop',
        body: 'Daily performance monitoring, weekly creative refresh, monthly strategy review. We kill losers fast and scale winners hard. The loop compounds.',
      },
    ],
    aiEdge: {
      headline: 'Why 50 creatives changes everything.',
      body: 'The Meta algorithm rewards accounts that feed it signal. Signal comes from creative variety and volume. Most agencies can\'t produce 50 creatives because they\'re constrained by human production speed. We\'re not.',
      bullets: [
        'AI generates 40–60 copy and image variants per week from your brief',
        'Automatic A/B test structure so every variant gets a fair shot',
        'Pattern recognition: we identify winning hooks, formats, and CTAs across your account history',
        'Video cuts at 1x, 4x, and 10x speed from a single recorded asset',
        'Dynamic product ads with AI-written overlay copy',
      ],
    },
    stack: [
      { name: 'Meta Ads Manager', role: 'Campaign management' },
      { name: 'Claude / ChatGPT', role: 'Ad copy generation' },
      { name: 'Midjourney / Flair', role: 'Image creative' },
      { name: 'CapCut / Descript', role: 'Video editing' },
      { name: 'Northbeam', role: 'Attribution' },
      { name: 'Looker Studio', role: 'Reporting' },
    ],
    results: [
      { value: '38%', label: 'Average CAC reduction', caption: 'across active Meta accounts' },
      { value: '3.2x', label: 'Average ROAS lift', caption: 'vs. baseline at engagement start' },
      { value: '50+', label: 'Creatives / month', caption: 'per client, no extra headcount' },
    ],
  },

  {
    index: '02',
    slug: 'google-ads',
    name: 'Google Ads',
    tagline: 'Search, Shopping, YouTube',
    shortDesc: 'Search, Shopping, and Performance Max — tuned by humans, scaled by AI.',
    heroLine: 'Search that compounds.',
    heroAccent: 'compounds.',
    metaTitle: 'Google Ads — Brandlyfit',
    metaDesc: 'Google Ads for D2C brands — Search, Shopping, Performance Max, and YouTube. We build the structure, AI scales the output.',
    whatItIs:
      'Google Ads is intent-driven traffic — the person already wants what you sell. The opportunity is in capturing that intent efficiently, at every stage of the funnel. We run Search for branded and non-branded terms, Shopping for product discovery, Performance Max to let Google\'s AI find customers you didn\'t know existed, and YouTube for awareness that actually measures.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Keyword architecture',
        body: 'We map every high-intent query your customers use and build a keyword architecture that captures demand without cannibalizing itself. No broad-match spaghetti.',
      },
      {
        num: '02',
        title: 'Shopping feed optimization',
        body: 'Your Merchant Center feed is your Shopping creative. We optimize every field — titles, descriptions, attributes — to improve Quality Score and click-through rate.',
      },
      {
        num: '03',
        title: 'Performance Max build',
        body: 'We build asset groups with AI-generated copy and image variants, then let Performance Max find the highest-value conversions across Search, Shopping, Display, and YouTube simultaneously.',
      },
      {
        num: '04',
        title: 'Bidding and measurement',
        body: 'We set up proper conversion tracking, choose the right bidding strategy for your margin structure, and create reporting that shows POAS (profit on ad spend), not just ROAS.',
      },
    ],
    aiEdge: {
      headline: 'AI writes the ads. Humans write the strategy.',
      body: 'Google\'s own AI (Smart Bidding, Performance Max) is powerful but needs signal. Our job is to feed it the right inputs and guardrails so it optimizes toward actual business outcomes.',
      bullets: [
        'AI-generated Responsive Search Ad variants (up to 15 headlines, 4 descriptions)',
        'Automated shopping title optimization across 1000+ SKUs',
        'Performance Max asset generation: copy + image + video in one session',
        'AI-powered negative keyword lists refreshed weekly',
        'Automated budget reallocation across campaigns based on real-time POAS',
      ],
    },
    stack: [
      { name: 'Google Ads', role: 'Campaign management' },
      { name: 'Google Merchant Center', role: 'Shopping feed' },
      { name: 'Google Analytics 4', role: 'Measurement' },
      { name: 'Google Search Console', role: 'Search insights' },
      { name: 'Claude / ChatGPT', role: 'Ad copy generation' },
      { name: 'Looker Studio', role: 'Reporting' },
    ],
    results: [
      { value: '2.8x', label: 'Average POAS lift', caption: 'profit on ad spend, not revenue ROAS' },
      { value: '41%', label: 'CPC reduction', caption: 'through feed and QS optimization' },
      { value: '60d', label: 'To full system build', caption: 'from audit to optimized structure' },
    ],
  },

  {
    index: '03',
    slug: 'ecommerce-ads',
    name: 'E-commerce Ads',
    tagline: 'Amazon · Flipkart · Myntra · Nykaa',
    shortDesc: 'Win on Amazon, Flipkart, Myntra and Nykaa. Visibility, velocity, repeat.',
    heroLine: 'Win the shelf. Own the algorithm.',
    heroAccent: 'Own',
    metaTitle: 'E-commerce Ads — Brandlyfit',
    metaDesc: 'E-commerce advertising on Amazon, Flipkart, Myntra, and Nykaa. Sponsored products, brand stores, and platform-native growth systems.',
    whatItIs:
      'Marketplace advertising is a compounding game. A better ad rank drives more sales, which drives more organic rank, which reduces your ad spend requirements over time. We run Sponsored Products, Sponsored Brands, and Sponsored Display across all four major Indian marketplaces — and we treat listing optimization as part of the ad strategy, not a separate workstream.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Listing and content audit',
        body: 'We review every product listing for title relevance, keyword density, image quality, and A+ content. Ads can\'t save a bad listing.',
      },
      {
        num: '02',
        title: 'Keyword and category strategy',
        body: 'We map sponsored placements to the exact keyword sets that your category converts on, and build separate strategies for branded vs. conquesting spend.',
      },
      {
        num: '03',
        title: 'Campaign architecture',
        body: 'Sponsored Products → Sponsored Brands → Sponsored Display in a funnel. Auto campaigns for discovery, exact match for scale, ASIN targeting for conquesting.',
      },
      {
        num: '04',
        title: 'Rank and review velocity',
        body: 'We coordinate ad spend with stock, promotions, and review collection to maximize organic rank lift from paid investment. Ads and organic compound together.',
      },
    ],
    aiEdge: {
      headline: 'AI-optimized listings at scale.',
      body: 'Running 4 platforms simultaneously means thousands of listing elements to optimize. We use AI to generate and test listing content at a velocity human writers can\'t match.',
      bullets: [
        'AI-generated product titles tested across keyword variants',
        'Automated bid adjustments across platforms based on time-of-day and stock levels',
        'Bulk negative keyword management across 4 platforms from one workflow',
        'Competitive price-point monitoring with automated budget shift triggers',
        'A+ content generation from product specs in under 2 hours',
      ],
    },
    stack: [
      { name: 'Amazon Ads', role: 'Sponsored campaigns' },
      { name: 'Flipkart Ads', role: 'Sponsored campaigns' },
      { name: 'Myntra Partner Hub', role: 'Ad management' },
      { name: 'Nykaa Ads', role: 'Sponsored campaigns' },
      { name: 'Helium 10', role: 'Keyword research' },
      { name: 'Claude', role: 'Listing content' },
    ],
    results: [
      { value: '2.4x', label: 'Average ROAS', caption: 'across marketplace ad spend' },
      { value: '34%', label: 'Organic rank lift', caption: 'on primary keywords after 90 days' },
      { value: '4', label: 'Platforms managed', caption: 'from one coordinated strategy' },
    ],
  },

  {
    index: '04',
    slug: 'quick-commerce-ads',
    name: 'Quick-commerce',
    tagline: 'Blinkit · Zepto · Instamart · BigBasket Now',
    shortDesc: 'Blinkit, Zepto, Instamart. We make sure you\'re in the basket, not the wishlist.',
    heroLine: 'Be in the basket.',
    heroAccent: 'basket.',
    metaTitle: 'Quick-commerce Ads — Brandlyfit',
    metaDesc: 'Quick-commerce advertising on Blinkit, Zepto, Swiggy Instamart, and BigBasket Now for D2C and FMCG brands.',
    whatItIs:
      'Quick-commerce is the fastest-growing retail channel in urban India. Blinkit, Zepto, Instamart, and BigBasket Now together reach 40+ cities with 10-minute delivery. The brands that win are the ones that show up at the right moment in the right dark store. We handle the ads, the availability monitoring, and the category strategy.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Dark store and availability audit',
        body: 'We map which dark stores carry your SKUs and identify gaps. Ads don\'t work if the inventory isn\'t there. We coordinate with your supply chain team to fill coverage holes before we scale spend.',
      },
      {
        num: '02',
        title: 'SKU prioritization',
        body: 'Not every SKU deserves ad support. We identify which products have the margin, velocity, and availability to justify paid visibility — and build the strategy around those first.',
      },
      {
        num: '03',
        title: 'Platform-native campaigns',
        body: 'Each platform has different ad formats, bidding mechanics, and consumer behavior. We build platform-specific campaigns for Blinkit, Zepto, Instamart, and BigBasket Now — not one generic strategy applied everywhere.',
      },
      {
        num: '04',
        title: 'Availability × ad coordination',
        body: 'We monitor inventory in real time and pause ad spend automatically when availability drops below threshold. No point paying for clicks on out-of-stock items.',
      },
    ],
    aiEdge: {
      headline: 'Real-time availability × automated spend.',
      body: 'Quick-commerce moves faster than any human can monitor. We build automated workflows that sync ad spend to inventory levels across platforms.',
      bullets: [
        'Real-time OOS (out-of-stock) monitoring with automatic campaign pausing',
        'AI-generated promotional creative for platform banners and sponsored slots',
        'Automated bid uplift during peak ordering windows (7–9am, 12–2pm, 7–10pm)',
        'Cross-platform budget reallocation based on daily sell-through rates',
        'Weekly assortment reports identifying coverage gaps by city',
      ],
    },
    stack: [
      { name: 'Blinkit Ads', role: 'Sponsored campaigns' },
      { name: 'Zepto Ads', role: 'Sponsored campaigns' },
      { name: 'Swiggy Instamart', role: 'Ad management' },
      { name: 'BigBasket Now', role: 'Ad management' },
      { name: 'Zapier / Make', role: 'Automation workflows' },
      { name: 'Looker Studio', role: 'Unified reporting' },
    ],
    results: [
      { value: '3.1x', label: 'Average platform ROAS', caption: 'across q-comm campaigns' },
      { value: '68%', label: 'OOS incidents prevented', caption: 'via automated inventory sync' },
      { value: '4', label: 'Platforms unified', caption: 'in one reporting dashboard' },
    ],
  },

  {
    index: '05',
    slug: 'shopify',
    name: 'Shopify',
    tagline: 'Stores, CRO, theme development',
    shortDesc: 'Stores that load in under 2 seconds and convert harder than your last theme.',
    heroLine: 'A store that converts.',
    heroAccent: 'converts.',
    metaTitle: 'Shopify — Brandlyfit',
    metaDesc: 'Shopify store development, CRO, and theme customization for D2C brands. We build stores that load fast and convert hard.',
    whatItIs:
      'Your Shopify store is your owned conversion engine. Every rupee you spend on ads flows through it. A store that converts at 2% instead of 1% doubles the return on your entire media budget without changing a single bid. We build stores from scratch, optimize existing ones, and run ongoing CRO — treating the store as a growth lever, not a cost center.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Conversion audit',
        body: 'We record 50+ Hotjar sessions, run a heuristic audit against CRO best practices, and benchmark your store\'s Core Web Vitals. You get a prioritized fix list ranked by revenue impact.',
      },
      {
        num: '02',
        title: 'Speed and tech optimization',
        body: 'We strip unused apps, lazy-load images, compress assets, and implement proper caching. LCP under 1.8 seconds on mobile is the standard.',
      },
      {
        num: '03',
        title: 'CRO implementation',
        body: 'PDP restructure (hero image, social proof, CTA hierarchy), cart optimization (upsell placement, abandon recovery), checkout flow reduction. One change at a time, measured precisely.',
      },
      {
        num: '04',
        title: 'Ongoing A/B testing',
        body: 'After the foundational fixes, we run structured A/B tests every two weeks. Headline variations, image sequences, price anchoring, urgency mechanics. The store keeps improving.',
      },
    ],
    aiEdge: {
      headline: 'AI-generated copy that actually converts.',
      body: 'Most Shopify copy is written once and forgotten. We use AI to generate and test dozens of product description variants, headline framings, and CTA texts — treating copy as a conversion variable, not a static asset.',
      bullets: [
        'AI-generated PDP copy tested across 5–10 variants per product',
        'Automated post-purchase email sequences personalized by product category',
        'AI-powered size recommendation tool integration (reduces returns)',
        'Dynamic bundle suggestions generated from purchase history patterns',
        'Automated review reply generation that reinforces brand voice',
      ],
    },
    stack: [
      { name: 'Shopify / Shopify Plus', role: 'Platform' },
      { name: 'Figma', role: 'Design' },
      { name: 'Hotjar', role: 'Session recording' },
      { name: 'VWO / Convert', role: 'A/B testing' },
      { name: 'PageSpeed Insights', role: 'Performance' },
      { name: 'Claude', role: 'Copy generation' },
    ],
    results: [
      { value: '1.8s', label: 'Median LCP after optimization', caption: 'mobile on 4G' },
      { value: '+31%', label: 'Conversion rate lift', caption: 'median across CRO engagements' },
      { value: '2wk', label: 'A/B test cadence', caption: 'continuous improvement cycle' },
    ],
  },

  {
    index: '06',
    slug: 'seo',
    name: 'SEO',
    tagline: 'Traditional search engine optimization',
    shortDesc: 'Old-school search, still the highest-margin traffic on the internet.',
    heroLine: 'The highest-margin channel.',
    heroAccent: 'highest-margin',
    metaTitle: 'SEO — Brandlyfit',
    metaDesc: 'SEO for D2C brands — technical audits, keyword strategy, content calendars, and link building. The highest-margin traffic channel on the internet.',
    whatItIs:
      'Organic search traffic costs nothing per click. A page that ranks for a high-intent keyword drives revenue for years with no ongoing spend. Most D2C brands underinvest in SEO because results take 3–6 months to compound. The brands that start now dominate 12 months later. We run technical SEO, content, and links as a single coordinated system — not three separate agencies.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Technical audit',
        body: 'Core Web Vitals, crawlability, indexation, site architecture, internal linking, canonical issues. We fix the foundation before we build on it.',
      },
      {
        num: '02',
        title: 'Keyword strategy',
        body: 'We map your entire market\'s search demand — from high-volume category terms to long-tail buyer-intent queries. Priority is given to terms with purchase intent and realistic ranking probability.',
      },
      {
        num: '03',
        title: 'Content system',
        body: 'We build an AI-assisted content calendar: AI drafts the brief and structure, human editors add brand voice and expertise, and we publish 8–12 pieces per month that actually target real queries.',
      },
      {
        num: '04',
        title: 'Authority building',
        body: 'Targeted link outreach to relevant D2C, beauty, wellness, and commerce publications. We build links that move rankings, not link farms that get your site penalized.',
      },
    ],
    aiEdge: {
      headline: 'Programmatic content at editorial quality.',
      body: 'AI doesn\'t replace the strategic thinking in SEO. It removes the bottleneck in content production, letting us publish more, test more topic clusters, and find ranking opportunities faster.',
      bullets: [
        'AI-generated content briefs from keyword and SERP analysis',
        'Programmatic landing pages for long-tail keyword clusters (100+ pages from one template)',
        'Automated internal linking suggestions as new content is published',
        'AI-assisted meta title and description variants tested for click-through rate',
        'Weekly SERP tracking with automated anomaly alerts',
      ],
    },
    stack: [
      { name: 'Semrush', role: 'Keyword research and tracking' },
      { name: 'Ahrefs', role: 'Backlink analysis' },
      { name: 'Screaming Frog', role: 'Technical audit' },
      { name: 'Google Search Console', role: 'Performance data' },
      { name: 'Claude', role: 'Content generation' },
      { name: 'Surfer SEO', role: 'Content optimization' },
    ],
    results: [
      { value: '4.2x', label: 'Organic traffic growth', caption: 'median at 6-month mark' },
      { value: '12+', label: 'Content pieces / month', caption: 'AI-assisted editorial workflow' },
      { value: '8mo', label: 'Average to page-1 ranking', caption: 'for primary category terms' },
    ],
  },

  {
    index: '07',
    slug: 'aeo',
    name: 'AEO',
    tagline: 'Answer Engine Optimization',
    shortDesc: 'Show up inside Google\'s AI Overviews — the new top-of-page.',
    heroLine: 'The new top-of-page.',
    heroAccent: 'new',
    metaTitle: 'AEO (Answer Engine Optimization) — Brandlyfit',
    metaDesc: 'Answer Engine Optimization for D2C brands. We get your content featured in Google AI Overviews, featured snippets, and direct answer boxes.',
    whatItIs:
      'Google now answers questions directly inside the search results page — before anyone clicks a link. These AI Overviews appear for 30–40% of all searches. If your content isn\'t the source Google\'s AI pulls from, you\'re invisible on those queries. AEO is the practice of structuring your content so Google\'s AI treats you as the authoritative answer. It\'s different from traditional SEO, and most agencies don\'t know it exists.',
    howWeRunIt: [
      {
        num: '01',
        title: 'AI Overview audit',
        body: 'We identify every search query relevant to your brand where Google is showing an AI Overview, and check whether your content is being cited. Gaps become the priority list.',
      },
      {
        num: '02',
        title: 'Schema markup implementation',
        body: 'FAQ schema, HowTo schema, Article schema, Product schema — every structured data type that signals to Google what your content answers.',
      },
      {
        num: '03',
        title: 'Direct-answer content',
        body: 'We rewrite or create content that answers specific questions in the first paragraph — the format Google\'s AI prefers to cite. No preamble, no fluff, just the answer followed by depth.',
      },
      {
        num: '04',
        title: 'Featured snippet capture',
        body: 'We target featured snippet positions (paragraph, list, table) as stepping stones to AI Overview inclusion. Ranking for featured snippets increases AI Overview citation probability by 3–5x.',
      },
    ],
    aiEdge: {
      headline: 'We optimize content for AI readers, not just humans.',
      body: 'Google\'s AI Overview system reads content differently from a human searcher. It looks for direct answers, authoritative citations, structured data, and consistent entity mentions. We write for both.',
      bullets: [
        'AI-assisted Q&A content generation for every relevant query cluster',
        'Automated schema markup deployment across 100+ pages simultaneously',
        'AI Overview appearance tracking with weekly citation reports',
        'Entity optimization: consistent mention of brand, founder, product names across content',
        'Competitor citation gap analysis — where Google cites them instead of you',
      ],
    },
    stack: [
      { name: 'Google Search Console', role: 'AI Overview tracking' },
      { name: 'Schema.org markup', role: 'Structured data' },
      { name: 'Semrush', role: 'Featured snippet tracking' },
      { name: 'Claude', role: 'Direct-answer content' },
      { name: 'Google Rich Results Test', role: 'Schema validation' },
      { name: 'Custom AI Overview monitor', role: 'Citation tracking' },
    ],
    results: [
      { value: '68%', label: 'Of target queries with AI Overview citations', caption: 'after 90-day optimization' },
      { value: '3.1x', label: 'Organic CTR lift', caption: 'from featured snippet + AEO combined' },
      { value: '40+', label: 'Schema types deployed', caption: 'across a typical site' },
    ],
  },

  {
    index: '08',
    slug: 'geo',
    name: 'GEO',
    tagline: 'Generative Engine Optimization',
    shortDesc: 'Get cited inside ChatGPT, Perplexity, Gemini, and Claude. The next SEO.',
    heroLine: 'Cited by AI.',
    heroAccent: 'AI.',
    metaTitle: 'GEO (Generative Engine Optimization) — Brandlyfit',
    metaDesc: 'Generative Engine Optimization — get your brand cited by ChatGPT, Perplexity, Gemini, and Claude. The next frontier of search visibility.',
    whatItIs:
      'A growing percentage of D2C research happens inside AI assistants. When someone asks ChatGPT "what\'s the best sunscreen for oily skin in India" or "which D2C protein brand ships fastest," the AI answers from its training data and real-time web access. The brands it mentions are the brands that win those evaluations. GEO is the practice of making sure your brand, products, and expertise are what these systems cite. It\'s the fastest-growing search channel nobody is optimizing for.',
    howWeRunIt: [
      {
        num: '01',
        title: 'Citation audit',
        body: 'We test 50+ queries relevant to your brand across ChatGPT, Perplexity, Gemini, and Claude. We map where you appear, where competitors appear, and why.',
      },
      {
        num: '02',
        title: 'Content and entity strategy',
        body: 'Generative AIs cite content that is authoritative, well-structured, widely referenced, and entity-consistent. We build a content plan targeting these properties.',
      },
      {
        num: '03',
        title: 'Citation building',
        body: 'We get your brand mentioned in the publications, directories, and sites that generative AIs treat as authoritative sources — Forbes, Vogue India, Inc42, YourStory, and category-specific media.',
      },
      {
        num: '04',
        title: 'llms.txt and structured data',
        body: 'We implement the emerging llms.txt standard to tell AI crawlers what your brand is, what you do, and what you want to be cited for. Plus full schema.org coverage.',
      },
    ],
    aiEdge: {
      headline: 'We speak the language of AI systems.',
      body: 'GEO requires understanding how large language models decide what to cite. We test systematically, optimize structurally, and measure citation rates — a discipline that barely existed two years ago.',
      bullets: [
        'Systematic citation testing across 4 major AI platforms weekly',
        'AI-assisted long-form content designed for generative engine citation',
        'Structured brand FAQ that AI assistants can parse and cite directly',
        'Founder and team entity building (Wikipedia-adjacent profiles, author bylines)',
        '/llms.txt implementation and maintenance for AI crawler guidance',
      ],
    },
    stack: [
      { name: 'ChatGPT (GPT-4o)', role: 'Citation testing' },
      { name: 'Perplexity', role: 'Citation testing' },
      { name: 'Google Gemini', role: 'Citation testing' },
      { name: 'Claude', role: 'Citation testing + content' },
      { name: 'Schema.org', role: 'Structured data' },
      { name: 'Custom citation tracker', role: 'Weekly monitoring' },
    ],
    results: [
      { value: '4', label: 'AI platforms monitored', caption: 'weekly citation tracking' },
      { value: '3.8x', label: 'Citation rate increase', caption: 'after 6-month GEO program' },
      { value: '60%', label: 'Of target queries answered with brand mention', caption: 'vs. 12% before engagement' },
    ],
  },
]

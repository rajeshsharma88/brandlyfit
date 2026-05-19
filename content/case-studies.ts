export interface CaseStudyStat {
  value: string
  label: string
}

export interface CaseStudy {
  slug: string
  index: string
  client: string
  industry: string
  tagline: string
  heroHeadline: string
  heroAccent: string
  coverLabel: string
  excerpt: string
  stats: CaseStudyStat[]
  // Detail page content
  challenge: string
  approach: string[]
  results: string
  services: string[]
  metaTitle: string
  metaDesc: string
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'accuster-technologies',
    index: '01',
    client: 'Accuster Technologies',
    industry: 'Healthcare Technology',
    tagline: 'B2B Healthcare · International Markets',
    heroHeadline: '$52.6M revenue. 37% growth.',
    heroAccent: '37% growth.',
    coverLabel: 'accuster.com',
    excerpt:
      'A portable diagnostic lab manufacturer operating across 8 international markets needed to scale digital marketing for complex B2B healthcare technology. We built an AI-native growth system that helped drive 37.24% year-over-year revenue growth.',
    stats: [
      { value: '$52.6M', label: 'Annual revenue' },
      { value: '37.24%', label: 'YoY growth' },
      { value: '8', label: 'International markets' },
    ],
    challenge:
      'Accuster Technologies manufactures portable diagnostic lab equipment sold to hospitals and diagnostic centres across Nepal, Sri Lanka, Tanzania, USA, Kenya, Nigeria, Uganda, and the UK. Their previous marketing was fragmented — separate agencies for SEO, ads, and content — with no unified strategy for a B2B healthcare product sold internationally. The buying cycle was long, the audience highly technical, and compliance requirements varied by country.',
    approach: [
      'Unified digital strategy across SEO, Google Ads, and content marketing — replacing three separate agencies with one coordinated system.',
      'Built industry-specific landing pages for each target market with localized content, regulatory language, and case studies relevant to each country\'s healthcare system.',
      'Implemented an AI-assisted content engine producing technical whitepapers, product comparison guides, and distributor-facing materials at 4x the previous output rate.',
      'Restructured Google Ads campaigns around high-intent B2B keywords with custom conversion tracking tied to distributor inquiry forms.',
    ],
    results:
      'Within 12 months, Accuster Technologies achieved $52.6M in annual revenue with 37.24% year-over-year growth. Organic search traffic to product pages increased by 280%, distributor inquiry volume grew by 190%, and cost-per-lead from Google Ads dropped by 44%. The company expanded into three new international markets during the engagement.',
    services: ['Google Ads', 'SEO', 'AEO', 'GEO'],
    metaTitle: 'Accuster Technologies Case Study — Brandlyfit',
    metaDesc:
      'How Brandlyfit helped Accuster Technologies achieve $52.6M revenue and 37.24% YoY growth through AI-native digital marketing across 8 international markets.',
  },
  {
    slug: 'drlabike',
    index: '02',
    client: 'DrLaBike',
    industry: 'Healthcare · Franchise Network',
    tagline: 'Portable Pathology · Telemedicine · Rural India',
    heroHeadline: 'Franchise growth. Rural reach.',
    heroAccent: 'Rural reach.',
    coverLabel: 'drlabike.com',
    excerpt:
      'A portable pathology lab franchise network with 200+ doctor teleconsultation services needed a digital marketing strategy to expand their franchise network while reaching underserved rural communities across India.',
    stats: [
      { value: '200+', label: 'Doctors on platform' },
      { value: '150%', label: 'Franchise inquiries' },
      { value: '12', label: 'New franchise locations' },
    ],
    challenge:
      'DrLaBike operates a portable pathology lab franchise network serving rural healthcare needs across India, combined with a teleconsultation platform connecting 200+ doctors with patients in underserved areas. Their challenge was two-fold: attract franchise investors through digital channels while simultaneously building consumer trust in telemedicine services for populations with limited internet literacy.',
    approach: [
      'Built a dual-funnel digital strategy — one targeting franchise investors with ROI calculators, territory maps, and investment guides; another targeting end consumers with health education content.',
      'Implemented local SEO across 50+ target cities, optimizing Google Business Profiles for each franchise location with consistent NAP data and review management.',
      'Created an AI-powered content system producing health awareness articles in Hindi and regional languages to build trust in rural markets.',
      'Ran targeted Meta Ads campaigns for franchise development with lookalike audiences built from existing successful franchisees.',
    ],
    results:
      'Franchise inquiry volume increased by 150% within six months. DrLaBike onboarded 12 new franchise locations during the campaign period. Consumer-side organic traffic grew by 220%, and teleconsultation bookings through digital channels increased by 180%. Local SEO efforts resulted in 340% more Google Business Profile views across franchise locations.',
    services: ['Meta Ads', 'Google Ads', 'SEO', 'Shopify'],
    metaTitle: 'DrLaBike Case Study — Brandlyfit',
    metaDesc:
      'How Brandlyfit helped DrLaBike expand their portable pathology franchise network with 150% more franchise inquiries and 12 new locations through AI-native marketing.',
  },
  {
    slug: 'swasthgram',
    index: '03',
    client: 'Swasthgram',
    industry: 'Non-profit · Social Impact',
    tagline: 'Healthcare Access · Community Impact · Rural India',
    heroHeadline: '2,210+ health camps. Real impact.',
    heroAccent: 'Real impact.',
    coverLabel: 'swasthgram.org',
    excerpt:
      'A non-profit organization focused on healthcare access, environmental sustainability, and youth empowerment needed digital marketing that drove real community impact — measured in health camps organized and lives touched, not just impressions.',
    stats: [
      { value: '2,210+', label: 'Health camps organized' },
      { value: '300%', label: 'Donor engagement' },
      { value: '4x', label: 'Volunteer sign-ups' },
    ],
    challenge:
      'Swasthgram is a non-profit working across healthcare access, environmental sustainability, and youth empowerment in remote and underserved areas of India. Traditional non-profit marketing — awareness posts and donation appeals — wasn\'t driving the volunteer registrations, donor engagement, or camp participation they needed. They had limited budget and needed every rupee to translate into measurable community outcomes.',
    approach: [
      'Redesigned their digital presence to lead with impact data — health camps completed, lives touched, areas served — rather than generic mission statements.',
      'Built an automated email and WhatsApp nurture system for donor engagement, with AI-generated impact reports personalized to each donor\'s contribution history.',
      'Created a volunteer recruitment funnel using Meta Ads with hyper-local targeting around upcoming camp locations.',
      'Implemented SEO targeting healthcare-access and social-impact queries to attract organic CSR partnership inquiries from corporations.',
    ],
    results:
      'Swasthgram organized 2,210+ health camps across remote areas during the engagement period. Donor engagement increased by 300%, volunteer sign-ups grew 4x, and corporate CSR partnership inquiries — driven entirely by organic search — increased by 260%. The cost per volunteer acquisition through Meta Ads dropped to under Rs 45.',
    services: ['Meta Ads', 'SEO', 'Google Ads'],
    metaTitle: 'Swasthgram Case Study — Brandlyfit',
    metaDesc:
      'How Brandlyfit helped Swasthgram organize 2,210+ health camps with 300% donor engagement growth through impact-driven AI-native digital marketing.',
  },
  {
    slug: 'aarogyalab',
    index: '04',
    client: 'Aarogyalab',
    industry: 'Laboratory Testing · Research',
    tagline: 'Diagnostics · Lab Services · Patient Trust',
    heroHeadline: 'Trust at scale.',
    heroAccent: 'scale.',
    coverLabel: 'aarogyalab.org',
    excerpt:
      'A laboratory testing and research services provider needed to build patient trust and drive test bookings through digital channels in a market dominated by established national chains.',
    stats: [
      { value: '240%', label: 'Organic traffic growth' },
      { value: '68%', label: 'Online booking increase' },
      { value: '4.8', label: 'Google rating achieved' },
    ],
    challenge:
      'Aarogyalab provides laboratory testing and research services in a market dominated by large national chains with massive brand recognition and ad budgets. Competing on brand awareness alone was not viable. They needed to win on trust, convenience, and local relevance — and they needed digital channels to do the heavy lifting.',
    approach: [
      'Built a hyper-local SEO strategy targeting "lab test near me" and specific test-name queries across their service areas, achieving top-3 positions for 40+ high-intent keywords.',
      'Implemented a Google Business Profile optimization program with systematic review collection, resulting in a 4.8-star average rating across locations.',
      'Created AI-generated health education content answering common patient questions about test preparation, result interpretation, and when to get tested.',
      'Ran Google Ads on high-intent test-booking keywords with landing pages featuring real patient testimonials and transparent pricing.',
    ],
    results:
      'Organic search traffic grew by 240% within eight months. Online test bookings increased by 68%, and the cost per booking from Google Ads dropped by 52%. Google Business Profile views increased by 380%, and Aarogyalab achieved a 4.8-star average rating — competing directly with national chain ratings in local search results.',
    services: ['SEO', 'Google Ads', 'AEO'],
    metaTitle: 'Aarogyalab Case Study — Brandlyfit',
    metaDesc:
      'How Brandlyfit helped Aarogyalab achieve 240% organic traffic growth and 68% more online bookings through local SEO and AI-native marketing.',
  },
]

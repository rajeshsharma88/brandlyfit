export interface Principle {
  index: string
  title: string
  body: string
}

export interface IndustryStat {
  name: string
  count: number
}

export const FOUNDER = {
  name: 'Rajesh Sharma',
  role: 'Founder & CEO',
  bio: 'Rajesh built Brandlyfit from a single-person operation in Greater Noida to an AI-native agency serving 65+ clients across 10 industries. His background in performance marketing and local SEO — combined with early adoption of AI workflows — gives the agency its edge: enterprise-level strategy execution at a speed most agencies can\'t match.',
  location: 'Delhi NCR, India',
}

export const PRINCIPLES: Principle[] = [
  {
    index: '01',
    title: 'AI-native, not AI-washed',
    body: 'We don\'t slap "AI-powered" on the same old playbook. Our workflows are built around AI from day one — content generation, bid optimization, creative production, and reporting. It\'s in the process, not the pitch deck.',
  },
  {
    index: '02',
    title: 'Results over reports',
    body: 'Monthly reports are table stakes. We measure success in revenue growth, lead volume, and market share — not impressions, reach, or other vanity metrics that don\'t pay rent.',
  },
  {
    index: '03',
    title: 'One system, not eight vendors',
    body: 'Most businesses hire separate agencies for SEO, ads, social, and design. We run all eight services as one connected system. When your Meta Ads learn something, your SEO benefits. When your content ranks, your ads get cheaper.',
  },
  {
    index: '04',
    title: 'Local depth, global capability',
    body: 'We know Delhi NCR block by block — the micro-markets, the consumer behavior, the seasonal patterns. But our client success at $52.6M revenue across 8 international markets proves the system scales.',
  },
]

export const INDUSTRIES: IndustryStat[] = [
  { name: 'Real Estate', count: 10 },
  { name: 'Education', count: 9 },
  { name: 'Technology', count: 8 },
  { name: 'Retail', count: 8 },
  { name: 'Healthcare', count: 7 },
  { name: 'Food & Beverage', count: 5 },
  { name: 'Financial Services', count: 4 },
  { name: 'Hospitality', count: 4 },
  { name: 'Transportation', count: 1 },
  { name: 'Digital Services', count: 9 },
]

export const COMPANY_STATS = [
  { value: '65+', label: 'Clients served' },
  { value: '10+', label: 'Industries' },
  { value: '$52.6M', label: 'Largest client revenue' },
  { value: '37.24%', label: 'Client YoY growth' },
]

export const GEOGRAPHIC_COVERAGE = [
  'Greater Noida',
  'Noida',
  'Delhi',
  'Ghaziabad',
  'Faridabad',
  'Gurugram',
  'Varanasi',
  'Shamli',
]

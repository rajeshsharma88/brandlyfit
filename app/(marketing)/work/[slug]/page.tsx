import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@/lib/seo'
import { CASE_STUDIES } from '@/content/case-studies'
import { CaseStudyDetail } from '@/components/sections/case-study-detail'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = CASE_STUDIES.find((s) => s.slug === slug)
  if (!study) return {}
  return buildMetadata({
    title: study.metaTitle,
    description: study.metaDesc,
    path: `/work/${study.slug}`,
  })
}

function buildCaseStudySchema(study: (typeof CASE_STUDIES)[number]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${study.client} Case Study`,
    description: study.metaDesc,
    author: {
      '@type': 'Organization',
      name: 'Brandlyfit',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Brandlyfit',
      url: 'https://brandlyfit.com',
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = CASE_STUDIES.find((s) => s.slug === slug)
  if (!study) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildCaseStudySchema(study)),
        }}
      />
      <CaseStudyDetail study={study} />
    </>
  )
}

import { ReactNode } from 'react'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { StartProjectProvider } from '@/components/sections/start-project-modal'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <StartProjectProvider>
      <Nav />
      <main>{children}</main>
      <Footer />
    </StartProjectProvider>
  )
}

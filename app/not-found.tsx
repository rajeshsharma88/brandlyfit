import Link from 'next/link'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { StartProjectProvider } from '@/components/sections/start-project-modal'

export default function NotFound() {
  return (
    <StartProjectProvider>
      <Nav />
      <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 pt-16">
        <div className="text-label text-text-3">404 / not found</div>
        <h1 className="text-display-2 font-display text-text text-center">
          This page doesn&apos;t exist.
        </h1>
        <Link
          href="/"
          className="text-label text-text-3 hover:text-text transition-colors border-b border-text-4 hover:border-text"
        >
          ← Back home
        </Link>
      </main>
      <Footer />
    </StartProjectProvider>
  )
}

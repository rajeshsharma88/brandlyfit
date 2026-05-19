import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
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
    </div>
  )
}

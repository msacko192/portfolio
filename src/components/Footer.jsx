import { BRAND, content } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-craie border-t border-rule py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-archivo font-bold text-encre tracking-display">{BRAND}</span>
        <p className="font-inter text-sm text-graphite">{content.footer.tagline}</p>
        <p className="font-inter text-sm text-graphite">{content.footer.legal}</p>
      </div>
    </footer>
  )
}

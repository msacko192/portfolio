import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { content, BRAND } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-craie border-b border-rule' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-archivo font-bold text-xl tracking-display text-encre hover:text-pin transition-colors"
        >
          {BRAND}
        </Link>
        <a
          href={isHome ? '#contact' : '/#contact'}
          className="bg-pin text-craie font-inter font-medium text-sm px-5 py-2.5 rounded hover:bg-encre transition-colors"
        >
          {content.nav.cta}
        </a>
      </div>
    </header>
  )
}

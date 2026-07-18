import { Link } from 'react-router-dom'
import { BRAND } from '../data/content'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-craie flex flex-col">
      <header className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center">
          <Link
            to="/"
            className="font-archivo font-bold text-xl tracking-display text-encre hover:text-pin transition-colors"
          >
            {BRAND}
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="label text-graphite/50 mb-6">404</p>
          <h1 className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance">
            Page introuvable
          </h1>
          <p className="font-inter text-graphite mb-10 text-pretty">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-encre transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </div>
  )
}

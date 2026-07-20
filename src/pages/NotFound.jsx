import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BRAND } from '../data/content'
import { textReveal, textLine } from '../lib/motion'

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
        <motion.div
          variants={textReveal()}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.p variants={textLine} className="label text-graphite/50 mb-6">404</motion.p>
          <motion.h1
            variants={textLine}
            className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-encre mb-4 text-balance"
          >
            Page introuvable
          </motion.h1>
          <motion.p variants={textLine} className="font-inter text-graphite mb-10 text-pretty">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </motion.p>
          <motion.div variants={textLine}>
            <motion.div whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link
                to="/"
                className="bg-pin text-craie font-inter font-medium text-sm px-6 py-3 rounded hover:bg-encre transition-colors"
              >
                Retour à l'accueil
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BRAND } from '../data/content'
import { textReveal, textLine } from '../lib/motion'
import Logo from '../components/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center">
          <Link
            to="/"
            className="text-secondary hover:text-secondary/80 transition-colors"
            aria-label={BRAND}
          >
            <Logo />
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
          <motion.p variants={textLine} className="label text-secondary/60 mb-6">404</motion.p>
          <motion.h1
            variants={textLine}
            className="font-archivo font-black text-3xl md:text-4xl tracking-display text-primary mb-4 text-balance"
          >
            Page introuvable
          </motion.h1>
          <motion.p variants={textLine} className="font-inter text-muted mb-10 text-pretty">
            La page que vous cherchez n'existe pas ou a été déplacée.
          </motion.p>
          <motion.div variants={textLine}>
            <motion.div whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link
                to="/"
                className="bg-primary text-white font-inter font-medium text-sm px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
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

import { motion } from 'framer-motion'
import { content } from '../data/content'
import HeroSVG from './HeroSVG'
import { ease } from '../lib/motion'

export default function Hero() {
  const { hero } = content

  return (
    <section className="min-h-screen bg-craie flex items-center pt-16">
      <div className="mx-auto max-w-6xl px-6 py-20 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          {/* Composition mark — marque atelier */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-encre/25 shrink-0" aria-hidden="true" />
            <p className="label text-graphite">{hero.label}</p>
          </div>

          <h1 className="font-archivo font-bold text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-encre leading-[0.97] mb-5 text-balance">
            {hero.headline}
            <br />
            {hero.headline2}
          </h1>

          {/* Ligne de tension — l'argument en une phrase */}
          <p className="font-archivo text-base md:text-lg text-encre/65 leading-snug mb-6 max-w-[44ch]">
            {hero.tension}
          </p>

          <p className="font-inter text-graphite text-base leading-relaxed mb-10 max-w-[52ch] text-pretty">
            {hero.body}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-pin text-craie font-inter font-medium text-sm px-7 py-3.5 rounded hover:bg-encre transition-colors"
            >
              {hero.cta1}
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center border border-encre/25 text-encre font-inter font-medium text-sm px-7 py-3.5 rounded hover:border-encre hover:bg-encre hover:text-craie transition-colors"
            >
              {hero.cta2}
            </a>
          </div>
        </motion.div>

        {/* SVG — desktop only */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <HeroSVG />
        </motion.div>
      </div>
    </section>
  )
}

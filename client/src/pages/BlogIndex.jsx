import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { posts } from '../data/blog'
import { textReveal, textLine, stagger, cardItem, hoverLift, vFadeUp } from '../lib/motion'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogIndex() {
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px 0px' })
  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px 0px' })

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div variants={textReveal()} initial="hidden" animate="show">
            <motion.p variants={textLine} className="label text-secondary mb-4">Blog</motion.p>
            <motion.h1 variants={textLine} className="font-archivo font-bold text-4xl md:text-5xl tracking-display text-white mb-5 leading-tight text-balance max-w-2xl">
              Ressources pour les entreprises qui veulent mieux travailler
            </motion.h1>
            <motion.p variants={textLine} className="font-inter text-white/60 leading-relaxed text-pretty max-w-[54ch] text-lg">
              Conseils pratiques, retours d'expérience et guides pour les dirigeants qui cherchent à améliorer leurs outils et leurs processus.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Posts list */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            ref={listRef}
            variants={stagger(0.05)}
            initial="hidden"
            animate={listInView ? 'show' : 'hidden'}
            className="flex flex-col gap-6"
          >
            {posts.map((post) => (
              <motion.div key={post.slug} variants={cardItem} whileHover={hoverLift}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex flex-col sm:flex-row gap-6 border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-card-md transition-colors duration-200 group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="label text-secondary">{post.category}</span>
                      <span className="text-border" aria-hidden="true">·</span>
                      <span className="label text-muted">{post.readTime} min de lecture</span>
                    </div>
                    <h2 className="font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance group-hover:text-secondary transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="font-inter text-sm text-muted leading-relaxed text-pretty max-w-[62ch]">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4">
                    <time className="font-inter text-xs text-muted/60 whitespace-nowrap">
                      {formatDate(post.date)}
                    </time>
                    <span className="font-inter text-sm text-secondary">Lire →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-section py-16">
        <div ref={ctaRef} className="mx-auto max-w-4xl px-6 text-center">
          <motion.div variants={vFadeUp} initial="hidden" animate={ctaInView ? 'show' : 'hidden'}>
            <h2 className="font-archivo font-bold text-2xl tracking-display text-primary mb-3 text-balance">
              Vous avez un projet pour votre entreprise ?
            </h2>
            <p className="font-inter text-muted leading-relaxed mb-6 max-w-[48ch] mx-auto">
              Décrivez votre besoin. Nous revenons vers vous dans les 48 heures.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Discuter de votre projet
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

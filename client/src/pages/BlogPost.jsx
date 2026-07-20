import { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { posts } from '../data/blog'
import { textReveal, textLine, fadeUp, stagger, cardItem, hoverLift } from '../lib/motion'
import Breadcrumb from '../components/Breadcrumb'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function renderSection(section, i) {
  if (section.type === 'intro') {
    return (
      <p key={i} className="font-inter text-lg text-text leading-relaxed text-pretty mb-8">
        {section.text}
      </p>
    )
  }

  if (section.type === 'h2') {
    return (
      <div key={i} className="mb-8">
        <h2 className="font-archivo font-bold text-2xl tracking-display text-primary mb-3 leading-snug text-balance">
          {section.title}
        </h2>
        <p className="font-inter text-text leading-relaxed text-pretty">{section.text}</p>
      </div>
    )
  }

  if (section.type === 'numbered') {
    return (
      <div key={i} className="flex flex-col gap-8 mb-8">
        {section.items.map((item, j) => (
          <div key={j} className="flex gap-5">
            <span className="font-archivo font-bold text-4xl text-secondary/20 leading-none shrink-0 tabular-nums select-none w-8 text-right">
              {j + 1}
            </span>
            <div>
              <h2 className="font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance">
                {item.title}
              </h2>
              <p className="font-inter text-text leading-relaxed text-pretty">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (section.type === 'conclusion') {
    return (
      <div key={i} className="border-t border-border pt-8 mb-8">
        <p className="font-inter text-text/80 leading-relaxed text-pretty italic">{section.text}</p>
      </div>
    )
  }

  return null
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  const ctaRef = useRef(null)
  const ctaInView = useInView(ctaRef, { once: true, margin: '-80px 0px' })
  const relatedRef = useRef(null)
  const relatedInView = useInView(relatedRef, { once: true, margin: '-80px 0px' })

  if (!post) return null

  const relatedPosts = posts.filter((p) => p.slug !== slug).slice(0, 2)

  return (
    <main>
      {/* Hero / Header */}
      <section className="bg-primary py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: post.category },
            ]}
          />
          <motion.div
            variants={textReveal()}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={textLine} className="label text-secondary mb-4">{post.category}</motion.p>
            <motion.h1 variants={textLine} className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-white mb-5 leading-snug text-balance">
              {post.title}
            </motion.h1>
            <motion.div variants={textLine} className="flex items-center gap-4 flex-wrap">
              <time className="font-inter text-sm text-white/50">{formatDate(post.date)}</time>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="font-inter text-sm text-white/50">{post.readTime} min de lecture</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            animate="show"
          >
            {post.content.map((section, i) => (
              <motion.div key={i} variants={fadeUp}>
                {renderSection(section, i)}
              </motion.div>
            ))}
          </motion.div>

          {/* In-article CTA */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="mt-12 bg-secondary/8 border border-secondary/20 rounded-2xl p-8"
          >
            <h2 className="font-archivo font-bold text-xl tracking-display text-primary mb-2 leading-snug text-balance">
              Un projet dans votre PME ?
            </h2>
            <p className="font-inter text-muted leading-relaxed mb-5 max-w-[52ch]">
              Décrivez votre besoin en quelques lignes. Nous revenons vers vous dans les 48 heures avec un premier avis honnête — sans engagement.
            </p>
            <motion.a
              href="/#contact"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center bg-secondary text-white font-inter font-medium text-sm px-6 py-3 rounded-2xl hover:bg-secondary/90 hover:scale-[1.02] transition-all duration-200"
            >
              Discuter de votre projet
            </motion.a>
          </motion.div>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-section py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-archivo font-bold text-xl tracking-display text-primary mb-6">
              Articles similaires
            </h2>
            <motion.div
              ref={relatedRef}
              variants={stagger()}
              initial="hidden"
              animate={relatedInView ? 'show' : 'hidden'}
              className="grid sm:grid-cols-2 gap-4"
            >
              {relatedPosts.map((p) => (
                <motion.div key={p.slug} variants={cardItem} whileHover={hoverLift}>
                  <Link
                    to={`/blog/${p.slug}`}
                    className="block border border-border rounded-2xl p-5 bg-white hover:border-secondary/40 transition-colors duration-200 group"
                  >
                    <p className="label text-secondary mb-1">{p.category}</p>
                    <h3 className="font-archivo font-bold text-base tracking-display text-primary leading-snug text-balance group-hover:text-secondary transition-colors duration-200">
                      {p.title}
                    </h3>
                    <p className="font-inter text-xs text-muted mt-2">{p.readTime} min de lecture</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <div className="mt-6">
              <Link
                to="/blog"
                className="font-inter text-sm text-muted hover:text-secondary transition-colors duration-200"
              >
                ← Tous les articles
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

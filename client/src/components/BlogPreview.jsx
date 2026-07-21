import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { posts } from '../data/blog'
import { textReveal, textLine, stagger, cardItem, hoverLift } from '../lib/motion'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function BlogPreview() {
  const latest = posts.slice(0, 3)

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-80px 0px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-80px 0px' })

  return (
    <section className="bg-section py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <motion.div
            ref={headRef}
            variants={textReveal()}
            initial="hidden"
            animate={headInView ? 'show' : 'hidden'}
          >
            <motion.p variants={textLine} className="label text-muted mb-2">Blog</motion.p>
            <motion.h2 variants={textLine} className="font-archivo font-bold text-3xl md:text-4xl tracking-display text-primary text-balance">
              Ressources pour les entreprises
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={headInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Link
              to="/blog"
              className="font-inter text-sm text-secondary hover:text-secondary/80 transition-colors duration-200"
            >
              Tous les articles →
            </Link>
          </motion.div>
        </div>

        <motion.div
          ref={gridRef}
          variants={stagger()}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {latest.map((post) => (
            <motion.div key={post.slug} variants={cardItem} whileHover={hoverLift}>
              <Link
                to={`/blog/${post.slug}`}
                className="flex flex-col h-full bg-white border border-border rounded-2xl p-6 shadow-card hover:border-secondary/40 transition-colors duration-200 group"
              >
                <p className="label text-secondary mb-3">{post.category}</p>
                <h3 className="font-archivo font-bold text-lg tracking-display text-primary mb-3 leading-snug text-balance flex-1 group-hover:text-secondary transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-2 pt-4 border-t border-border">
                  <time className="font-inter text-xs text-muted/60">{formatDate(post.date)}</time>
                  <span className="font-inter text-xs text-muted">{post.readTime} min</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

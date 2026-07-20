import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 mb-10 flex-wrap">
      {items.map((item, i) => {
        const isLast = i === items.length - 1
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-white/25 text-xs" aria-hidden="true">›</span>}
            {isLast || !item.href ? (
              <span className="font-inter text-sm text-white/50">{item.label}</span>
            ) : (
              <Link
                to={item.href}
                className="font-inter text-sm text-white/50 hover:text-white/80 transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

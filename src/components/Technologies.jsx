import { content } from '../data/content'
import { SectionDivider } from './SectionMeta'

export default function Technologies() {
  return (
    <section className="bg-pierre pb-14">
      <SectionDivider />
      <div className="mx-auto max-w-6xl px-6 pt-12">
        <p className="label text-graphite mb-5">{content.technologies.title}</p>
        <div className="flex flex-wrap gap-2">
          {content.technologies.items.map((item, i) => (
            <span
              key={i}
              className="font-inter text-sm text-graphite border border-rule rounded px-3 py-1.5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

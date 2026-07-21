import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { content } from '../data/content'
import { vFadeUp } from '../lib/motion'

export default function Comparison() {
  const { comparison } = content
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })
  const hl = comparison.highlight

  return (
    <motion.div
      ref={ref}
      variants={vFadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className="overflow-x-auto rounded-2xl border border-border"
    >
      <table className="w-full min-w-[480px] border-collapse text-sm font-inter">
        <thead>
          <tr>
            <th className="bg-white text-left px-5 py-4 font-semibold text-muted border-b border-border w-[32%]">
              &nbsp;
            </th>
            {comparison.columns.map((col, i) => (
              <th
                key={i}
                scope="col"
                className={[
                  'px-5 py-4 text-left font-semibold border-b',
                  i === hl
                    ? 'bg-secondary/8 text-secondary border-secondary/25'
                    : 'bg-white text-muted border-border',
                ].join(' ')}
              >
                {col}
                {i === hl && (
                  <span className="ml-2 inline-block text-xs font-medium bg-secondary/12 text-secondary rounded-full px-2 py-0.5 align-middle">
                    recommandé
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-section'}>
              <th
                scope="row"
                className="px-5 py-3.5 text-left font-medium text-primary border-b border-border"
              >
                {row.criteria}
              </th>
              {row.values.map((val, ci) => (
                <td
                  key={ci}
                  className={[
                    'px-5 py-3.5 border-b border-border',
                    ci === hl
                      ? 'text-primary font-medium bg-secondary/5'
                      : 'text-muted',
                    ri === comparison.rows.length - 1 ? 'border-b-0' : '',
                  ].join(' ')}
                >
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}

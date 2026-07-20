export function SectionDivider() {
  return <div className="h-px bg-border" />
}

export function SectionNumber({ index, label }) {
  const n = String(index).padStart(2, '0')
  return (
    <div className="flex items-center gap-2 mb-8" aria-hidden="true">
      <span className="label text-muted">{n}</span>
      <span className="label text-border">—</span>
      <span className="label text-muted">{label}</span>
    </div>
  )
}

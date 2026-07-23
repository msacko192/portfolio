export default function StepHeader({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2
        className="font-archivo font-black text-primary tracking-tight text-balance leading-tight mb-3"
        style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-inter text-sm text-muted leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}

import Reveal from './Reveal.jsx'

export default function SectionHeading({ index, label, title, description }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-signal/90">{index}</span>
        <span className="h-px w-10 bg-signal/40" />
        <span className="section-label">{label}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-100 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-500 leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}

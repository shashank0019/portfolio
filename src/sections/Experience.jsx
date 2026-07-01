import { FiBriefcase } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { experience } from '../data/resumeData.js'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          label="Experience"
          title="Where the fundamentals met production code"
        />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-signal/60 via-white/10 to-transparent" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.12} className="relative">
                <span className="absolute -left-8 sm:-left-10 top-1.5 w-3.5 h-3.5 rounded-full bg-base-900 border-2 border-signal" />

                <div className="glass rounded-2xl p-6 hover:border-signal/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-signal/10 border border-signal/20 flex items-center justify-center text-signal">
                        <FiBriefcase size={16} />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink-100">
                          {job.role}
                        </h3>
                        <p className="text-sm text-ink-500">
                          {job.company}
                          {job.program && <span className="text-ink-700"> · {job.program}</span>}
                        </p>
                      </div>
                    </div>
                    {job.duration && (
                      <span className="px-3 py-1 rounded-full bg-base-600/60 border border-white/[0.06] font-mono text-xs text-ink-500 shrink-0">
                        {job.duration}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {job.points.map((point) => (
                      <li key={point} className="text-sm text-ink-300 leading-relaxed flex gap-2">
                        <span className="text-signal mt-1.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-base-600/60 border border-white/[0.06] text-[11px] font-mono text-wire"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

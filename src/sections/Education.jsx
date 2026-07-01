import { FiAward, FiBookOpen, FiGlobe } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { education, languages } from '../data/resumeData.js'

const degreeIcons = [FiAward, FiBookOpen, FiBookOpen]

const degreeColors = [
  'bg-signal/10 border-signal/20 text-signal',
  'bg-wire/10 border-wire/20 text-wire',
  'bg-purple-500/10 border-purple-500/20 text-purple-400',
]

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" label="Education" title="Academic foundation" />

        <div className="grid lg:grid-cols-[1.4fr_0.6fr] gap-7 items-start">
          {/* Education timeline */}
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-signal/60 via-wire/30 to-transparent" />
            <div className="space-y-6">
              {education.map((ed, i) => {
                const Icon = degreeIcons[i]
                const color = degreeColors[i]
                return (
                  <Reveal key={ed.degree} delay={i * 0.1} className="relative">
                    <span className={`absolute -left-8 top-4 w-3.5 h-3.5 rounded-full bg-base-900 border-2 ${
                      i === 0 ? 'border-signal' : i === 1 ? 'border-wire' : 'border-purple-400'
                    }`} />
                    <div className="glass rounded-2xl p-5 hover:border-signal/30 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 ${color}`}>
                            <Icon size={16} />
                          </div>
                          <div>
                            <h3 className="font-display text-sm font-semibold text-ink-100 leading-snug">
                              {ed.degree}
                            </h3>
                            <p className="text-sm text-ink-500 mt-1">{ed.institution}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <span className={`font-mono text-sm ${i === 0 ? 'text-signal' : i === 1 ? 'text-wire' : 'text-purple-400'}`}>
                                {ed.score}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-base-600/60 border border-white/[0.06] font-mono text-xs text-ink-500 shrink-0">
                          {ed.duration}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Languages */}
          <Reveal delay={0.2}>
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-wire/10 border border-wire/20 flex items-center justify-center text-wire">
                  <FiGlobe size={16} />
                </div>
                <h3 className="font-display text-sm font-semibold text-ink-100">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-sm">
                    <span className="text-ink-300">{lang.name}</span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-base-600/60 border border-white/[0.06] text-ink-500">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

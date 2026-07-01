import {
  FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiCpu,
} from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { skills } from '../data/resumeData.js'

const categoryIcons = {
  'Programming Languages': FiCode,
  'Core Java': FiCpu,
  Frontend: FiLayout,
  Backend: FiServer,
  Databases: FiDatabase,
  'Tools & Platforms': FiTool,
  'Core Concepts': FiCpu,
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          label="Skills"
          title="A toolkit built for shipping production software"
          description="Grouped by where each technology fits in the stack — from core language fundamentals to the databases and tools used day to day."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category] || FiCode
            return (
              <Reveal key={group.category} delay={i * 0.06}>
                <div className="glass rounded-2xl p-6 h-full hover:border-signal/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-signal/10 border border-signal/20 flex items-center justify-center text-signal group-hover:bg-signal/20 transition-colors">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-ink-100">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-md bg-base-600/60 border border-white/[0.06] text-xs font-mono text-ink-300 hover:text-signal hover:border-signal/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

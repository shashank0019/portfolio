import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCheckCircle } from 'react-icons/fi'
import Reveal from './Reveal.jsx'

export default function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="glass rounded-2xl overflow-hidden hover:border-signal/30 hover:shadow-signal transition-[border,box-shadow] duration-300 h-full flex flex-col"
      >
        <div className="relative h-48 bg-gradient-to-br from-base-600 to-base-700 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-faint bg-[size:28px_28px] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-base-700 via-transparent to-transparent" />
          <span className="relative font-display text-3xl font-bold text-ink-700/60 tracking-tight px-6 text-center">
            {project.title}
          </span>
          {project.featured && (
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-signal/15 border border-signal/30 text-signal text-[10px] font-mono uppercase tracking-wider">
              Featured
            </span>
          )}
          {project.badge && (
            <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-wire/15 border border-wire/30 text-wire text-[10px] font-mono tracking-wide">
              {project.badge}
            </span>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-lg font-semibold text-ink-100">{project.title}</h3>
          <p className="text-xs font-mono text-signal/80 mt-1 mb-3">{project.subtitle}</p>
          <p className="text-sm text-ink-500 leading-relaxed mb-4">{project.description}</p>

          <div className="mb-4">
            <p className="text-[11px] font-mono uppercase tracking-wider text-ink-700 mb-2">
              Key Features
            </p>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="text-sm text-ink-300 flex gap-2 leading-snug">
                  <FiCheckCircle className="text-wire shrink-0 mt-0.5" size={14} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2 mb-5 mt-auto">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-base-600/60 border border-white/[0.06] text-[11px] font-mono text-ink-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
            <a
              href={project.github || '#'}
              target={project.github ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-disabled={!project.github}
              className={`inline-flex items-center gap-2 text-sm font-mono px-3 py-2 rounded-lg glass hover:text-signal hover:border-signal/30 transition-colors ${
                !project.github && 'opacity-50 pointer-events-none'
              }`}
            >
              <FiGithub size={15} /> Code
            </a>
            <a
              href={project.demo || '#'}
              target={project.demo ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-mono px-3 py-2 rounded-lg glass hover:text-signal hover:border-signal/30 transition-colors ${
                !project.demo && 'opacity-50 pointer-events-none'
              }`}
            >
              <FiExternalLink size={15} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}

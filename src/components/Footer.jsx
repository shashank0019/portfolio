import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'
import { profile } from '../data/resumeData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-signal/15 border border-signal/30 text-signal flex items-center justify-center text-sm font-mono">
            {profile.initials}
          </span>
          <span className="font-mono text-sm text-ink-500">
            © {year} {profile.name}. Built with React &amp; Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-signal transition-colors">
            <FiGithub size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-signal transition-colors">
            <FiLinkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-ink-500 hover:text-signal transition-colors">
            <FiMail size={18} />
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="text-ink-500 hover:text-signal transition-colors"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}

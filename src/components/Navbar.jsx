import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
import useActiveSection from '../hooks/useActiveSection.js'
import { profile } from '../data/resumeData.js'

const links = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'education', label: 'education' },
  { id: 'certifications', label: 'certs' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))

  const scrollTo = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-6 mt-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between shadow-glass">
          <button
            onClick={() => scrollTo('hero')}
            className="font-display font-bold text-ink-100 tracking-tight flex items-center gap-2"
            aria-label="Go to top"
          >
            <span className="w-8 h-8 rounded-md bg-signal/15 border border-signal/30 text-signal flex items-center justify-center text-sm">
              {profile.initials}
            </span>
            <span className="hidden sm:inline text-sm text-ink-300">shashank<span className="text-signal">.dev</span></span>
          </button>

          <nav className="hidden md:flex items-center gap-1 font-mono text-sm">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative px-3 py-2 rounded-md transition-colors ${
                  active === link.id ? 'text-signal' : 'text-ink-500 hover:text-ink-100'
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-signal/10 rounded-md border border-signal/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-500 hover:text-signal transition-colors"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-500 hover:text-signal transition-colors"
            >
              <FiLinkedin size={18} />
            </a>
            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 rounded-lg bg-signal text-base-900 font-mono text-xs font-semibold hover:bg-signal-bright transition-colors"
            >
              hire_me()
            </button>
          </div>

          <button
            className="md:hidden text-ink-100"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass rounded-2xl mt-2 overflow-hidden shadow-glass"
            >
              <nav className="flex flex-col p-3 font-mono text-sm">
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left px-4 py-3 rounded-lg ${
                      active === link.id ? 'text-signal bg-signal/10' : 'text-ink-300'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex items-center gap-4 px-4 py-3">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-ink-500 hover:text-signal">
                    <FiGithub size={18} />
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-500 hover:text-signal">
                    <FiLinkedin size={18} />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

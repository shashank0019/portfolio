import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import useTypingEffect from '../hooks/useTypingEffect.js'
import { profile } from '../data/resumeData.js'
import Button from '../components/Button.jsx'
import shashankPhoto from '../assets/shashank-photo.jpg'

export default function Hero() {
  const typed = useTypingEffect(profile.roles)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-signal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full glass text-xs font-mono text-wire"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-wire animate-pulse" />
            open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink-100 text-balance"
          >
            Hi, I'm {profile.name.split(' ')[0]}{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-signal via-signal-bright to-wire">
              I build software that ships.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 font-mono text-lg text-ink-300 h-8"
          >
            <span className="text-signal">&gt;</span> {typed}
            <span className="inline-block w-[2px] h-5 bg-signal ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-ink-500 leading-relaxed max-w-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button onClick={() => scrollTo('projects')} variant="primary" icon={FiArrowDown}>
              View Projects
            </Button>
            <Button href={profile.resumeFile} download variant="ghost" icon={FiDownload}>
              Download Resume
            </Button>
            <Button onClick={() => scrollTo('contact')} variant="link" icon={FiMail}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-signal transition-colors">
              <FiGithub size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-signal transition-colors">
              <FiLinkedin size={20} />
            </a>
            <span className="font-mono text-xs text-ink-700">{profile.location}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-floaty">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-signal/25 via-wire/10 to-transparent blur-2xl" />
            <div className="relative w-full h-full rounded-3xl glass shadow-glass overflow-hidden">
              <img
                src={shashankPhoto}
                alt="Shashank C A"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-900/40 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-5 -left-6 glass rounded-xl px-4 py-3 shadow-glass font-mono text-xs"
            >
              <span className="text-wire">const</span> <span className="text-ink-100">role</span> ={' '}
              <span className="text-signal">"Software Developer"</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

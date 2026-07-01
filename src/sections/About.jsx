import { FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile, education } from '../data/resumeData.js'

const pillars = [
  {
    icon: FiCode,
    title: 'Full Stack Development',
    desc: 'Building end-to-end web applications with React.js on the frontend and Spring Boot or Node.js on the backend.',
  },
  {
    icon: FiServer,
    title: 'Java Engineering',
    desc: 'Strong grounding in core Java — DSA, OOPs, the Collections Framework, JDBC, and multithreading.',
  },
  {
    icon: FiDatabase,
    title: 'Data-Driven Systems',
    desc: 'Designing schemas and queries across MySQL and MongoDB to support reliable, scalable applications.',
  },
  {
    icon: FiCpu,
    title: 'Systems Fundamentals',
    desc: 'Comfortable with Operating Systems, Computer Networks, and DBMS concepts that underpin production software.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" label="About" title="The engineer behind the code" />

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
          <Reveal delay={0.1}>
            <p className="text-ink-300 leading-relaxed text-lg">
              {profile.summary}
            </p>
            <p className="mt-5 text-ink-500 leading-relaxed">
              {profile.tagline} Completed a{' '}
              <span className="text-ink-100">{education[0].degree}</span> at{' '}
              <span className="text-ink-100">{education[0].institution}</span>, graduating with a{' '}
              <span className="text-signal font-mono">{education[0].score}</span>.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-ink-700">languages_spoken</div>
                <div className="text-ink-100">English · Kannada · Telugu</div>
              </div>
              <div className="glass rounded-xl px-4 py-3">
                <div className="text-ink-700">based_in</div>
                <div className="text-ink-100">{profile.location}</div>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.08}>
                <div className="glass rounded-2xl p-5 h-full hover:border-signal/30 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-signal/10 border border-signal/20 flex items-center justify-center text-signal mb-4 group-hover:bg-signal/20 transition-colors">
                    <p.icon size={18} />
                  </div>
                  <h3 className="font-display text-sm font-semibold text-ink-100 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

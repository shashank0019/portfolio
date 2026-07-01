import { FiAward, FiStar, FiExternalLink } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { certifications } from '../data/resumeData.js'

const issuerDot = {
  'Guvi | HCL': 'bg-green-400',
  'freeCodeCamp': 'bg-white',
  'CodeSignal': 'bg-[#8B5CF6]',
  'EduBridge (NSDC Approved Partner)': 'bg-wire',
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="06"
          label="Certifications"
          title="Learning that goes on the record"
          description="Verified credentials across Generative AI, Python, web development, backend frameworks, and IT operations — issued by Guvi | HCL, freeCodeCamp, CodeSignal, and EduBridge."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.07}>
              <div className="glass rounded-2xl p-6 h-full hover:border-signal/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-signal/10 border border-signal/20 flex items-center justify-center text-signal group-hover:bg-signal/20 transition-colors shrink-0">
                    <FiAward size={18} />
                  </div>
                  {cert.grade && (
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-signal/10 border border-signal/25 font-mono text-[11px] text-signal">
                      <FiStar size={10} /> Grade {cert.grade} · {cert.score}
                    </span>
                  )}
                </div>

                <h3 className="font-display text-sm font-semibold text-ink-100 leading-snug flex-1">
                  {cert.title}
                </h3>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${issuerDot[cert.issuer] || 'bg-signal'}`} />
                    <span className="text-xs font-semibold text-ink-300">{cert.issuer}</span>
                  </div>
                  {cert.partners && (
                    <p className="text-[11px] font-mono text-ink-700 pl-4 leading-relaxed">{cert.partners}</p>
                  )}
                  {cert.date && (
                    <p className="text-[11px] font-mono text-ink-700 pl-4">{cert.date}</p>
                  )}
                  {cert.certId && (
                    <p className="text-[10px] font-mono text-ink-700/50 pl-4 break-all">
                      ID: {cert.certId}
                    </p>
                  )}
                </div>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 pt-4 border-t border-white/[0.06] inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-500 hover:text-signal transition-colors"
                  >
                    <FiExternalLink size={11} /> Verify Certificate
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { profile } from '../data/resumeData.js'

// EmailJS configuration — replace with your own IDs from emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const contactLinks = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: profile.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: profile.linkedin },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="07"
          label="Contact"
          title="Let's build something together"
          description="Open to Software Engineer, Full Stack Developer, and Java Developer roles — reach out directly or send a message below."
        />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-7">
          <Reveal className="space-y-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-signal/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-signal/10 border border-signal/20 flex items-center justify-center text-signal group-hover:bg-signal/20 transition-colors shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-ink-700 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-ink-100 mt-0.5 break-all">{item.value}</p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-ink-700 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-base-600/60 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-signal/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-ink-700 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-base-600/60 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-signal/50 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-ink-700 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or project..."
                  className="w-full bg-base-600/60 border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-ink-100 placeholder:text-ink-700 focus:border-signal/50 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-signal text-base-900 font-mono text-sm font-semibold hover:bg-signal-bright transition-colors disabled:opacity-60"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend size={16} /> Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="flex items-center gap-2 text-sm text-wire">
                  <FiCheck size={16} /> Message sent — I'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <FiAlertCircle size={16} /> Something went wrong. Please email me directly at {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

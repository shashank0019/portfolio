import SectionHeading from '../components/SectionHeading.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/resumeData.js'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          label="Projects"
          title="Things I've built end to end"
          description="Five projects spanning full-stack SaaS, AI/NLP systems, mobile apps, and utility tools — built solo from schema to UI."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mb-7">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <Reveal>
              <p className="section-label mb-5">More Projects</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-7">
              {others.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

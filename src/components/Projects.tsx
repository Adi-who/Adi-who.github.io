import { ArrowUpRight } from 'lucide-react'
import { comingSoonCopy, profile, projects, type Project } from '../data/portfolio'
import { Reveal } from './Reveal'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-3xl border border-line bg-bg-elevated p-6">
      <h3 className="font-display text-2xl text-ink">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <a href={project.github} className="text-sm text-ink underline decoration-line-strong underline-offset-4">
          GitHub
        </a>
        {project.live ? (
          <a href={project.live} className="text-sm text-ink underline decoration-line-strong underline-offset-4">
            Live
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-5 py-24 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">Projects</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">Work in progress.</h2>
        </Reveal>

        {projects.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <Reveal delay={0.08}>
            <div className="coming-soon-frame mt-12 rounded-[2rem] px-6 py-16 sm:px-12 sm:py-24">
              <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">Coming soon</p>
              <p className="mt-6 max-w-2xl font-display text-3xl leading-tight text-ink sm:text-5xl">{comingSoonCopy}</p>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 inline-flex items-center gap-2 text-sm text-ink"
              >
                Follow the work on GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

import { profile, social } from '../data/portfolio'
import { Reveal } from './Reveal'

const facts = [
  { label: 'Based', value: profile.location },
  { label: 'Focus', value: 'Frontend / Web' },
  { label: 'Now', value: profile.currentlyWorkingOn },
  { label: 'Open to', value: 'Open source & web collaboration' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-24 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">About</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl">
            Still learning.
            <br />
            Already building.
          </h2>
        </Reveal>

        <div>
          <Reveal>
            <p className="max-w-xl font-display text-2xl leading-snug text-ink">{profile.statement}</p>
          </Reveal>
          <div className="mt-8 max-w-xl space-y-5 text-muted">
            {profile.about.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.06}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.16}>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6">
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">{fact.label}</dt>
                  <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-muted underline decoration-line-strong underline-offset-4 hover:text-ink"
              >
                GitHub
              </a>
              <a
                href={social.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-muted underline decoration-line-strong underline-offset-4 hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

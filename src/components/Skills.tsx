import { skillGroups } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-5 py-24 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">Skills</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Tools I reach for.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="grid gap-4 border-t border-line pt-6 md:grid-cols-[180px_1fr]">
                <h3 className="font-mono text-[11px] tracking-[0.22em] text-faint uppercase">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-flex min-h-11 items-center rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-accent hover:text-accent">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

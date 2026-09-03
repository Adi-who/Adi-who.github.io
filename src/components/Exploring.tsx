import { exploring } from '../data/portfolio'
import { Reveal } from './Reveal'

export function Exploring() {
  const loop = [...exploring, ...exploring]

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">Currently exploring</p>
        </Reveal>
      </div>
      <div className="mt-8 overflow-hidden border-y border-line py-6">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {loop.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-display text-4xl font-semibold tracking-tight text-ink/80 uppercase transition-colors hover:text-accent sm:text-6xl"
            >
              {item}
              <span className="ml-10 text-faint">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

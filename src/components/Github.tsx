import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'
import { formatNumber } from '../lib/format'
import type { GithubStats } from '../lib/github'
import { Reveal } from './Reveal'

type GithubProps = {
  stats: GithubStats | null
  loading: boolean
}

export function Github({ stats, loading }: GithubProps) {
  const metrics = [
    { label: 'Public repos', value: stats ? formatNumber(stats.user.public_repos) : '—' },
    { label: 'Followers', value: stats ? formatNumber(stats.user.followers) : '—' },
    { label: 'Stars received', value: stats ? formatNumber(stats.totalStars) : '—' },
  ]

  return (
    <section id="github" className="scroll-mt-28 px-5 py-24 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">GitHub</p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
            Live numbers only.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric, index) => (
            <Reveal key={metric.label} delay={index * 0.05}>
              <article className="rounded-3xl border border-line bg-bg-elevated px-6 py-8">
                <p className="font-display text-5xl tracking-tight text-ink">{loading ? '—' : metric.value}</p>
                <p className="mt-3 text-sm text-muted">{metric.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-3xl border border-line bg-bg-elevated p-6 sm:p-8">
              <h3 className="font-display text-xl text-ink">Languages</h3>
              <p className="mt-2 text-sm text-muted">Primary languages GitHub assigns to public repositories.</p>
              {loading ? (
                <div className="mt-8 h-16 rounded-2xl bg-surface" />
              ) : !stats?.languages.length ? (
                <p className="mt-8 text-sm text-muted">
                  No repository language data yet. The public profile README does not report a primary language.
                </p>
              ) : (
                <ul className="mt-8 space-y-4">
                  {stats.languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between text-sm">
                      <span className="text-ink">{lang.name}</span>
                      <span className="font-mono text-xs text-faint">
                        {lang.count} {lang.count === 1 ? 'repo' : 'repos'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="h-full rounded-3xl border border-line bg-bg-elevated p-6 sm:p-8">
              <h3 className="font-display text-xl text-ink">@{profile.handle}</h3>
              <p className="mt-2 text-sm text-muted">Joined {profile.joined}. Activity graphs stay on GitHub.</p>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm text-ink"
              >
                View profile
                <ArrowUpRight size={16} />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

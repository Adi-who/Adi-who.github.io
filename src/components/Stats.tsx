import { GitFork, Star, Users } from 'lucide-react'
import type { GithubStats } from '../lib/github'
import { formatNumber } from '../lib/format'
import { profile } from '../data/profile'
import { Container } from './Container'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type StatsProps = {
  stats: GithubStats | null
  loading: boolean
}

export function Stats({ stats, loading }: StatsProps) {
  const cards = [
    {
      label: 'Public repositories',
      value: stats ? formatNumber(stats.user.public_repos) : '—',
      icon: GitFork,
    },
    {
      label: 'Followers',
      value: stats ? formatNumber(stats.user.followers) : '—',
      icon: Users,
    },
    {
      label: 'Stars received',
      value: stats ? formatNumber(stats.totalStars) : '—',
      icon: Star,
    },
  ]

  const languages = stats?.languages ?? []
  const languageTotal = languages.reduce((sum, item) => sum + item.count, 0)

  return (
    <Container id="github">
      <Reveal>
        <SectionHeading
          eyebrow="GitHub"
          title="Live numbers, nothing fabricated."
          description={`Pulled from github.com/${profile.handle}. Counts stay at zero until activity exists.`}
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card, index) => (
          <Reveal key={card.label} delay={index * 0.05}>
            <article className="rounded-2xl border border-line bg-bg-elevated p-6">
              <card.icon size={16} className="text-accent" aria-hidden />
              <p className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink">
                {loading ? '—' : card.value}
              </p>
              <p className="mt-2 text-sm text-muted">{card.label}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <article className="h-full rounded-2xl border border-line bg-bg-elevated p-6">
            <h3 className="font-display text-lg font-semibold text-ink">Language breakdown</h3>
            <p className="mt-1 text-sm text-muted">
              Based on primary languages GitHub assigns to public repositories.
            </p>
            {loading ? (
              <div className="mt-6 h-20 animate-pulse rounded-xl bg-surface" />
            ) : languages.length === 0 ? (
              <p className="mt-6 text-sm text-muted">
                No repository language data is available yet. The profile README repository does not
                report a primary language.
              </p>
            ) : (
              <ul className="mt-6 space-y-4">
                {languages.map((lang) => {
                  const width = languageTotal ? Math.round((lang.count / languageTotal) * 100) : 0
                  return (
                    <li key={lang.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-ink">{lang.name}</span>
                        <span className="font-mono text-xs text-faint">
                          {lang.count} {lang.count === 1 ? 'repo' : 'repos'}
                        </span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-surface">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${Math.max(width, 8)}%` }}
                        />
                      </div>
                    </li>
                  )
                })}
              </ul>
            )}
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="h-full rounded-2xl border border-line bg-bg-elevated p-6">
            <h3 className="font-display text-lg font-semibold text-ink">Activity</h3>
            <p className="mt-1 text-sm text-muted">
              GitHub joined {profile.joined}. Public contribution graphs stay on GitHub.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted">
              <li className="flex justify-between gap-4 border-b border-line pb-3">
                <span>Profile</span>
                <a
                  href={profile.githubUrl}
                  className="text-ink underline decoration-line-strong underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{profile.handle}
                </a>
              </li>
              <li className="flex justify-between gap-4 border-b border-line pb-3">
                <span>Featured on profile</span>
                <span className="text-ink">my-portfolio</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Public stars given</span>
                <span className="text-ink">0</span>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-faint">
              Featured pin on the GitHub profile README points to github.com/Adi-who/my-portfolio.
              That repository is not public yet, so it is not listed as a live project here.
            </p>
          </article>
        </Reveal>
      </div>
    </Container>
  )
}

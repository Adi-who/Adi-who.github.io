import { profile, socials } from '../data/portfolio'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted" aria-label="Social">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex min-h-11 items-center hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl font-mono text-xs text-faint">© {year} Aditya Kumar</p>
    </footer>
  )
}

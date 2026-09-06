import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile, social } from '../data/portfolio'
import { useActiveSection } from '../hooks/useActiveSection'
import { GitHubIcon, LinkedInIcon, XIcon } from './icons'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-4 transition-all duration-300 sm:h-16 sm:px-6 ${
          scrolled || open
            ? 'border border-line bg-bg/80 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.8)] backdrop-blur-md'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="flex items-center gap-3 text-ink">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line font-display text-[11px] font-semibold">
            AK
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-wide transition-colors duration-200 ${
                active === link.href ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={social.github.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-ink sm:inline-flex"
            aria-label="GitHub"
          >
            <GitHubIcon size={15} />
          </a>
          <a
            href={social.linkedin.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-ink sm:inline-flex"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={15} />
          </a>
          <a
            href={social.x.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-line text-ink sm:inline-flex"
            aria-label="X"
          >
            <XIcon size={15} />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-bg/95 p-4 backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block min-h-12 rounded-xl px-3 py-3 text-base text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

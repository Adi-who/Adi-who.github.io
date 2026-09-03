import { ArrowUpRight } from 'lucide-react'
import { social, socials } from '../data/portfolio'
import { GitHubIcon, InstagramIcon, MailIcon, XIcon } from './icons'
import { Reveal } from './Reveal'

const iconMap = {
  GitHub: GitHubIcon,
  X: XIcon,
  Instagram: InstagramIcon,
  Email: MailIcon,
} as const

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 py-24 sm:px-8 md:py-32 lg:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="font-mono text-[11px] tracking-[0.28em] text-accent uppercase">Contact</p>
          <h2 className="mt-4 font-display text-5xl leading-[0.9] font-semibold tracking-tight text-ink sm:text-7xl lg:text-8xl">
            Let’s
            <br />
            connect.
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={social.email.href}
            className="mt-10 inline-flex h-14 items-center gap-3 rounded-full bg-accent px-7 text-sm font-medium text-[#111114] hover:opacity-90"
          >
            Write an email
            <ArrowUpRight size={16} />
          </a>
        </Reveal>

        <div className="mt-16 grid overflow-hidden rounded-3xl border border-line sm:grid-cols-2">
          {socials.map((item) => {
            const Icon = iconMap[item.label]
            const external = !item.href.startsWith('mailto:')
            return (
              <a
                key={item.label}
                href={item.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between border-b border-line px-6 py-6 transition-colors last:border-b-0 hover:bg-bg-elevated sm:border-r sm:odd:border-r sm:[&:nth-child(2)]:border-b-0 sm:[&:nth-child(2n)]:border-r-0"
              >
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.2em] text-faint uppercase">{item.label}</span>
                  <span className="mt-1 block text-ink">{item.handle}</span>
                </span>
                <Icon size={18} className="text-accent" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

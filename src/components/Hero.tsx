import { ArrowDownRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { profile, social } from '../data/portfolio'
import { AnimatedHeading } from './AnimatedHeading'
import { GitHubIcon, InstagramIcon, MailIcon, XIcon } from './icons'
import { SocialDock } from './SocialDock'

const socialIcons = [
  { ...social.github, Icon: GitHubIcon },
  { ...social.x, Icon: XIcon },
  { ...social.instagram, Icon: InstagramIcon },
  { ...social.email, Icon: MailIcon },
]

export function Hero() {
  const reduced = useReducedMotion()
  const kicker = `${profile.name} — ${profile.role}`

  return (
    <section id="home" className="relative overflow-hidden px-5 pt-28 pb-16 sm:px-8 lg:min-h-dvh lg:px-10">
      <div className="site-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:min-h-[calc(100dvh-7rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <p
            aria-label={kicker}
            className="mb-6 font-mono text-[clamp(0.95rem,2.8vw,1.4rem)] leading-snug tracking-[0.22em] text-accent uppercase"
          >
            {kicker.split('').map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                className="inline-block will-change-transform"
                initial={reduced ? false : { y: '0.6em', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.02 + index * 0.028,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </p>

          <AnimatedHeading lines={profile.headline} />

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55 }}
            className="mt-7 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#111114] active:opacity-80 hover:opacity-90"
            >
              View Projects
              <ArrowDownRight size={16} aria-hidden />
            </a>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line-strong bg-transparent px-6 py-3 text-sm font-medium text-ink active:bg-surface hover:bg-surface"
            >
              <GitHubIcon size={16} />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex items-center gap-2"
          >
            {socialIcons.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={`${item.label} ${item.handle}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-muted transition-colors active:text-accent hover:border-line-strong hover:text-accent"
              >
                <item.Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 999px)' }}
          animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 999px)' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5 justify-self-center lg:justify-self-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full border border-line sm:-inset-6" />
            <img
              src={profile.avatar}
              alt="Portrait of Aditya Kumar"
              width={460}
              height={460}
              className="relative h-56 w-56 rounded-full object-cover object-[center_18%] sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]"
            />
          </div>
          <SocialDock />
        </motion.div>
      </div>
    </section>
  )
}

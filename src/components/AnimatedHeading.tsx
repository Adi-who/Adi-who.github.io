import { motion, useReducedMotion } from 'motion/react'

type AnimatedHeadingProps = {
  lines: readonly string[]
}

export function AnimatedHeading({ lines }: AnimatedHeadingProps) {
  const reduced = useReducedMotion()

  return (
    <h1 className="font-display text-[clamp(2.4rem,11vw,5.4rem)] leading-[0.9] font-bold tracking-[-0.05em] text-ink">
      {lines.map((line, lineIndex) => (
        <span key={line} className="block overflow-hidden py-[0.04em]">
          {line.split('').map((char, charIndex) => (
            <motion.span
              key={`${line}-${charIndex}`}
              className="inline-block will-change-transform"
              initial={reduced ? false : { y: '110%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.55,
                delay: 0.04 + lineIndex * 0.12 + charIndex * 0.028,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}
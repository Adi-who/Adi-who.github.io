export type Project = {
  title: string
  description: string
  technologies: string[]
  github: string
  live?: string
  image?: string
}

export const profile = {
  name: 'Aditya Kumar',
  shortName: 'Adi',
  handle: 'Adi-who',
  role: 'Frontend Developer',
  status: 'Student + Developer',
  location: 'India',
  tagline: 'Frontend Developer • Building modern web experiences',
  headline: ['Turning', 'ideas into', 'interfaces.'],
  intro:
    'Student and frontend developer building modern, responsive web experiences. Currently focused on JavaScript, React, and Next.js.',
  statement:
    'I care about turning ideas into clean, functional websites — interfaces that feel considered, not decorated.',
  about: [
    'I am a student and developer based in India, focused on frontend and the modern web.',
    'I ship public work as I learn — this portfolio and CodeSnap are live — and I am looking to collaborate on open source and web development projects.',
    'I am learning in public: JavaScript, React, Git, GitHub, and Next.js — with a growing interest in motion and more advanced frontend work.',
  ],
  askMeAbout: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
  currentlyWorkingOn: 'Frontend projects & open source',
  avatar: '/avatar.jpg',
  avatarRemote: 'https://avatars.githubusercontent.com/u/323292766?v=4',
  githubUrl: 'https://github.com/Adi-who',
  linkedinUrl: 'https://www.linkedin.com/in/adiwho-dev/',
  email: 'iamadityakumar.dev@gmail.com',
  joined: 'August 2026',
} as const

export const social = {
  github: { label: 'GitHub', handle: '@Adi-who', href: 'https://github.com/Adi-who' },
  linkedin: {
    label: 'LinkedIn',
    handle: 'adiwho-dev',
    href: 'https://www.linkedin.com/in/adiwho-dev/',
  },
  x: { label: 'X', handle: '@AdiXplores', href: 'https://x.com/AdiXplores' },
  instagram: { label: 'Instagram', handle: '@v27adi', href: 'https://instagram.com/v27adi' },
  email: {
    label: 'Email',
    handle: 'iamadityakumar.dev@gmail.com',
    href: 'mailto:iamadityakumar.dev@gmail.com',
  },
} as const

export const socials = [social.github, social.linkedin, social.x, social.instagram, social.email] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
] as const

export const skillGroups = [
  { title: 'Languages', items: ['C', 'C++', 'Java', 'JavaScript', 'Python'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { title: 'Learning', items: ['JavaScript', 'React', 'Next.js', 'Advanced JavaScript', 'GSAP'] },
] as const

export const exploring = [
  'JavaScript',
  'React',
  'Next.js',
  'Advanced JavaScript',
  'GSAP',
  'Git',
  'GitHub',
  'Modern Web Development',
] as const

export const projects: Project[] = [
  {
    title: 'CodeSnap',
    description:
      'A React app for creating beautiful, customizable code screenshots. Paste code, pick a theme and background, then export a high-resolution PNG for GitHub, LinkedIn, or blogs.',
    technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'html-to-image'],
    github: 'https://github.com/Adi-who/CodeSnap',
    live: 'https://adi-who.github.io/CodeSnap/',
  },
  {
    title: 'Portfolio',
    description:
      'Personal site for Aditya Kumar — a dark, motion-led frontend built with React, TypeScript, Vite, and Tailwind. Live GitHub stats, project cards, and a contact path that stays out of the way.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    github: 'https://github.com/Adi-who/Adi-who.github.io/tree/source',
    live: 'https://adi-who.github.io',
  },
]

export const comingSoonCopy =
  "I'm currently building and experimenting with new projects. Check back soon to see what I'm working on."

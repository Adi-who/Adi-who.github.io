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
    'Right now I am building my personal portfolio and looking to collaborate on open source and web development projects.',
    'I am learning in public: JavaScript, React, Git, GitHub, and Next.js — with a growing interest in motion and more advanced frontend work.',
  ],
  askMeAbout: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
  currentlyWorkingOn: 'Personal Portfolio Website',
  avatar: '/avatar.jpg',
  avatarRemote: 'https://avatars.githubusercontent.com/u/323292766?v=4',
  githubUrl: 'https://github.com/Adi-who',
  email: 'iamadityakumar.dev@gmail.com',
  joined: 'August 2026',
} as const

export const social = {
  github: { label: 'GitHub', handle: '@Adi-who', href: 'https://github.com/Adi-who' },
  x: { label: 'X', handle: '@AdiXplores', href: 'https://x.com/AdiXplores' },
  instagram: { label: 'Instagram', handle: '@v27adi', href: 'https://instagram.com/v27adi' },
  email: {
    label: 'Email',
    handle: 'iamadityakumar.dev@gmail.com',
    href: 'mailto:iamadityakumar.dev@gmail.com',
  },
} as const

export const socials = [social.github, social.x, social.instagram, social.email] as const

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
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'React'] },
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

export const projects: Project[] = []

export const comingSoonCopy =
  "I'm currently building and experimenting with new projects. Check back soon to see what I'm working on."

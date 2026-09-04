export const profile = {
  name: 'Aditya Kumar',
  githubName: 'Aditya Singh',
  handle: 'Adi-who',
  role: 'Frontend Developer',
  status: 'Open To Work',
  location: 'India',
  headline: 'I turn ideas into clean, functional websites.',
  intro:
    'Student and frontend developer building modern, responsive web experiences. Currently focused on JavaScript, React, and Next.js.',
  about: [
    'I am a student and frontend developer based in India, focused on building modern, responsive web experiences.',
    'I care about turning ideas into clean, functional interfaces. I ship public work as I learn — this portfolio and CodeSnap are live — and I am looking to collaborate on open source and web development projects.',
    'Currently learning JavaScript, React, Git, and GitHub — with a growing interest in Next.js and more advanced frontend work.',
  ],
  askMeAbout: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
  currentlyWorkingOn: 'Frontend projects & open source',
  currentlyLearning: ['JavaScript', 'React', 'Git', 'GitHub', 'Next.js'],
  lookingToCollaborate: 'Open source and web development projects',
  avatar: '/avatar.jpg',
  avatarRemote: 'https://avatars.githubusercontent.com/u/323292766?v=4',
  githubUrl: 'https://github.com/Adi-who',
  email: 'iamadityakumar.dev@gmail.com',
  instagram: {
    handle: 'v27adi',
    url: 'https://instagram.com/v27adi',
  },
  x: {
    handle: 'AdiXplores',
    url: 'https://x.com/AdiXplores',
  },
  joined: 'August 2026',
  githubUserId: 323292766,
} as const

export const socials = [
  { id: 'github', label: 'GitHub', handle: '@Adi-who', href: profile.githubUrl },
  { id: 'instagram', label: 'Instagram', handle: '@v27adi', href: profile.instagram.url },
  { id: 'email', label: 'Gmail', handle: profile.email, href: `mailto:${profile.email}` },
  { id: 'x', label: 'X', handle: '@AdiXplores', href: profile.x.url },
] as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'Java', 'JavaScript', 'Python'],
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'React', 'Next.js'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
  {
    title: 'Learning',
    items: ['JavaScript', 'React', 'Next.js', 'GSAP', 'Advanced JavaScript'],
  },
] as const


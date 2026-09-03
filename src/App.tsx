import { About } from './components/About'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Exploring } from './components/Exploring'
import { Footer } from './components/Footer'
import { Github } from './components/Github'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useGithub } from './hooks/useGithub'

export default function App() {
  const { stats, loading } = useGithub()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero />
        <div className="hairline" />
        <About />
        <Exploring />
        <div className="hairline" />
        <Projects />
        <div className="hairline" />
        <Skills />
        <div className="hairline" />
        <Github stats={stats} loading={loading} />
        <div className="hairline" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

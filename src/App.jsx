// App.jsx — full file with particles background (react-tsparticles)

import { useEffect, useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { HashRouter, Link, useLocation } from 'react-router-dom'
import './App.css'

function ScrollToSection() {
  const { pathname } = useLocation()
  useEffect(() => {
    const sectionId = pathname.replace('/', '') || 'intro'
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [pathname])
  return null
}

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: { color: 'transparent' },
        fpsLimit: 60,
        detectRetina: true,
        fullScreen: { enable: false },
        interactivity: {
          events: { resize: true },
        },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: '#a3a3a3' },
          links: {
            enable: true,
            color: '#a3a3a3',
            distance: 140,
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 0.8, outModes: { default: 'out' } },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  )
}

function Section({ id, title, classes = '', children, badge }) {
  return (
    <section id={id} className={`scroll-mt-20 ${classes}`}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          {badge && <div className="badge badge-lg">{badge}</div>}
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h2>
        </div>
        <div className="prose max-w-none">{children}</div>
      </div>
    </section>
  )
}

function Navbar() {
  const nav = [
    { to: '/intro', label: 'Intro' },
    { to: '/essay', label: 'AI on the Worforce' },
    { to: '/internship', label: 'Internship' },
    { to: '/linkedin', label: 'LinkedIn' },
    { to: '/group-presentation', label: 'Group Presentation' },
    { to: '/organizations', label: 'Organizations' },
    { to: '/resume', label: 'Resume' },
    { to: '/memo', label: 'Memo' },
    { to: '/conclusion', label: 'Conclusion' },
  ]

  return (
    <div className="navbar bg-base-100/90 backdrop-blur supports-[backdrop-filter]:bg-base-100/80 sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto flex w-full justify-between">
        <Link to="/intro" className="btn btn-ghost normal-case text-xl font-black tracking-tight">
          Ethan Pham
        </Link>
        <ul className="menu menu-horizontal gap-x-4 hidden md:flex gap-1">
          {nav.map((n) => (
            <li key={n.to}>
              <Link to={n.to}>{n.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="bg-gradient-to-b from-base-200 to-base-100">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Portfolio</h1>
        <div className="mt-6 flex justify-center gap-3">
          <Link className="btn btn-primary" to="/intro">
            Start
          </Link>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="p-6 bg-base-100 border-t text-sm text-base-content/70">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Ethan Pham. Built with React, Vite, Tailwind, DaisyUI.</p>
        <a href="#intro" className="link">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

function Content() {
  return (
    <main>
      <Hero />

      <Section id="intro" title="Self Analysis and Introduction" badge="01" classes="bg-primary text-primary-content">
        <p className="text-left text-lg">
          I'm currently a Junior at the Jindal School of Management at the University of Texas at Dallas with my major
          being Business Analytics (BS). I made this portfolio using Vite and VSC, a code editor to challenge myself.
        </p>
        <p className="text-left text-lg">
          I have always been an outgoing person always wanting to try new things but whatever I tackle I will tackle it
          head on with strong determination. I'm currently and were in many clubs that helped grow my personality and
          learn how to talk to others the way they want to be talked to, to get what I want, but also getting the
          consumer what they want.
        </p>
      </Section>

      <Section id="essay" title="AI on the Workforce" badge="03" classes="bg-accent text-accent-content">
        <div className="w-full rounded-lg overflow-hidden border border-accent-content/20">
          <object data="/assets/Essay.pdf" type="application/pdf" className="w-full h-[70vh]">
            <p className="p-4">
              PDF preview not supported in this browser.{' '}
              <a className="link" href="/assets/Essay.pdf" target="_blank" rel="noreferrer">
                Open Essay (PDF)
              </a>
            </p>
          </object>
        </div>
        <div className="mt-3">
          <a className="btn" href="/assets/Essay.pdf" target="_blank" rel="noreferrer">
            Open Essay (PDF)
          </a>
        </div>
      </Section>

      <Section id="internship" title="Internship Experience" badge="04" classes="bg-info text-info-content">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-bold mb-2 text-left ">Highlights</h3>
            <ul className="list-disc ml-5 text-left">
              <li>
                Employed medical billing software such as Quickbase and Claimtronics to process, modify, and review
                claims and data for both providers and patients.
              </li>
              <li>
                During a medical emergency where care is imminent and necessary, and the consumer does not have time to
                research which facilities and providers are in-network with their health insurance company. I help with
                getting those NSA agreements out to the provider to reduce instances where patients face unexpected
                medical bills due to receiving care from an out-of-network facility or provider during an emergency.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/assets/Internship photos.png"
              alt="Internship photo"
              className="rounded-lg shadow border border-info-content/20 object-cover w-full h-48"
            />
            <img
              src="/assets/Internship photo 2.png"
              alt="Internship photo 2"
              className="rounded-lg shadow border border-info-content/20 object-cover w-full h-48"
            />
          </div>
        </div>
      </Section>

      <Section id="linkedin" title="LinkedIn Profile" badge="05" classes="bg-success text-success-content">
        <div className="flex flex-wrap items-center gap-4">
        <a href="https://www.linkedin.com/in/ethanpham04/"
              target="_blank"
              rel="noreferrer">
          <img
            src="/assets/Linedin Profile Pictures.png"
            alt="LinkedIn profile headshot"
            className="w-300 h-120 object-cover border border-success-content/20"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </a>
          
        </div>
      </Section>

      <Section
        id="group-presentation"
        title="OBHR 3300 Hybrid vs. Remote Work"
        badge="06"
        classes="bg-warning text-warning-content"
      >
        <p>
          In OBHR 3300, Organizational Behavior, my group and I were tasked with doing a case study on hybrid and remote
          work and the differences that they both have from one another.
        </p>
        <div className="w-full rounded-lg overflow-hidden border border-warning-content/20">
          <object data="/assets/Group%20presentation.pdf" type="application/pdf" className="w-full h-[70vh]">
            <p className="p-4">
              PDF preview not supported.{' '}
              <a className="link" href="/assets/Group%20presentation.pdf" target="_blank" rel="noreferrer">
                Open Slides (PDF)
              </a>
            </p>
          </object>
        </div>
        <div className="mt-3">
          <a className="btn" href="/assets/Group%20presentation.pdf" target="_blank" rel="noreferrer">
            Open Slides (PDF)
          </a>
        </div>
      </Section>

      <Section id="organizations" title="Student Organizations" badge="07" classes="bg-error text-error-content">
        <p>Vietnamese Student Association - University of Texas at Dallas, Event Coordinator</p>
      </Section>

      <Section id="resume" title="Resume" badge="08" classes="bg-base-300 text-base-content">
        <div className="w-full rounded-lg overflow-hidden border border-base-content/20 bg-white">
          <object
            data="/assets/Resume%20ETHAN%20PHAM%20PRESENT.docx.pdf"
            type="application/pdf"
            className="w-full h-[80vh]"
          >
            <p className="p-4">
              PDF preview not supported.{' '}
              <a
                className="link"
                href="/assets/Resume%20ETHAN%20PHAM%20PRESENT.docx.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open Résumé (PDF)
              </a>
            </p>
          </object>
        </div>
        <div className="mt-3">
          <a
            className="btn btn-primary"
            href="/assets/Resume%20ETHAN%20PHAM%20PRESENT.docx.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Résumé (PDF)
          </a>
        </div>
      </Section>

      <Section id="memo" title="Memo Report" badge="09" classes="bg-neutral text-neutral-content">
        <div className="w-full rounded-lg overflow-hidden border border-neutral-content/20 bg-white">
          <object data="/assets/Memo%20Report%20-%20ETHAN%20PHAM.pdf" type="application/pdf" className="w-full h-[80vh]">
            <p className="p-4">
              PDF preview not supported.{' '}
              <a
                className="link"
                href="/assets/Memo%20Report%20-%20ETHAN%20PHAM.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Open Memo (PDF)
              </a>
            </p>
          </object>
        </div>
      </Section>

      <Section id="conclusion" title="Conclusion" badge="10" classes="bg-base-200 text-base-content">
        <p>
          Getting to where I am today wouldn't have been possible without the help and tutelage of my peers. I hope to
          further grow my communication skills and integrating AI into my work. By being able to perform these tasks I
          will be able to further my interests and others as well putting me ahead of the game. To remain on top, I will
          lead others, give my best efforts, and inspire others to do the same as me.
        </p>
      </Section>
    </main>
  )
}

function App() {
  return (
    <HashRouter>
      <ScrollToSection />
      <ParticlesBackground />
      <div className="min-h-screen bg-base-100 text-base-content">
        <Navbar />
        <Content />
        <Footer />
        <a href="#intro" className="btn btn-circle btn-primary fixed bottom-6 right-6" aria-label="Back to top">
          ↑
        </a>
      </div>
    </HashRouter>
  )
}

export default App

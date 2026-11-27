import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import WhatIDo from './components/sections/WhatIDo'
import Projects from './components/sections/Projects'
import Channels from './components/sections/Channels'
import CoursesCommunity from './components/sections/CoursesCommunity'
import LatestContent from './components/sections/LatestContent'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

// Sections render in page order. Their ids must match data/navigation.js for the navbar links.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <WhatIDo />
        <Projects />
        <Channels />
        <CoursesCommunity />
        <LatestContent />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

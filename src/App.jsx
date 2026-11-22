import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import WhatIDo from './components/WhatIDo'
import Projects from './components/Projects'
import Channels from './components/Channels'
import CoursesCommunity from './components/CoursesCommunity'
import LatestContent from './components/LatestContent'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
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

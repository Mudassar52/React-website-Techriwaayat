import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Industries from '../components/Industries'
import About from '../components/About'
import TechStack from '../components/TechStack'
import CTA from '../components/CTA'
import Process from '../components/Process'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Industries />
      <About />
      <TechStack />
      <CTA />
      <Process />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Home

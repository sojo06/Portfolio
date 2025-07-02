import React from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/skills'
import Education from '@/components/Education'
function Home() {
  return (
  
  <div className=" w-[100vw] h-[100vh] bg-black scroll-smooth overflow-x-hidden ">
    <Hero />
    <Services/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Education/>
  </div>
  
    

    
  )
}

export default Home
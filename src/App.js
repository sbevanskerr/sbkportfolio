import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
//Sam Bevans-Kerr

const App = () => {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <h1></h1>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App


import { useState } from 'react'

import globalStyle from './styles/global'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import SoftSkills from './components/SoftSkills'
import MyJobs from './components/MyJobs'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {

  { globalStyle() }

  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <SoftSkills />
      <MyJobs />
      <Timeline />
      <Footer />
    </>
  )
}

export default App

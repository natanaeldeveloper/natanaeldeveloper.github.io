import { useState } from 'react'

import globalStyle from './styles/global'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import SoftSkills from './components/SoftSkills'
import MyJobs from './components/MyJobs'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {

  { globalStyle() }

  return (
    <>
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

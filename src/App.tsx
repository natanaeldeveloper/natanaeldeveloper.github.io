import { useState } from 'react'

import globalStyle from './styles/global'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import SoftSkills from './components/SoftSkills'
import MyJobs from './components/MyJobs'

function App() {

  {globalStyle()}

  return (
    <>
      <Header />
      <AboutMe />
      <SoftSkills />
      <MyJobs />
    </>
  )
}

export default App

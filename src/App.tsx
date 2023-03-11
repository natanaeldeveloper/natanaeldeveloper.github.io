import { useState } from 'react'

import globalStyle from './styles/global'

import Header from './components/Header'
import AboutMe from './components/AboutMe'
import SoftSkills from './components/SoftSkills'

function App() {

  {globalStyle()}

  return (
    <>
      <Header />
      <AboutMe />
      <SoftSkills />
    </>
  )
}

export default App

import { useState } from 'react'

import globalStyle from './styles/global'

import Header from './components/Header'
import AboutMe from './components/AboutMe'


function App() {

  {globalStyle()}

  return (
    <>
      <Header />
      <AboutMe />
    </>
  )
}

export default App

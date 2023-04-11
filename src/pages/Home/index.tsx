import AboutMe from "./AboutMe"
import Header from "./Header"
import Navigation from "./Navigation"
import Projects from "./Projects"
import SoftSkills from "./SoftSkills"

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <SoftSkills />
      <Projects />
    </>
  )
}

export default Home
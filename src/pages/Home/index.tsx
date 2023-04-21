import AboutMe from "./AboutMe"
import Header from "./Header"
import Projects from "./Projects"
import SoftSkills from "./SoftSkills"
import Timeline from "./Timeline"

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <SoftSkills />
      <Projects />
      <Timeline />
    </>
  )
}

export default Home
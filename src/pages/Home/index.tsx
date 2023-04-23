import AboutMe from "./AboutMe"
import Footer from "./Footer"
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
      <Footer />
    </>
  )
}

export default Home
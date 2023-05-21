import AboutMe from "./AboutMe"
import Footer from "./Footer"
import Header from "./Header"
import Holdings from "./Holdings"
import Projects from "./Projects"
import SoftSkills from "./SoftSkills"
import Timeline from "./Timeline"

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <SoftSkills />
      {/* <Holdings /> */}
      <Projects />
      <Timeline />
      <Footer />
    </>
  )
}

export default Home
import AboutMe from "./AboutMe"
import Header from "./Header"
import Navigation from "./Navigation"
import SoftSkills from "./SoftSkills"

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
      <SoftSkills />
    </>
  )
}

export default Home
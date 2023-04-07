import AboutMe from "./AboutMe"
import Header from "./Header"
import Navigation from "./Navigation"

const Home: React.FC = () => {
  return (
    <>
      <Navigation />
      <Header />
      <AboutMe />
    </>
  )
}

export default Home
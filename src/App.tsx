import AboutUS from "./components/AboutUS"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <Hero/>
        <AboutUS/>
        <Skills/>
        <Experience/>
        <Education/>
        <Contact/>
      </main>
    </>
  )
}

export default App

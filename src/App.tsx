import AboutUS from "./components/AboutUS"
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
      </main>
    </>
  )
}

export default App

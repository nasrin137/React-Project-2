import Button from "./Components/Common/Button"
import SectionTitle from "./Components/Common/SectionTitle"
import Hero from "./Components/Home/Hero"
import ProblemSolution from "./Components/Home/ProblemSolution"
import Footer from "./Components/Shared/Footer"
import MobileMenu from "./Components/Shared/MobileMenu"
import Navbar from "./Components/Shared/Navbar"


function App() {
  

  return (
    <main className="font-nunito-sans bg-[url(Images/hero-bg.png)] min-h-svh bg-no-repeat bg-top">
      <Navbar></Navbar>
      <Hero></Hero>
      <ProblemSolution></ProblemSolution>
      <div className="min-h-[50svh]">
      <Footer></Footer>
      </div>
    </main>
  )
}

export default App

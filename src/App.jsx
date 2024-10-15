import Button from "./Components/Common/Button"
import SectionTitle from "./Components/Common/SectionTitle"
import FAQ from "./Components/Home/FAQ"
import Hero from "./Components/Home/Hero"
import Note from "./Components/Home/Note"
import Partner from "./Components/Home/Partner"
import ProblemSolution from "./Components/Home/ProblemSolution"
import Review from "./Components/Home/Review"
import Footer from "./Components/Shared/Footer"
import MobileMenu from "./Components/Shared/MobileMenu"
import Navbar from "./Components/Shared/Navbar"


function App() {
  

  return (
    <main className="font-nunito-sans bg-[url(Images/hero-bg.png)] min-h-svh bg-no-repeat bg-top">
      <Navbar></Navbar>
      <Hero></Hero>
      <ProblemSolution></ProblemSolution>
      <Review></Review>
      <Partner></Partner>
      <FAQ></FAQ>
      <Note></Note>
      <div className="min-h-[50svh]">
      <Footer></Footer>
      </div>
    </main>
  )
}

export default App

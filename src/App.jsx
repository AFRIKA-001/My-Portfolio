
import HeroSecton from "./components/HeroSection.jsx"
import AboutPage from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Skills from "./components/Skills.jsx"
import Contacts from "./components/Contacts.jsx"
import Footer from "./components/footer.jsx"
import RootLayout from "./components/RootLayout.jsx"
import Projects from "./components/projects.jsx"
import ErrorMessage from "./components/ErrorPage.jsx"

function App() {

  return (
    <>
   <div>
  <HeroSecton/>
 <AboutPage/>
  <Services/>
  <Skills/>
  <Contacts/>
  <Footer/>  

   </div>
 
      
    </>
  )
}

export default App

import { createBrowserRouter,RouterProvider } from "react-router-dom"


import NavigationBar from "./components/NavigationBar.jsx"
import HeroSecton from "./components/HeroSection.jsx"
import AboutPage from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Skills from "./components/Skills.jsx"
import Contacts from "./components/Contacts.jsx"
import Footer from "./components/footer.jsx"
import RootLayout from "./components/RootLayout.jsx"

const router = createBrowserRouter([

   {path:'/',
    element:<RootLayout/>,
    children:[
{path:'/', element:<HeroSecton/>},   
  {path:'/about', element:<AboutPage/>},
  {path:'/services', element:<Services/>},
  {path:'/skills', element:<Skills/>},
  {path:'/contacts', element:<Contacts/>},
  {path:'/footer', element:<Footer/>}
    ]

   }
  
  


])












function App() {

  return (
    <>
   <div>
 <RouterProvider router={router} />
{/* <NavigationBar/> */}
 {/* <HeroSecton/>
 <AboutPage/>
  <Services/>
  <Skills/>
  <Contacts/>
  <Footer/>  */}

   </div>
 
      
    </>
  )
}

export default App

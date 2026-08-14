import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import RootLayout from './RootLayout.jsx';
import ErrorMessage from './ErrorPage.jsx';
import AboutPage from './About.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Contacts from './Contacts.jsx';
import Footer from './footer.jsx';
import Projects from './projects.jsx';
import App from '../App.jsx';

 const  router = createBrowserRouter([

   {path:'/',
    element:<RootLayout/>,
    errorElement:<ErrorMessage/>,
    children:[
  {index:true, element:<App/>},
  {path:'/about', element:<AboutPage/>},
  {path:'/services', element:<Services/>},
  {path:'/skills', element:<Skills/>},
  {path:'/contacts', element:<Contacts/>},
  {path:'/footer', element:<Footer/>},
  {path:'/projects',element:<Projects/>},
  {path:'*', element:<ErrorMessage/>}
    ]

   }

]);

export default router

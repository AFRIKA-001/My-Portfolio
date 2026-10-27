import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Whatsapp from './Whatsapp.jsx'
import Footer from "./footer.jsx"
import Tawk from "./Tawk.jsx";

function RootLayout() {
  return (
    <div>
      <NavigationBar />

      <Outlet />
      <Whatsapp />
   
       <Footer/>
      <Whatsapp />
      <Tawk />
    </div>
  );
}

export default RootLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Whatsapp from "./Whatsapp.jsx";
import Footer from "./footer.jsx"

function RootLayout() {
  return (
    <div>
      <NavigationBar />

      <Outlet />
       <Footer/>
      <Whatsapp />
    </div>
  );
}

export default RootLayout;

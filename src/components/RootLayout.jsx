import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Whatsapp from "./Whatsapp.jsx";

function RootLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Whatsapp />
    </div>
  );
}

export default RootLayout;

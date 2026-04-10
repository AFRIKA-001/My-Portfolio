import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './footer.jsx'
function RootLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
       <Footer />
    </div>
  )
}

export default RootLayout

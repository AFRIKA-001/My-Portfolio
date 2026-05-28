import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Toaster position='top-center' reverseOrder={false} toastOptions={{
      duration:2000,
      style:{
        background:"#fff",
        color:"#000",
        height:"50%",
        width:"80%",
        border:"1px",
        borderRadius:"10px"
      }
    }} />
  </StrictMode>,
)

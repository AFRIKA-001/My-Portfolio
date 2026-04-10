// import jahaImg from '../public/jaha-logo.png'
// import { useState} from "react"
import { Link } from 'react-router-dom'

export default function NavigationBar() {
  
    const linkStyles = "rounded active:bg-stone-600 text-white hover:text-slate-50  transition-all duration-300 px-4 text-lg font-medium hover:bg-[#1E1E1E]"
    return <>
        <section
            className="fixed top-0 z-50 w-full h-15 bg-[#0a132b] flex items-center font-bold content-evenly ">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-lime-400 to-emerald-600 font-bold text-4xl p-8 from-cyan-500 to-indigo-600"><span className="text-5xl">G</span>abriel</h1>
            <ul className="flex  mx-auto gap-5 items-center  ">
                <li className={linkStyles} >
                    <Link to="/">Home</Link>
                </li>

                <li className={linkStyles}  >
                    <Link to="/about">About</Link>
                </li>
                <li className={linkStyles} >
                    <Link to="/services">Services</Link>
                </li>
                <li className={linkStyles} >
                    <Link to="/skills">Skills</Link>
                </li>
                <li className={linkStyles} >
                    <Link to="/projects">Project</Link>
                </li>
                <li className={linkStyles} >
                    <Link to="/contacts">Contacts</Link>
                </li>
                <button className=' hover:text-cyan-300 [bg-gradient-to-l from-cyan-500 to-indigo-600] bg-cyan-600 px-4 text-xl active:bg-red-900/10 rounded-2xl'>
              <Link to="/contacts">Resume</Link>
                </button>
            </ul>

        </section>




    </>
}
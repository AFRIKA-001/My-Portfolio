
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Changed MenuIcon to Menu

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const linkStyles = "rounded active:bg-stone-600 text-white hover:text-slate-50 transition-all duration-300 px-4 text-lg font-medium hover:bg-[#1E1E1E]";

    return (
        <header className="sticky top-0 z-50 w-full bg-[#0a132b] text-white">
            <div className="flex items-center justify-between px-8 h-20">
                {/* Logo */}
                <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600 font-bold text-2xl lg:text-4xl">
                    <Link to="/"><span className="text-2xl lg:text-5xl">G</span>abriel</Link>
                </h1>

                {/* Desktop Menu - Hidden on mobile */}
                <ul className="hidden lg:flex gap-5 items-center">
                    <li className={linkStyles}><Link to="/">Home</Link></li>
                    <li className={linkStyles}><Link to="/about">About</Link></li>
                    <li className={linkStyles}><Link to="/services">Services</Link></li>
                    <li className={linkStyles}><Link to="/skills">Skills</Link></li>
                     <li className={linkStyles}><Link to="/projects">Projects</Link></li>
                    <li className={linkStyles}><Link to="/contacts">Contacts</Link></li>
                    <button className='bg-cyan-600 hover:bg-cyan-500 px-4 py-1 text-xl rounded-2xl transition-colors'>
                        <Link to="/contacts">Resume</Link>
                    </button>
                </ul>

                {/* Mobile Toggle Button - Visible only on mobile */}
                <button 
                    onClick={toggleMenu} 
                    className="lg:hidden p-2 text-white"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <ul className="lg:hidden flex flex-col bg-[#0a132b] border-t border-slate-700 p-4 gap-4">
                    <li className={linkStyles} onClick={toggleMenu}><Link to="/">Home</Link></li>
                    <li className={linkStyles} onClick={toggleMenu}><Link to="/about">About</Link></li>
                    <li className={linkStyles} onClick={toggleMenu}><Link to="/services">Services</Link></li>
                    <li className={linkStyles} onClick={toggleMenu}><Link to="/skills">Skills</Link></li>
                    <li className={linkStyles} onClick={toggleMenu}><Link to="/projects">Projects</Link></li>
                    <li className={linkStyles} onClick={toggleMenu}><Link to="/contacts">Contacts</Link></li>
                    <button className='bg-cyan-600 text-white px-4 py-2 rounded-2xl'>
                        Resume
                    </button>
                </ul>
            )}
        </header>
    );
}




// // import jahaImg from '../public/jaha-logo.png'
// import { useState} from "react"
// import { Link } from 'react-router-dom'
// import { MenuIcon ,X } from 'lucide-react'

// export default function NavigationBar() {
//     const [isOpen, setIsOpen] = useState(false)

//     const handleToggle = () => {
//         setIsOpen(!isOpen)
//     }
    

//     const linkStyles = "rounded active:bg-stone-600 text-white hover:text-slate-50  transition-all duration-300 px-4 text-lg font-medium hover:bg-[#1E1E1E]"
//     return <>
//         <section
//             className="sticky  top-0 z-50  lg:h-15 bg-[#0a132b] lg:flex items-center font-bold content-evenly ">
//             <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-lime-400 to-emerald-600 font-bold text-xl lg:text-4xl p-8 from-cyan-500 to-indigo-600">
//                 <Link to="/"><span className=" text-2xl lg:text-5xl">G</span>abriel</Link></h1>
//             <ul className="flex  mx-auto gap-5 items-center ">
//                 <li className={linkStyles} >
//                     <Link to="/">Home</Link>
//                 </li>

//                 <li className={linkStyles}  >
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li className={linkStyles} >
//                     <Link to="/services">Services</Link>
//                 </li>
//                 <li className={linkStyles} >
//                     <Link to="/skills">Skills</Link>
//                 </li>
//                 <li className={linkStyles} >
//                     <Link to="/projects">Projects</Link>
//                 </li>
//                 <li className={linkStyles} >
//                     <Link to="/contacts">Contacts</Link>
//                 </li>
//                 <button className=' hover:text-cyan-300 [bg-gradient-to-l from-cyan-500 to-indigo-600] bg-cyan-600 px-4 text-xl active:bg-red-900/10 rounded-2xl'>
//               <Link to="/contacts">Resume</Link>
//                 </button>
//             </ul>    
//             <button className="lg:hidden" onClick={handleToggle}>
//                 {isOpen?<X />:<MenuIcon />}</button>   
              
//         </section>
    
//     </>


// }
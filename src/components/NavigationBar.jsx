import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";

import resume from "/gabriel_wafula_resume.pdf";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contacts" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

//linkStyles

  const linkStyles =
    "relative text-slate-900 hover:text-black transition-all duration-300 text-lg font-medium ";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-400 md:bg-transparent backdrop-blur-xl">

      <div className="max-w-8xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl lg:text-4xl font-bold tracking-wide"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-red-400 to-red-600">
            Gabriel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">

          { navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `${linkStyles} ${
                  isActive ? "focus:text-red-600" : "text-black hover:text-black"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Resume Button */}
          <a
            href={resume}
            download="gabriel_wafula_resume.pdf"
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-gray-600 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            <Download size={18} />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? (
            <X size={32} className="text-red-400" />
          ) : (
            <Menu  size={32} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-black backdrop-blur-xl">

          <nav className="flex flex-col px-6 py-6 space-y-5">

            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-lg font-medium transition ${
                    isActive
                      ? "text-red-600"
                      : "text-slate-300 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Resume Button */}
            <a
              href={resume}
              download="gabriel_wafula_resume.pdf"
              className="flex items-center  justify-center gap-2 mt-4  py-4 rounded-3xl bg-gray-700 hover:bg-gray-800 text-white font-semibold transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}









// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // Changed MenuIcon to Menu
// import resume from '/gabriel_wafula_resume.pdf'


// export default function NavigationBar() {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const linkStyles = "rounded active:bg-stone-600 text-white hover:text-slate-50 transition-all duration-300 px-4 text-lg font-medium hover:bg-[#1E1E1E] hover:underline";

//     return (
//         <header className="sticky top-0 z-50 w-full  text-white bg-white/10 backdrop-blur-md border-b border-white/20">
//             <div className="flex items-center justify-between px-8 h-20">
//                 {/* Logo */}
//                 <h1 className="text-transparent font-serif animate-pulse bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600 font-bold text-2xl lg:text-4xl">
//                     <Link to="/"><span className="text-2xl lg:text-5xl ">G</span>abriel</Link>
//                 </h1>

//                 {/* Desktop Menu - Hidden on mobile */}
//                 <ul className="hidden lg:flex gap-5 items-center">
//                     <li className={linkStyles}><Link  to="/" >Home</Link></li>
//                     <li className={linkStyles}><Link  to="/about">About</Link></li>
//                     <li className={linkStyles}><Link  to="/services">Services</Link></li>
//                     <li className={linkStyles}><Link  to="/skills">Skills</Link></li>
//                      <li className={linkStyles}><Link  to="/projects">Projects</Link></li>
//                     <li className={linkStyles}><Link   to="/contacts">Contacts</Link></li>
//                     <button className='bg-cyan-600 hover:bg-cyan-500 px-4 py-1 text-xl rounded-2xl transition-colors'>
//                         <a href='resume' download='gabriel-wafula_resume.pdf'>Resume</a>
//                     </button>
//                 </ul>

//                 {/* Mobile Toggle Button - Visible only on mobile */}
//                 <button 
//                     onClick={toggleMenu} 
//                     className="lg:hidden p-2 text-white"
//                     aria-label="Toggle Menu"
//                 >
//                     {isOpen ? <X className='text-red-600' size={32} /> : <Menu size={32} />}
//                 </button>
//             </div>

//             {/* Mobile Menu Dropdown */}
//             {isOpen && (
//                 <ul className="lg:hidden flex flex-col bg-[#070606] border-t border-slate-700 p-4 gap-4">
//                     <li className={linkStyles} onClick={toggleMenu}><Link  to="/">Home</Link></li>
//                     <li className={linkStyles} onClick={toggleMenu}><Link  to="/about">About</Link></li>
//                     <li className={linkStyles} onClick={toggleMenu}><Link  to="/services">Services</Link></li>
//                     <li className={linkStyles} onClick={toggleMenu}><Link to="/skills">Skills</Link></li>
//                     <li className={linkStyles} onClick={toggleMenu}><Link  to="/projects">Projects</Link></li>
//                     <li className={linkStyles} onClick={toggleMenu}><Link to="/contacts">Contacts</Link></li>
//                     <button className='bg-cyan-600 cursor-pointer active:bg-cyan-800 text-white px-4 py-2 rounded-2xl active:scale-90'>
//                         <a href={resume} download='gabriel_wafula_resume.pdf'>Resume</a>
//                     </button>
//                 </ul>
//             )}
//         </header>
//     );
//  }



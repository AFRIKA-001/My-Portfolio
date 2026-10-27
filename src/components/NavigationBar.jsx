import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, FileDown } from "lucide-react";
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        
        {/* 1. Sleek Minimal Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 transition hover:opacity-80">
          Gabriel<span className="text-slate-400 font-light">.dev</span>
        </Link>

        {/* 2. Desktop Navigation Layout */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition-colors duration-200 py-1.5 ${
                  isActive
                    ? "text-slate-900 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Premium Desktop CTA Button */}
          <a
            href={resume}
            download="gabriel_wafula_resume.pdf"
            className="flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 active:scale-[0.98]"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>
        </nav>

        {/* 3. Corrected Mobile Menu Button (Synced Breakpoint with Nav) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 md:hidden transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* 4. Elegant Clean Mobile Overlay Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full border-b border-slate-200 bg-white/95 px-6 py-6 shadow-lg backdrop-blur-lg md:hidden animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors duration-150 ${
                    isActive ? "text-slate-900 font-semibold" : "text-slate-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA Button */}
            <a
              href={resume}
              download="gabriel_wafula_resume.pdf"
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200"
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

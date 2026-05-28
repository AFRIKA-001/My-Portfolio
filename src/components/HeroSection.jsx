import htmlImage from "/HtmlImageIcon.svg";
import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 py-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="w-full  mx-auto text-center">

        {/* Profile/Icon */}
        <img
          className="h-40 w-40 lg:h-56 lg:w-56 mx-auto mb-10 invert animate-pulse drop-shadow-2xl"
          src={htmlImage}
          alt="Developer illustration"
        />

        {/* Small Intro */}
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm lg:text-base mb-4 font-semibold">
          Frontend Developer • Kenya
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-500">
            Shikuku Gabriel
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          I build modern, responsive, and interactive,installable web applications using{" "}
          <span className="text-white font-semibold">
            React.js, Next.js, JavaScript, Tailwind CSS,supabase
          </span>{" "}
          and frontend best practices.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">

          <Link
            to="/projects"
            className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:scale-105"
          >
            View Projects
          </Link>

          <Link
            to="/contacts"
            className="px-8 py-4 rounded-2xl border border-slate-600 hover:border-cyan-400 text-slate-200 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </Link>
        </div>

        {/* Tech Stack Pills */}
         <div className="mt-14 flex flex-wrap justify-center gap-4">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "supabase"
          ].map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div> 
      </div>
    </section>
  );
}
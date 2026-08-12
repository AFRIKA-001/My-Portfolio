import { Link } from "react-router-dom";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen mt-20">
      
     
      <div className=" text-center">


        {/* Small Intro */}
        <p className="uppercase tracking-[0.3em] text-slate-950 text-sm md:text-base mb-4 font-semibold">
          Software Engineer • Kenya
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight ">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-red-400 to-red-600">
            Shikuku Gabriel
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-slate-900 leading-relaxed max-w-3xl mx-auto">
          I build modern, responsive, and interactive,installable web applications using{" "}
          <span className="text-red-600 font-semibold ">
            React.js, Next.js, JavaScript, Tailwind CSS,supabase,node.js,express,RestAPIs,PostgreSQL
          </span>{" "}
          and frontend best practices.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex items-center justify-center gap-5">

          <Link
            to="/projects"
            className="px-8 py-4 rounded-2xl border bg-slate-600 hover:border-white-400/10 hover:bg-black transition-all duration-300 text-white font-semibold shadow-lg shadow-slate-700 hover:scale-105"
          >
            View Projects
          </Link>

          <Link
            to="/contacts"
            className="px-8 py-4 rounded-2xl border bg-slate-600 hover:bg-black  text-slate-200 hover:text-white transition-all duration-300 shadow-lg shadow-slate-700 hover:scale-105"
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
          ].map((tech,i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div> 
      </div>
    </section>
  );
}
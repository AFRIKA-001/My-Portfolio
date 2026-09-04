import { Link } from "react-router-dom";
import { ArrowRight, Mail, Code2, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  const techStack = [
    { name: "React / Next.js", type: "frontend" },
    { name: "TypeScript", type: "language" },
    { name: "Node.js / Express", type: "backend" },
    { name: "PostgreSQL", type: "database" },
    { name: "Supabase", type: "backend" },
    { name: "Tailwind CSS", type: "frontend" },
    { name: "REST APIs", type: "architecture" }
  ];

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-white px-6 py-20 md:px-12">
      
      {/* 1. Professional Background Grid & Ambient Glow */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-blue-50/70 blur-3xl" />
      <div className="absolute top-20 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-slate-100/80 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        
        {/* 2. Live Availability Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/60 px-3.5 py-1.5 text-xs font-medium text-emerald-800 shadow-sm backdrop-blur-sm animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Available for full-time roles & contracts
        </div>

        {/* Small Intro */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 md:text-sm">
          Software Engineer • Kenya
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
          Hi, I'm <span className="relative inline-block text-black">
            Shikuku Gabriel
            <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-blue-100/60 md:h-4" />
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
          I design and deploy production-ready, performant, and installable web applications. Turning complex architectural problems into seamless user experiences.
        </p>

        {/* 3. Action Buttons with Context Icons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/projects"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-slate-800 hover:shadow-xl active:scale-[0.98] sm:w-auto"
          >
            <span>Explore My Work</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/contacts"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] sm:w-auto"
          >
            <Mail className="h-4 w-4 text-slate-400" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* 4. Segmented Core Architecture Tags */}
        <div className="mt-20 border-t border-slate-100 pt-10">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <Code2 className="h-4 w-4 text-slate-300" />
            <span>Validated Tech Stack & Ecosystem</span>
          </div>
          
          <div className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="group flex items-center gap-1.5 rounded-xl border border-slate-100 bg-slate-50/50 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-md"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-blue-500" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import ProfilePic from "/output.jpg";
import { Terminal, Award, BookOpen, GraduationCap } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    { icon: <GraduationCap className="h-5 w-5 text-slate-700" />, title: "Education", desc: "Computer Science Major" },
    { icon: <Terminal className="h-5 w-5 text-slate-700" />, title: "Focus", desc: "Full-Stack Web Apps" },
    { icon: <BookOpen className="h-5 w-5 text-slate-700" />, title: "Philosophy", desc: "Project-Driven Learning" }
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:py-32">
      
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 right-0 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-slate-50 blur-3xl" />

      {/* Heading */}
      <div className="text-center mb-16 md:mb-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 md:text-sm">
          Get To Know Me
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          About <span className="text-black">Me</span>
        </h1>
      </div>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        
        {/* 1. Enhanced Image and Experience Metric Cards */}
        <div className="lg:col-span-5 flex flex-col items-center gap-6">
          <div className="relative group">
            {/* Structural Accent Border Behind Image */}
            <div className="absolute -inset-2 rounded-2xl bg-slate-100 transition duration-300 group-hover:bg-slate-200/70" />
            <img
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-md"
              src={ProfilePic}
              alt="Gabriel Gabriel Profile"
              loading="lazy"
            />
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-md mt-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/50 p-3 text-center shadow-xs">
                {item.icon}
                <span className="mt-2 block text-xs font-semibold text-slate-900">{item.title}</span>
                <span className="mt-0.5 block text-[10px] text-slate-400 leading-tight">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Structured Narrative Content */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl mb-6">
            Computer Science Student & Full-Stack Engineer
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              Hi! I'm <span className="font-semibold text-slate-900">Gabriel</span>, 
              a software engineer based in Kenya driven by the challenge of architecting modular, scalable, and responsive web ecosystems.
            </p>

            <p>
              My engineering philosophy relies heavily on{" "}
              <span className="font-medium text-slate-900">project-first execution</span>. 
              Instead of theoretical abstraction, I value building real software solutions to untangle complex client-side performance hurdles and data workflows.
            </p>

            <p>
              Outside of building interfaces with React, I dedicate time to mapping relational schema architectures, managing cloud database endpoints via Supabase, and researching web application security vector hardening.
            </p>
          </div>

          {/* Clean Sub-skill Pills */}
          <div className="mt-10 border-t border-slate-100 pt-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-center lg:justify-start gap-2">
              <Award className="h-4 w-4 text-slate-300" />
              <span>Core Core Proficiencies</span>
            </h3>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                "React.js",
                "Next.js",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "PostgreSQL",
                "Supabase"
              ].map((skill, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-xs transition hover:border-slate-400 hover:text-slate-900"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

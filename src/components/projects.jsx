import { ExternalLink, Github, Terminal, AlertCircle } from "lucide-react";
import JahaFoodsImg from "/JahaFoods.jpg";
import JahaShoe from "/JahaShoes.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Jaha Premium Foods",
      img: JahaFoodsImg,
      description:
        "A full-stack, real-time food delivery application engineered to support dynamic ordering systems and fast menu caching workflows.",
      challenge: "Synchronizing high-frequency cart states across disparate viewports without causing excessive DOM re-renders.",
      solution: "Implemented central state architecture hooks combined with multi-tier component rendering strategies.",
      tech: ["React.js", "Tailwind CSS", "Supabase BaaS", "REST APIs"],
      live: "https://food-delivery-store-iota.vercel.app",
      git: "https://github.com/AFRIKA-001/Food-Delivery-Store"
    },
    {
      title: "Jaha Fashion Platform",
      img: JahaShoe,
      description:
        "An optimized, high-fidelity apparel e-commerce system featuring seamless view transitions, robust auth safeguards, and inventory arrays.",
      challenge: "Managing atomic cart data updates across complex routes while avoiding database read/write lag overhead.",
      solution: "Decoupled persistent local data storage hooks alongside low-latency database queries via Supabase.",
      tech: ["React.js", "Tailwind CSS", "Supabase DB", "Framer Motion"],
      live: "https://shoe-cloathing-store.vercel.app/",
      git: "https://github.com/AFRIKA-001/Shoe-Cloathing-Store"
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:py-32">
      
      {/* Visual Separation Accent Divider */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 md:text-sm">
          Case Studies
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Production <span className="text-black">Projects</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          A showcase of full-stack engineering work, highlighting algorithmic problem-solving and clean system performance.
        </p>
      </div>

      {/* Projects Grid Layout */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-100 bg-black transition-all duration-300 hover:border-slate-300 hover:shadow-xl"
          >
            {/* Project Banner Visual Wrapper */}
            <div>
              <div className="overflow-hidden border-b border-slate-100 bg-black">
                <img
                  className="w-full h-64 object-cover opacity-95 transition-transform duration-500 group-hover:scale-102 group-hover:opacity-100"
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              {/* Core Content Shell */}
              <div className="p-8">
                <h2 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm leading-relaxed text-slate-500 mb-6">
                  {project.description}
                </p>

                {/* Professional Case Study Callouts */}
                <div className="mb-6 space-y-3 rounded-xl bg-slate-50 p-4 border border-slate-100/60">
                  <div className="flex gap-2.5 items-start">
                    <AlertCircle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-normal">
                      <span className="font-semibold text-slate-900">Engineering Challenge:</span> {project.challenge}
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-start border-t border-slate-200/50 pt-2.5">
                    <Terminal className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-normal">
                      <span className="font-semibold text-slate-900">Architecture Solution:</span> {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Clean Secondary/Primary Visual Link System */}
            <div className="flex gap-3 px-8 pb-8 pt-2">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl bg-slate-950 px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-slate-800 active:scale-[0.98]"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </a>
              <a
                href={project.git}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98]"
              >
                <Github size={14} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

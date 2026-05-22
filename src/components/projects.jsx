import { ExternalLink, Github } from "lucide-react";
import JahaFoodsImg from "../../public/JahaFoods.jpg";
import JahaShoe from "../../public/JahaShoes.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Jaha Foods",
      img: JahaFoodsImg,

      description:
        "A modern food delivery application built with React.js, Tailwind CSS, and Supabase for authentication and backend data management.",

      tech: ["React.js", "Tailwind CSS", "Supabase"],

      live: "https://jaha-foods-store.vercel.app",
    },

    {
      title: "Jaha Shoes",
      img: JahaShoe,

      description:
        "A fashion e-commerce platform featuring responsive layouts, smooth animations, and secure authentication using modern frontend technologies.",

      tech: [
        "React.js",
        "Tailwind CSS",
        "Supabase",
        "Framer Motion",
      ],

      live: "https://shoe-cloathing-store.vercel.app/",
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-4">
          Portfolio
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-white">
          Latest{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Projects
          </span>
        </h1>

        <p className="mt-8 text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Here are some of the real-world applications I’ve built using modern
          frontend technologies and backend services.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-3 shadow-2xl"
          >

            {/* Project Image */}
            <div className="overflow-hidden">
              <img
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                src={project.img}
                alt={project.title}
              />
            </div>

            {/* Content */}
            <div className="p-8">

              {/* Title */}
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm hover:border-cyan-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
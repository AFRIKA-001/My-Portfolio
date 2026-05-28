import ReactIcon from "/react.svg";
import NextIcon from "/nextdotjs.svg";
import TailwindIcon from "/tailwindcss.svg";
import GitIcon from "/git.svg";
import GithubIcon from "/github.svg";
import LinuxIcon from "/linux.svg";
import postgresqlIcon from "/postgresql.svg";
import MySQLIcon from "/mysql.svg";
import supabaseIcon from "/supabase.svg";

export default function Skills() {
  const skills = [
    {
      name: "React.js",
      icon: ReactIcon,
      invert: true,
    },

    {
      name: "Next.js",
      icon: NextIcon,
      invert: true,
    },

    {
      name: "Tailwind CSS",
      icon: TailwindIcon,
      invert: true,
    },

    {
      name: "Git",
      icon: GitIcon,
      invert: true,
    },

    {
      name: "GitHub",
      icon: GithubIcon,
      invert: true,
    },

    {
      name: "Linux",
      icon: LinuxIcon,
      invert: true,
    },
    {
      name: "PostgreSQL",
      icon: postgresqlIcon,
      invert: true,
    },
    {
      name: "MySQL",
      icon: MySQLIcon,
      invert: true,
    },
    {
      name: "Supabase",
      icon: supabaseIcon,
      invert: true,
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
      </div>

      {/* Heading */}
      <div className="text-center mb-20">
        <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-4">
          My Tech Stack
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold text-white">
          Technical{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
            Skills
          </span>
        </h1>

        <p className="mt-8 text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Here are some of the technologies and tools I use to build modern,
          scalable, and high-performance web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-5 h-40 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400 hover:-translate-y-3 transition-all duration-300 shadow-xl"
          >
            {/* Icon */}
            <img
              className={`w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110 ${
                skill.invert ? "invert" : ""
              }`}
              src={skill.icon}
              alt={skill.name}
            />

            {/* Skill Name */}
            <h3 className="text-white text-xl lg:text-2xl font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

import ReactIcon from "/react.svg";
import NextIcon from "/nextdotjs.svg";
import TailwindIcon from "/tailwindcss.svg";
import GitIcon from "/git.svg";
import GithubIcon from "/github.svg";
import LinuxIcon from "/linux.svg";
import postgresqlIcon from "/postgresql.svg";
import MySQLIcon from "/mysql.svg";
import supabaseIcon from "/supabase.svg";

// 1. Structural categorization mapping for scannability
const skillCategories = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", icon: ReactIcon },
      { name: "Next.js", icon: NextIcon },
      { name: "JavaScript", icon: null },
      { name: "Tailwind CSS", icon: TailwindIcon },
      { name: "HTML5 / CSS3", icon: null },
      { name: "EJS Templates", icon: null },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: null },
      { name: "Express.js", icon: null },
      { name: "PostgreSQL", icon: postgresqlIcon },
      { name: "MySQL", icon: MySQLIcon },
      { name: "Supabase", icon: supabaseIcon },
      { name: "SQL Architecture", icon: null },
    ],
  },
  {
    title: "DevOps, APIs & Security",
    skills: [
      { name: "RESTful APIs", icon: null },
      { name: "JWT Auth", icon: null },
      { name: "Git Control", icon: GitIcon },
      { name: "GitHub Platform", icon: GithubIcon },
      { name: "Linux Systems", icon: LinuxIcon },
      { name: "Postman Testing", icon: null },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:py-32">
      
      {/* Structural Accent Border Divider Line */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 md:text-sm">
          Technical Inventory
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Tech Stack & <span className="text-black">Ecosystem</span>
        </h1>

        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          A granular view of systems, languages, and frameworks I use to develop cross-platform digital assets.
        </p>
      </div>

      {/* Structured Categorized Skill Grid */}
      <div className="mx-auto max-w-6xl space-y-16">
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            
            {/* Category Title Marker */}
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-3">
              {category.title}
            </h2>

            {/* Sub-Grid for Individual Skill Blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-5 min-h-[110px] rounded-xl border border-slate-100 bg-gray-600 text-center transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-md"
                >
                  {/* Icon Render Guard (Uses neat fallback frame if custom SVG isn't mapped) */}
                  {skill.icon ? (
                    <img
                      className="w-7 h-7 object-contain opacity-70 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-100 grayscale hover:grayscale-0"
                      src={skill.icon}
                      alt={skill.name}
                    />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-slate-950 transition-colors" />
                  )}

                  {/* Skill Label */}
                  <span className="mt-3 text-xs font-semibold text-slate-700 tracking-tight transition-colors group-hover:text-slate-900">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import {
    Code2,
    MonitorSmartphone,
    Rocket,
    ShieldCheck,
  } from "lucide-react";
  
  export default function Services() {
    const services = [
      {
        icon: <Code2 size={40} />,
        title: "Frontend Development",
        description:
          "Building modern, responsive, and interactive user interfaces using React.js, Next.js, and Tailwind CSS.",
      },
  
      {
        icon: <MonitorSmartphone size={40} />,
        title: "Responsive Web Design",
        description:
          "Creating fully responsive websites that work seamlessly across mobile, tablet, and desktop devices.",
      },
  
      {
        icon: <Rocket size={40} />,
        title: "Performance Optimization",
        description:
          "Optimizing websites for speed, SEO, accessibility, and smooth user experiences.",
      },
  
      {
        icon: <ShieldCheck size={40} />,
        title: "Secure & Scalable Apps",
        description:
          "Developing scalable web applications with modern best practices and security-focused architecture.",
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
            What I Do
          </p>
  
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Services
            </span>
          </h1>
  
          <p className="mt-8 text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I build fast, scalable, and interactive web applications with modern
            technologies focused on performance, responsiveness, and user
            experience.
          </p>
        </div>
  
        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
  
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 shadow-xl"
            >
  
              {/* Icon */}
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
  
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h2>
  
              {/* Description */}
              <p className="text-slate-300 leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
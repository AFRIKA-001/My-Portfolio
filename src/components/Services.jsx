import {
  Code2,
  Cpu,
  Gauge,
  Layers,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 className="h-6 w-6 text-slate-700" />,
      title: "Frontend Engineering",
      description:
        "Architecting complex, responsive web interfaces using React, Next.js, and Tailwind CSS built around performance.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-slate-700" />,
      title: "Full-Stack System Design",
      description:
        "Building server environments, relational database structures, and backend endpoints using Node.js and Supabase.",
    },
    {
      icon: <Layers className="h-6 w-6 text-slate-700" />,
      title: "API & Data Integration",
      description:
        "Designing scalable RESTful architecture layers to connect user interfaces with structured external data stores.",
    },
    {
      icon: <Gauge className="h-6 w-6 text-slate-700" />,
      title: "Performance Optimization",
      description:
        "Audit strategies focusing on web vitals, server-side asset loading, security configurations, and fluid user patterns.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:py-32">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 md:text-sm">
          Expertise & Capabilities
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          What I <span className="text-black">Deliver</span>
        </h1>

        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          I build maintainable software blueprints backed by solid state control, low application overhead, and resilient infrastructure.
        </p>
      </div>

      {/* Services Responsive Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-2xl border border-slate-100 bg-slate-50/40 p-8 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-lg"
          >
            {/* Visual Anchor Indicator Top Corner */}
            <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-slate-200 group-hover:text-slate-400 transition-colors">
              0{index + 1}
            </div>

            {/* Icon Container */}
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-slate-100 shadow-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-500 group-hover:text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

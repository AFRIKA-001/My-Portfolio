import ProfilePic from "/output.jpg";

export default function AboutPage() {
  return (
    <section className="relative px-6 py-4 overflow-hidden min-h-screen">

    

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Get To Know Me
        </p>

        <h1 className="text-5xl lg:text-7xl font-bold ">
          About{" "}
          <span className="text-transparent bg-clip-text bg-black">
            Me
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
              src={ProfilePic}
              alt="Gabriel profile"
              loading="lazy"
            />
          </div>
        </div>

        {/* About Text */}
        <div className="text-center lg:text-left">

          <h2 className="text-3xl lg:text-4xl font-bold  leading-tight mb-6">
            Computer Science Student & MERN Stack Developer
          </h2>

          <p className="text-slate-900 text-lg leading-relaxed mb-6">
            Hi! I'm <span className="text-black font-semibold">Gabriel</span>,
            a self-driven Engineer passionate about building modern,
            responsive, and user-friendly web applications.
          </p>

          <p className="text-slate-900 text-lg leading-relaxed mb-6">
            My development philosophy is centered around{" "}
            <span className="text-black font-semibold">
              project-based learning
            </span>
            . I believe the best way to master technologies like React and the
            MERN stack is by solving real-world problems and continuously
            improving through hands-on experience.
          </p>

          <p className="text-slate-900 text-lg leading-relaxed">
            Beyond frontend development, I enjoy exploring{" "}
            <span className="text-black font-semibold">
              web performance, backend systems, and cybersecurity
            </span>{" "}
            to ensure the applications I build are secure, optimized, and
            scalable.
          </p>

          {/* Skills */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">

            {[
              "React.js",
              "Next.js",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "PostgreSQL",
            ].map((skill,i) => (
              <span
                key={i}
                className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
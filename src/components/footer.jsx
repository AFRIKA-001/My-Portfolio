import { Github, Linkedin, Instagram, MessageSquareCode } from "lucide-react";

export default function Footer() {
  // Swapped out react-icons for unified lucide-react anchors
  const socialLinks = [
    {
      icon: <Linkedin size={18} />,
      link: "https://www.linkedin.com/in/gabriel-wafula",
      label: "LinkedIn Profile",
    },
    {
      icon: <Github size={18} />,
      link: "https://github.com/AFRIKA-001",
      label: "GitHub Repositories",
    },
    {
      icon: <MessageSquareCode size={18} />,
      link: "https://wa.me/254714058073",
      label: "WhatsApp Chat",
    },
    {
      icon: <Instagram size={18} />,
      link: "https://www.instagram.com/ddyscot_jatelo/",
      label: "Instagram Profile",
    },
  ];

  return (
    <footer className="relative bg-black border-t border-slate-100 mt-20">
      
      {/* Structural Width Framework */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
        
        {/* Top Grid Layer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-100 pb-8">
          
          {/* Identity Block */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold tracking-tight text-white">
              Shikuku Gabriel
            </h2>
            <p className="text-xs leading-relaxed text-slate-500 mt-1.5 max-w-sm">
              Full-Stack Engineer specialized in developing performant, modular web ecosystems and relational database structures.
            </p>
          </div>

          {/* Clean Action Channels */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-slate-50/50 transition-all duration-200 hover:border-slate-300 hover:bg-white hover:text-slate-900 hover:shadow-sm active:scale-[0.96]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Rights Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-[11px] font-medium text-slate-400">
            &copy; {new Date().getFullYear()} Shikuku Gabriel. All rights reserved.
          </p>
          <p className="text-[10px] font-mono font-bold text-slate-300">
            Built with React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

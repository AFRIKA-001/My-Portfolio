

import {
    BsInstagram,
    BsLinkedin,
    BsGithub,
    BsWhatsapp,
  } from "react-icons/bs";
  
  export default function Footer() {
    const socialLinks = [
      {
        icon: <BsInstagram />,
        link: "https://www.instagram.com/ddyscot_jatelo/",
        color: "hover:text-pink-500",
      },
  
      {
        icon: <BsLinkedin />,
        link: "https://www.linkedin.com/in/gabriel-wafula",
        color: "hover:text-blue-500",
      },
  
      {
        icon: <BsGithub />,
        link: "https://github.com/AFRIKA-001",
        color: "hover:text-white",
      },
  
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/254714058073",
        color: "hover:text-green-500",
      },
    ];
  
    return (
      <footer className="relative border-t bg-black border-slate-800 mt-24">
  
        <div className="max-w-6xl mx-auto px-6 py-10">
  
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
  
            {/* Branding */}
            <div className="text-center md:text-left">
  
              <h2 className="text-2xl font-bold text-red-600 ">
                Shikuku Gabriel
              </h2>
  
              <p className="text-slate-50 mt-2 max-w-md">
                Software Engineer focused on building modern,
                responsive, and scalable fullstack web applications.
              </p>
            </div>
  
            {/* Social Links */}
            <div className="flex items-center gap-5">
  
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl text-slate-300 text-xl transition-all duration-300 hover:-translate-y-2 bg-linear-to-br from-black via-slate-600 to-slate-600 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className=" border-t border-slate-800 mt-10 pt-6 text-center">
  
            <p className="text-slate-500 text-sm lg:text-base">
              © 2026 Shikuku Gabriel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }







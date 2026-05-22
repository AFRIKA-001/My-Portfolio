

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
      <footer className="relative border-t border-slate-800 mt-24">
  
        {/* Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[400px] h-[200px] bg-cyan-500/10 blur-3xl"></div>
        </div>
  
        <div className="max-w-6xl mx-auto px-6 py-10">
  
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
  
            {/* Branding */}
            <div className="text-center md:text-left">
  
              <h2 className="text-2xl font-bold text-white">
                Shikuku Gabriel
              </h2>
  
              <p className="text-slate-400 mt-2 max-w-md">
                Frontend Developer focused on building modern,
                responsive, and scalable web applications.
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
                  className={`p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 text-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-10 pt-6 text-center">
  
            <p className="text-slate-500 text-sm lg:text-base">
              © 2026 Shikuku Gabriel. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }













// // import  {Instagram,Linkedin,Github} from "lucide-react"
// import { BsInstagram, BsLinkedin,BsGithub,BsWhatsapp} from "react-icons/bs"



// export default function Footer (){
//     return(
//     <>
//    <footer>

// <div className="flex gap-4 justify-center mb-4 items-center text-sm lg:text-xl">
//     <p className="text-white/60  lg:text-xl">@2026 Shikuku Gabriel.All rights reserved.</p>
//     <a className="text-pink-600" href="https://www.instagram.com/ddyscot_jatelo/" target="_blank" rel="noopener noreferrer"> <  BsInstagram/> </a>
//     <a className="text-blue-700 " href="https://www.linkedin.com/in/gabriel-wafula" target="_blank" rel="noopener noreferrer"> <BsLinkedin/></a>
//     <a className='invert' href="https://github.com/AFRIKA-001" target="_blank" rel="noopener noreferrer"><BsGithub/> </a>
//     {/* <a className="text-green-500 flex items-center" ><BsWhatsapp/>-0714058073</a> */}

//    </div>

//    </footer>
   



    
//     </>
// )}
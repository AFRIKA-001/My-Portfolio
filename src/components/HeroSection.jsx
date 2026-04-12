import ProfImg from "../public/my-face.png"
import { Link } from "react-router-dom"

export default function HeroSecton(){
    return<>
    <section className="text-2xl text-center flex flex-col justify-center my-4 lg:mb-20">
         <img className="h-60 w-60 flex mx-auto  lg:my-1 rounded-full aspect-square object-cover" src={ProfImg} alt="" />
  <strong><h1 className="lg:text-4xl text-slate-50 leading-relaxed font-serrif">Hi,I'm <span className="font-bold text-xl lg:text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600"> Shikuku Gabriel</span>,a Frontend Developer based in Kenya. </h1></strong> 
   <p className="text-emerald-100 leading-relaxed lg:text-3xl">I am a junior frontend developer from Nairobi,Kenya dealing with <span className="text-white">HTML,CSS,JavaScript ,React.js,Next.js and Tailwindcss</span> </p>
   {/* <div className="p-20  space-x-9">
    <button className="rounded-xl bg-slate-400 font-bold hover:text-slate-50 hover:bg-black/50  active:bg-[#1E1B4B] bg-gradient-to-r from-cyan-100 to-emerald-200 from-cyan-500 to-indigo-600">
     <Link to="/contacts">connect with me</Link>
    </button>
    <button className="rounded-xl bg-slate-400 hover:bg-black/50 font-bold hover:text-slate-50 transition-all active:bg-[#1E1B4B] border border-white/30 ">my Resume</button>
   </div> */}
    </section>
   
   </>
} 
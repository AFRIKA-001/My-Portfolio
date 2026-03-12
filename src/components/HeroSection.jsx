import ProfImg from "../public/profile.png"

export default function HeroSecton(){
    return<>
    <section className="text-2xl text-center my-25">
         <img className="h-40 w-60 flex mx-auto mb-8 my-16 object-contain rounded-4xl" src={ProfImg} alt="" />
  <strong><h1 className="text-4xl text-slate-50 leading-relaxed font-serrif">Hi,I'm <span className="font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#B82FF6] to-[#EE8425]"> Shikuku Gabriel</span>,a Frontend Developer based in Kenya. </h1></strong> 
   <p className="text-emerald-100 text-3xl">I am a junior frontend developer from Nairobi,Kenya dealing with <span className="text-white">html,css,js ,react.js,next.js and tailwindcss</span> </p>
   <div className="p-20  space-x-9">
    <button className="rounded-xl bg-slate-400 font-bold hover:text-slate-50 hover:bg-black/50  active:bg-[#1E1B4B] bg-gradient-to-r from-[#B82FF6] to-[#EE8425]">connect with me</button>
    <button className="rounded-xl bg-slate-400 hover:bg-black/50 font-bold hover:text-slate-50 transition-all active:bg-[#1E1B4B] border border-white/30">my Resume</button>
   </div>
    </section>
   
   </>
} 
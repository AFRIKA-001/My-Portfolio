import  htmlImage from '../../public/HtmlImageIcon.svg'
import { Link } from "react-router-dom"


export default function HeroSecton(){
    return<>
    <section  className="text-2xl text-center flex flex-col justify-center my-4  lg:mb-40">
         <img className=" h-50 lg:h-60 w-50 lg:w-60 flex mx-auto mb-10  invert animate-pulse" src={htmlImage} alt="profile image" />
  <h1 className="lg:text-4xl text-slate-50 leading-relaxed font-serif">Hi,I'm <span className="font-bold  text-2xl lg:text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-600"> Shikuku Gabriel</span>,a Frontend Developer based in Kenya. </h1>
   <p className="text-emerald-100 font-serif leading-relaxed lg:text-3xl pb-30 lg:pb-4">I am a junior frontend developer from Nairobi,Kenya dealing with <span className="text-white">HTML,CSS,JavaScript ,React.js,Next.js and Tailwindcss</span> </p>

    </section>
   
   </>
} 
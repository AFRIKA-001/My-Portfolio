// import  {Instagram,Linkedin,Github} from "lucide-react"
import { BsInstagram, BsLinkedin,BsGithub,BsWhatsapp} from "react-icons/bs"



export default function Footer (){
    return(
    <>
   <footer>

<div className="flex gap-4 justify-center my-10 ">
    <p className="text-white/60">@2026 Shikuku Gabriel.All rights reserved.</p>
    <a className="text-pink-600" href="https://www.instagram.com/ddyscot_jatelo/"> <  BsInstagram/> </a>
    <a className="text-blue-700 " href="https://www.linkedin.com/in/gabriel-wafula-7490313b5/"> <BsLinkedin/></a>
    <a className='invert' href="https://github.com/AFRIKA-001?tab=overview&from=2026-03-01&to=2026-03-13"><BsGithub/> </a>
    <a className="text-green-500 flex" ><BsWhatsapp/>-0714058073</a>

   </div>

   </footer>
   



    
    </>
)}
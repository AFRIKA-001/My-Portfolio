// import  {Instagram,Linkedin,Github} from "lucide-react"
import { BsInstagram, BsLinkedin,BsGithub,BsWhatsapp} from "react-icons/bs"



export default function Footer (){
    return(
    <>
   <footer>

<div className="flex gap-4 justify-center mb-4 items-center text-sm lg:text-xl">
    <p className="text-white/60  lg:text-xl">@2026 Shikuku Gabriel.All rights reserved.</p>
    <a className="text-pink-600" href="https://www.instagram.com/ddyscot_jatelo/"> <  BsInstagram/> </a>
    <a className="text-blue-700 " href="https://www.linkedin.com/in/gabriel-wafula"> <BsLinkedin/></a>
    <a className='invert' href="https://github.com/AFRIKA-001"><BsGithub/> </a>
    {/* <a className="text-green-500 flex items-center" ><BsWhatsapp/>-0714058073</a> */}

   </div>

   </footer>
   



    
    </>
)}
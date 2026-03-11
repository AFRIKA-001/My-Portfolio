import jahaImg from '../public/jaha-logo.png'

export default function NavigationBar(){
    const linkStyles="hover:bg-slate-600 rounded active:bg-stone-900 text-white hover:text-slate-50 h-8"
    return<>
    <section   className="w-full h-25 bg-[#0B1120] flex text-xl font-bold content-evenly">
        <img className="h-15 w-25 mx-8 my-4 rounded-2xl" src={jahaImg} alt="" />
        <ul className="flex justify-between p-4 my-6 mx-auto space-x-20 ">
             <li className={linkStyles}>About</li>
        <li className={linkStyles}>Project</li>
        <li className={linkStyles}>Skills</li>
        <li className={linkStyles}>Contacts</li>
</ul>
      
    </section>
    
     
    

    </>
}
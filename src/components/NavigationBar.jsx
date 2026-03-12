// import jahaImg from '../public/jaha-logo.png'

export default function NavigationBar(){
    const linkStyles="hover:bg-slate-600 rounded active:bg-stone-900 text-white hover:text-slate-50 h-8"
    return<>
    <section   className="fixed top-0 z-50 w-full h-22 bg-[#0a132b] flex text-xl font-bold content-evenly">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#B82FF6] to-[#EE8425] font-bold text-4xl p-8"><span className="text-5xl">G</span>abriel</h1>
        {/* <img className="h-15 w-25 mx-8 my-4 rounded-2xl" src={jahaImg} alt="" /> */}
        <ul className="flex  p-4 my-4 mx-auto space-x-15 ">
                <li className={linkStyles}>Home</li>
                 <li className={linkStyles}>About</li>
                <li className={linkStyles}>Services</li>
        {/* <li className={linkStyles}>Project</li> */}
        <li className={linkStyles}>Skills</li>
        <li className={linkStyles}>Contacts</li>
        <button className='h-10 hover:bg-[red] bg-red-100 px-4 mx-8 text-xl active:bg-red-900 rounded-2xl'>connect</button>     
</ul>
      
    </section>
    
     
    

    </>
}
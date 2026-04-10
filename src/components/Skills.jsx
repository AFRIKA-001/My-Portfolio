import ReactIcon from "../public/react.svg"
import NextIcon from '../public/nextdotjs.svg'
import TailwindIcon from '../public/tailwindcss.svg'
import GitIcon from '../public/git.svg'
import GithubIcon from '../public/github.svg'
import LinuxIcon from '../public/linux.svg'
// // import SqlIcon from '../public/mysql.svg'
// import PostgresqlIcon from '../public/postgresql.svg'
// import HtmlIcon from '../public/html5.svg'
// import javascriptIcon from '../public/javascript.svg'
// import superbaseIcon from '../public/supabase.svg'


export default function Skills() {
    return <>
      
        <section className="pt-15 bg-[#0B1120]">
                 <h1 className="lg:text-6xl text-2xl text-center mb-10 font-bold  text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600">Technical Skills</h1>
            <p className="text-xl  text-w-2xl text-center  text-white font-medium leading-relaxed">here are some of the tools and tecnologies i use to bring ideas to life </p>
            <div className=" grid grid-cols-2 lg:grid-cols-3 pt-10 items-center gap-10 pl-6 m-auto lg:pl-60">

                <div className="flex justify-center h-30 w-40 lg:w-55 items-center hover:-translate-y-4 hover:shadow-xl hover:border-cyan-400 rounded bg-[#1E1E1E] border border-white/10 shadow-cyan-200/20 transition-all duration-500 ">
                    <img className="w-10 h-10 text-blue-700 object-contain" src={ReactIcon} alt="react icon" />
                    <h3 className="text-white text-2xl">-React.js</h3>
                </div>

                <div className="flex justify-center items-center h-30 w-40 lg:w-55 hover:border-amber-200 rounded hover:-translate-y-4 hover:shadow-2xl bg-[#1E1E1E] border border-white/10 shadow-white/40  duration-500  ">
                    <img className="w-10  h-10 bg-transparent invert" src={NextIcon} alt="nextjs icon" />
                    <h3 className="text-white text-2xl">-Next.js</h3>
                </div>


                <div className="flex justify-center items-center h-30 w-40 lg:w-55 hover:border-cyan-200 rounded bg-[#1E1E1E] border border-white/10 shadow-amber-200/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-4">
                    <img className="w-10 h-10 " src={TailwindIcon} alt="Tailwind icon" />
                    <h3 className="text-white text-xl">-Tailwind css</h3>
                </div>


                <div className="flex justify-center items-center h-30 w-40 lg:w-55 hover:border-orange-600 rounded bg-[#1E1E1E] border border-white/10 shadow-amber-100/20 hover:shadow-2xl hover:-translate-y-4 transition-all duration-500">
                    <img className="w-10 h-10 bg-transparent invert" src={GitIcon} alt="Git icon" />
                    <h3 className="text-white text-2xl">-Git</h3>
                </div>


                <div className="flex justify-center items-center h-30 w-40 lg:w-55 hover:border-orange-600 rounded bg-[#1E1E1E] border border-white/10 shadow-amber-200/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4">
                    <img className="w-10 h-10 bg-transparent invert" src={GithubIcon} alt="Github icon" />
                    <h3 className="text-white text-2xl">-Github</h3>
                </div>


                <div className="flex justify-center items-center h-30 w-40 lg:w-55 hover:border-cyan-400 rounded bg-[#1E1E1E] border border-white/10 shadow-amber-50/20 hover:shadow-2xl hover:-translate-y-4 transistion-all duration-500">
                    <img className="w-10 h-10 bg-transparent invert" src={LinuxIcon} alt="Linux icon" />
                    <h3 className="text-white text-2xl">-Linux</h3>
                </div>
                
                {/* <div className="flex justify-center items-center h-30 w-40 lg:w-55 hover:border-cyan-400 rounded bg-[#1E1E1E] border border-white/10 shadow-amber-50/20 hover:shadow-2xl hover:-translate-y-4 transistion-all duration-500">
                    <img className="w-10 h-10 bg-transparent invert" src={HtmlIcon} alt="HTML icon" />
                    <h3 className="text-white text-2xl">-HTML</h3>
                </div>
                <div>css</div>
                <div>js</div>
                <div>superbase</div>
                <div>sql</div>
                <div>postgresql</div> */}


            </div>
             
        </section>

    </>

}
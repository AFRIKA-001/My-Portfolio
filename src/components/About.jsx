 import ProfilePic from '../public/myface2.png' 
  
  
  
  export default function AboutPage() {

    return <>
    <section className='bg-[#0B1120]  lg:pb-25 items-center '>
        
           <h1 className='lg:text-6xl text-2xl text-center mb-2 lg:mb-20 font-bold  text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600'><span className='font-bold lg:text-8xl'>A</span>bout Me</h1>
           <div className=' my-4 lg:my-10  grid grid-cols-1 md:grid-cols-2  items-center'>
        <img  className=' flex mx-auto rounded-full w-70 h-70 aspect-square object-cover 'src={ProfilePic} alt="Gabriel's logo" />
        <p className='text-xl flex mx-auto px-4 pt-10 text-white font-medium leading-relaxed'>
            Hi! I'm Gabriel. I am a Computer Science student and a self-driven Frontend Developer currently specializing in the MERN stack. My development philosophy is rooted in project-based learning. I believe the best way to master a tool like React is by building real-world solutions.

            I spend my time exploring the latest in web performance and Cybersecurity, ensuring that the sites I build aren't just pretty, but secure and optimized. I'm always looking for new challenges that push me to write cleaner, more efficient code.
        </p>

        </div>
      
    </section>
       
    </>
}
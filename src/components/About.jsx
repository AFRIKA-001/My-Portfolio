 import ProfilePic from '../public/profile.png' 
  
  
  
  export default function AboutPage() {

    return <>
    <section className='bg-[#0B1120] py-10 '>
        
           <h1 className='text-6xl text-center mb-20 font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#ad03fc] to-[#ff7b07]'><span className='font-bold text-7xl'>A</span>bout Me</h1>
           <div className=' my-10  grid grid-cols-1 md:grid-cols-2  items-center'>
        <img  className=' flex mx-auto rounded-2xl object-contain'src={ProfilePic} alt="Gabriel" />
        <p className='text-xl flex mx-auto  pt-10 text-white font-medium leading-relaxed'>
            Hi! I'm Gabriel. I am a Computer Science student and a self-driven Frontend Developer currently specializing in the MERN stack. My development philosophy is rooted in project-based learning. I believe the best way to master a tool like React is by building real-world solutions.

            I spend my time exploring the latest in web performance and Cybersecurity, ensuring that the sites I build aren't just pretty, but secure and optimized. I'm always looking for new challenges that push me to write cleaner, more efficient code.
        </p>

        </div>
      
    </section>
       
    </>
}
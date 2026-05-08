import React from 'react'
import { Link } from 'react-router-dom'
import JahaFoodsImg from "../../public/JahaFoods.jpg"
import JahaShoe from "../../public/JahaShoes.jpg"

function projects() {

    const Projects = [

    {img: JahaFoodsImg, description: " a food delivery appbuilt using react.js for component based UIs and logic , tailwind css for styling and superbase for authentication and data management", link: "https://jaha-foods-store.vercel.app"},
    {img: JahaShoe, description: " a fashion store app built using react.js for dynamic UIs , tailwind css for styling , superbase for authentication and data management and framer-motion for modern animations", link: "https://shoe-cloathing-store.vercel.app/"}
]
  return (
<>
<section className='mb-40' >
     <h1 className=' mt-4 lg:mt-20 text-center text-xl lg:text-4xl text-cyan-300 lg:text-blue-700 font-serif  '>My  Latest works</h1>
       
   <div >
      <ul className='grid grid-cols-1 md:grid-cols-2  gap-10 justi'>
        {Projects.map((project, index) => (
          <li key={index} className='mb-10'>
             <Link className='text-orange-400 ' to={project.link} target="_blank" rel="noopener noreferrer">
                <img className=' h-40 max-w-md  flex mx-auto   hover:scale-105 transition-all duration-700 active:scale-[0.8]' src={project.img} alt=" jaha Project Image" />
              </Link>
            <p className='font-thin font-serif  text-center text-white max-w-md mx-auto'>{project.description}</p>
            <button className=' border px-4 bg-stone-900 hover:bg-stone-950 active:bg-black rounded'>
             
            </button>
          </li>
        ))}
      </ul>
   </div>
</section>
</>
  )
}

export default projects

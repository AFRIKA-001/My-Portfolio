import React from 'react'
import { Link } from 'react-router-dom'
import jahaImg from "../public/jahaImage.jpg"

function projects() {
  return (
<>
<section className='mb-40' >
     <h1 className=' mt-4 lg:mt-20 text-center text-xl lg:text-4xl text-cyan-300 lg:text-blue-700 font-serif  '>My  Latest works</h1>
       
  
   <div className='grid grid-cols-1 lg:grid-cols-3 pt-5 lg:pt-40 px-2 lg:px-40 gap-10'>
    <div className=''>
        <img className=' h-40 w-full lg:h-45 lg:w-100 pb-4' src={jahaImg} alt=" jaha Project Image" />
        <p className='font-thin font-serif text-white'>built using react.js , tailwind css and superbase</p>
        <button className=' border px-4 bg-stone-900 hover:bg-stone-950 active:bg-black rounded'>
        <Link className='text-orange-400 animate-pulse ' to="https://jaha-foods-store.vercel.app" target="_blank" rel="noopener noreferrer">
        live project
        </Link>
        </button>
    </div>
    <div>
        <img className=' h-40 w-full lg:h-45 lg:w-100 pb-4' src={jahaImg} alt=" jaha Project Image" />
        <p className='font-thin font-serif text-white'>built using react.js , tailwind css and superbase</p>
        <button className=' border px-4 bg-stone-900 hover:bg-stone-950 active:bg-black rounded'>
        <Link className='text-orange-400 animate-pulse ' to="https://jaha-foods-store.vercel.app" target="_blank" rel="noopener noreferrer">
            live project
        </Link>
        </button>
    </div>
     <div>
        <img className='h-40 w-full lg:h-45 lg:w-100 pb-4' src={jahaImg} alt=" jaha Project Image" />
        <p className='font-thin font-serif text-white'>built using react.js , tailwind css and superbase</p>
        <button className=' border px-4 bg-stone-900 hover:bg-stone-950 active:bg-black rounded'>
        <Link className='text-orange-400 animate-pulse ' to="https://jaha-foods-store.vercel.app" target="_blank" rel="noopener noreferrer">
            live project
        </Link>
        </button>
    </div>
   </div>
</section>
</>
  )
}

export default projects

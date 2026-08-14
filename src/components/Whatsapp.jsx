import React from 'react'
import { BsChat } from 'react-icons/bs'

const Whatsapp = () => {
  return (
    <>
    <section>
    <div className="bg-red-600 fixed bottom-8 right-8 z-50 animate-ping w-[1em] h-[1em] rounded-full"></div>

    <div className=' bg-linear-to-r from-green-500 via-green-600 to-green-700 px-6 py-3 fixed rounded-2xl bottom-8 right-8 overflow-hidden'>
      <a href="https://wa.me/254714058073" rel='noopener noreferrer' target='_blank' className='flex items-center gap-3'>
        <BsChat size={34} className='text-white '></BsChat>
        Chat
      </a>

    </div>

    </section>
    
   
    </>
  )
}

export default Whatsapp
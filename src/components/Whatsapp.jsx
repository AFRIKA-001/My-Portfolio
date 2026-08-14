import { BsChat } from 'react-icons/bs'

function Whatsapp() {
  return (
    <div className='bg-linear-to-l from-green-600 via-green-500 to-green-600 px-6 py-3 animate-boune fixed bottom-8 right-8 rounded-2xl overflow-hidden group-hover:scale-105 animate-bounce duration-700 '>
        <a href="https://wa.me/254714058073" rel='noopener noreferrer' target='_blank' className='flex gap-3 items-center '>
        <BsChat size={34} className='flex text-white '></BsChat>
        chat
        </a>
        
    </div>
  )
}

export default Whatsapp
import EmailImg from '../public/gmail.svg'
import phoneImg from '../public/phone.svg'
import LocatImg from '../public/map-pin.svg'




export default function Contacts() {
    const iconStyles = 'h-6 w-6  invert'
    const ParaStyles = " flex gap-4 px-4 py-5 text-white font-medium "
    return <>

        <h1 className='text-6xl text-center my-20 font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#ad03fc] to-[#ff7b07]'>Get In Touch</h1>
        <section className='mb-30  '>

            <div className='grid grid-cols-2'>

                <div className='px-10'>
                    <h3 className='text-5xl text-start mx-20 font-bold  text-transparent bg-clip-text bg-gradient-to-l from-[#ad03fc] to-[#ff7b07]'>Let's Talk</h3>
                    <p className='text-xl max-w-xl px-4 py-20 text-white font-medium leading-relaxed'>
                        I'm currently accepting new freelance opportunities.
                        If you're looking for a dedicated developer to help with your next build,
                        I’d love to hear from you. Feel free to send a message anytime to get started
                    </p>
                    <p className={ParaStyles}><img className={iconStyles} src={EmailImg} />shikukugabriel06@gmail.com   </p>
                    <p className={ParaStyles}> <img className={iconStyles} src={phoneImg} /> +254714058073</p>
                    <p p className={ParaStyles}><img className={iconStyles} src={LocatImg} />  Nairobi,Kenya</p>
                </div>
                {/* input filed starts here */}
                <div className='grid grid-rows-3'>

                    <label className='text-white pt-20'>Your Name</label>
                    <input className='h-10 my-8 bg-white/10 border-white/10 text-white/90 border rounded' type="text" />


                    <label className='text-white pt-15 '>Your Email</label>
                    <input className='h-10 my-8 text-xl bg-white/10 border-white/10 text-white/90 border rounded' type="email" placeholder='johndoe@gmail.com' />


                    <label className='text-white py-5'>Message</label>
                    <textarea className=' bg-white/10 border-white/10 text-white/90 border rounded' type="textarea" placeholder='what is your project idea'>
                    </textarea>
                    <button className='w-60  my-10 border border-white/10  rounded font-bold text-white hover:bg-amber-300/10 active:bg-amber-200/20 '>Submit</button>
                </div>

                {/* input fields ends here */}

            </div>



        </section>



    </>
}

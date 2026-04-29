// import EmailImg from '../public/gmail.svg'
// import phoneImg from '../public/phone.svg'
// import LocatImg from '../public/map-pin.svg'
// import { supabase } from '../../supabaseClient'
// import { useState } from 'react'




// export default function Contacts() {

// const [formData,setFormData]=useState({
//     name:'',
//     email:'',
//     message:''
// });
// const [loading,setLoading]=useState(false)


// const handleChange = (e)=>{
// setFormData({
//     ...formData,
//     [e.target.name]:e.target.value
// });
// }


// const handleSubmit = async (e)=>{
//     e.preventDefault();
//     setLoading(true)

//     const {error} = await supabase
//     .from('form_submissions')
//     .insert([
//         {
//         name:formData.name,
//         email:formData.email,
//         message:formData.message
//     }
// ])
// }
// if(error) {
//     alert("Error occurred while uploading the data")
// }else{
//     alert("form submitted sucessifully");
//     setFormData({name:'',email:'',message:''})
//     setLoading(false)
// }














//     const iconStyles = 'h-6 w-6  invert'
//     const ParaStyles = " flex gap-4 px-4 py-5 text-white font-medium "
//     return <>

//         <h1 className='lg:text-6xl text-4xl text-center lg:pt-25 font-serif  text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600'>Get In Touch</h1>
//         <section  className='font-sm '>

//             <div className='grid lg:grid-cols-2'>

//                 <div className='px-4 items-center '>
//                     <h3 className='lg:text-5xl text-xl pt-4 lg:pt-8 lg:p-0 lg:mx-20 font-serif animate-pulse  text-transparent bg-clip-text bg-gradient-to-l from-cyan-200 to-indigo-600'>Let's Talk</h3>
//                     <p className='text-xl  max-w-prose lg:px-4 py-4 lg:py-20 text-white font-serif leading-relaxed'>
//                         I'm currently accepting new freelance opportunities.
//                         If you're looking for a dedicated developer to help with your next build,
//                         I’d love to hear from you. Feel free to send a message anytime to get started
//                     </p>
//                     <p className={ParaStyles}><img className={iconStyles} src={EmailImg} />shikukugabriel06@gmail.com   </p>
//                     <p className={ParaStyles}> <img className={iconStyles} src={phoneImg} /> +254714058073</p>
//                     <p className={ParaStyles}><img className={iconStyles} src={LocatImg} />  Nairobi, Kenya</p>
//                 </div>
//                 {/* input filed starts here */}
//                 <div className='grid grid-rows-3 justify-items-center'>
//                   <form onSubmit={handleSubmit} >
//                     <label className='text-white pt-20 pr-80 lg:pr-145 uppercase font-mono'>Your Name</label>
//                     <input onChange={handleChange} value={formData.name} className=' my-8 pl-1 w-full bg-white/10 border-white/10 text-white/90 border rounded' type="text" required/>


//                     <label className='text-white pt-15 pr-70 lg:pr-135 uppercase font-mono '>Email Address</label>
//                     <input onChange={handleChange} value={formData.email} className='h-10 pl-1  w-full bg-white/10 border-white/10 text-white/90 border rounded' type="email" placeholder='johndoe@gmail.com' required />


//                     <label className='text-white py-5 pr-85 lg:pr-145 uppercase'>Message</label>
//                     <textarea onChange={handleChange} value={formData.message} className='pl-1 w-full bg-white/10 border-white/10 text-white/90 border rounded' type="textarea" placeholder='what is your project idea' required>
//                     </textarea>
//                     <button 
//                     type='button' disabled={loading} className='w-60 my-10 border border-white/10   rounded font-bold text-white hover:bg-amber-300/10 active:bg-amber-200/20 ' >
//                         {loading?'Submitting':'submit form'}</button>
//                        </form> 
//                 </div>
             
//                 {/* input fields ends here */}

//             </div>



//         </section>



//     </>
// }
import EmailImg from '../public/gmail.svg'
import phoneImg from '../public/phone.svg'
import LocatImg from '../public/map-pin.svg'
import { supabase } from '../../supabaseClient'
import { useState } from 'react'

export default function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Uses the 'name' attribute of the input
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // 1. Destructure error from the supabase call
        const { error } = await supabase
            .from('form_submissions')
            .insert([
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                }
            ]);

        // 2. Logic MUST stay inside the async function
        if (error) {
            alert("Error occurred while uploading the data: " + error.message);
            setLoading(false);
        } else {
            alert("Form submitted successfully!");
            setFormData({ name: '', email: '', message: '' });
            setLoading(false);
        }
    };

    const iconStyles = 'h-6 w-6 invert'
    const ParaStyles = "flex gap-4 px-4 py-5 text-white font-medium"

    return (
        <>
            <h1 className='lg:text-6xl text-4xl text-center lg:pt-25 font-serif text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600'>Get In Touch</h1>
            <section className='font-sm'>
                <div className='grid lg:grid-cols-2'>
                    <div className='px-4 items-center'>
                        <h3 className='lg:text-5xl text-xl pt-4 lg:pt-8 lg:p-0 lg:mx-20 font-serif animate-pulse text-transparent bg-clip-text bg-gradient-to-l from-cyan-200 to-indigo-600'>Let's Talk</h3>
                        <p className='text-xl max-w-prose lg:px-4 py-4 lg:py-20 text-white font-serif leading-relaxed'>
                            I'm currently accepting new freelance opportunities.
                            If you're looking for a dedicated developer to help with your next build,
                            I’d love to hear from you.
                        </p>
                        <p className={ParaStyles}><img className={iconStyles} src={EmailImg} alt="Email" /> shikukugabriel06@gmail.com</p>
                        <p className={ParaStyles}><img className={iconStyles} src={phoneImg} alt="Phone" /> +254714058073</p>
                        <p className={ParaStyles}><img className={iconStyles} src={LocatImg} alt="Location" /> Nairobi, Kenya</p>
                    </div>

                    <div className='grid grid-rows-3 justify-items-center'>
                        <form onSubmit={handleSubmit} className="w-full max-w-md">
                            <label className='text-white block pt-10 uppercase font-mono'>Your Name</label>
                            <input 
                                name="name" // Added name attribute
                                onChange={handleChange} 
                                value={formData.name} 
                                className='my-4 pl-2 h-10 w-full bg-white/10 border-white/10 text-white border rounded outline-none focus:border-cyan-500' 
                                type="text" 
                                required 
                            />

                            <label className='text-white w-full pt-5 uppercase font-mono'>Email Address</label>
                            <input 
                                name="email" // Added name attribute
                                onChange={handleChange} 
                                value={formData.email} 
                                className='h-10 pl-2 w-full bg-white/10 border-white/10 text-white border rounded outline-none focus:border-cyan-500' 
                                type="email" 
                                placeholder='johndoe@gmail.com' 
                                required 
                            />

                            <label className='text-white block pt-5 uppercase font-mono'>Message</label>
                            <textarea 
                                name="message" // Added name attribute
                                onChange={handleChange} 
                                value={formData.message} 
                                className='pl-2 w-full h-32 bg-white/10 border-white/10 text-white border rounded outline-none focus:border-cyan-500' 
                                placeholder='What is your project idea?' 
                                required
                            />
                            
                            <button 
                                type='submit' // Changed to submit
                                disabled={loading} 
                                className='w-full my-10 py-3 border border-white/10 rounded font-bold text-white hover:bg-white/10 transition-all active:scale-95 disabled:opacity-50'
                            >
                                {loading ? 'Submitting...' : 'Submit Form'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

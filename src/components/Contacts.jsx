import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  SendHorizonal,
} from "lucide-react";
import Footer from "./footer.jsx"
import { supabase } from "../../supabaseClient";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase
      .from("form_submissions")
      .insert([formData]);

    if (error) {
      alert("Something went wrong: " + error.message);
    } else {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <>
      <section className="relative px-6 py-24 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
        </div>

        {/* Heading */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold mb-4">
            Contact
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
              Touch
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm currently open to freelance opportunities, collaborations, and
            exciting frontend projects.
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              If you have a project idea, business, or startup that needs a
              modern web experience, feel free to reach out. I’d love to hear
              about it.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <Mail className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white">
                    shikukugabriel06@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <Phone className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-white">
                    +254 714 058 073
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <MapPin className="text-cyan-400" size={24} />
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 shadow-2xl">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-2xl bg-slate-950 border border-slate-700 text-white outline-none focus:border-cyan-400 transition"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-2xl bg-slate-950 border border-slate-700 text-white outline-none focus:border-cyan-400 transition"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-slate-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-700 text-white outline-none focus:border-cyan-400 transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold hover:scale-[1.02] disabled:opacity-50"
              >
                <SendHorizonal size={20} />

                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 





















































































// import EmailImg from '../../public/gmail.svg'
// import phoneImg from '../../public/phone.svg'
// import LocatImg from '../../public/map-pin.svg'
// import Footer from './footer'
// import { supabase } from '../../supabaseClient'
// import { useState } from 'react'

// export default function Contacts() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });
//     const [loading, setLoading] = useState(false)

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value // Uses the 'name' attribute of the input
//         });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
        
//         // 1. Destructure error from the supabase call
//         const { error } = await supabase
//             .from('form_submissions')
//             .insert([
//                 {
//                     name: formData.name,
//                     email: formData.email,
//                     message: formData.message
//                 }
//             ]);

//         // 2. Logic MUST stay inside the async function
//         if (error) {
//             alert("Error occurred while uploading the data: " + error.message);
//             setLoading(false);
//         } else {
//             alert("Form submitted successfully!");
//             setFormData({ name: '', email: '', message: '' });
//             setLoading(false);
//         }
//     };

//     const iconStyles = 'h-6 w-6 invert'
//     const ParaStyles = "flex gap-4 px-4 py-5 text-white font-medium"

//     return (
//         <>
//             <h1 className='lg:text-6xl text-4xl text-center lg:pt-25 font-serif text-transparent bg-clip-text bg-gradient-to-l from-cyan-500 to-indigo-600'>Get In Touch</h1>
//             <section>
//                 <div className='grid lg:grid-cols-2'>
//                     <div className='px-4 items-center'>
//                         <h3 className='lg:text-5xl text-xl pt-4 lg:pt-8 text-center font-serif animate-pulse text-transparent bg-clip-text bg-gradient-to-l from-cyan-200 to-indigo-600'>Let's Talk</h3>
//                         <p className='text-xl max-w-prose lg:px-4 py-4 lg:py-20 text-white font-serif leading-relaxed'>
//                             I'm currently accepting new freelance opportunities.
//                             If you're looking for a dedicated developer to help with your next build,
//                             I’d love to hear from you.
//                         </p>
//                         <p className={ParaStyles}><img className={iconStyles} src={EmailImg} alt="Email" /> shikukugabriel06@gmail.com</p>
//                         <p className={ParaStyles}><img className={iconStyles} src={phoneImg} alt="Phone" /> +254714058073</p>
//                         <p className={ParaStyles}><img className={iconStyles} src={LocatImg} alt="Location" /> Nairobi, Kenya</p>
//                     </div>

//                     <div className='grid grid-rows-3 justify-items-center'>
//                         <form onSubmit={handleSubmit} className="w-full max-w-md">
//                             <label className='text-white block pt-10 uppercase font-mono'>Your Name</label>
//                             <input 
//                                 name="name" // Added name attribute
//                                 onChange={handleChange} 
//                                 value={formData.name} 
//                                 className='my-4 pl-2 h-10 w-full bg-white/10 border-white/10 text-white border rounded outline-none focus:border-cyan-500' 
//                                 type="text" 
//                                 required 
//                             />

//                             <label className='text-white w-full pt-5 uppercase font-mono'>Email Address</label>
//                             <input 
//                                 name="email" // Added name attribute
//                                 onChange={handleChange} 
//                                 value={formData.email} 
//                                 className='h-10 pl-2 w-full bg-white/10 border-white/10 text-white border rounded outline-none focus:border-cyan-500' 
//                                 type="email" 
//                                 placeholder='gabriel@gmail.com' 
//                                 required 
//                             />

//                             <label className='text-white block pt-5 uppercase font-mono'>Message</label>
//                             <textarea 
//                                 name="message" // Added name attribute
//                                 onChange={handleChange} 
//                                 value={formData.message} 
//                                 className='pl-2 w-full h-32 bg-white/10 border-white/10 text-white border rounded outline-none focus:border-cyan-500' 
//                                 placeholder='What is your project idea?' 
//                                 required
//                             />
                            
//                             <button 
//                                 type='submit' // Changed to submit
//                                 disabled={loading} 
//                                 className='w-full my-10 py-3 border border-white/10 rounded font-bold text-white hover:bg-white/10 transition-all active:scale-95 disabled:opacity-50'
//                             >
//                                 {loading ? 'Submitting...' : 'Submit Form'}
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 <Footer/>
//             </section>
//         </>
//     );
// }

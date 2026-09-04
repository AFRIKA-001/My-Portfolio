import { useState } from "react";
import { Mail, Phone, MapPin, SendHorizontal, CheckCircle2 } from "lucide-react";
import { supabase } from "../../supabaseClient";
import toast from "react-hot-toast";

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
    
    try {
      const { error } = await supabase
        .from("form_submissions")
        .insert([formData]);

      if (error) {
        toast.error("Submission failed: " + error.message);
      } else {
        // Professional, polished notification message
        toast.success(`Thank you, ${formData.name}. Your message has been received!`);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Submission pipeline error: " + error);
      toast.error("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const labelStyles = "block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2";
  const inputStyles = "w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-sm shadow-xs";

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-12 lg:py-32">
      
      {/* Background Separation Divider Line */}
      <div className="absolute top-0 left-1/2 -z-10 h-px w-full max-w-7xl -translate-x-1/2 bg-linear-to-r from-transparent via-slate-100 to-transparent" />

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-slate-400 md:text-sm">
          Get In Touch
        </p>

        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Connect & <span className="text-black">Collaborate</span>
        </h1>

        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          I am currently open to full-stack engineering contracts, core integrations, and system build roles.
        </p>
      </div>

      {/* Contact Panel Grid */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Metadata & Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-4">
              Let's build something scalable.
            </h2>
            <p className="text-base leading-relaxed text-slate-500">
              Have an architecture concept, feature roadmap, or open development opening? Drop a message directly into my pipeline database.
            </p>
          </div>

          {/* Contact Info Rows */}
          <div className="space-y-4">
            {/* Email card */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 shadow-xs">
                <Mail className="text-slate-700" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Address</p>
                <p className="text-sm font-semibold text-slate-700">shikukugabriel06@gmail.com</p>
              </div>
            </div>

            {/* Phone card */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 shadow-xs">
                <Phone className="text-slate-700" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Line</p>
                <p className="text-sm font-semibold text-slate-700">+254 714 058 073</p>
              </div>
            </div>

            {/* Location card */}
            <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-100 shadow-xs">
                <MapPin className="text-slate-700" size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Base</p>
                <p className="text-sm font-semibold text-slate-700">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Input Panel */}
        <div className="lg:col-span-7 rounded-2xl border border-slate-100 bg-slate-50/40 p-8 hover:shadow-md transition-shadow">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className={labelStyles}>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className={labelStyles}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={inputStyles}
                placeholder="johndoe@example.com"
              />
            </div>

            <div>
              <label className={labelStyles}>Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-4 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-sm shadow-xs resize-none"
                placeholder="Provide details about your project timeline or role parameters..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-slate-800 disabled:opacity-50 active:scale-[0.99]"
            >
              {loading ? (
                <span>Processing Stream...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <SendHorizontal size={14} className="transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}

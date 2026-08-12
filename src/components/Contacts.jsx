import { useState } from "react";
import { Mail, Phone, MapPin, SendHorizonal } from "lucide-react";
import Footer from "./footer.jsx";
import { supabase } from "../../supabaseClient";
import toast from "react-hot-toast";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //goes to the input fields
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //goes to the form on the submit prop
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const { error } = await supabase
        .from("form_submissions")
        .insert([formData]);

      if (error) {
        toast.error("Something went wrong" + error.message);
      } else {
        toast.success(`Message sent successfully dear ${formData.name} i shall get in touch as soon as possible!`);

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("there was a problem sending data " + error);
    }finally{
      setLoading(false);
    }

  };

  return (
    <>
      <section className="relative px-6 py-24 overflow-hidden">
    
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.4em] text-red-600 text-sm font-semibold mb-4">
            Contact
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-600 to-black">
              Touch
            </span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-slate-900 max-w-3xl mx-auto leading-relaxed">
            I'm currently open to freelance opportunities, collaborations, and
            exciting frontend projects with backend as a service.
          </p>
        </div>

        {/* Main Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed mb-6">
              Let's Build Something Amazing
            </h2>

            <p className="text-slate-900 text-lg leading-relaxed mb-10">
              If you have a project idea, business, or startup that needs a
              modern web experience, feel free to reach out. I’d love to hear
              about it.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {/*email info */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-black border border-slate-800">
                  <Mail className="text-white" size={24} />
                </div>

                <div>
                  <p className="text-red-600 text-sm">Email</p>
                  <p>shikukugabriel06@gmail.com</p>
                </div>
              </div>

              {/*phone information */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-black border border-slate-800">
                  <Phone className="text-white" size={24} />
                </div>

                <div>
                  <p className="text-red-600 text-sm">Phone</p>
                  <p>+254 714 058 073</p>
                </div>
              </div>

              {/*location information */}
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-2xl bg-black border border-slate-800">
                  <MapPin className="text-white" size={24} />
                </div>

                <div>
                  <p className="text-red-600 text-sm">Location</p>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block uppercase text-sm text-slate-300 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-2xl bg-slate-950 border border-slate-700 text-white outline-none focus:border-cyan-400 transition"
                  placeholder="Gabriel Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block uppercase text-sm text-slate-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-14 px-4 rounded-2xl bg-slate-950 border border-slate-700 text-white outline-none focus:border-cyan-400 transition"
                  placeholder="gabriel@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block uppercase text-sm text-slate-300 mb-2">
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
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl border border-slate-600  hover:bg-black transition-all duration-300 text-white font-semibold hover:scale-[1.02] disabled:opacity-50"
              >
                <SendHorizonal size={20} />

                {loading ? "Sending..." : "Send Message" }
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
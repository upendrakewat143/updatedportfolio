import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation check
    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email ❌");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);
    data.append("subject", "New Portfolio Message");
    data.append("from_name", formData.name);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data
        }
      );

      const res = await response.json();

      if (res.success) {
        toast.success("Message Sent Successfully ✅");

        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        toast.error("Something went wrong ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border border-slate-700 bg-slate-800 text-slate-100 p-3 rounded focus:ring-2 focus:ring-cyan-400 transition"
          />

          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full border border-slate-700 bg-slate-800 text-slate-100 p-3 rounded focus:ring-2 focus:ring-cyan-400 transition"
          />

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-slate-700 bg-slate-800 text-slate-100 p-3 rounded focus:ring-2 focus:ring-cyan-400 transition"
          />

          <motion.button
            type="submit"
            disabled={loading}
            className="bg-cyan-400 text-slate-900 px-6 py-3 rounded font-semibold hover:bg-cyan-500 transition shadow-lg hover:shadow-cyan-400/50 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              "Send Message"
            )}
          </motion.button>

        </motion.form>
      </div>
    </section>
  );
}
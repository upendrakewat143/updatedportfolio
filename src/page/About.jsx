import { motion } from "framer-motion";
import forpostImg from "../assets/forpost.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-slate-900 border-t-8 border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 w-60 h-110 md:w-80 md:h-110 overflow-hidden border-4 border-cyan-400/40 shadow-xl rounded-xl"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={forpostImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">
            About Me
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-slate-300 text-justify">
            I am a passionate and dedicated Full-Stack Web Developer with a strong foundation in Computer Applications.
            I enjoy transforming creative ideas into responsive and user-friendly websites.
            My journey in technology is driven by curiosity and a constant desire to learn new skills.
            I have experience working with HTML, CSS, JavaScript, React, and modern development tools.
            Building clean, efficient, and maintainable code is one of my main priorities.
            I believe that consistency and discipline are the keys to long-term success.
            Every project I create helps me grow both technically and professionally.
            I see challenges as opportunities to improve and sharpen my problem-solving skills.
            I am always eager to explore new technologies and stay updated with industry trends.
            Teamwork, communication, and continuous learning are values I strongly believe in.
            My goal is to contribute to meaningful projects that create real-world impact.
            Technology is not just my career path — it is my passion and motivation for the future. 
          </p>
        </motion.div>

      </div>
    </section>
  );
}

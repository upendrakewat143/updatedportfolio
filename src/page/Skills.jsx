import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaGitAlt
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
  { 
    name: "HTML", 
    icon: <FaHtml5 className="text-orange-600 w-12 h-12 mx-auto mb-2" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  { 
    name: "CSS", 
    icon: <FaCss3Alt className="text-blue-600 w-12 h-12 mx-auto mb-2" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  { 
    name: "JavaScript", 
    icon: <FaJs className="text-yellow-400 w-12 h-12 mx-auto mb-2" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  { 
    name: "React", 
    icon: <FaReact className="text-blue-400 w-12 h-12 mx-auto mb-2" />,
    link: "https://react.dev/"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-teal-400 w-12 h-12 mx-auto mb-2" />,
    link: "https://tailwindcss.com/"
  },
  { 
    name: "Git & GitHub", 
    icon: <FaGitAlt className="text-red-500 w-12 h-12 mx-auto mb-2" />,
    link: "https://github.com/"
  },
  { 
    name: "Vite", 
    icon: <SiVite className="text-purple-500 w-12 h-12 mx-auto mb-2" />,
    link: "https://vitejs.dev/"
  },
  { 
    name: "WordPress", 
    icon: <FaWordpress className="text-blue-600 w-12 h-12 mx-auto mb-2" />,
    link: "https://wordpress.org/"
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-slate-800 text-slate-100"
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-cyan-400"
        >
          Skills
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              onClick={() =>
                window.open(skill.link, "_blank", "noopener,noreferrer")
              }
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(56, 189, 248, 0.5)",
              }}
              className="cursor-pointer bg-slate-900 hover:bg-slate-700 border border-slate-700 hover:border-cyan-400 rounded-xl p-6 text-center font-semibold shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ y: [-2, -6, 0], transition: { duration: 0.4 } }}
              >
                {skill.icon}
              </motion.div>
              <p className="mt-2 text-slate-300">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
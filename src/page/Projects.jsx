import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Comic Book",
    description: "Responsive online Management System using React.",
    link: "#",
  },
  {
    title: "Online Coaching Management System",
    description: "Using PHp for online management system.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(56, 189, 248, 0.5)" }}
              className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-slate-100 shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-sky-400 hover:text-cyan-400 hover:underline font-medium transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

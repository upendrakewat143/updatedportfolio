import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    institution: "Parul University",
    degree: "Bachelor of Science in Computer Application in full Stack Web Development",
    period: "2021 - 2024",
    description:
      "Specialized in Web Application in Full Stack Webdevelopment. Graduated with a 8.03 CGPA.",
    current: true, // Highlight this degree
    links: [
      { type: "portfolio", url: "https://paruluniversity.ac.in/" }
    ]
  },
  {
    institution: "Kapilvastu Multiple Campus",
    degree: "School Leaving Certificate in Science",
    period: "2019 - 2021",
    description:
      "Dean's List for 2 consecutive years. Lead Developer for the Campus Web Club.",
    current: false,
    links: [
      { type: "portfolio", url: "https://kmctlw.edu.np/" }
    ]
  },
  {
    institution: "H. Little Star English Boarding School",
    degree: "Selected Optional Math and proficient in Science and English",
    period: "2016",
    description:
      "From Class Nry. To 10 English Learning top School.",
    current: false,
    links: [ 
       { type: "portfolio", url: "https://www.hathausalittlestarebs.com/" }
    ]
  } 
];

export default function Education() {
  return (
    <section
  id="education" 
  className="bg-slate-900 py-16 px-6 md:px-20 lg:px-40 relative scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-cyan-400 mb-12 text-center"
        >
          Education
        </motion.h2>

        {/* Timeline Vertical Line */}
        <motion.div
          className="absolute left-10 md:left-8 top-28 bottom-0 w-1 bg-cyan-400 origin-top rounded"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Timeline Items */}
        <div className="relative">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-20 md:ml-24 relative"
            >
              {/* Timeline Dot */}
              <motion.div
                className={`absolute w-5 h-5 rounded-full -left-[42px] top-2 border-4 shadow-lg ${
                  item.current
                    ? "bg-cyan-400 border-cyan-200 shadow-cyan-400/60 animate-pulse"
                    : "bg-slate-700 border-slate-900"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                viewport={{ once: true }}
              />

              {/* Content Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 30px rgba(56, 189, 248, 0.5)"
                }}
                className={`p-6 rounded-xl border transition duration-300 shadow-lg ${
                  item.current
                    ? "bg-slate-800 border-cyan-400 text-slate-100 ring-2 ring-cyan-400"
                    : "bg-slate-800 border-slate-700 text-slate-100"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-sky-400 uppercase tracking-wide">
                    {item.period}
                  </span>
                  <div className="flex space-x-3">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-cyan-400 transition text-lg"
                      >
                        {link.type === "certificate" ? <FaCertificate /> : <FaExternalLinkAlt />}
                      </a>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold mt-1">{item.institution}</h3>
                <p className="text-lg font-medium text-slate-300">{item.degree}</p>
                <p className="mt-3 text-slate-400 leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

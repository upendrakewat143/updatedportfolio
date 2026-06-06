import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import photopImg from "../assets/photop.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        <div className="text-center md:text-left">
          
          <h2 className="text-4xl md:text-4xl font-bold mb-4 animate-pulse">
            Hi, I'm{" "}
            <span className="text-cyan-400 font-extrabold italic">
              Upendra Kewat
            </span>{" "}
            👋
          </h2>

          <p className="text-lg mb-6 text-slate-300 animate-formIn">
                     Building modern and user-friendly web experiences.
                     Focused on React, Tailwind CSS, and full-stack development.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            
            <a
              href="https://github.com/upendrakewat143"
              className="text-xl text-slate-300 hover:text-sky-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/upendra-nishad-21252633b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              className="text-xl text-slate-300 hover:text-sky-400 transition"
            >
              
              <FaLinkedin />
            </a>

            <a
               href="/public/myresume.pdf"
               download="Upendra_Kewat_Resume.pdf" // Optional: name when saved
               className="flex items-center gap-2 bg-cyan-400 text-slate-900 px-4 py-2 rounded hover:bg-cyan-500 transition shadow-lg hover:shadow-cyan-400/50"
            >
             <FaDownload /> Resume
           </a>


          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-full bg-slate-800/40 backdrop-blur-2xl flex items-center justify-center overflow-hidden">
            <img
              src={photopImg}
              alt="Profile"
              className="w-56 h-56 object-cover rounded-full border-4 border-cyan-400/40 shadow-lg opacity-0 scale-50 animate-formIn"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

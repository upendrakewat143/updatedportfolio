import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-slate-900 text-slate-200 text-center py-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/upendrakewat143"
          className="text-slate-200 hover:text-cyan-400 transition transform hover:scale-110"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/upendra-nishad-21252633b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          className="text-slate-200 hover:text-cyan-400 transition transform hover:scale-110"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.facebook.com/share/18c3khdWK5/"
          className="text-slate-200 hover:text-cyan-400 transition transform hover:scale-110"
          target="_blank"
        >
          <FaFacebook size={24} />
        </a>
      </div>

      {/* Text */}
      <p className="text-sm">
        ©{" "}
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
          {currentYear} Upendra Kewat
        </span>
        . All rights reserved.
      </p>

      {/* Back to Top Button */}
      <a
        href="#home"
        className="inline-block mt-4 px-4 py-2 bg-cyan-400 text-slate-900 rounded-full font-semibold hover:bg-cyan-500 transition shadow-lg hover:shadow-cyan-400/50"
      >
        Back to Top
      </a>
    </motion.footer>
  );
}




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD0YY8iZMCV8wdpc5Fz5BmTo7rExjtkVxY",
//   authDomain: "portfolio-contact-507eb.firebaseapp.com",
//   projectId: "portfolio-contact-507eb",
//   storageBucket: "portfolio-contact-507eb.firebasestorage.app",
//   messagingSenderId: "910051324354",
//   appId: "1:910051324354:web:43da670f103612f689265b",
//   measurementId: "G-MYSFLDPBB5"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
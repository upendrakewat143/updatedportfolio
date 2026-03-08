import Nav from "./page/Nav";
import Home from "./page/Home";
import About from "./page/About";
import Skills from "./page/Skills";
import Education from "./page/Education";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./page/Footer";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }} // Slide up and fade out
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white"
    >
      {/* Your Logo or Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-4xl font-bold tracking-tighter"
      >
        Be Here Be Vibrant<span className="text-blue-500">.</span>
      </motion.div>

      {/* Progress Bar Line */}
      <div className="mt-4 h-[2px] w-48 bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
          className="h-full w-full bg-blue-500"
        />
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (fetching data, assets, etc.)
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

    

  return (
    <div>
       <div className="bg-slate-950 min-h-screen">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <Home
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* YOUR ACTUAL PORTFOLIO CONTENT GOES HERE */}
          <nav className="p-6 text-white">Upendra</nav>
          <section className="h-screen flex items-center justify-center text-white">
            <h1 className="text-7xl font-black">Welcome to my world.</h1>
          </section>
        </Home>
      )}
    </div>
      <Nav />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Toaster position="top-right" />
      <Footer />
    </div>
  );
}

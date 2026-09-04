"use client";

import { useState, useEffect } from "react";
import { FaPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0d2344] flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ x: "-50vw", y: 150, rotate: -30 }}
        animate={{ x: "100vw", y: -250, rotate: -15 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className="absolute text-yellow-500 text-6xl md:text-8xl"
      >
        <FaPlane />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white text-3xl md:text-5xl font-extrabold mt-10 tracking-widest uppercase z-10 drop-shadow-lg"
      >
        Mamari
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-yellow-500 mt-3 font-medium text-sm md:text-base tracking-wide z-10"
      >
        Taking you to global opportunities...
      </motion.p>
    </div>
  );
}

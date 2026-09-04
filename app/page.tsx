"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const zoomIn: any = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  };

  const dropIn: any = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, type: "spring", bounce: 0.5 } }
  };

  const staggerContainer: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7f9] text-slate-800 font-sans scroll-smooth">

      {/* ---------------- HEADER ---------------- */}
      <header className="sticky top-0 z-50 shadow-lg flex h-16 md:h-20 bg-[#0d2344] px-4 md:px-8">
        <div className="flex items-center justify-start">
          <a href="#home" className="flex items-center bg-white px-3 py-1 rounded shadow-sm hover:scale-105 transition-transform duration-300">
            <Image
              src="/mamarilogo.png"
              alt="Mamari Logo"
              width={140}
              height={50}
              className="w-20 md:w-[140px] h-auto object-contain"
              priority
            />
          </a>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <nav className="space-x-6 md:space-x-8 hidden lg:flex font-semibold text-sm text-white">
            <a href="#home" className="hover:text-yellow-500 transition duration-300">Home</a>
            <a href="#introduction" className="hover:text-yellow-500 transition duration-300">Introduction</a>
            <a href="#about" className="hover:text-yellow-500 transition duration-300">About Us</a>
            <a href="#job-seekers" className="hover:text-yellow-500 transition duration-300">Job Opportunities</a>
            <a href="#contact" className="bg-yellow-500 text-[#0d2344] px-5 py-2 rounded font-bold hover:bg-yellow-400 transition duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white text-2xl focus:outline-none ml-4"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#0d2344] z-[70] shadow-2xl flex flex-col p-6 lg:hidden"
            >
              <button 
                className="self-end text-white text-3xl mb-8 focus:outline-none hover:text-yellow-500 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaTimes />
              </button>
              <nav className="flex flex-col space-y-6 font-semibold text-lg text-white">
                <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-500 transition duration-300">Home</a>
                <a href="#introduction" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-500 transition duration-300">Introduction</a>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-500 transition duration-300">About Us</a>
                <a href="#job-seekers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-yellow-500 transition duration-300">Job Opportunities</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-yellow-500 text-[#0d2344] px-5 py-3 rounded text-center font-bold hover:bg-yellow-400 transition duration-300 shadow-lg mt-4">Contact Us</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="home" className="relative pt-24 pb-32 text-center flex flex-col items-center justify-center border-b-[8px] border-yellow-500 min-h-[90vh] md:min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero.jpg"
            alt="Hero Background"
            fill
            sizes="100vw"
            quality={85}
            priority
            className="object-cover object-[75%_center] md:object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#0d2344]/60 z-0"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 px-6 drop-shadow-xl flex flex-col items-center mt-4 w-full"
        >
          <motion.div variants={fadeInUp} className="bg-white p-3 md:p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] mb-8 border-b-4 border-yellow-500 transform transition hover:scale-105">
            <Image
              src="/mamarilogo.png"
              alt="Mamari Logo Large"
              width={280}
              height={120}
              className="w-40 md:w-[280px] h-auto object-contain"
              priority
            />
          </motion.div>

          <motion.h1 variants={dropIn} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-500 mb-6 tracking-wide uppercase leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Your Gateway to<br />Global Careers
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-2xl font-medium mb-10 max-w-2xl mx-auto text-gray-100 drop-shadow-md">
            MAMARI Foreign Employment Agency - Connecting Talent, Creating Opportunities, Building Futures.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="#contact"
            className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-[#0d2344] font-extrabold text-lg py-4 px-12 rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-110"
          >
            FIND A JOB
          </motion.a>
        </motion.div>
      </section>

      {/* ---------------- INTRODUCTION ---------------- */}
      <section id="introduction" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="container mx-auto px-6 max-w-5xl relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2344] mb-10 text-center uppercase tracking-wide border-b-4 border-yellow-500 inline-block pb-2 relative left-1/2 -translate-x-1/2">INTRODUCTION</h2>

          <div className="text-slate-700 leading-loose text-base md:text-lg text-justify space-y-6">
            <p>
              Mamari Foreign Employment Agency is a professional overseas recruitment agency established to provide highly skilled, semi-skilled, and unskilled Sri Lankan workers to international employers. Our primary focus is to build long-term partnerships with reputable overseas recruitment companies while ensuring quality recruitment services and ethical employment practices.
            </p>
            <p>
              Our initial target market is Israel, where we have already established a strong business partnership with one of the country's leading recruitment companies. We aim to provide reliable manpower for the construction industry as well as hospitality, hotel services, agriculture, manufacturing, and other sectors. Located in Kurundugaha, Elpitiya, in the Southern Province of Sri Lanka, our office serves as a convenient recruitment center for skilled candidates from across the region and throughout the country.
            </p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="font-semibold text-[#0d2344] bg-blue-50 p-6 md:p-8 rounded-xl shadow-sm border-l-4 border-yellow-500 transition-transform duration-300"
            >
              At Mamari Foreign Employment Agency, we believe that our success depends on the success of both our clients and our candidates. Therefore, we are committed to providing transparent, efficient, and professional recruitment solutions.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ---------------- ABOUT US & VISION/MISSION ---------------- */}
      <section id="about" className="py-24 bg-[#f4f7f9] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* About Us Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2344] mb-8 uppercase tracking-wide border-b-4 border-yellow-500 inline-block pb-2">ABOUT US</h2>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                <p className="text-slate-700 leading-loose text-base md:text-lg text-justify">
                  At Mamari Foreign Employment Agency, we are committed to providing honest, professional, and reliable recruitment services to both employers and job seekers. We promise to maintain the highest standards of integrity, transparency, and ethical recruitment while ensuring every candidate receives the guidance and support needed throughout the overseas employment process. Our goal is to build lasting relationships with our international partners and help Sri Lankan professionals achieve successful careers abroad through safe, legal, and rewarding employment opportunities.
                </p>
              </div>
            </motion.div>

            {/* Vision & Mission Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
              }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="bg-gradient-to-br from-[#0d2344] to-[#1a3a6c] p-8 md:p-10 rounded-2xl text-white shadow-xl relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 opacity-20 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold text-yellow-500 mb-4 uppercase flex items-center gap-2">
                  <span className="text-3xl">👁️</span> Our Vision
                </h3>
                <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                  To become one of Sri Lanka's most trusted foreign employment agencies by connecting talented Sri Lankan workers with quality overseas employment opportunities while maintaining the highest standards of professionalism and integrity.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#0d2344] mb-6 uppercase flex items-center gap-2">
                  <span className="text-yellow-500 text-3xl">🎯</span> Our Mission
                </h3>
                <ul className="text-base md:text-lg text-slate-700 space-y-4 list-none">
                  {[
                    "To recruit qualified and skilled Sri Lankan employees for international employers.",
                    "To ensure ethical recruitment practices in compliance with Sri Lankan labour regulations.",
                    "To create sustainable employment opportunities for Sri Lankan youth.",
                    "To build long-term partnerships with global recruitment companies.",
                    "To contribute to Sri Lanka's economic development through foreign employment."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start group">
                      <span className="text-yellow-500 mr-3 mt-1 transform group-hover:scale-125 transition-transform duration-200">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ---------------- JOB OPPORTUNITIES ---------------- */}
      <section id="job-seekers" className="py-24 bg-[#0d2344] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container mx-auto px-6 max-w-5xl text-center mb-12 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 uppercase tracking-wide border-b-4 border-yellow-500 inline-block pb-2">JOB OPPORTUNITIES</h2>
          <p className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We currently offer exclusive opportunities for highly skilled and semi-skilled professionals in the Israel Construction Sector. Join leading global companies and build your future with us.
          </p>
        </motion.div>

        {/* CSS Auto-Sliding Image Marquee */}
        <div className="relative w-full py-10 bg-[#0a1b35] border-y border-white/10 flex shadow-2xl">
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#0d2344] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#0d2344] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div key={idx} className="w-[280px] h-[180px] md:w-[380px] md:h-[240px] bg-[#081529] mx-4 rounded-xl flex-shrink-0 flex items-center justify-center border border-white/10 relative overflow-hidden group shadow-lg">
                <Image
                  src={`/const-${item}.jpg`}
                  alt={`Construction Job ${item}`}
                  fill
                  sizes="(max-width: 768px) 280px, 380px"
                  quality={80}
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2344]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16 relative z-10"
        >
          <a href="#contact" className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-[#0d2344] font-extrabold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)] text-lg transition-transform hover:-translate-y-2 hover:scale-105">
            APPLY
          </a>
        </motion.div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
            width: max-content;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}} />
      </section>

      {/* ---------------- CONTACT US ---------------- */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="container mx-auto px-6 max-w-6xl"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d2344] mb-12 text-center uppercase tracking-wide border-b-4 border-yellow-500 inline-block pb-2 relative left-1/2 -translate-x-1/2">CONTACT US</h2>

          <div className="flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-[#0d2344] to-[#122e5c] text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-yellow-500">Send us a message / Apply Now</h3>
              <form className="space-y-6">
                <div className="group">
                  <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20 transition-all group-hover:border-yellow-500/50" />
                </div>
                <div className="group">
                  <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20 transition-all group-hover:border-yellow-500/50" />
                </div>
                <div className="group">
                  <input type="text" placeholder="Phone Number" className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20 transition-all group-hover:border-yellow-500/50" />
                </div>
                <div className="group">
                  <textarea placeholder="Job Category / Message" rows={4} className="w-full p-4 rounded-xl bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-white/20 transition-all group-hover:border-yellow-500/50 resize-none"></textarea>
                </div>
                <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-400 text-[#0d2344] font-extrabold text-lg py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_15px_rgba(234,179,8,0.4)] mt-4">
                  SUBMIT MESSAGE
                </button>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="w-full lg:w-1/2 bg-slate-50 p-8 md:p-12 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0d2344] mb-6">MAMARI Foreign Employment Agency</h3>
                <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-300 transition-colors">
                  <span className="font-bold text-[#0d2344] flex items-center gap-2 mb-2"><span className="text-xl">📍</span> Head Office:</span>
                  No. 23, 2nd Floor,<br />
                  In Front of the Filling Station,<br />
                  Kurundugaha, Elpitiya,<br />
                  Sri Lanka.
                </p>
                <div className="space-y-4">
                  <a href="tel:+94707157715" className="text-slate-700 font-semibold text-base md:text-lg flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-300 transition-colors cursor-pointer">
                    <span className="text-xl">📞</span> +94 70 715 7 715 / +94 91 228 8990
                  </a>
                  <a href="mailto:info@mamari.lk" className="text-slate-700 font-semibold text-base md:text-lg flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:border-yellow-300 transition-colors cursor-pointer">
                    <span className="text-xl">✉️</span> info@mamari.lk
                  </a>
                </div>
              </div>
              {/* Updated Google Map */}
              <div className="flex-1 w-full bg-slate-300 rounded-2xl overflow-hidden shadow-inner min-h-[300px] border-4 border-white">
                <iframe
                  src="https://maps.google.com/maps?q=6.2746335,80.1380566&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-[#050e1c] py-6 md:py-4 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo on the left */}
          <div className="hover:scale-105 transition-transform duration-300">
            <a href="#home" className="inline-block bg-white px-2 py-1 rounded-lg shadow-sm">
              <Image
                src="/mamarilogo.png"
                alt="Mamari Logo"
                width={80}
                height={30}
                className="w-20 md:w-[80px] h-auto object-contain"
              />
            </a>
          </div>
          
          {/* Copyright text on the right (stacked on mobile, right-aligned on PC) */}
          <div className="text-center md:text-right w-full md:w-auto">
            <p className="text-xs md:text-sm text-slate-400 font-medium tracking-wide leading-relaxed pr-0 md:pr-4">
              &copy; 2026 MAMARI Foreign Employment Agency. <br className="block md:hidden" /> All Rights Reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* Floating Buttons */}
      <a 
        href="https://wa.me/94707157715" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-[90] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] hover:bg-[#1ebe57] hover:scale-110 transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="text-3xl" />
      </a>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-28 right-6 z-[90] bg-yellow-500 text-[#0d2344] p-3 rounded-full shadow-[0_4px_15px_rgba(234,179,8,0.4)] hover:bg-yellow-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
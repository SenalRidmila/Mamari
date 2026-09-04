"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or denied
    const consent = localStorage.getItem("mamari_cache_consent");
    if (!consent) {
      // Delay showing the popup slightly for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("mamari_cache_consent", accepted ? "accepted" : "denied");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6 bg-[#081529]/95 backdrop-blur-md border-t border-slate-700 shadow-2xl"
        >
          <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-300 text-sm md:text-base text-center md:text-left flex-1">
              <strong className="text-yellow-500 font-bold block mb-1">Cache & Cookies Memory</strong>
              We use cache memory and cookies to optimize your experience, improve page load speeds, and analyze site traffic. Do you allow us to store cache memory?
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleConsent(false)}
                className="px-5 py-2 text-sm font-semibold text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded transition-colors"
              >
                Deny
              </button>
              <button
                onClick={() => handleConsent(true)}
                className="px-5 py-2 text-sm font-semibold bg-yellow-500 hover:bg-yellow-400 text-[#0d2344] rounded shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Allow Cache
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

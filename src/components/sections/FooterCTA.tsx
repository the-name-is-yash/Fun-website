"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <section className="relative w-full min-h-[80vh] bg-brand-bg flex items-center justify-center overflow-hidden py-32" id="explore">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue/10 to-[#050505] opacity-50 block" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4"
        >
          Now you know what&apos;s inside.
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-white/50 mb-6"
        >
          Three components. Billions of operations. Every second.
        </motion.h3>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-body text-lg mb-12"
        >
          Every frame rendered. Every file saved. Every calculation made. It all starts here.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="flex flex-col items-center gap-6"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(0,214,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95">
            Explore the Full Build
          </button>
          
          <button className="text-white/40 hover:text-white text-sm tracking-widest uppercase transition-colors underline-offset-4 hover:underline">
            See Component Specs
          </button>
        </motion.div>
      </div>
    </section>
  );
}

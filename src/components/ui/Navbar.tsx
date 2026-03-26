"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-[#050505]/75 border-b border-white/5 transition-colors"
    >
      <div className="flex items-center space-x-2">
        <span className="text-white font-medium text-lg tracking-tight">Inside a Computer</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {["Overview", "CPU", "GPU", "Storage", "Explore"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-white/60 hover:text-white transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      
      <div>
        <button className="relative overflow-hidden rounded-full py-2 px-6 text-sm font-medium text-white group bg-transparent border border-white/10 hover:border-white/20 transition-all duration-300">
          <span className="relative z-10">Start Exploring</span>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
        </button>
      </div>
    </motion.nav>
  );
}

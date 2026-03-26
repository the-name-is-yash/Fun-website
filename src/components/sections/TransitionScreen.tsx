"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TransitionScreen({ text }: { text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [50, 0, -50]);

  return (
    <section ref={ref} className="h-screen w-full bg-[#050505] flex items-center justify-center relative z-20 border-y border-white/5">
      <motion.h3 style={{ opacity, y }} className="text-3xl md:text-5xl font-medium tracking-tight text-white/80 text-center px-4">
        {text}
      </motion.h3>
    </section>
  );
}

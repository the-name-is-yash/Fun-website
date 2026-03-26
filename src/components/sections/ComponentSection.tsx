"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ComponentSectionProps {
  id: string;
  title: string;
  subtitle: string;
  descriptions: string[];
  alignText: "left" | "right";
  glowColor: string;
  renderHardware: (progress: any) => React.ReactNode;
}

export default function ComponentSection({
  id,
  title,
  subtitle,
  descriptions,
  alignText,
  glowColor,
  renderHardware,
}: ComponentSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Fade text in and out based on progress
  const y = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 0.15, 0]);

  return (
    <section ref={containerRef} id={id} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Dynamic ambient glow */}
        <motion.div 
          style={{ opacity: glowOpacity, backgroundColor: glowColor }}
          className="absolute inset-0 w-full h-full mix-blend-screen blur-[120px] rounded-full scale-[1.5] -z-10"
        />

        {/* Strictly separated layout: 40% Text, 60% Hardware */}
        <div className="container mx-auto px-6 md:px-12 w-full h-full flex flex-col md:flex-row items-center justify-between">
          
          {alignText === "left" && (
            <div className="w-full md:w-[40%] flex flex-col justify-center z-10 pr-0 md:pr-8">
              <motion.div style={{ opacity, y }} className="w-full">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
                  {title}
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-white/50 mb-6 uppercase tracking-widest">
                  {subtitle}
                </h3>
                <div className="space-y-4">
                  {descriptions.map((desc, i) => (
                    <p key={i} className="text-body text-lg leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          <div className="w-full md:w-[60%] h-full flex items-center justify-center pointer-events-none z-0 perspective-[1000px]">
            {renderHardware(scrollYProgress)}
          </div>

          {alignText === "right" && (
            <div className="w-full md:w-[40%] flex flex-col justify-center z-10 pl-0 md:pl-8">
              <motion.div style={{ opacity, y }} className="w-full">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
                  {title}
                </h2>
                <h3 className="text-xl md:text-2xl font-medium text-white/50 mb-6 uppercase tracking-widest">
                  {subtitle}
                </h3>
                <div className="space-y-4">
                  {descriptions.map((desc, i) => (
                    <p key={i} className="text-body text-lg leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

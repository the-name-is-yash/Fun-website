"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export function GpuDiagram({ progress }: { progress: MotionValue<number> }) {
  const shroudY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, -220, -220, 0]);
  const finsY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, -80, -80, 0]);
  const pcbY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, 80, 80, 0]);
  const backplateY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, 180, 180, 0]);

  const rotateX = useTransform(progress, [0.2, 0.45, 0.55, 0.7], [45, 20, 20, 45]);
  const rotateY = useTransform(progress, [0.2, 0.45, 0.55, 0.7], [30, 0, 0, 30]);
  const scale = useTransform(progress, [0.2, 0.45, 0.55, 0.7], [0.8, 1, 1, 0.8]);

  return (
    <motion.div 
      style={{ rotateX, rotateY, scale }}
      className="relative w-96 h-40 transform-style-3d group"
    >
      {/* Backplate */}
      <motion.div 
        style={{ y: backplateY }}
        className="absolute inset-0 bg-zinc-900 rounded-lg border border-zinc-700 shadow-2xl flex items-center p-4"
      >
        <div className="w-full h-full border border-zinc-800 rounded flex gap-4 opacity-50">
          <div className="flex-1 border-r border-zinc-800" />
          <div className="flex-1 border-r border-zinc-800" />
          <div className="flex-1" />
        </div>
      </motion.div>

      {/* PCB with VRAM */}
      <motion.div 
        style={{ y: pcbY }}
        className="absolute inset-0 bg-[#081f14] rounded-lg border border-green-900/50 shadow-xl flex p-4"
      >
        <div className="w-20 h-20 m-auto bg-gray-900 border border-violet-500/50 rounded shadow-[0_0_20px_rgba(123,47,255,0.3)] relative flex items-center justify-center">
            <span className="text-[10px] text-violet-400/50">GPU DIE</span>
            {/* VRAM surrounding die */}
            <div className="absolute -top-6 left-2 flex gap-1"><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/></div>
            <div className="absolute -bottom-6 left-2 flex gap-1"><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/></div>
            <div className="absolute -left-6 top-2 flex flex-col gap-1"><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/></div>
            <div className="absolute -right-6 top-2 flex flex-col gap-1"><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/><div className="w-4 h-4 bg-gray-800 rounded-sm"/></div>
        </div>
      </motion.div>

      {/* Heatsink Fins */}
      <motion.div 
        style={{ y: finsY }}
        className="absolute inset-0 bg-zinc-400 rounded-lg border border-white/20 shadow-lg overflow-hidden flex"
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-1 border-r border-black/10 bg-gradient-to-b from-zinc-300 to-zinc-500" />
        ))}
        {/* Heatpipes */}
        <div className="absolute top-1/2 left-0 w-full h-8 -translate-y-1/2 flex flex-col gap-2 opacity-80">
          <div className="w-full h-2 bg-orange-400/60 rounded-full" />
          <div className="w-full h-2 bg-orange-400/60 rounded-full" />
        </div>
      </motion.div>

      {/* Shroud with Fans */}
      <motion.div 
        style={{ y: shroudY }}
        className="absolute -inset-1 bg-zinc-950 rounded-xl border border-violet-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-evenly p-2 relative overflow-hidden"
      >
        <div className="absolute top-0 right-4 w-32 h-1 bg-violet-500 shadow-[0_0_10px_rgba(123,47,255,1)]" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-24 h-24 rounded-full border-4 border-zinc-800 bg-zinc-900 flex items-center justify-center relative shadow-inner">
            <div className="absolute w-full h-full animate-[spin_3s_linear_infinite] flex items-center justify-center">
                <div className="w-1 h-full bg-zinc-700/50 absolute" />
                <div className="w-full h-1 bg-zinc-700/50 absolute" />
                <div className="w-1 h-full bg-zinc-700/50 rotate-45 absolute" />
                <div className="w-full h-1 bg-zinc-700/50 z-10 rotate-45 absolute" />
            </div>
            <div className="w-6 h-6 rounded-full bg-zinc-800 z-20 border border-violet-500/50 shadow-[0_0_8px_rgba(123,47,255,0.5)]" />
          </div>
        ))}
      </motion.div>

    </motion.div>
  );
}

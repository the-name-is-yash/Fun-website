"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

export function CpuDiagram({ progress }: { progress: MotionValue<number> }) {
  // Explosion offsets based on scroll progress (explode 0.45, close 0.7)
  const ihsY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, -180, -180, 0]);
  const substrateY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, 100, 100, 0]);
  const pinsY = useTransform(progress, [0.3, 0.45, 0.55, 0.7], [0, 180, 180, 0]);
  
  const rotateX = useTransform(progress, [0.2, 0.45, 0.55, 0.7], [60, 45, 45, 60]);
  const rotateZ = useTransform(progress, [0.2, 0.45, 0.55, 0.7], [45, 0, 0, 45]);
  const scale = useTransform(progress, [0.2, 0.45, 0.55, 0.7], [0.8, 1, 1, 0.8]);

  return (
    <motion.div 
      style={{ rotateX, rotateZ, scale }}
      className="relative w-64 h-64 transform-style-3d group"
    >
      {/* Pins Layer */}
      <motion.div 
        style={{ y: pinsY }}
        className="absolute inset-0 bg-yellow-600 rounded-xl shadow-[0_0_15px_rgba(255,179,71,0.2)] border border-yellow-500/30 overflow-hidden flex flex-wrap gap-[2px] p-2"
      >
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="w-[12px] h-[12px] bg-yellow-400/80 rounded-full" />
        ))}
        {/* Label */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/60 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          Gold Contact Pins
        </div>
      </motion.div>

      {/* Substrate Layer */}
      <motion.div 
        style={{ y: substrateY }}
        className="absolute inset-0 bg-[#0a2e1f] rounded-xl border border-white/10 shadow-2xl flex items-center justify-center p-4"
      >
        <div className="absolute inset-2 border border-green-500/20 rounded-lg" />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/60 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          PCB Substrate
        </div>
      </motion.div>

      {/* Silicon Die Layer */}
      <motion.div 
        className="absolute inset-1/4 bg-gray-900 rounded border border-white/20 shadow-[0_0_30px_rgba(255,179,71,0.5)] overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite_linear]" />
        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-px bg-white/10 p-px">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-full h-full bg-gray-900" />
          ))}
        </div>
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-white/60 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          Silicon Die
        </div>
      </motion.div>

      {/* IHS Copper Lid Layer */}
      <motion.div 
        style={{ y: ihsY }}
        className="absolute -inset-1 bg-gradient-to-br from-gray-300 to-gray-500 rounded-xl border border-white/40 shadow-xl flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-2 border-2 border-gray-400/30 rounded-lg" />
        <span className="text-gray-800 font-bold text-2xl opacity-30 tracking-widest">CPU</span>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/60 tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
          Integrated Heat Spreader
        </div>
      </motion.div>

    </motion.div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, MotionValue, useMotionValueEvent } from "framer-motion";

export function CpuSequence({ progress }: { progress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 240;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/cpu-sequence/ezgif-frame-${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        // Keep the canvas strictly tied to the intrinsic size of the high-quality photos
        if (loadedCount === 1 && canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                // Determine intrinsic size
                const width = img.naturalWidth;
                const height = img.naturalHeight;
                
                // Account for Retina/High-DPI displays
                const dpr = window.devicePixelRatio || 1;
                canvasRef.current.width = width * dpr;
                canvasRef.current.height = height * dpr;
                ctx.scale(dpr, dpr);
                
                // High quality image smoothing
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";
                
                ctx.drawImage(loadedImages[0], 0, 0, width, height);
            }
        }
      };
      // fallback in case of load error to not block everything endlessly
      img.onerror = () => { loadedCount++; }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Map progress to frame index
  // The component section is sticky for 300vh, [0.2, 0.8] restricts animation to the sticky window
  const frameIndex = useTransform(progress, [0.2, 0.8], [0, frameCount - 1]);
  
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length === frameCount && canvasRef.current) {
      const index = Math.min(frameCount - 1, Math.max(0, Math.floor(latest)));
      const img = images[index];
      const ctx = canvasRef.current.getContext("2d");
      
      if (ctx && img.complete && img.naturalHeight !== 0) {
        const width = img.naturalWidth;
        const height = img.naturalHeight;
        
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
      }
    }
  });

  return (
    <div 
      className="relative w-full max-w-2xl aspect-[4/5] flex items-center justify-center pointer-events-none mix-blend-lighten"
      style={{ clipPath: "inset(0 80px 0 0)" }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-contain"
      />
    </div>
  );
}

"use client";

import Hero from "@/components/sections/Hero";
import ComponentSection from "@/components/sections/ComponentSection";
import FooterCTA from "@/components/sections/FooterCTA";
import TransitionScreen from "@/components/sections/TransitionScreen";
import { CpuSequence } from "@/components/hardware/CpuSequence";
import { GpuDiagram } from "@/components/hardware/GpuDiagram";
import { NvmeDiagram } from "@/components/hardware/NvmeDiagram";

export default function Home() {
  return (
    <main className="bg-brand-bg relative w-full selection:bg-brand-blue/30 selection:text-white">
      <Hero />
      
      {/* CPU Section */}
      <ComponentSection 
        id="cpu"
        title="The Brain."
        subtitle="Central Processing Unit."
        descriptions={[
          "Billions of transistors. A few square centimeters. Infinite possibility.",
          "The CPU orchestrates every instruction your computer executes — from opening a browser tab to rendering a game world in real time.",
          "Inside: a silicon die smaller than a fingernail, housing dozens of processing cores, cache memory layers, and a memory controller — all communicating at the speed of light.",
        ]}
        alignText="left"
        glowColor="transparent"
        renderHardware={(progress) => <CpuSequence progress={progress} />}
      />

      <TransitionScreen text="One brain isn't enough." />

      {/* GPU Section */}
      <ComponentSection 
        id="gpu"
        title="The Powerhouse."
        subtitle="Graphics Processing Unit."
        descriptions={[
          "Where worlds are rendered. Where frames become reality.",
          "The GPU contains thousands of small parallel cores — each one simpler than a CPU core, but together capable of calculating millions of pixels every single millisecond.",
          "Inside the shroud: copper heatpipes drawing heat from the GPU die, a vapor chamber distributing it instantly, and a stack of GDDR6X memory chips feeding the processor with data faster than any other component in your system.",
        ]}
        alignText="right"
        glowColor="rgba(123, 47, 255, 0.4)" // Electric violet
        renderHardware={(progress) => <GpuDiagram progress={progress} />}
      />

      <TransitionScreen text="Speed is nothing without space." />

      {/* NVMe Section */}
      <ComponentSection 
        id="storage"
        title="The Vault."
        subtitle="NVMe Solid State Drive."
        descriptions={[
          "No moving parts. No platters. No waiting.",
          "An NVMe SSD stores your entire digital life — operating system, games, files — on NAND flash memory chips that have no mechanical components whatsoever.",
          "The controller chip reads and writes billions of cells across dozens of NAND chips simultaneously, delivering speeds up to 7,000 MB/s — fast enough to transfer a full movie in under a second.",
        ]}
        alignText="left"
        glowColor="transparent"
        renderHardware={(progress) => <NvmeDiagram progress={progress} />}
      />

      <FooterCTA />
    </main>
  );
}

'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);
  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-[#0f172a] to-background-dark opacity-90" />

      {/* Animated Orbs */}
      <motion.div
        style={{
          y: y1,
          rotate: rotate1,
          opacity
        }}
        className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary-dark/5 blur-[100px]" />


      <motion.div
        style={{
          y: y2,
          scale: opacity
        }}
        className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[120px]" />


      <motion.div
        style={{
          y: y1,
          x: y2
        }}
        className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[80px]" />


      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    </div>);

}
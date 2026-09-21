import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div
      id="scroll-progress-container"
      className="fixed top-0 inset-x-0 z-50 h-[2px] bg-white/[0.06] pointer-events-none"
    >
      <motion.div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-cream/40 via-cream to-white origin-left shadow-[0_0_10px_rgba(239,238,233,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};

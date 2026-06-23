"use client";

import { motion } from "framer-motion";
import DisplayCards from "./DisplayCards";

const up = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: "easeOut" as const, delay },
});

export default function Hero() {
  return (
    <div className="hero">
      <motion.div className="hero-eye" {...up(0.2)}>
        Introducing Smart Scale AI
      </motion.div>

      <motion.h1 className="hero-h" {...up(0.4)}>
        <em>
          The AI system
          <br />
          that runs
          <br />
          your business.
        </em>
      </motion.h1>

      <motion.p className="hero-sub" {...up(0.6)}>
        AI agents that capture, qualify and close — while you work.
      </motion.p>

      <motion.div className="hero-btns" {...up(0.8)}>
        <a href="#contact" className="btn-p">
          Get your free demo →
        </a>
        <a href="#product" className="btn-s">
          See how it works
        </a>
      </motion.div>

      <motion.div style={{ width: "100%" }} {...up(1.1)}>
        <DisplayCards />
      </motion.div>

      <motion.div className="scroll-cue" {...up(1.6)}>
        <span>Scroll</span>
        <div className="scroll-bar" />
      </motion.div>
    </div>
  );
}

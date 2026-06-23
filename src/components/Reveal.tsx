"use client";

import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  id?: string;
};

/** Scroll-reveal wrapper — replaces the vanilla IntersectionObserver `.reveal`. */
export default function Reveal({
  children,
  className = "",
  style,
  delay = 0,
  y = 32,
  id,
}: Props) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.75, ease: [0.2, 0, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

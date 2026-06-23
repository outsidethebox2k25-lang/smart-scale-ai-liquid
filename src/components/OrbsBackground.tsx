"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Fixed animated color orbs with scroll parallax (Framer useScroll/useTransform). */
export default function OrbsBackground() {
  const { scrollY } = useScroll();

  // factors mirror the original vanilla parallax (scrollY * .12 * axisFactor)
  const o1x = useTransform(scrollY, (v) => v * 0.036);
  const o1y = useTransform(scrollY, (v) => v * 0.048);
  const o2x = useTransform(scrollY, (v) => v * -0.03);
  const o2y = useTransform(scrollY, (v) => v * 0.042);
  const o3x = useTransform(scrollY, (v) => v * 0.042);
  const o3y = useTransform(scrollY, (v) => v * -0.03);
  const o4x = useTransform(scrollY, (v) => v * -0.036);
  const o4y = useTransform(scrollY, (v) => v * -0.024);
  const o5x = useTransform(scrollY, (v) => v * 0.018);
  const o5y = useTransform(scrollY, (v) => v * 0.024);

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        background: "#000",
      }}
    >
      <OrbLayer x={o1x} y={o1y} cls="o1" />
      <OrbLayer x={o2x} y={o2y} cls="o2" />
      <OrbLayer x={o3x} y={o3y} cls="o3" />
      <OrbLayer x={o4x} y={o4y} cls="o4" />
      <OrbLayer x={o5x} y={o5y} cls="o5" />
      <div className="vig" />
    </div>
  );
}

function OrbLayer({
  x,
  y,
  cls,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  cls: string;
}) {
  // wrapper carries the scroll parallax; inner .orb keeps its CSS keyframe float
  return (
    <motion.div style={{ position: "absolute", inset: 0, x, y }}>
      <div className={`orb ${cls}`} />
    </motion.div>
  );
}

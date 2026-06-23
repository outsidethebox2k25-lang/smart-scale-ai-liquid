import type { CSSProperties, ReactNode } from "react";

type Props = {
  /** the L1 mesh gradient, e.g. "linear-gradient(140deg, ...)" */
  mesh: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** inner .gb wrapper styling (padding etc.) */
  bodyStyle?: CSSProperties;
  /** render the full 8-layer stack (default) or the light 4-layer variant */
  layers?: 4 | 8;
};

/**
 * Reusable liquid-glass card — the exact 8-layer stack:
 * L1 mesh · L2 backdrop blur · L3 radial highlight · L4 top streak
 * L5 shimmer · L6 bottom edge · L7 left edge · L8 right edge
 */
export default function GlassCard({
  mesh,
  children,
  className = "",
  style,
  bodyStyle,
  layers = 8,
}: Props) {
  return (
    <div
      className={`glass ${className}`}
      style={{ ["--mesh" as string]: mesh, ...style } as CSSProperties}
    >
      <div className="l1" />
      <div className="l2" />
      {layers === 8 && <div className="l3" />}
      <div className="l4" />
      <div className="l5" />
      {layers === 8 && <div className="l6" />}
      {layers === 8 && <div className="l7" />}
      {layers === 8 && <div className="l8" />}
      <div className="gb" style={bodyStyle}>
        {children}
      </div>
    </div>
  );
}

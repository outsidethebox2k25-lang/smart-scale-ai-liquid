"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
  cls: string;
  icon: string;
  label: string;
  title: string;
  desc: string;
  dot: string;
  stat: string;
  statColor: string;
  base: { x: number; y: number };
  active: { x: number; y: number };
  grayDefault: number;
};

const CARDS: Card[] = [
  {
    cls: "dc-1",
    icon: "💬",
    label: "SMS AI",
    title: "Scale SMS AI",
    desc: "Responde leads en 3 segundos. 24/7.",
    dot: "#28e082",
    stat: "47 leads respondidos hoy",
    statColor: "rgba(40,224,130,.9)",
    base: { x: 0, y: 0 },
    active: { x: -8, y: -32 },
    grayDefault: 80,
  },
  {
    cls: "dc-2",
    icon: "🔮",
    label: "Widget AI",
    title: "Scale Widget AI",
    desc: "En tu sitio. Califica y agenda solo.",
    dot: "#a07cff",
    stat: "12 citas agendadas hoy",
    statColor: "rgba(160,124,255,.9)",
    base: { x: 18, y: 14 },
    active: { x: 18, y: -18 },
    grayDefault: 60,
  },
  {
    cls: "dc-3",
    icon: "👍",
    label: "FB AI",
    title: "Scale FB AI",
    desc: "Comentan → se agendan. Solo.",
    dot: "#5ac8fa",
    stat: "Live · 0 errores",
    statColor: "rgba(90,200,250,.9)",
    base: { x: 36, y: 28 },
    active: { x: 36, y: 42 },
    grayDefault: 0,
  },
];

export default function DisplayCards() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % 3), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="dc-wrap">
      {CARDS.map((c, i) => {
        const isActive = i === active;
        const pos = isActive ? c.active : c.base;
        const gray = isActive ? 0 : c.grayDefault;
        return (
          <motion.div
            key={c.cls}
            className={`dc ${c.cls}`}
            onMouseEnter={() => setActive(i)}
            animate={{
              skewY: -6,
              x: pos.x,
              y: pos.y,
              filter: `grayscale(${gray}%)`,
              zIndex: isActive ? 10 : i + 1,
            }}
            transition={{ duration: 0.7, ease: [0.2, 0, 0.2, 1] }}
            style={{ zIndex: isActive ? 10 : i + 1 }}
          >
            <div className="dc-mesh" />
            <motion.div
              className="dc-overlay"
              animate={{ opacity: isActive ? 0 : i === 2 ? 0 : 1 }}
              transition={{ duration: 0.55 }}
            />
            <div className="dc-content">
              <div className="dc-top">
                <div className="dc-icon">{c.icon}</div>
                <div>
                  <div className="dc-label">{c.label}</div>
                  <div className="dc-title">{c.title}</div>
                </div>
              </div>
              <div className="dc-desc">{c.desc}</div>
              <div className="dc-meta">
                <div className="dc-dot" style={{ background: c.dot }} />
                <span className="dc-stat" style={{ color: c.statColor }}>
                  {c.stat}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

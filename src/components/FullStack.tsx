"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const CARDS = [
  { gmesh: "linear-gradient(145deg,rgba(10,200,180,.38),rgba(10,65,155,.58))", l: "CRM AI", v: ["Pipeline", "Agent"], m: "47 leads today ↑" },
  { gmesh: "linear-gradient(145deg,rgba(37,211,102,.32),rgba(10,80,52,.58))", l: "SMS AI", v: ["Text", "Agent"], m: "Replies in 3s" },
  { gmesh: "linear-gradient(145deg,rgba(28,88,225,.4),rgba(65,12,195,.52))", l: "FB AI", v: ["FB", "Agent"], m: "DMs auto-closed" },
  { gmesh: "linear-gradient(145deg,rgba(218,48,128,.34),rgba(145,32,78,.5))", l: "IG AI", v: ["IG", "Agent"], m: "Comment → booked" },
  { gmesh: "linear-gradient(145deg,rgba(12,172,215,.34),rgba(12,62,135,.54))", l: "Widget AI", v: ["Web", "Agent"], m: "Always online" },
  { gmesh: "linear-gradient(145deg,rgba(232,118,30,.32),rgba(152,32,98,.5))", l: "Landing AI", v: ["Smart", "Page"], m: "AI incl. · 24hrs" },
];

export default function FullStack() {
  return (
    <section className="compact" style={{ padding: "80px 48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48, width: "100%", maxWidth: 1300 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">The Full Stack</div>
          <h2 className="ttl">One system. Every AI agent you need.</h2>
        </Reveal>

        <div className="grid6">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.l}
              className="gc"
              style={{ ["--gmesh" as string]: c.gmesh } as React.CSSProperties}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: [0.2, 0, 0.2, 1], delay: i * 0.12 }}
            >
              <div className="gc-sh" />
              <div className="gc-in">
                <div className="gc-l">{c.l}</div>
                <div className="gc-v">
                  {c.v[0]}
                  <br />
                  {c.v[1]}
                </div>
                <div className="gc-m">{c.m}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

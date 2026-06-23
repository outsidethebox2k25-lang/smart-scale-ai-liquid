import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const ITEMS = [
  {
    mesh: "linear-gradient(140deg,rgba(0,200,180,.16),rgba(20,40,140,.26))",
    text: "\"First week — 9 leads, 4 calls booked. I never touched my phone once.\"",
    name: "Miguel R.",
    role: "Roofing Contractor · Las Vegas, NV",
  },
  {
    mesh: "linear-gradient(140deg,rgba(140,50,255,.16),rgba(20,40,140,.26))",
    text: "\"The AI replies faster than I ever could. Closed 2 jobs on day one.\"",
    name: "Carlos M.",
    role: "General Contractor · Phoenix, AZ",
  },
  {
    mesh: "linear-gradient(140deg,rgba(255,120,40,.16),rgba(140,20,80,.26))",
    text: "\"Best investment of the year. My site works at 2am now.\"",
    name: "Roberto S.",
    role: "Flooring Contractor · San Diego, CA",
  },
];

export default function Testimonials() {
  return (
    <section className="compact" style={{ padding: "80px 48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48, width: "100%", maxWidth: 1240 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">Results</div>
          <h2 className="ttl">What contractors say.</h2>
        </Reveal>
        <Reveal className="grid3" delay={0.1}>
          {ITEMS.map((it) => (
            <GlassCard key={it.name} className="tcard" layers={4} mesh={it.mesh}>
              <div className="tstars">⭐⭐⭐⭐⭐</div>
              <div className="ttext">{it.text}</div>
              <div className="tname">{it.name}</div>
              <div className="trole">{it.role}</div>
            </GlassCard>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

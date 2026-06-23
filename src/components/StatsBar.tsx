import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const STATS = [
  { n: "3s", l: "Tiempo de respuesta" },
  { n: "100%", l: "Automatizado" },
  { n: "24/7", l: "Siempre activo" },
  { n: "0", l: "Trabajo manual" },
];

export default function StatsBar() {
  return (
    <section className="compact">
      <Reveal
        style={{ width: "100%", maxWidth: 1100 }}
      >
        <GlassCard
          layers={4}
          mesh="linear-gradient(135deg,rgba(0,200,180,.14),rgba(20,40,120,.22))"
        >
          <div className="stats-bar">
            {STATS.map((s) => (
              <div className="stat-i" key={s.l}>
                <div className="stat-n">{s.n}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}

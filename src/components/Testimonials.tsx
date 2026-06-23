import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const ITEMS = [
  {
    mesh: "linear-gradient(140deg,rgba(0,200,180,.16),rgba(20,40,140,.26))",
    text: "\"Primera semana — 9 leads, 4 llamadas agendadas. No toqué mi teléfono ni una vez.\"",
    name: "Miguel R.",
    role: "Contratista de Techos · Las Vegas, NV",
  },
  {
    mesh: "linear-gradient(140deg,rgba(140,50,255,.16),rgba(20,40,140,.26))",
    text: "\"La IA responde más rápido de lo que yo podría. Cerré 2 trabajos el primer día.\"",
    name: "Carlos M.",
    role: "Contratista General · Phoenix, AZ",
  },
  {
    mesh: "linear-gradient(140deg,rgba(255,120,40,.16),rgba(140,20,80,.26))",
    text: "\"La mejor inversión del año. Mi sitio trabaja a las 2am ahora.\"",
    name: "Roberto S.",
    role: "Contratista de Pisos · San Diego, CA",
  },
];

export default function Testimonials() {
  return (
    <section className="compact" style={{ padding: "80px 48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 48, width: "100%", maxWidth: 1240 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">Resultados</div>
          <h2 className="ttl">Lo que dicen los contratistas.</h2>
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

import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

const FEATURES = [
  { icon: "🎨", t: "Diseño Premium", s: "Construido para tu marca. Mobile-first. Rápido. Diseñado para convertir." },
  { icon: "🤖", t: "AI Agent Incluido", s: "Responde cada lead en 3 segundos. Califica. Agenda. 24/7." },
  { icon: "⚡", t: "Live en 24 Horas", s: "Tú das la info. Nosotros construimos. Tu AI va live mañana." },
];

const PILLS = ["✓ Dominio personalizado", "✓ GHL integrado", "✓ AI agent live", "✓ Cero mantenimiento"];

export default function PremiumAddon() {
  return (
    <section className="compact" style={{ padding: "80px 48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 40, width: "100%", maxWidth: 860 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.07)", border: ".5px solid rgba(255,255,255,.18)", borderRadius: 20, padding: "6px 18px", fontSize: 11, color: "rgba(255,255,255,.6)", fontWeight: 600, letterSpacing: ".08em", backdropFilter: "blur(12px)" }}>
            ✦ Premium Add-on
          </div>
          <h2 className="ttl" style={{ fontSize: "clamp(36px,5vw,64px)" }}>
            Website Premium
            <br />
            + AI Agent.
            <br />
            Entregado en 24hrs.
          </h2>
          <p className="sub">
            Tu marca. Tu voz. Un sitio construido para convertir — con un AI agent que
            maneja cada lead desde el día uno.
          </p>
        </Reveal>

        <Reveal style={{ width: "100%" }} delay={0.2}>
          <GlassCard
            mesh="linear-gradient(138deg,rgba(240,120,32,.62),rgba(180,40,120,.65) 50%,rgba(80,20,200,.55))"
            bodyStyle={{ padding: "36px 44px" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 28 }}>
              {FEATURES.map((f) => (
                <div key={f.t}>
                  <div className="cfo-icon" style={{ marginBottom: 12 }}>{f.icon}</div>
                  <div className="cfo-title">{f.t}</div>
                  <div className="cfo-sub" style={{ marginTop: 4 }}>{f.s}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 28, paddingTop: 22, borderTop: ".5px solid rgba(255,255,255,.08)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PILLS.map((p) => (
                  <div className="bk-pill" key={p}>{p}</div>
                ))}
              </div>
              <div className="cbadge" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                ✦ Premium Add-on
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

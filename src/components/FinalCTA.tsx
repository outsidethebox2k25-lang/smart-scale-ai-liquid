import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="contact">
      <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth: 720, textAlign: "center" }}>
        <div className="eye">¿Listo?</div>
        <h2 style={{ fontSize: "clamp(52px,7vw,100px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 1, textAlign: "center" }}>
          Escala más inteligente.
        </h2>
        <p className="sub">
          Ve el demo gratis. ¿Te gusta? Lo configuramos. ¿No te gusta? No pagas nada.
        </p>

        <GlassCard
          style={{ width: "100%", maxWidth: 520 }}
          mesh="linear-gradient(138deg,rgba(0,215,185,.18),rgba(20,50,160,.28) 52%,rgba(140,30,200,.18))"
          bodyStyle={{ padding: "36px 40px", display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div className="lfield">Tu nombre</div>
          <div className="lfield">Número de teléfono</div>
          <div className="lfield">Tipo de negocio (techos, pisos, remodelación...)</div>
          <div
            style={{
              background: "rgba(255,255,255,.12)",
              border: ".5px solid rgba(255,255,255,.26)",
              borderRadius: 50,
              padding: 16,
              textAlign: "center",
              fontSize: 14,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: ".05em",
              cursor: "pointer",
              boxShadow: "inset 0 2px 0 rgba(255,255,255,.2), 0 20px 60px rgba(0,0,0,.4)",
              marginTop: 6,
            }}
          >
            Quiero mi demo gratis →
          </div>
          <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,.2)", letterSpacing: ".06em", marginTop: 4 }}>
            SIN RIESGO · SIN COMPROMISO · LO VES PRIMERO
          </div>
        </GlassCard>

        <div style={{ marginTop: 60, display: "flex", flexDirection: "column", alignItems: "center", width: 160 }}>
          <div className="nl-top">
            <span className="nl-w" style={{ fontSize: 13 }}>SMART</span>
            <div className="nl-vl" style={{ height: 40 }} />
            <span className="nl-w" style={{ fontSize: 13 }}>SCALE</span>
          </div>
          <div className="nl-hl" />
          <div className="nl-bot">
            <span className="nl-a" style={{ fontSize: 18 }}>a</span>
            <div className="nl-vl" style={{ height: 28 }} />
            <span className="nl-i" style={{ fontSize: 18 }}>i</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

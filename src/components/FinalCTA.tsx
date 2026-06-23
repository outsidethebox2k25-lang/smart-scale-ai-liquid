import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="contact">
      <Reveal style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 30, maxWidth: 720, textAlign: "center" }}>
        <div className="eye">Ready?</div>
        <h2 style={{ fontSize: "clamp(52px,7vw,100px)", fontWeight: 900, letterSpacing: "-.045em", lineHeight: 1, textAlign: "center" }}>
          Scale smarter.
        </h2>
        <p className="sub">
          See the demo free. Like it? We set it up. Don&apos;t? You pay nothing.
        </p>

        <GlassCard
          style={{ width: "100%", maxWidth: 520 }}
          mesh="linear-gradient(138deg,rgba(0,215,185,.18),rgba(20,50,160,.28) 52%,rgba(140,30,200,.18))"
          bodyStyle={{ padding: "36px 40px", display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div className="lfield">Your name</div>
          <div className="lfield">Phone number</div>
          <div className="lfield">Business type (roofing, flooring, remodeling...)</div>
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
            Get my free demo →
          </div>
          <div style={{ textAlign: "center", fontSize: 11, color: "rgba(255,255,255,.2)", letterSpacing: ".06em", marginTop: 4 }}>
            NO RISK · NO COMMITMENT · YOU SEE IT FIRST
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

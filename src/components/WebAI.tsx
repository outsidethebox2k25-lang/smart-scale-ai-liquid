"use client";

import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import WBar from "./WBar";
import ChatAnimation, { type ChatItem } from "./ChatAnimation";

const WIDGET_CHAT: ChatItem[] = [
  { kind: "outPlain", text: "¡Hey! ¿En qué te puedo ayudar? 👋", t: 0 },
  { kind: "in", text: "Necesito ayuda con automatizaciones", t: 1100 },
  { kind: "typing", t: 1800 },
  { kind: "green", text: "Perfecto — agendemos una llamada rápida →", t: 2600 },
  { kind: "tag", text: "Widget AI · 2 seg", t: 2600 },
  { kind: "in", text: "¡Claro!", t: 3500 },
  { kind: "typing", t: 4100 },
  { kind: "outPlain", text: "📅 ¡Link de calendario enviado a tu teléfono!", t: 4900 },
  { kind: "tagw", text: "Widget AI · auto-enviado", t: 4900 },
];

export default function WebAI() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 52,
          width: "100%",
          maxWidth: 1240,
        }}
      >
        <Reveal
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
        >
          <div className="eye">Scale Web AI</div>
          <h2 className="ttl">
            En tu sitio. En tu landing.
            <br />
            Siempre cerrando.
          </h2>
        </Reveal>

        <Reveal className="grid2" delay={0.1}>
          <GlassCard mesh="linear-gradient(140deg,rgba(10,195,175,.7),rgba(25,80,195,.76) 52%,rgba(10,140,115,.52))">
            <WBar title="Scale Widget AI" />
            <div className="wbody">
              <div className="cicon">🔮</div>
              <div className="clabel">Scale Widget AI</div>
              <div className="ctitle">
                En tu sitio.
                <br />
                Siempre activo.
              </div>
              <ChatAnimation items={WIDGET_CHAT} />
            </div>
          </GlassCard>

          <GlassCard mesh="linear-gradient(140deg,rgba(240,120,32,.67),rgba(182,52,122,.62) 50%,rgba(98,22,188,.56))">
            <WBar title="Scale Landing AI" />
            <div className="wbody">
              <div className="cicon">🚀</div>
              <div className="clabel">Scale Landing AI</div>
              <div className="ctitle">
                Un sitio que vende
                <br />
                mientras duermes.
              </div>
              <div style={{ marginTop: 20 }}>
                <div className="lfield">Tu nombre</div>
                <div className="lfield">Número de teléfono</div>
                <div
                  style={{
                    background: "rgba(255,255,255,.14)",
                    border: ".5px solid rgba(255,255,255,.26)",
                    borderRadius: 24,
                    padding: 13,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: ".05em",
                    cursor: "pointer",
                    boxShadow: "inset 0 1.5px 0 rgba(255,255,255,.2)",
                  }}
                >
                  Quiero mi demo gratis →
                </div>
              </div>
              <div className="cbadge">
                <span className="dot pulse" style={{ background: "#28e082", width: 7, height: 7 }} />
                AI agent incluido · Siempre activo
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

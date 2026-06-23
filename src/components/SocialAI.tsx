"use client";

import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import WBar from "./WBar";
import ChatAnimation, { type ChatItem } from "./ChatAnimation";

const FB_CHAT: ChatItem[] = [
  { kind: "in", text: "Me interesa tu servicio de techos", t: 0 },
  { kind: "typing", t: 600 },
  { kind: "green", text: "¡Hey! ¿Cuál es tu código postal?", t: 1400 },
  { kind: "tag", text: "FB AI · 2 seg", t: 1400 },
  { kind: "in", text: "89052 — Henderson, NV", t: 2400 },
  { kind: "typing", t: 3100 },
  { kind: "green", text: "¡Jue 2pm agendado! Ahí nos vemos 🔥", t: 3900 },
  { kind: "tag", text: "FB AI · auto-agendado ✓", t: 3900 },
];

const IG_CHAT: ChatItem[] = [
  { kind: "in", text: "¿Cuánto cuesta remodelar la cocina? 🔥", t: 0 },
  { kind: "typing", t: 700 },
  { kind: "green", text: "$15k–$40k. ¿Quieres cotización gratis?", t: 1500 },
  { kind: "tag", text: "IG AI · 4 seg", t: 1500 },
  { kind: "in", text: "¡Sí! Zona San Diego", t: 2500 },
  { kind: "typing", t: 3100 },
  { kind: "green", text: "Link enviado. ¡Nos vemos el vier! ✅", t: 3900 },
  { kind: "tag", text: "IG AI · auto-agendado ✓", t: 3900 },
];

export default function SocialAI() {
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
          <div className="eye">Scale Social AI</div>
          <h2 className="ttl">
            Facebook. Instagram.
            <br />
            Cerrado. Automáticamente.
          </h2>
        </Reveal>

        <Reveal className="grid2" delay={0.1}>
          <GlassCard mesh="linear-gradient(140deg,rgba(28,95,235,.74),rgba(65,15,205,.7) 52%,rgba(15,155,230,.52))">
            <WBar title="Scale FB AI" />
            <div className="wbody">
              <div className="cicon">👍</div>
              <div className="clabel">Scale FB AI</div>
              <div className="ctitle">Facebook se cierra solo</div>
              <ChatAnimation items={FB_CHAT} />
            </div>
          </GlassCard>

          <GlassCard mesh="linear-gradient(140deg,rgba(225,50,130,.68),rgba(170,65,25,.62) 50%,rgba(115,25,195,.56))">
            <WBar title="Scale IG AI" />
            <div className="wbody">
              <div className="cicon">📸</div>
              <div className="clabel">Scale IG AI</div>
              <div className="ctitle">Comentan → Agendado</div>
              <ChatAnimation items={IG_CHAT} />
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

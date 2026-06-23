"use client";

import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import WBar from "./WBar";
import ChatAnimation, { type ChatItem } from "./ChatAnimation";

const SMS_CHAT: ChatItem[] = [
  { kind: "in", text: "Vi tu anuncio. ¿Sigues disponible?", t: 0 },
  { kind: "typing", t: 700 },
  { kind: "green", text: "¡Hola! Sí — ¿cuál es tu dirección para la cotización?", t: 1500 },
  { kind: "tag", text: "SMS AI · 3 seg", t: 1500 },
  { kind: "in", text: "4821 Maple Ave, Las Vegas", t: 2600 },
  { kind: "typing", t: 3300 },
  { kind: "green", text: "¡Agendado viernes 9am! Ahí estamos 📅", t: 4100 },
  { kind: "tag", text: "SMS AI · auto-agendado ✓", t: 4100 },
];

export default function CrmSms() {
  return (
    <>
      {/* CRM AI */}
      <section id="product">
        <Reveal className="split">
          <div className="copy-col">
            <div className="copy-tag">Scale CRM AI</div>
            <h2 className="copy-h">
              Cada lead.
              <br />
              Cada etapa.
              <br />
              Rastreado.
            </h2>
            <p className="copy-s">
              Inteligencia de pipeline — automatizada desde el día uno. Mira cada deal
              moverse en tiempo real, sin mover un dedo.
            </p>
          </div>
          <Reveal delay={0.2}>
            <GlassCard mesh="linear-gradient(140deg,rgba(0,215,185,.78),rgba(0,100,200,.84) 52%,rgba(180,60,20,.62))">
              <WBar title="Scale CRM AI" />
              <div className="wbody">
                <div className="cicon">🗂</div>
                <div className="clabel">Scale CRM AI</div>
                <div className="ctitle">Pipeline en tiempo real.</div>
                <div>
                  <div className="sr">
                    <span className="sk">
                      <span className="dot pulse" style={{ background: "#28e082", width: 8, height: 8 }} />
                      James R.
                    </span>
                    <span className="sv" style={{ color: "rgba(40,224,130,.92)" }}>$8,500</span>
                  </div>
                  <div className="sr">
                    <span className="sk">
                      <span className="dot" style={{ background: "#ff6432", width: 8, height: 8 }} />
                      Mike L.
                    </span>
                    <span className="sv" style={{ color: "rgba(255,100,50,.92)" }}>Lead caliente</span>
                  </div>
                  <div className="sr">
                    <span className="sk">Pipeline</span>
                    <span className="sv">47 leads</span>
                  </div>
                  <div className="sr">
                    <span className="sk">Seguimiento IA</span>
                    <span className="sv" style={{ color: "rgba(90,200,255,.92)" }}>enviado · hace 2m</span>
                  </div>
                  <div className="sr">
                    <span className="sk">Agendados hoy</span>
                    <span className="sv">12 llamadas</span>
                  </div>
                </div>
                <div className="cbadge">
                  <span className="dot pulse" style={{ background: "#28e082", width: 7, height: 7 }} />
                  Live · 0 errores
                </div>
              </div>
            </GlassCard>
          </Reveal>
        </Reveal>
      </section>

      {/* SMS AI */}
      <section>
        <Reveal className="split rev">
          <div className="copy-col">
            <div className="copy-tag">Scale SMS AI</div>
            <h2 className="copy-h">
              Responde
              <br />
              antes de que
              <br />
              te olviden.
            </h2>
            <p className="copy-s">
              3 segundos. Cada lead. Día o noche — tu IA responde, califica y agenda.
              Tú solo apareces.
            </p>
          </div>
          <Reveal delay={0.2}>
            <GlassCard mesh="linear-gradient(140deg,rgba(30,200,145,.74),rgba(20,80,195,.82) 52%,rgba(100,25,210,.62))">
              <WBar title="Scale SMS AI" />
              <div className="wbody">
                <div className="cicon">💬</div>
                <div className="clabel">Scale SMS AI</div>
                <div className="ctitle">
                  Auto-responde.
                  <br />
                  Auto-agenda.
                </div>
                <ChatAnimation items={SMS_CHAT} />
              </div>
            </GlassCard>
          </Reveal>
        </Reveal>
      </section>
    </>
  );
}

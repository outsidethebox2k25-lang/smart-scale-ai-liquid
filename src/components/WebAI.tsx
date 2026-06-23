"use client";

import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import WBar from "./WBar";
import ChatAnimation, { type ChatItem } from "./ChatAnimation";

const WIDGET_CHAT: ChatItem[] = [
  { kind: "outPlain", text: "Hey! How can I help you? 👋", t: 0 },
  { kind: "in", text: "I need help with automations", t: 1100 },
  { kind: "typing", t: 1800 },
  { kind: "green", text: "Perfect — let's book a quick call →", t: 2600 },
  { kind: "tag", text: "Widget AI · 2 sec", t: 2600 },
  { kind: "in", text: "Sure!", t: 3500 },
  { kind: "typing", t: 4100 },
  { kind: "outPlain", text: "📅 Calendar link sent to your phone!", t: 4900 },
  { kind: "tagw", text: "Widget AI · auto-sent", t: 4900 },
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
            On your site. On your landing.
            <br />
            Always closing.
          </h2>
        </Reveal>

        <Reveal className="grid2" delay={0.1}>
          <GlassCard mesh="linear-gradient(140deg,rgba(10,195,175,.7),rgba(25,80,195,.76) 52%,rgba(10,140,115,.52))">
            <WBar title="Scale Widget AI" />
            <div className="wbody">
              <div className="cicon">🔮</div>
              <div className="clabel">Scale Widget AI</div>
              <div className="ctitle">
                On your site.
                <br />
                Always on.
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
                A site that sells
                <br />
                while you sleep.
              </div>
              <div style={{ marginTop: 20 }}>
                <div className="lfield">Your name</div>
                <div className="lfield">Phone number</div>
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
                  Get my free demo →
                </div>
              </div>
              <div className="cbadge">
                <span className="dot pulse" style={{ background: "#28e082", width: 7, height: 7 }} />
                AI agent included · Always on
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

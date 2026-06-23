import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import WBar from "./WBar";

const LEDGER = [
  { k: "Revenue (Oct)", v: "$48,200.00", cls: "green" },
  { k: "Expenses", v: "- $12,640.00", cls: "red" },
  { k: "Net profit", v: "$35,560.00", cls: "green" },
  { k: "Tax estimate", v: "$8,890.00", cls: "blue" },
  { k: "Reconciled", v: "✓ All accounts", cls: "" },
];

const CFO = [
  { icon: "📈", t: "P&L Analysis", s: "Monthly review — where you make money and where you lose it" },
  { icon: "🎯", t: "Cash Flow Forecast", s: "90-day visibility — never get caught off guard" },
  { icon: "⚡", t: "Growth Decisions", s: "Hire, invest, expand — backed by real data" },
  { icon: "🌎", t: "Global. Any business.", s: "USA, Mexico, LATAM — we speak your numbers" },
];

const PILLS = ["📋 Monthly Reports", "💰 Tax-ready", "🏦 Bank Reconciliation", "📊 P&L Statements", "🌎 Bilingual"];

const KPIS = [
  { n: "100%", l: "IRS Compliant", c: "rgba(40,210,140,.9)" },
  { n: "24h", l: "Report delivery" },
  { n: "$0", l: "Tax surprises", c: "rgba(90,200,255,.9)" },
  { n: "USA+", l: "Global coverage" },
];

export default function BookkeepingCFO() {
  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 52, width: "100%", maxWidth: 1240 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">Scale Books AI</div>
          <h2 className="ttl">
            Your numbers.
            <br />
            Always clean.
            <br />
            Always accurate.
          </h2>
          <p className="sub">
            Bookkeeping for U.S. businesses. CFO strategy for the world. While you focus
            on the work.
          </p>
        </Reveal>

        <Reveal className="bk-grid" delay={0.1}>
          {/* Bookkeeping */}
          <GlassCard mesh="linear-gradient(140deg,rgba(40,210,140,.68),rgba(20,100,80,.78) 52%,rgba(10,60,180,.55))">
            <WBar title="Scale Books — USA Bookkeeping" />
            <div className="wbody">
              <div className="cicon">📊</div>
              <div className="clabel">Scale Books AI</div>
              <div className="ctitle">
                Books ready.
                <br />
                Every month.
              </div>
              <div style={{ marginTop: 18 }}>
                {LEDGER.map((r) => (
                  <div className="ledger-line" key={r.k}>
                    <span className="ledger-k">{r.k}</span>
                    <span className={`ledger-v ${r.cls}`} style={r.cls === "" ? { color: "rgba(40,210,140,.9)" } : undefined}>
                      {r.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="cbadge" style={{ marginTop: 20 }}>
                <span className="dot pulse" style={{ background: "#28e082", width: 7, height: 7 }} />
                Reconciled · IRS-ready
              </div>
            </div>
          </GlassCard>

          {/* CFO */}
          <GlassCard mesh="linear-gradient(140deg,rgba(90,140,255,.65),rgba(40,20,180,.78) 52%,rgba(140,40,220,.55))">
            <WBar title="Scale CFO — Global Strategy" />
            <div className="wbody">
              <div className="cicon">🧭</div>
              <div className="clabel">Scale CFO Services</div>
              <div className="ctitle">
                Your numbers
                <br />
                as strategy.
              </div>
              <div style={{ marginTop: 18 }}>
                {CFO.map((c, i) => (
                  <div className="cfo-item" key={c.t} style={i === CFO.length - 1 ? { border: "none" } : undefined}>
                    <div className="cfo-icon">{c.icon}</div>
                    <div>
                      <div className="cfo-title">{c.t}</div>
                      <div className="cfo-sub">{c.s}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Wide — Khalifah */}
          <GlassCard className="bk-wide" mesh="linear-gradient(140deg,rgba(20,180,160,.22),rgba(20,40,120,.35) 50%,rgba(100,20,200,.2))">
            <div className="wbody" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 48, alignItems: "center" }}>
              <div>
                <div className="khalifah-card">
                  <div className="kh-avatar">🤝</div>
                  <div>
                    <div className="kh-name">Khalifah</div>
                    <div className="kh-role">Head of Bookkeeping &amp; CFO Stack</div>
                    <div className="kh-badge">Certified · USA + Global</div>
                  </div>
                </div>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>
                  &quot;Your books should tell you where to go — not just where you&apos;ve been.&quot;
                </div>
                <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap" }}>
                  {PILLS.map((p) => (
                    <div className="bk-pill" key={p}>{p}</div>
                  ))}
                </div>
              </div>
              <div style={{ width: ".5px", height: 180, background: "linear-gradient(180deg,transparent,rgba(255,255,255,.14),transparent)" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
                {KPIS.map((k) => (
                  <div className="bk-stat" key={k.l}>
                    <div className="bk-num" style={k.c ? { color: k.c } : undefined}>{k.n}</div>
                    <div className="bk-label">{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

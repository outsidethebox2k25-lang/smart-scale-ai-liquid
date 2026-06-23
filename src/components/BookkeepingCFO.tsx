import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import WBar from "./WBar";

const LEDGER = [
  { k: "Ingresos (Oct)", v: "$48,200.00", cls: "green" },
  { k: "Gastos", v: "- $12,640.00", cls: "red" },
  { k: "Ganancia neta", v: "$35,560.00", cls: "green" },
  { k: "Estimado de impuestos", v: "$8,890.00", cls: "blue" },
  { k: "Conciliado", v: "✓ Todas las cuentas", cls: "" },
];

const CFO = [
  { icon: "📈", t: "Análisis P&L", s: "Revisión mensual — dónde ganas y dónde pierdes dinero" },
  { icon: "🎯", t: "Forecast de Cash Flow", s: "Visibilidad a 90 días — nunca te sorprendas" },
  { icon: "⚡", t: "Decisiones de Crecimiento", s: "Contratar, invertir, expandir — respaldado por datos" },
  { icon: "🌎", t: "Global. Cualquier negocio.", s: "USA, México, LATAM — hablamos tus números" },
];

const PILLS = ["📋 Reportes Mensuales", "💰 Listo para impuestos", "🏦 Conciliación bancaria", "📊 Estados P&L", "🌎 Bilingüe"];

const KPIS = [
  { n: "100%", l: "Cumple con IRS", c: "rgba(40,210,140,.9)" },
  { n: "24h", l: "Entrega de reportes" },
  { n: "$0", l: "Sorpresas fiscales", c: "rgba(90,200,255,.9)" },
  { n: "USA+", l: "Cobertura global" },
];

export default function BookkeepingCFO() {
  return (
    <section>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 52, width: "100%", maxWidth: 1240 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">Scale Books AI</div>
          <h2 className="ttl">
            Tus números.
            <br />
            Siempre limpios.
            <br />
            Siempre exactos.
          </h2>
          <p className="sub">
            Contabilidad para negocios en USA. Estrategia CFO para el mundo. Mientras tú
            te enfocas en el trabajo.
          </p>
        </Reveal>

        <Reveal className="bk-grid" delay={0.1}>
          {/* Contabilidad */}
          <GlassCard mesh="linear-gradient(140deg,rgba(40,210,140,.68),rgba(20,100,80,.78) 52%,rgba(10,60,180,.55))">
            <WBar title="Scale Books — Contabilidad USA" />
            <div className="wbody">
              <div className="cicon">📊</div>
              <div className="clabel">Scale Books AI</div>
              <div className="ctitle">
                Libros listos.
                <br />
                Cada mes.
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
                Conciliado · Listo para IRS
              </div>
            </div>
          </GlassCard>

          {/* CFO */}
          <GlassCard mesh="linear-gradient(140deg,rgba(90,140,255,.65),rgba(40,20,180,.78) 52%,rgba(140,40,220,.55))">
            <WBar title="Scale CFO — Estrategia Global" />
            <div className="wbody">
              <div className="cicon">🧭</div>
              <div className="clabel">Scale CFO Services</div>
              <div className="ctitle">
                Tus números
                <br />
                como estrategia.
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
            <div className="wbody kh-grid">
              <div>
                <div className="khalifah-card">
                  <div className="kh-avatar">🤝</div>
                  <div>
                    <div className="kh-name">Khalifah</div>
                    <div className="kh-role">Head of Bookkeeping &amp; CFO Stack</div>
                    <div className="kh-badge">Certificado · USA + Global</div>
                  </div>
                </div>
                <div style={{ marginTop: 16, fontSize: 13, fontWeight: 300, color: "rgba(255,255,255,.45)", lineHeight: 1.7 }}>
                  &quot;Tus libros deben decirte hacia dónde ir — no solo dónde has estado.&quot;
                </div>
                <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap" }}>
                  {PILLS.map((p) => (
                    <div className="bk-pill" key={p}>{p}</div>
                  ))}
                </div>
              </div>
              <div className="kh-divider" />
              <div className="kh-kpis">
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

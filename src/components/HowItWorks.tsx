import Reveal from "./Reveal";

const STEPS = [
  { n: "1", t: "Ve el demo", s: "Construimos un preview de tu sistema AI. Gratis. Sin compromiso." },
  { n: "2", t: "Tú decides", s: "¿Te gusta? Lo configuramos. ¿No te gusta? No pagas nada. Cero riesgo." },
  { n: "3", t: "Live en 24hrs", s: "Tu AI se activa — respondiendo leads mientras duermes." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="compact" style={{ padding: "100px 48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 60, width: "100%", maxWidth: 1000 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">Proceso</div>
          <h2 className="ttl">Cómo funciona.</h2>
        </Reveal>
        <Reveal className="steps" delay={0.1}>
          {STEPS.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-n">{s.n}</div>
              <div className="step-t">{s.t}</div>
              <div className="step-s">{s.s}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

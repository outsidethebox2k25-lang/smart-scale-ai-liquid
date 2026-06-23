import Reveal from "./Reveal";

const STEPS = [
  { n: "1", t: "See the demo", s: "We build a preview of your AI system. Free. No commitment." },
  { n: "2", t: "You decide", s: "Like it? We set it up. Don't? You pay nothing. Zero risk." },
  { n: "3", t: "Live in 24hrs", s: "Your AI goes live — answering leads while you sleep." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="compact" style={{ padding: "100px 48px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 60, width: "100%", maxWidth: 1000 }}>
        <Reveal style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <div className="eye">Process</div>
          <h2 className="ttl">How it works.</h2>
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

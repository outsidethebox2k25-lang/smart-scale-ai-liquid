"use client";

import dynamic from "next/dynamic";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

// Heavy interactive canvas — lazy-loaded, client-only.
const N8NCanvas = dynamic(() => import("./N8NCanvas"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: 520, background: "rgba(0,0,0,.22)" }} />
  ),
});

export default function EngineN8N() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 52,
          width: "100%",
          maxWidth: 1300,
        }}
      >
        <Reveal
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}
        >
          <div className="eye">Scale Engine AI</div>
          <h2 className="ttl">El cerebro detrás de todo.</h2>
          <p className="sub">
            Cada workflow automatizado. Cero trabajo manual. Cero leads perdidos.
          </p>
        </Reveal>

        <Reveal style={{ width: "100%" }} delay={0.2}>
          <GlassCard
            style={{ width: "100%" }}
            mesh="linear-gradient(140deg,rgba(10,195,170,.64),rgba(22,58,155,.8) 50%,rgba(115,35,205,.58))"
          >
            <div className="wbar" style={{ borderRadius: "26px 26px 0 0", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div className="wd dr" />
                <div className="wd dy" />
                <div className="wd dg" />
                <span className="wt" style={{ marginLeft: 12 }}>
                  Scale Engine AI — Workflow
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: "rgba(40,224,130,.72)", letterSpacing: ".06em" }}>
                  <span className="dot pulse" style={{ background: "#28e082", width: 6, height: 6 }} />
                  Activo
                </div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,.18)", letterSpacing: ".06em" }}>
                  12 ejecuciones hoy
                </div>
              </div>
            </div>
            <N8NCanvas />
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

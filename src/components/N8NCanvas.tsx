"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Node = {
  id: string;
  left: number;
  top: number;
  nc: string;
  bc: string;
  gc: string;
  icon: string;
  label: string;
  labelColor: string;
  title: string;
  titleColor?: string;
  sub: string;
  subColor?: string;
  portIn: boolean;
  portOut: boolean;
  labelWeight?: number;
};

// design coordinate space — the whole stage is scaled to fit the container
const STAGE_W = 1120;
const STAGE_H = 460;
const NODE_CX = 102; // approx half node width (for exec-ring centering)
const NODE_CY = 36; // approx half node height

const NODES: Node[] = [
  { id: "nn1", left: 60, top: 76, nc: "rgba(249,199,79,.18)", bc: "rgba(249,199,79,.5)", gc: "rgba(249,199,79,.4)", icon: "⚡", label: "Trigger", labelColor: "rgba(249,199,79,.8)", title: "Lead entra", sub: "Meta Ads · Google Ads", portIn: false, portOut: true },
  { id: "nn2", left: 268, top: 76, nc: "rgba(90,200,250,.18)", bc: "rgba(90,200,250,.5)", gc: "rgba(90,200,250,.4)", icon: "🗂", label: "CRM", labelColor: "rgba(90,200,250,.8)", title: "Scale CRM AI", sub: "Agregar al pipeline", portIn: true, portOut: true },
  { id: "nn3", left: 476, top: 76, nc: "rgba(37,211,102,.18)", bc: "rgba(37,211,102,.5)", gc: "rgba(37,211,102,.4)", icon: "💬", label: "Mensajería", labelColor: "rgba(37,211,102,.8)", title: "Scale SMS AI", sub: "Responde en 3 segundos", portIn: true, portOut: true },
  { id: "nn4", left: 684, top: 76, nc: "rgba(191,122,240,.18)", bc: "rgba(191,122,240,.5)", gc: "rgba(191,122,240,.4)", icon: "🤖", label: "IA", labelColor: "rgba(191,122,240,.8)", title: "Claude AI", sub: "Califica y puntúa el lead", portIn: true, portOut: true },
  { id: "nn5", left: 892, top: 76, nc: "rgba(255,200,60,.18)", bc: "rgba(255,200,60,.5)", gc: "rgba(255,200,60,.4)", icon: "🔀", label: "Router", labelColor: "rgba(255,200,60,.8)", title: "IF Node", sub: "Caliente / Frío / Seguimiento", portIn: true, portOut: true },
  { id: "nn6", left: 268, top: 296, nc: "rgba(255,100,50,.18)", bc: "rgba(255,100,50,.5)", gc: "rgba(255,100,50,.4)", icon: "🧠", label: "IA Score", labelColor: "rgba(255,100,50,.8)", title: "Lead Score", sub: "Ranking de prioridad", portIn: true, portOut: true },
  { id: "nn7", left: 476, top: 296, nc: "rgba(240,180,40,.18)", bc: "rgba(240,180,40,.5)", gc: "rgba(240,180,40,.4)", icon: "📅", label: "Calendario", labelColor: "rgba(240,180,40,.8)", title: "Auto-Agenda", sub: "Programa la cita", portIn: true, portOut: true },
  { id: "nn8", left: 684, top: 296, nc: "rgba(37,211,102,.18)", bc: "rgba(37,211,102,.5)", gc: "rgba(37,211,102,.4)", icon: "✅", label: "Notificar", labelColor: "rgba(37,211,102,.8)", title: "Confirmar", sub: "SMS + Email enviados", portIn: true, portOut: true },
  { id: "nn9", left: 892, top: 296, nc: "rgba(37,211,102,.28)", bc: "rgba(37,211,102,.7)", gc: "rgba(37,211,102,.6)", icon: "🏆", label: "Cerrado", labelColor: "rgba(37,211,102,.9)", labelWeight: 700, title: "Deal Ganado", titleColor: "rgba(37,211,102,.9)", sub: "Ingreso registrado", subColor: "rgba(37,211,102,.5)", portIn: true, portOut: false },
];

const PATHS: { id: string; d: string; stroke: string; dash: string }[] = [
  { id: "p1", d: "M 168,120 C 220,120 230,120 272,120", stroke: "rgba(249,199,79,.45)", dash: "5,4" },
  { id: "p2", d: "M 376,120 C 428,120 438,120 480,120", stroke: "rgba(90,200,250,.45)", dash: "5,4" },
  { id: "p3", d: "M 584,120 C 636,120 646,120 688,120", stroke: "rgba(37,211,102,.45)", dash: "5,4" },
  { id: "p4", d: "M 792,120 C 844,120 854,120 896,120", stroke: "rgba(191,122,240,.45)", dash: "5,4" },
  { id: "p5", d: "M 480,164 C 480,200 480,200 480,240", stroke: "rgba(37,211,102,.35)", dash: "4,4" },
  { id: "p6", d: "M 272,164 C 272,200 272,200 272,240", stroke: "rgba(255,100,50,.35)", dash: "4,4" },
  { id: "p7", d: "M 376,340 C 428,340 438,340 480,340", stroke: "rgba(255,100,50,.4)", dash: "5,4" },
  { id: "p8", d: "M 584,340 C 636,340 646,340 688,340", stroke: "rgba(240,180,40,.4)", dash: "5,4" },
  { id: "p9", d: "M 792,340 C 844,340 854,340 896,340", stroke: "rgba(37,211,102,.4)", dash: "5,4" },
  { id: "p10", d: "M 1000,120 C 1080,120 1080,200 1080,260 C 1080,300 1000,340 900,340", stroke: "rgba(191,122,240,.28)", dash: "4,5" },
];

const PATH_COLORS: Record<string, string> = {
  p1: "rgba(249,199,79,1)", p2: "rgba(90,200,250,1)", p3: "rgba(37,211,102,1)",
  p4: "rgba(191,122,240,1)", p5: "rgba(37,211,102,.85)", p6: "rgba(255,100,50,.85)",
  p7: "rgba(255,100,50,1)", p8: "rgba(240,180,40,1)", p9: "rgba(37,211,102,1)",
};

export default function N8NCanvas() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [scale, setScale] = useState(1);

  // Fit the full workflow into the container width (scaled down on mobile).
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      setScale(Math.min(1, w / STAGE_W));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const svg = svgRef.current;
    if (!canvas || !svg) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    let packetInterval: ReturnType<typeof setInterval> | null = null;
    const SVGNS = "http://www.w3.org/2000/svg";

    const showNodes = () => {
      NODES.forEach((n, i) => {
        timers.push(
          setTimeout(() => {
            document.getElementById(n.id)?.classList.add("n8n-show");
          }, i * 120)
        );
      });
    };

    const runExecution = () => {
      if (cancelled) return;
      NODES.forEach((n, i) => {
        timers.push(
          setTimeout(() => {
            const node = document.getElementById(n.id);
            if (!node) return;
            node.classList.add("n8n-active");
            // exec ring in design coordinates (stage handles the scaling)
            const ring = document.createElementNS(SVGNS, "circle");
            ring.setAttribute("cx", String(n.left + NODE_CX));
            ring.setAttribute("cy", String(n.top + NODE_CY));
            ring.setAttribute("r", "8");
            ring.setAttribute("fill", "none");
            ring.setAttribute("stroke", "rgba(255,255,255,.6)");
            ring.setAttribute("stroke-width", "1.5");
            ring.classList.add("exec-ring");
            svg.appendChild(ring);
            timers.push(setTimeout(() => ring.remove(), 800));
            timers.push(setTimeout(() => node.classList.remove("n8n-active"), 700));
          }, i * 320)
        );
      });
      timers.push(setTimeout(runExecution, NODES.length * 320 + 2200));
    };

    const spawnPacket = () => {
      if (cancelled) return;
      const pids = Object.keys(PATH_COLORS);
      const pid = pids[Math.floor(Math.random() * pids.length)];
      const pathEl = document.getElementById(pid) as unknown as SVGPathElement | null;
      if (!pathEl) return;
      const color = PATH_COLORS[pid];
      const len = pathEl.getTotalLength();
      const dur = 900 + Math.random() * 600;
      const dot = document.createElementNS(SVGNS, "circle");
      dot.setAttribute("r", "5");
      dot.setAttribute("fill", color);
      dot.style.filter = `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 3px ${color})`;
      svg.appendChild(dot);
      let start: number | null = null;
      const anim = (ts: number) => {
        if (cancelled) { dot.remove(); return; }
        if (start === null) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = p < 0.05 ? p * 20 : p > 0.9 ? (1 - p) * 10 : 1;
        const pt = pathEl.getPointAtLength(p * len);
        dot.setAttribute("cx", String(pt.x));
        dot.setAttribute("cy", String(pt.y));
        dot.style.opacity = String(ease);
        if (p < 1) requestAnimationFrame(anim);
        else dot.remove();
      };
      requestAnimationFrame(anim);
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        showNodes();
        timers.push(setTimeout(runExecution, NODES.length * 120 + 400));
        packetInterval = setInterval(spawnPacket, 240);
        obs.disconnect();
      },
      { threshold: 0.08 }
    );
    obs.observe(canvas);

    return () => {
      cancelled = true;
      obs.disconnect();
      timers.forEach(clearTimeout);
      if (packetInterval) clearInterval(packetInterval);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: "relative",
        width: "100%",
        height: STAGE_H * scale + (scale < 0.5 ? 44 : 0),
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 90% at 50% 0%, rgba(40,120,150,.10), transparent 70%), rgba(0,0,0,.24)",
        transition: "height .3s ease",
      }}
    >
      {/* premium dotted grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.06) 1px, transparent 0)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 85% 75% at 50% 45%, #000 50%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 45%, #000 50%, transparent 100%)",
        }}
      />

      {/* scaled stage — design space STAGE_W × STAGE_H */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: STAGE_W,
          height: STAGE_H,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <svg
          ref={svgRef}
          width={STAGE_W}
          height={STAGE_H}
          style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2, overflow: "visible" }}
        >
          <defs>
            <marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L0,8 L8,4 z" fill="rgba(255,255,255,.28)" />
            </marker>
            <filter id="gf" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {PATHS.map((p) => (
            <path
              key={p.id}
              id={p.id}
              className="wf-path-anim"
              d={p.d}
              stroke={p.stroke}
              strokeWidth={p.id === "p10" ? 1 : 1.5}
              fill="none"
              strokeDasharray={p.dash}
            />
          ))}
        </svg>

        {NODES.map((n) => (
          <div
            key={n.id}
            id={n.id}
            className="n8n-node"
            style={{
              left: n.left,
              top: n.top,
              ["--nc" as string]: n.nc,
              ["--bc" as string]: n.bc,
              ["--gc" as string]: n.gc,
            } as CSSProperties}
          >
            {n.portIn && <div className="nn-port nn-port-in" />}
            <div className="nn-icon">{n.icon}</div>
            <div className="nn-body">
              <div className="nn-label" style={{ color: n.labelColor, fontWeight: n.labelWeight }}>
                {n.label}
              </div>
              <div className="nn-title" style={n.titleColor ? { color: n.titleColor } : undefined}>
                {n.title}
              </div>
              <div className="nn-sub" style={n.subColor ? { color: n.subColor } : undefined}>
                {n.sub}
              </div>
            </div>
            {n.portOut && <div className="nn-port nn-port-out" />}
          </div>
        ))}
      </div>

      {/* status bar — fixed to the container (not scaled) so it stays legible */}
      <div style={{ position: "absolute", bottom: 16, left: 16, display: "flex", alignItems: "center", gap: 12, zIndex: 10, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(0,0,0,.4)", border: ".5px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "6px 14px", backdropFilter: "blur(12px)" }}>
          <span className="dot pulse" style={{ background: "#28e082", width: 6, height: 6 }} />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,.35)", letterSpacing: ".06em" }}>Corriendo · 0 errores</span>
        </div>
        <div style={{ background: "rgba(0,0,0,.4)", border: ".5px solid rgba(255,255,255,.08)", borderRadius: 20, padding: "6px 14px", backdropFilter: "blur(12px)" }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,.3)", letterSpacing: ".06em" }}>
            Última ejecución: <span style={{ color: "rgba(40,224,130,.7)" }}>hace 2s</span>
          </span>
        </div>
      </div>
    </div>
  );
}

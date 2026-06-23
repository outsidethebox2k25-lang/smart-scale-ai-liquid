"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

export type ChatItem = {
  kind: "in" | "out" | "outPlain" | "green" | "typing" | "tag" | "tagw";
  text?: string;
  t: number;
};

const PLAIN_BG: CSSProperties = { background: "rgba(255,255,255,.14)" };

/** Looping chat animation — bubbles + typing dots, starts when scrolled into view. */
export default function ChatAnimation({ items }: { items: ChatItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [shown, setShown] = useState<boolean[]>(() => items.map(() => false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;

    const clearTimers = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };

    const run = () => {
      clearTimers();
      setShown(items.map(() => false));
      let max = 0;
      items.forEach((it, i) => {
        if (it.t > max) max = it.t;
        timers.current.push(
          setTimeout(() => {
            setShown((prev) => {
              const next = [...prev];
              next[i] = true;
              // hide typing dots once a real bubble/tag-less item appears
              if (it.kind !== "typing" && it.kind !== "tag" && it.kind !== "tagw") {
                items.forEach((o, j) => {
                  if (o.kind === "typing") next[j] = false;
                });
              }
              return next;
            });
          }, it.t + 200)
        );
      });
      timers.current.push(setTimeout(run, max + 2400 + 1200));
    };

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          timers.current.push(setTimeout(run, 500));
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimers();
    };
  }, [items]);

  return (
    <div className="chat-wrap" ref={ref}>
      {items.map((it, i) => {
        const on = shown[i] ? " show" : "";
        if (it.kind === "typing") {
          return (
            <div key={i} className={`typing-dots${on}`}>
              <span />
              <span />
              <span />
            </div>
          );
        }
        if (it.kind === "tag") {
          return (
            <div key={i} className={`chat-tag${on}`}>
              {it.text}
            </div>
          );
        }
        if (it.kind === "tagw") {
          return (
            <div key={i} className={`chat-tagw${on}`}>
              {it.text}
            </div>
          );
        }
        const cls =
          it.kind === "in"
            ? "chat-in"
            : it.kind === "green"
              ? "chat-out chat-green"
              : "chat-out";
        return (
          <div
            key={i}
            className={`chat-bubble ${cls}${on}`}
            style={it.kind === "outPlain" ? PLAIN_BG : undefined}
          >
            {it.text}
          </div>
        );
      })}
    </div>
  );
}

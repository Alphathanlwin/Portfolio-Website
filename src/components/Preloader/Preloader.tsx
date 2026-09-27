import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface PreloaderProps {
  onComplete: () => void;
}

const STATUS_STEPS = [
  { at: 0, label: "INITIALIZING SYSTEM..." },
  { at: 35, label: "LOADING EXPERIENCE..." },
  { at: 75, label: "CALIBRATING INTERFACE..." },
  { at: 100, label: "SYSTEM READY" },
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);
  const [percent, setPercent] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.timeline({
          onComplete: onComplete,
        })
          .to([barRef.current?.parentElement, statusRef.current, percentRef.current], {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          })
          .to(
            ".preloader-logo",
            { scale: 1.06, opacity: 0, duration: 0.5, ease: "power3.in" },
            "<"
          )
          .to(
            rootRef.current,
            { yPercent: -100, duration: 0.7, ease: "power4.inOut" },
            "-=0.2"
          );
      },
    });

    tl.to(counter, {
      value: 100,
      duration: reducedMotion ? 0.4 : 2.1,
      ease: "power2.inOut",
      onUpdate: () => {
        const v = Math.round(counter.value);
        setPercent(v);
        if (percentRef.current) percentRef.current.textContent = String(v);
        if (barRef.current) barRef.current.style.width = `${v}%`;
        const step = [...STATUS_STEPS].reverse().find((s) => v >= s.at);
        if (statusRef.current && step) statusRef.current.textContent = step.label;
      },
    });

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void bg-grid overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading site"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[120px]" />
      </div>

      <div className="preloader-logo relative flex flex-col items-center gap-3">
        <p className="mono-label text-xs text-text-tertiary">AI ENGINEER / BUILDER</p>
        <h1 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-text-primary">
          AUNG THANLWIN OO
        </h1>
      </div>

      <div className="relative mt-12 w-64 sm:w-80">
        <div className="mb-3 flex items-center justify-between">
          <span ref={statusRef} className="mono-label text-[11px] text-cyan">
            INITIALIZING SYSTEM...
          </span>
          <span className="mono-label text-[11px] text-text-secondary">
            <span ref={percentRef}>0</span>%
          </span>
        </div>
        <div className="h-px w-full overflow-hidden bg-line-soft">
          <div
            ref={barRef}
            className="h-full bg-gradient-to-r from-electric via-cyan to-violet"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

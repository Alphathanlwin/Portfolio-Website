import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap";

const LABELS = ["LLM", "RAG", "CV", "ML", "FastAPI", "Python", "Vector DB"];

interface NodeDef {
  x: number;
  y: number;
  r: number;
  layer: number;
}

function buildNodes(): NodeDef[] {
  const layers = [3, 5, 5, 4, 2];
  const nodes: NodeDef[] = [];
  const width = 480;
  const height = 480;
  layers.forEach((count, li) => {
    const x = 60 + (li * (width - 120)) / (layers.length - 1);
    for (let i = 0; i < count; i++) {
      const y = height / 2 + (i - (count - 1) / 2) * (240 / Math.max(count - 1, 1));
      nodes.push({ x, y, r: li === layers.length - 1 ? 6 : 4, layer: li });
    }
  });
  return nodes;
}

export default function NeuralVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodes = useMemo(buildNodes, []);

  const edges = useMemo(() => {
    const result: { a: NodeDef; b: NodeDef }[] = [];
    for (let li = 0; li < 4; li++) {
      const layerA = nodes.filter((n) => n.layer === li);
      const layerB = nodes.filter((n) => n.layer === li + 1);
      layerA.forEach((a) => {
        layerB.forEach((b) => {
          if (Math.random() > 0.35) result.push({ a, b });
        });
      });
    }
    return result;
  }, [nodes]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".neural-node", {
        opacity: () => gsap.utils.random(0.5, 1),
        duration: () => gsap.utils.random(1.5, 3),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.08, from: "random" },
      });

      gsap.to(".float-label", {
        y: -14,
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.4,
      });

      gsap.to(svgRef.current, {
        rotate: 1.5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "50% 50%",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto aspect-square w-full max-w-[480px]">
      <div className="absolute inset-0 rounded-full bg-electric/10 blur-[100px]" />
      <div className="absolute inset-10 rounded-full bg-violet/10 blur-[90px]" />

      <svg
        ref={svgRef}
        viewBox="0 0 480 480"
        className="relative h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4d7cff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#45e8dc" stopOpacity="0.25" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#4d7cff" stopOpacity="1" />
            <stop offset="100%" stopColor="#4d7cff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            stroke="url(#edgeGradient)"
            strokeWidth={1}
          />
        ))}

        {nodes.map((n, i) => (
          <g key={i} className="neural-node" style={{ opacity: 0.8 }}>
            <circle cx={n.x} cy={n.y} r={n.r + 8} fill="url(#nodeGlow)" opacity={0.35} />
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.layer % 2 === 0 ? "#8fb0ff" : "#7ef0e6"}
            />
          </g>
        ))}
      </svg>

      {LABELS.map((label, i) => {
        const positions = [
          { top: "6%", left: "2%" },
          { top: "18%", right: "0%" },
          { top: "42%", left: "-6%" },
          { bottom: "30%", right: "-4%" },
          { bottom: "14%", left: "6%" },
          { top: "58%", right: "8%" },
          { bottom: "2%", left: "36%" },
        ];
        const pos = positions[i % positions.length];
        return (
          <span
            key={label}
            className="float-label glass mono-label absolute rounded-full px-3 py-1 text-[10px] text-cyan"
            style={pos}
          >
            {label}
          </span>
        );
      })}
    </div>
  );
}

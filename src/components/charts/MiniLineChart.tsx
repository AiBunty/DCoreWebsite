import { useEffect, useMemo, useState } from "react";

interface MiniLineChartProps {
  values: number[];
  className?: string;
}

export function MiniLineChart({ values, className }: MiniLineChartProps) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const points = useMemo(() => {
    const width = 120;
    const height = 40;
    const padding = 4;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return values.map((value, index) => {
      const x = padding + (index / (values.length - 1 || 1)) * (width - padding * 2);
      const y = height - padding - ((value - min) / range) * (height - padding * 2);
      return `${x},${y}`;
    });
  }, [values]);

  const path = useMemo(() => `M ${points.join(" L ")}`, [points]);

  return (
    <svg
      viewBox="0 0 120 40"
      className={className}
      role="img"
      aria-label="Growth trend (demo)"
    >
      <defs>
        <linearGradient id="miniLineFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d={`${path} L 116 38 L 4 38 Z`}
        fill="url(#miniLineFill)"
      />
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          reduceMotion
            ? undefined
            : {
                strokeDasharray: 240,
                strokeDashoffset: 240,
                animation: "mini-line-draw 1.6s ease-out forwards",
              }
        }
      />
      <style>{`
        @keyframes mini-line-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}

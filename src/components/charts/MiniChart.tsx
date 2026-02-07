import { useEffect, useMemo, useState } from "react";

export type MiniChartType =
  | "steady"
  | "surge"
  | "area"
  | "bars"
  | "dip"
  | "cumulative";

interface MiniChartProps {
  values: number[];
  type: MiniChartType;
  className?: string;
}

export function MiniChart({ values, type, className }: MiniChartProps) {
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
      return { x, y };
    });
  }, [values]);

  const linePath = useMemo(() => {
    return `M ${points.map((point) => `${point.x},${point.y}`).join(" L ")}`;
  }, [points]);

  const barWidth = 10;

  return (
    <svg viewBox="0 0 120 40" className={className} role="img" aria-label="Chart (demo)">
      <defs>
        <linearGradient id="miniChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Chart variation logic:
          steady: clean rising line
          surge: slow rise then sharp lift
          area: filled line
          bars: compact bar chart
          dip: dip then recovery line
          cumulative: stepped cumulative growth line */}

      {type === "bars" ? (
        <g>
          {values.map((value, index) => {
            const x = 6 + index * (barWidth + 4);
            const height = Math.max(4, (value / Math.max(...values)) * 30);
            const y = 36 - height;
            return (
              <rect
                key={`${x}-${value}`}
                x={x}
                y={y}
                width={barWidth}
                height={height}
                rx={2}
                fill="currentColor"
                opacity={0.6}
              />
            );
          })}
        </g>
      ) : (
        <g>
          {(type === "area" || type === "cumulative") && (
            <path
              d={`${linePath} L 116 38 L 4 38 Z`}
              fill="url(#miniChartFill)"
            />
          )}
          <path
            d={
              type === "cumulative"
                ? `M ${points
                    .map((point, index) => {
                      if (index === 0) {
                        return `${point.x},${point.y}`;
                      }
                      const prev = points[index - 1];
                      return `${point.x},${prev.y} L ${point.x},${point.y}`;
                    })
                    .join(" L ")}`
                : linePath
            }
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
                    animation: "mini-chart-draw 1.6s ease-out forwards",
                  }
            }
          />
        </g>
      )}

      <style>{`
        @keyframes mini-chart-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  );
}

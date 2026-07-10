type ConnectedNode = {
  code?: string;
  title: string;
};

type ConnectedVisualProps = {
  nodes: ConnectedNode[];
  size?: number;
  centerLabel?: string;
  centerSub?: string;
  topLabel?: string;
  bottomLabel?: string;
};

const LABEL_ZONE = 44;

function deriveCode(title: string) {
  const words = title.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return title.slice(0, 2).toUpperCase();
}

function buildGeometry(count: number, size: number) {
  const center = size / 2;
  const radius = size * 0.375;
  const ctrlRadius = radius * 0.55;
  const step = 360 / count;

  return Array.from({ length: count }, (_, i) => {
    const angleDeg = -90 + i * step;
    const angleRad = (angleDeg * Math.PI) / 180;
    const ctrlAngleRad = ((angleDeg + 15) * Math.PI) / 180;

    return {
      x: Math.round(center + radius * Math.cos(angleRad)),
      y: Math.round(center + radius * Math.sin(angleRad)),
      cx: Math.round(center + ctrlRadius * Math.cos(ctrlAngleRad)),
      cy: Math.round(center + ctrlRadius * Math.sin(ctrlAngleRad)),
    };
  });
}

export default function ConnectedVisual({
  nodes,
  size = 560,
  centerLabel = "F",
  centerSub = "FleetArabia",
  topLabel,
  bottomLabel,
}: ConnectedVisualProps) {
  const center = size / 2;
  const geometry = buildGeometry(nodes.length, size);
  const ringSizes = [size, size * 0.77, size * 0.68, size * 0.54];

  // Chip width is tuned for up to 9 nodes at the default size; beyond that,
  // shrink chips so they don't overlap around the circle.
  const radius = size * 0.375;
  const chordLength = 2 * radius * Math.sin(Math.PI / nodes.length);
  const nodeWidth = nodes.length <= 9 ? 144 : Math.max(84, Math.round(chordLength * 0.85));
  const compact = nodeWidth < 120;
  const scanRadius = size * 0.5 - 1;
  const scanCircumference = 2 * Math.PI * scanRadius;
  const topPad = topLabel ? LABEL_ZONE : 0;
  const bottomPad = bottomLabel ? LABEL_ZONE : 0;

  return (
    <div
      className="relative hidden lg:block"
      style={{ width: size, height: size + topPad + bottomPad }}
    >
      {topLabel && (
        <div className="absolute left-1/2 top-1 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-300/25 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100 shadow-xl shadow-black/10 backdrop-blur">
          {topLabel}
        </div>
      )}

      <div className="absolute left-0" style={{ top: topPad, width: size, height: size }}>
        <div
          className="fa-glow-pulse absolute rounded-full bg-cyan-400/10 blur-3xl"
          style={{ inset: -Math.round(size * 0.07) }}
        />

        <div
          className="fa-ring-spin absolute left-1/2 top-1/2 rounded-full border border-cyan-300/15"
          style={{ width: ringSizes[0], height: ringSizes[0] }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25"
          style={{
            width: ringSizes[1],
            height: ringSizes[1],
            background:
              "radial-gradient(circle at 35% 30%, rgba(34,211,238,0.28), rgba(37,99,235,0.16) 40%, rgba(2,6,23,0.4) 76%)",
            boxShadow: "0 0 90px rgba(37,99,235,0.25)",
          }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
          style={{ width: ringSizes[2], height: ringSizes[2] }}
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/20"
          style={{ width: ringSizes[3], height: ringSizes[3] }}
        />

        <div className="absolute left-1/2 top-1/2 h-[2px] w-[2px] -translate-x-1/2 -translate-y-1/2">
          <div
            className="fa-sweep-a absolute rounded-sm"
            style={{
              width: size * 0.82,
              height: 2,
              left: -(size * 0.41),
              top: -1,
              background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)",
            }}
          />
          <div
            className="fa-sweep-b absolute rounded-sm"
            style={{
              width: size * 0.82,
              height: 2,
              left: -(size * 0.41),
              top: -1,
              background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.4), transparent)",
            }}
          />
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <defs>
            <linearGradient id="fa-connector-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#67e8f9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Radar-style scanning arc */}
          <circle
            className="fa-scan-arc"
            cx={center}
            cy={center}
            r={scanRadius}
            fill="none"
            stroke="#67e8f9"
            strokeWidth={2}
            strokeLinecap="round"
            strokeDasharray={`${scanCircumference * 0.16} ${scanCircumference * 0.84}`}
            style={{ transformOrigin: `${center}px ${center}px` }}
          />

          {geometry.map((g, i) => (
            <path
              key={`path-${i}`}
              className="fa-connector-path"
              style={{ animationDelay: `${0.05 + i * 0.07}s` }}
              d={`M${g.x},${g.y} Q${g.cx},${g.cy} ${center},${center}`}
            />
          ))}
          {geometry.map((g, i) => (
            <circle
              key={`particle-${i}`}
              r={2.5}
              className="fa-particle"
              fill="#67e8f9"
              style={{
                offsetPath: `path('M${g.x},${g.y} Q${g.cx},${g.cy} ${center},${center}')`,
                animationDelay: `${0.6 + i * 0.3}s, ${0.6 + i * 0.3}s`,
              }}
            />
          ))}

          {/* Convergence pulse — the point where every connector meets */}
          <circle cx={center} cy={center} r={5} className="fa-converge" fill="none" stroke="#a5f3fc" strokeWidth={1.5} />
          <circle cx={center} cy={center} r={5} className="fa-converge" style={{ animationDelay: "0.7s" }} fill="none" stroke="#a5f3fc" strokeWidth={1.5} />
        </svg>

        <div
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: center, top: center }}
        >
          <div className="fa-core-pulse flex h-36 w-36 flex-col items-center justify-center rounded-[2rem] bg-gradient-to-r from-cyan-400 to-blue-600 shadow-2xl shadow-cyan-400/40 ring-1 ring-white/20">
            <span className="text-5xl font-black text-white">{centerLabel}</span>
            <span className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-cyan-50">
              {centerSub}
            </span>
          </div>
        </div>

        {geometry.map((g, i) => {
          const node = nodes[i];
          return (
            <div
              key={node.title}
              className="absolute z-30"
              style={{ left: g.x, top: g.y, transform: "translate(-50%, -50%)" }}
            >
              <div
                className={`fa-node-float rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/15 ${compact ? "p-2.5" : "p-3"}`}
                style={{ animationDelay: `${0.7 + i * 0.1}s, ${i * 0.3}s`, width: nodeWidth }}
              >
                <div
                  className={`flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 font-black text-white shadow-lg shadow-cyan-400/20 ${
                    compact ? "mb-2 h-8 w-8 text-[10px]" : "mb-3 h-10 w-10 text-xs"
                  }`}
                >
                  {node.code ?? deriveCode(node.title)}
                </div>
                <p className={`font-black leading-tight text-cyan-50 ${compact ? "text-[11px] leading-[13px]" : "text-xs leading-4"}`}>
                  {node.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {bottomLabel && (
        <div className="absolute bottom-1 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-bold text-cyan-50 backdrop-blur">
          {bottomLabel}
        </div>
      )}
    </div>
  );
}

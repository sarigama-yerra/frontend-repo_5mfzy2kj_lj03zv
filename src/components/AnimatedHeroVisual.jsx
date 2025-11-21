export default function AnimatedHeroVisual() {
  return (
    <div className="relative w-full h-full">
      {/* Backdrop gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-blue-400/5 to-transparent" />

      {/* Animated SVG dashboard */}
      <svg
        viewBox="0 0 800 600"
        className="absolute inset-0 w-full h-full"
        role="img"
        aria-label="Panel con embudo, métricas y evolución de conversiones"
      >
        <defs>
          <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="bar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="funnel" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Card background */}
        <rect x="40" y="40" width="720" height="520" rx="16" fill="url(#card)" stroke="rgba(255,255,255,0.12)" />

        {/* Header pills */}
        <g opacity="0.8">
          <rect x="64" y="68" width="90" height="18" rx="9" fill="rgba(148,163,184,0.25)" />
          <rect x="160" y="68" width="64" height="18" rx="9" fill="rgba(148,163,184,0.18)" />
          <rect x="232" y="68" width="48" height="18" rx="9" fill="rgba(148,163,184,0.12)" />
        </g>

        {/* KPI mini-cards */}
        <g>
          {[
            { x: 64, label: "Leads", val: 1240 },
            { x: 224, label: "Entrevistas", val: 318 },
            { x: 384, label: "Admitidos", val: 212 },
            { x: 544, label: "Matrículas", val: 168 },
          ].map((k, i) => (
            <g key={k.label} transform={`translate(${k.x}, 108)`}>
              <rect width="144" height="74" rx="12" fill="rgba(2,6,23,0.55)" stroke="rgba(255,255,255,0.08)" />
              <text x="12" y="28" fontFamily="Inter, system-ui" fontSize="12" fill="#c7d2fe" opacity="0.85">{k.label}</text>
              <text x="12" y="54" fontFamily="Inter, system-ui" fontSize="20" fontWeight="700" fill="#e2e8f0">{k.val}</text>
              {/* pulso sutil */}
              <circle cx="124" cy="22" r="4" fill="#22d3ee" opacity="0.8">
                <animate attributeName="r" values="3;5;3" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
            </g>
          ))}
        </g>

        {/* Funnel */}
        <g transform="translate(64, 210)">
          <polygon points="0,0 280,0 240,44 40,44" fill="url(#funnel)" opacity="0.25" />
          <polygon points="20,56 260,56 224,96 36,96" fill="url(#funnel)" opacity="0.35" />
          <polygon points="36,108 244,108 212,142 52,142" fill="url(#funnel)" opacity="0.5" />
          <polygon points="52,154 228,154 200,184 68,184" fill="url(#funnel)" opacity="0.7" filter="url(#glow)" />
          {/* shimmer */}
          <rect x="-10" y="-6" width="310" height="200" fill="url(#card)" opacity="0.08">
            <animate attributeName="x" values="-10;320;-10" dur="6s" repeatCount="indefinite" />
          </rect>

          {/* etiquetas */}
          <text x="292" y="14" fontFamily="Inter, system-ui" fontSize="12" fill="#bfdbfe">TOFU</text>
          <text x="292" y="72" fontFamily="Inter, system-ui" fontSize="12" fill="#bfdbfe">MOFU</text>
          <text x="292" y="128" fontFamily="Inter, system-ui" fontSize="12" fill="#bfdbfe">BOFU</text>
        </g>

        {/* Conversion line chart */}
        <g transform="translate(420, 220)">
          <rect width="320" height="200" rx="12" fill="rgba(2,6,23,0.55)" stroke="rgba(255,255,255,0.08)" />
          {/* axes */}
          <line x1="28" y1="24" x2="28" y2="172" stroke="rgba(226,232,240,0.12)" />
          <line x1="28" y1="172" x2="296" y2="172" stroke="rgba(226,232,240,0.12)" />
          {/* bars */}
          {[40, 72, 112, 148, 188, 228, 264].map((x, i) => (
            <g key={i}>
              <rect x={x} y={120 - i * 6} width="10" height={52 + i * 6} fill="url(#bar)">
                <animate attributeName="height" values={`${38 + i * 6};${58 + i * 6};${38 + i * 6}`} dur={`${3 + i * 0.3}s`} repeatCount="indefinite" />
              </rect>
            </g>
          ))}
          {/* line */}
          <polyline points="28,160 64,148 104,140 148,120 188,112 228,98 268,86 296,72" fill="none" stroke="#38bdf8" strokeWidth="2">
            <animate attributeName="points" dur="5s" repeatCount="indefinite"
              values="28,160 64,148 104,140 148,120 188,112 228,98 268,86 296,72;
                      28,160 64,150 104,142 148,124 188,118 228,100 268,90 296,78;
                      28,160 64,148 104,140 148,120 188,112 228,98 268,86 296,72" />
          </polyline>
        </g>

        {/* Team avatars bubbles */}
        <g>
          {[
            { cx: 720, cy: 120, r: 12 },
            { cx: 690, cy: 90, r: 8 },
            { cx: 660, cy: 130, r: 10 },
          ].map((b, i) => (
            <g key={i}>
              <circle cx={b.cx} cy={b.cy} r={b.r} fill="#a78bfa" opacity="0.35">
                <animate attributeName="cy" values={`${b.cy};${b.cy - 6};${b.cy}`} dur={`${3 + i}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0.55;0.3" dur={`${3 + i}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={b.cx} cy={b.cy} r={b.r - 3} fill="#38bdf8" opacity="0.6" />
            </g>
          ))}
        </g>

        {/* KPI badge */}
        <g transform="translate(520, 72)">
          <rect width="200" height="56" rx="12" fill="rgba(2,6,23,0.7)" stroke="rgba(255,255,255,0.1)" />
          <text x="16" y="34" fontFamily="Inter, system-ui" fontSize="14" fill="#e2e8f0">Tasa de conversión</text>
          <g>
            <circle cx="168" cy="28" r="6" fill="#22d3ee">
              <animate attributeName="r" values="5;7;5" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <text x="180" y="34" fontFamily="Inter, system-ui" fontSize="14" fill="#a7f3d0" fontWeight="700">+18%</text>
          </g>
        </g>
      </svg>

      {/* Floating labels */}
      <div className="absolute left-4 bottom-4 flex flex-wrap gap-2 text-[11px] text-blue-100/80">
        <span className="px-2 py-1 rounded bg-slate-900/60 border border-white/10">Embudo</span>
        <span className="px-2 py-1 rounded bg-slate-900/60 border border-white/10">Métricas</span>
        <span className="px-2 py-1 rounded bg-slate-900/60 border border-white/10">Remarketing</span>
        <span className="px-2 py-1 rounded bg-slate-900/60 border border-white/10">Automatización</span>
      </div>
    </div>
  );
}

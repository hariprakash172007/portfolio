import './ProjectVisual.css';

/**
 * Generated geometric preview artwork for each project (used until a real
 * screenshot is supplied via the project's `image` field).
 */

function Events() {
  const cells = [];
  const lit = new Set([3, 9, 11, 16, 20, 26]);
  for (let r = 0; r < 4; r += 1) {
    for (let c = 0; c < 7; c += 1) {
      const n = r * 7 + c;
      cells.push(
        <rect
          key={n}
          x={36 + c * 46}
          y={44 + r * 46}
          width="34"
          height="34"
          rx="9"
          className={lit.has(n) ? 'pv-fill-lime' : 'pv-stroke-soft'}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" className="pv-bg-ink" />
      {cells}
      <circle cx="318" cy="226" r="54" className="pv-fill-ivory" />
      <path d="M296 226l16 16 28-32" className="pv-check" />
      <circle cx="64" cy="250" r="9" className="pv-fill-lime" />
    </svg>
  );
}

function Foundation() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" className="pv-bg-lime" />
      <circle cx="200" cy="300" r="190" className="pv-stroke-ink" />
      <circle cx="200" cy="300" r="140" className="pv-stroke-ink" />
      <circle cx="200" cy="300" r="90" className="pv-fill-ink" />
      <circle cx="200" cy="196" r="28" className="pv-fill-ivory" />
      {[70, 120, 280, 330].map((x, i) => (
        <circle key={x} cx={x} cy={236 - (i % 2) * 22} r={i % 2 ? 14 : 20} className="pv-fill-ivory" />
      ))}
      <circle cx="338" cy="58" r="22" className="pv-fill-ink" />
    </svg>
  );
}

function Safety() {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" className="pv-bg-ink2" />
      <g className="pv-stroke-soft">
        {[60, 120, 180, 240].map((y) => (
          <path key={y} d={`M0 ${y}H400`} />
        ))}
        {[80, 160, 240, 320].map((x) => (
          <path key={x} d={`M${x} 0V300`} />
        ))}
      </g>
      <circle cx="200" cy="150" r="110" className="pv-dash-lime" />
      <circle cx="200" cy="150" r="64" className="pv-dash-lime" />
      <path d="M40 240C110 200 130 130 200 150S320 110 372 56" className="pv-route" />
      <circle cx="200" cy="150" r="14" className="pv-pulse" />
      <circle cx="200" cy="150" r="14" className="pv-fill-lime" />
      <rect x="318" y="206" width="48" height="48" rx="8" className="pv-fill-ivory" />
      <path
        d="M328 216h12v12h-12zM344 216h12v12h-12zM328 232h12v12h-12zM348 236h8v8h-8z"
        className="pv-fill-ink"
      />
    </svg>
  );
}

function Admissions() {
  const bars = [60, 96, 78, 132, 112, 168, 196];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="400" height="300" className="pv-bg-ivory2" />
      {bars.map((h, i) => (
        <rect
          key={h}
          x={40 + i * 48}
          y={260 - h}
          width="30"
          height={h}
          rx="8"
          className={i === bars.length - 1 ? 'pv-fill-lime-deep' : 'pv-fill-ink'}
        />
      ))}
      <path
        d="M55 180L103 150L151 164L199 118L247 138L295 88L343 62"
        className="pv-line-ink"
      />
      <circle cx="343" cy="62" r="10" className="pv-fill-ivory pv-ring-ink" />
      <path d="M30 262H372" className="pv-stroke-ink-thin" />
    </svg>
  );
}

const visuals = {
  events: Events,
  foundation: Foundation,
  safety: Safety,
  admissions: Admissions,
};

export default function ProjectVisual({ type, image, alt }) {
  if (image) {
    return <img className="pv-image" src={image} alt={alt} loading="lazy" decoding="async" />;
  }
  const Art = visuals[type] || Events;
  return (
    <div className="pv" role="img" aria-label={alt}>
      <Art />
    </div>
  );
}

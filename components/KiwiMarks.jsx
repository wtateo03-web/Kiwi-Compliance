/* Brand marks. A kiwi bird silhouette and a kiwi fruit slice.
   Used sparingly: the logo, a handful of perches, and as list markers. */

export function KiwiBird({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 44 34" className={`kiwi-bird ${className}`} fill="none" aria-hidden="true" {...rest}>
      <path
        d="M15.5,16 C15.5,10.5 19.5,6.8 25,6.2 C34,5.2 42,10 42,18.2 C42,25.4 36,29.4 28.5,29.4 C21,29.4 15.5,25.2 15.5,19.5 Z"
        fill="currentColor"
      />
      <path d="M16.4,13 C12.6,15.4 7.2,20.2 2.4,25 L3.9,26.6 C9,22.6 14.2,18.8 17.9,17 Z" fill="currentColor" />
      <path d="M24.5,29.3 L23.9,32.9 M31.5,29.3 L32,32.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M23.9,32.9 L21.4,32.9 M32,32.9 L29.6,32.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle className="kiwi-eye" cx="21.6" cy="13.4" r="1.35" fill="#A7D94B" />
    </svg>
  );
}

/* Seeds precomputed on a ring of ten so nothing is calculated at render. */
const SEEDS = [
  [17.70, 12.00, 90], [16.61, 15.35, 126], [13.76, 17.42, 162], [10.24, 17.42, 198],
  [7.39, 15.35, 234], [6.30, 12.00, 270], [7.39, 8.65, 306], [10.24, 6.58, 342],
  [13.76, 6.58, 18], [16.61, 8.65, 54],
];

export function KiwiSlice({ className = '', ...rest }) {
  return (
    <svg viewBox="0 0 24 24" className={`kiwi-slice ${className}`} aria-hidden="true" {...rest}>
      <circle cx="12" cy="12" r="11" fill="#316B4E" />
      <circle cx="12" cy="12" r="9.2" fill="#B9DE78" />
      <g className="kiwi-seeds">
        {SEEDS.map(([x, y, r], i) => (
          <ellipse key={i} cx={x} cy={y} rx="0.62" ry="1.05" fill="#1F3326" transform={`rotate(${r} ${x} ${y})`} />
        ))}
      </g>
      <ellipse cx="12" cy="12" rx="2.3" ry="2.9" fill="#F6F7F2" />
    </svg>
  );
}

/**
 * A kiwi standing on the edge of something. `where` picks the placement;
 * each has its own rule in globals.css so the feet land on the line.
 * Decorative — hidden from assistive tech, and it hops on hover.
 */
export function PerchedKiwi({ where, tilt = 0 }) {
  return (
    <span className={`perch perch-${where}`} aria-hidden="true">
      <KiwiBird className="perch-bird" style={tilt ? { '--tilt': `${tilt}deg` } : undefined} />
    </span>
  );
}

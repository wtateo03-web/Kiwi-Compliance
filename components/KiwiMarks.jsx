/* Brand marks, drawn for Kiwi Compliance.
   The plumage on the bird and the hand-drawn wobble on the fruit come from the
   generated geometry rather than from a texture, so they stay crisp at any size. */

const BODY = 'M30.0,33.0L30.4,32.4L30.8,31.7L31.4,31.0L31.8,30.1L32.3,29.1L33.6,28.7L34.2,27.8L34.3,26.5L35.2,25.8L35.1,24.2L37.1,24.6L37.5,23.5L37.8,22.0L38.7,21.2L40.8,21.9L40.3,19.0L43.3,21.3L44.5,20.9L45.3,19.7L46.0,18.2L48.0,19.8L48.6,17.7L49.7,16.9L51.4,18.4L52.8,18.7L53.9,17.9L55.2,17.3L56.5,17.9L57.8,18.0L59.2,17.1L60.5,17.1L62.1,15.4L62.9,17.7L64.4,17.1L65.6,17.6L66.7,18.3L68.9,16.4L70.7,15.6L70.7,18.6L71.8,19.1L73.5,18.7L74.8,18.9L75.5,19.9L77.8,19.0L78.5,20.0L79.5,20.7L80.2,21.6L81.7,21.8L84.9,20.6L84.0,22.9L85.8,22.9L86.4,23.8L87.6,24.4L87.8,25.5L90.1,25.4L91.4,25.9L90.8,27.4L92.7,27.7L91.9,29.3L95.3,29.1L95.3,30.3L95.1,31.6L96.1,32.5L95.3,33.8L94.9,35.0L95.1,36.1L96.2,37.0L98.1,37.8L95.7,39.3L96.0,40.5L99.4,41.4L98.0,42.8L95.7,44.0L96.2,45.2L97.9,46.4L97.6,47.6L97.1,48.7L95.5,49.6L95.0,50.6L94.2,51.6L93.5,52.5L93.2,53.5L92.9,54.6L92.2,55.5L91.1,56.3L90.3,57.2L89.8,58.1L89.3,59.1L88.3,59.9L87.1,60.5L86.2,61.3L85.5,62.3L84.7,63.1L83.5,63.8L82.2,64.3L81.2,65.0L80.3,65.8L79.3,66.6L78.0,67.0L76.7,67.4L75.5,68.0L74.5,68.8L73.3,69.5L71.8,69.7L70.4,69.9L69.2,70.5L68.0,71.3L66.7,71.6L65.3,71.6L63.9,71.7L62.7,72.2L61.5,72.7L60.2,72.8L58.8,72.5L57.5,72.5L56.2,73.2L55.0,72.3L53.7,72.5L52.3,73.2L51.2,72.7L49.8,73.4L48.8,72.4L47.5,72.7L46.0,73.2L45.5,71.3L44.1,71.7L41.7,73.8L42.2,70.4L41.1,70.1L39.6,70.4L38.1,70.8L38.3,68.6L35.8,70.1L34.3,70.1L35.5,67.1L33.9,67.2L33.7,66.0L31.6,66.4L32.7,64.1L32.1,63.3L30.8,62.9L28.3,63.4L29.3,61.4L28.0,61.0L27.2,60.2L28.5,58.3L28.6,57.1L26.0,57.1L26.9,55.6L27.0,54.5L26.6,53.5L26.4,52.5L26.2,51.5L26.1,50.5L25.9,49.5L25.7,48.5L25.5,47.5L25.2,46.4L25.0,45.4L25.0,44.4L25.1,43.4L25.1,42.4L25.1,41.6L25.1,40.7L25.0,40.0L24.9,39.3L24.9,38.8L25.1,38.3L25.3,37.8L25.5,37.5L25.7,37.1L25.8,36.8L25.9,36.4L25.9,36.1L26.1,35.8L26.4,35.5L26.8,35.2L27.1,35.0L27.4,34.9L27.6,34.7L27.7,34.6L27.9,34.4L28.2,34.2L28.7,34.0L29.2,33.8L29.7,33.5Z';
const BEAK = 'M27.5,37.4 Q8,38.9 -13,39.6 L-13,41.2 Q8,42.2 27.5,43.2 Z';

const LEGS = {
  stand: [['M51,70 L49,92', 'M49.0,92.0 L42.8,95.4 M49.0,92.0 L47.9,96.8 M49.0,92.0 L53.1,95.6'], ['M66,70 L68,92', 'M68.0,92.0 L61.8,95.4 M68.0,92.0 L66.9,96.8 M68.0,92.0 L72.1,95.6']],
  walk: [['M50,70 L40,90', 'M40.0,90.0 L33.8,93.4 M40.0,90.0 L38.9,94.8 M40.0,90.0 L44.1,93.6'], ['M67,70 L77,89', 'M77.0,89.0 L70.8,92.4 M77.0,89.0 L75.9,93.8 M77.0,89.0 L81.1,92.6']],
  oneleg: [['M59,71 L57,94', 'M57.0,94.0 L50.8,97.4 M57.0,94.0 L55.9,98.8 M57.0,94.0 L61.1,97.6'], ['M70,70 Q75,74 72,79', null]],
  tuck: [['M54,72 L53,79', 'M53.0,79.0 L46.8,82.4 M53.0,79.0 L51.9,83.8 M53.0,79.0 L57.1,82.6'], ['M66,72 L67,79', 'M67.0,79.0 L60.8,82.4 M67.0,79.0 L65.9,83.8 M67.0,79.0 L71.1,82.6']]
};

const POSE = {
  alert: { beak: -24, legs: 'stand', rot: 0 },
  peck: { beak: -56, legs: 'stand', rot: 9 },
  walk: { beak: -28, legs: 'walk', rot: 2 },
  lookup: { beak: 12, legs: 'stand', rot: -6 },
  oneleg: { beak: -20, legs: 'oneleg', rot: -3 },
  tuck: { beak: -32, legs: 'tuck', rot: 0 }
};

export const KIWI_POSES = Object.keys(POSE);

const VIEWBOX = '-16 8 124 98';
const FLIP = 'scale(-1,1) translate(-92,0)';

/** A kiwi. `pose` sets what it is doing; `flip` turns it round. */
export function Kiwi({ pose = 'alert', flip = false, className = '', ...rest }) {
  const c = POSE[pose] || POSE.alert;
  return (
    <svg viewBox={VIEWBOX} className={`kiwi ${className}`} fill="none" aria-hidden="true" {...rest}>
      <g transform={flip ? FLIP : undefined}>
        <g transform={`rotate(${c.rot} 60 58)`}>
          {LEGS[c.legs].map(([leg, toes], i) => (
            <g key={i} stroke="currentColor" strokeLinecap="round" fill="none">
              <path d={leg} strokeWidth="4" />
              {toes && <path d={toes} strokeWidth="2.9" />}
            </g>
          ))}
          <path d={BODY} fill="currentColor" />
          <g transform={`rotate(${c.beak} 27.5 40)`}>
            <path d={BEAK} fill="currentColor" />
          </g>
          <circle className="kiwi-eye" cx="35" cy="35.5" r="1.9" />
        </g>
      </g>
    </svg>
  );
}

/* ---------------------------------------------------------------- fruit -- */
const SKIN_OUT = 'M97.6,50.0L97.3,53.1L96.7,56.1L96.0,59.2L95.2,62.1L94.3,65.0L93.3,67.9L92.1,70.8L90.8,73.6L89.2,76.2L87.4,78.7L85.4,81.1L83.2,83.2L80.9,85.2L78.4,87.0L75.9,88.7L73.3,90.3L70.6,91.8L67.8,93.1L65.0,94.2L62.1,95.1L59.1,95.7L56.1,96.1L53.0,96.4L50.0,96.5L47.0,96.4L43.9,96.3L40.8,96.1L37.8,95.7L34.7,95.1L31.7,94.2L28.8,93.1L26.0,91.6L23.4,89.8L20.9,87.9L18.7,85.7L16.5,83.5L14.5,81.1L12.6,78.7L10.9,76.1L9.3,73.5L8.0,70.7L6.8,67.9L5.9,65.0L5.2,62.0L4.6,59.0L4.2,56.0L3.8,53.0L3.6,50.0L3.5,46.9L3.5,43.9L3.8,40.8L4.4,37.8L5.3,34.8L6.4,32.0L7.8,29.2L9.4,26.6L11.1,24.0L12.9,21.5L14.8,19.1L16.8,16.8L18.9,14.5L21.2,12.5L23.7,10.6L26.3,8.9L29.0,7.5L31.9,6.2L34.8,5.2L37.7,4.3L40.8,3.5L43.8,2.9L46.9,2.6L50.0,2.5L53.1,2.6L56.2,3.1L59.2,3.9L62.1,4.9L64.9,6.1L67.6,7.4L70.3,8.8L73.0,10.2L75.6,11.7L78.2,13.3L80.6,15.1L83.0,17.0L85.2,19.1L87.2,21.4L89.1,23.9L90.8,26.5L92.3,29.1L93.7,31.9L94.9,34.7L96.0,37.7L96.8,40.7L97.4,43.8L97.6,46.9Z';
const SKIN_IN = 'M91.7,50.0L91.6,52.7L91.2,55.4L90.7,58.1L90.0,60.7L89.1,63.3L88.1,65.8L87.0,68.2L85.6,70.6L84.1,72.8L82.4,74.9L80.5,76.8L78.6,78.6L76.5,80.3L74.5,81.9L72.3,83.4L70.2,84.9L67.9,86.4L65.6,87.7L63.2,88.8L60.6,89.7L58.0,90.4L55.4,90.8L52.7,91.0L50.0,91.0L47.3,90.9L44.6,90.7L42.0,90.3L39.3,89.8L36.7,89.1L34.2,88.2L31.7,87.0L29.4,85.7L27.1,84.2L25.0,82.6L22.9,80.9L20.9,79.1L19.0,77.1L17.2,75.1L15.6,73.0L14.1,70.7L12.8,68.3L11.8,65.8L11.1,63.2L10.5,60.6L10.1,57.9L9.9,55.3L9.8,52.6L9.7,50.0L9.8,47.4L9.9,44.7L10.3,42.1L10.8,39.5L11.5,36.9L12.4,34.4L13.4,32.0L14.6,29.6L15.9,27.2L17.3,24.9L18.9,22.7L20.6,20.6L22.5,18.6L24.5,16.8L26.8,15.3L29.2,13.9L31.7,12.8L34.2,11.9L36.8,11.1L39.4,10.5L42.0,9.9L44.7,9.5L47.3,9.2L50.0,9.0L52.7,9.1L55.3,9.4L58.0,9.9L60.6,10.6L63.1,11.4L65.6,12.4L68.0,13.5L70.4,14.7L72.7,16.0L74.9,17.5L77.0,19.2L78.9,21.1L80.7,23.1L82.3,25.2L83.8,27.4L85.1,29.7L86.4,32.1L87.6,34.4L88.7,36.9L89.7,39.4L90.6,41.9L91.2,44.6L91.6,47.3Z';
const CORE = 'M60.9,50.0L60.8,51.4L60.7,52.9L60.7,54.4L60.4,56.0L59.7,57.4L58.6,58.6L57.2,59.4L55.7,59.9L54.3,60.5L53.0,61.0L51.5,61.5L50.0,61.7L48.5,61.6L47.1,61.0L45.8,60.2L44.5,59.4L43.3,58.7L42.1,57.9L41.0,56.9L40.0,55.8L39.2,54.5L38.6,53.1L38.1,51.6L37.9,50.0L38.0,48.4L38.5,46.9L39.4,45.6L40.5,44.5L41.5,43.4L42.3,42.3L43.2,41.1L44.2,40.0L45.5,39.2L47.0,38.8L48.5,38.7L50.0,38.7L51.5,38.8L53.0,38.8L54.6,39.0L56.0,39.5L57.3,40.4L58.4,41.6L59.2,42.9L59.9,44.3L60.4,45.7L60.8,47.1L60.9,48.6Z';
const STRIA = 'M64.5,50.1 L88.0,50.2 M64.2,52.8 L88.6,57.7 M63.5,55.4 L86.4,64.5 M62.5,57.4 L81.1,68.4 M60.5,60.0 L77.2,75.7 M58.6,61.7 L69.9,77.3 M56.5,63.0 L65.5,81.0 M53.9,64.0 L60.0,85.5 M51.6,64.4 L53.8,84.2 M48.8,64.4 L46.7,89.0 M45.9,63.9 L40.3,82.7 M43.4,62.9 L34.5,80.2 M41.2,61.5 L29.5,76.9 M39.5,60.0 L21.8,76.8 M37.8,57.8 L20.9,68.5 M36.4,55.0 L13.5,63.3 M35.8,52.8 L11.2,57.6 M35.5,50.0 L12.4,49.9 M35.7,47.5 L11.2,43.2 M36.5,44.7 L13.3,35.4 M37.8,42.2 L20.5,31.1 M39.2,40.3 L24.7,27.2 M41.1,38.6 L29.5,23.6 M43.4,37.1 L33.2,16.9 M45.8,36.1 L39.0,14.1 M48.6,35.6 L46.5,15.1 M51.5,35.6 L53.8,14.0 M53.9,36.0 L59.7,15.1 M56.6,37.1 L65.1,20.2 M59.0,38.6 L70.5,23.9 M60.8,40.3 L78.9,24.2 M62.2,42.1 L82.2,29.2 M63.5,44.7 L84.3,36.5 M64.2,47.1 L82.6,43.2';
const SEEDS = '<ellipse cx="75.5" cy="49.9" rx="1.5" ry="2.7" transform="rotate(89.8 75.5 49.9)"/><ellipse cx="72.7" cy="61.6" rx="1.5" ry="2.7" transform="rotate(117.0 72.7 61.6)"/><ellipse cx="65.2" cy="70.4" rx="1.5" ry="2.7" transform="rotate(143.3 65.2 70.4)"/><ellipse cx="52.1" cy="75.4" rx="1.5" ry="2.7" transform="rotate(175.2 52.1 75.4)"/><ellipse cx="42.1" cy="74.3" rx="1.5" ry="2.7" transform="rotate(197.9 42.1 74.3)"/><ellipse cx="30.9" cy="66.9" rx="1.5" ry="2.7" transform="rotate(228.5 30.9 66.9)"/><ellipse cx="25.0" cy="55.1" rx="1.5" ry="2.7" transform="rotate(258.4 25.0 55.1)"/><ellipse cx="25.0" cy="44.9" rx="1.5" ry="2.7" transform="rotate(281.4 25.0 44.9)"/><ellipse cx="31.0" cy="33.0" rx="1.5" ry="2.7" transform="rotate(311.8 31.0 33.0)"/><ellipse cx="41.2" cy="26.1" rx="1.5" ry="2.7" transform="rotate(339.9 41.2 26.1)"/><ellipse cx="51.9" cy="24.6" rx="1.5" ry="2.7" transform="rotate(364.3 51.9 24.6)"/><ellipse cx="64.2" cy="28.8" rx="1.5" ry="2.7" transform="rotate(393.9 64.2 28.8)"/><ellipse cx="72.8" cy="38.6" rx="1.5" ry="2.7" transform="rotate(423.5 72.8 38.6)"/>';
const WHOLE = 'M94.0,50.0L93.9,51.9L93.7,53.7L93.5,55.6L93.2,57.4L92.6,59.3L91.8,61.0L90.7,62.7L89.5,64.4L88.2,66.0L86.8,67.5L85.4,69.0L83.9,70.5L82.2,71.9L80.3,73.1L78.3,74.2L76.3,75.3L74.3,76.3L72.3,77.4L70.3,78.5L68.2,79.6L66.1,80.6L63.8,81.4L61.4,82.0L58.9,82.4L56.4,82.7L53.8,82.9L51.3,83.0L48.7,83.0L46.2,82.9L43.7,82.6L41.2,82.1L38.8,81.5L36.5,80.7L34.2,80.0L31.9,79.3L29.6,78.6L27.4,77.8L25.2,76.9L23.1,75.8L21.2,74.6L19.5,73.2L17.9,71.8L16.4,70.4L14.8,68.9L13.3,67.4L11.9,65.9L10.7,64.3L9.6,62.6L8.7,60.9L7.9,59.1L7.2,57.4L6.4,55.6L5.8,53.8L5.2,51.9L4.9,50.0L5.0,48.1L5.4,46.2L6.1,44.4L6.9,42.6L7.8,40.8L8.8,39.1L9.7,37.4L10.8,35.7L12.0,34.1L13.4,32.6L14.9,31.1L16.5,29.7L18.1,28.3L19.7,26.9L21.4,25.6L23.1,24.2L25.0,23.0L27.1,22.0L29.4,21.1L31.7,20.4L34.1,19.8L36.5,19.2L38.8,18.6L41.2,18.0L43.7,17.6L46.2,17.2L48.7,17.1L51.3,17.1L53.8,17.3L56.3,17.5L58.8,17.8L61.3,18.1L63.8,18.6L66.2,19.3L68.4,20.2L70.5,21.3L72.5,22.4L74.4,23.6L76.3,24.8L78.2,25.9L80.1,27.1L82.0,28.3L83.7,29.6L85.4,31.0L86.8,32.5L88.2,34.0L89.5,35.6L90.7,37.3L91.9,38.9L92.8,40.7L93.6,42.5L94.0,44.4L94.1,46.3L94.1,48.1Z';

/**
 * A cut kiwi. `tone="full"` is the printed, packaging-style version;
 * `tone="line"` is a single-colour outline for large decorative use.
 */
export function KiwiSlice({ tone = 'full', className = '', ...rest }) {
  // Below about 24px the striations turn to mud, so small markers get a
  // pared-back drawing rather than a shrunk one.
  if (tone === 'simple') {
    return (
      <svg viewBox="0 0 100 100" className={`kiwi-fruit ${className}`} aria-hidden="true" {...rest}>
        <circle cx="50" cy="50" r="47" fill="#5C7A44" />
        <circle cx="50" cy="50" r="39" fill="#C7E48A" />
        <g fill="#1F3326" dangerouslySetInnerHTML={{ __html: SEEDS }} />
        <circle cx="50" cy="50" r="11" fill="#F2F7E4" />
      </svg>
    );
  }
  if (tone === 'line') {
    return (
      <svg viewBox="0 0 100 100" className={`kiwi-fruit ${className}`} aria-hidden="true" {...rest}>
        <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
          <path d={SKIN_OUT} />
          <path d={SKIN_IN} />
          <path d={CORE} />
        </g>
        <path d={STRIA} fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        <g fill="currentColor" dangerouslySetInnerHTML={{ __html: SEEDS }} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" className={`kiwi-fruit ${className}`} aria-hidden="true" {...rest}>
      <path d={SKIN_OUT} fill="#5C7A44" />
      <path d={SKIN_IN} fill="#C7E48A" />
      <path d={STRIA} fill="none" stroke="#8FBF5A" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
      <g fill="#1F3326" dangerouslySetInnerHTML={{ __html: SEEDS }} />
      <path d={CORE} fill="#F2F7E4" />
    </svg>
  );
}

/** The uncut fruit — furry edge, for piles. */
export function KiwiWhole({ tone = 'full', className = '', ...rest }) {
  return (
    <svg viewBox="0 0 100 100" className={`kiwi-fruit ${className}`} aria-hidden="true" {...rest}>
      <path
        d={WHOLE}
        fill={tone === 'line' ? 'none' : '#7C6B4A'}
        stroke="currentColor"
        strokeWidth={tone === 'line' ? 1.5 : 0}
      />
    </svg>
  );
}

/** A kiwi standing on something. Decorative; hops when you point at it. */
export function PerchedKiwi({ where, pose = 'alert', flip = false, tilt = 0 }) {
  return (
    <span className={`perch perch-${where}`} aria-hidden="true">
      <Kiwi
        pose={pose}
        flip={flip}
        className="perch-bird"
        style={tilt ? { '--tilt': `${tilt}deg` } : undefined}
      />
    </span>
  );
}

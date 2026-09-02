import Reveal from './Reveal';

/* Real UK coordinates, projected. The faint points trace the landmass by
   where places actually are — no hand-drawn coastline to get wrong. */
const PLACES = [
  // Scotland
  [58.98, -2.96], [58.59, -3.52], [58.44, -3.09], [58.21, -6.39], [57.90, -5.16],
  [57.48, -4.23], [57.15, -2.10], [56.82, -5.11], [56.46, -2.97], [56.41, -5.47],
  [55.95, -3.19], [55.86, -4.25], [55.77, -2.00], [55.46, -4.63], [55.07, -3.61],
  // Northern Ireland
  [55.00, -7.32], [54.60, -5.93], [54.34, -7.63], [54.18, -6.34],
  // Northern England
  [54.98, -1.61], [54.90, -5.03], [54.89, -2.94], [54.57, -1.23], [54.55, -3.59],
  [54.28, -0.40], [53.96, -1.08], [53.82, -3.05], [53.74, -0.33], [53.56, -0.08],
  [53.41, -2.98], [53.38, -1.47], [53.23, -4.13], [53.31, -4.63], [53.23, -0.54],
  // Midlands and east
  [53.14, 0.34], [53.00, -2.18], [52.95, -1.15], [52.71, -2.75], [52.64, -1.13],
  [52.63, 1.30], [52.61, 1.73], [52.57, -0.24], [52.48, 1.75], [52.41, -4.08],
  [52.21, 0.12], [52.06, 1.16], [51.99, -4.98],
  // Wales, west and south
  [51.86, -2.24], [51.75, -1.26], [51.71, -5.04], [51.62, -3.94], [51.45, -0.97],
  [51.28, 1.08], [51.13, 1.31], [51.08, -4.06], [50.86, 0.57], [50.82, -0.14],
  [50.72, -3.53], [50.61, -2.46], [50.37, -4.14], [50.26, -5.05], [50.12, -5.54],
];

/* The twelve anonymous estate sites. */
const SITES = [
  [55.86, -4.25], [54.98, -1.61], [53.80, -1.55], [53.48, -2.24], [53.19, -2.89],
  [52.71, -2.75], [52.49, -1.89], [52.63, 1.30], [51.48, -3.18], [51.45, -2.59],
  [51.51, -0.13], [50.91, -1.40],
];

const W = 300, H = 500, PAD_X = 30, TOP = 14, MAP_H = 404;
const LAT0 = 59.2, LAT1 = 50.0, LON0 = -7.6, LON1 = 1.6;
const K = Math.cos((54.5 * Math.PI) / 180);

const sx = (lon) => PAD_X + ((lon - LON0) * K * (W - PAD_X * 2)) / ((LON1 - LON0) * K);
const sy = (lat) => TOP + ((LAT0 - lat) * MAP_H) / (LAT0 - LAT1);

const HUB = [162, 468];

export default function MultiSite() {
  return (
    <section className="section dark">
      <div className="container ms-grid">
        <Reveal className="ms-copy">
          <p className="eyebrow">Multi-site</p>
          <h2 className="h2">One estate. However many postcodes.</h2>
          <p className="lead muted ms-lead">
            Kiwi gives organisations with multiple sites one place to understand what has been completed,
            what is due and what needs attention.
          </p>
          <ul className="ms-points">
            <li>Central visibility of every site</li>
            <li>Work routed to local specialists</li>
            <li>Records held to one consistent standard</li>
          </ul>
          <p className="btn-row">
            <a className="link-arrow" href="#contact">
              Talk to us about your estate <span className="arw" aria-hidden="true">→</span>
            </a>
          </p>
        </Reveal>

        <Reveal className="ms-map" delay={80}>
          <svg viewBox={`0 0 ${W} ${H}`} role="img"
               aria-label="Twelve estate sites spread across the United Kingdom, each connected back to Kiwi.">
            {PLACES.map(([lat, lon], i) => (
              <circle key={`p${i}`} cx={sx(lon)} cy={sy(lat)} r="1.9" fill="rgba(246,247,242,.4)" />
            ))}

            {SITES.map(([lat, lon], i) => {
              const x = sx(lon), y = sy(lat);
              return (
                <path key={`l${i}`}
                      d={`M${x} ${y} C ${x} ${y + 70} ${HUB[0]} ${HUB[1] - 90} ${HUB[0]} ${HUB[1] - 16}`}
                      fill="none" stroke="rgba(167,217,75,.2)" strokeWidth="0.8" />
              );
            })}

            {SITES.map(([lat, lon], i) => {
              const x = sx(lon), y = sy(lat);
              return (
                <g key={`s${i}`}>
                  <circle cx={x} cy={y} r="6" fill="rgba(167,217,75,.13)" />
                  <circle cx={x} cy={y} r="2.6" fill="var(--fresh)" />
                </g>
              );
            })}

            <rect x={HUB[0] - 40} y={HUB[1] - 16} width="80" height="30" rx="6" fill="var(--fresh)" />
            <text x={HUB[0]} y={HUB[1] + 4} textAnchor="middle" fontSize="12.5" fontWeight="700"
                  letterSpacing="1.8" fill="var(--ink)" fontFamily="var(--sans)">KIWI</text>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

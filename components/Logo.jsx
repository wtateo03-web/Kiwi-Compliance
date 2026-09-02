/** Geometric K: a stem plus a route that folds back on itself, node in fresh green. */
export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <svg className="logo-mark" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 3.5V24.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="square" />
        <path d="M21 4.5L7.4 14L21 23.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="square" />
        <circle cx="7.4" cy="14" r="2.6" fill="#A7D94B" />
      </svg>
      <span className="logo-word">
        Kiwi <span>Compliance</span>
      </span>
    </span>
  );
}

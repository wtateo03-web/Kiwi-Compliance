import { KiwiBird } from './KiwiMarks';

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <KiwiBird className="logo-mark" />
      <span className="logo-word">
        Kiwi <span>Compliance</span>
      </span>
    </span>
  );
}

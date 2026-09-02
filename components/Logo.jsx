import { Kiwi } from './KiwiMarks';

export default function Logo({ className = '' }) {
  return (
    <span className={`logo ${className}`}>
      <Kiwi pose="alert" flip className="logo-mark" />
      <span className="logo-word">
        Kiwi <span>Compliance</span>
      </span>
    </span>
  );
}

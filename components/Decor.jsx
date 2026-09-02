import { KiwiSlice, KiwiWhole } from './KiwiMarks';

/**
 * Fruit drifting in from a corner, drawn as outlines in the surrounding
 * colour. Big, quiet, and always clipped by the section edge so it reads as
 * pattern rather than illustration.
 */
export function FruitCorner({ where }) {
  return (
    <span className={`fruit-corner fruit-corner-${where}`} aria-hidden="true">
      <KiwiSlice tone="line" className="fc-a" />
      <KiwiSlice tone="line" className="fc-b" />
      <KiwiWhole tone="line" className="fc-c" />
    </span>
  );
}

/** A heap of fruit in the corner of the closing panel — the packaging moment. */
export function FruitPile() {
  return (
    <span className="fruit-pile" aria-hidden="true">
      <KiwiWhole className="fp-1" />
      <KiwiSlice className="fp-2" />
      <KiwiSlice className="fp-3" />
      <KiwiSlice className="fp-4" />
      <KiwiSlice className="fp-5" />
      <KiwiSlice className="fp-6" />
    </span>
  );
}

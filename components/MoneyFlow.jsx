'use client';

import { useInView } from './hooks';

/* ==========================================================================
   The money
   One picture, two lanes. Everything on the top lane travels left to right:
   invoices, from the providers to Kiwi and then to the customer as one.
   Everything on the bottom lane travels right to left: money, from the
   customer to Kiwi and then out to every provider behind it. The customer
   has one counterparty; we hold the other nineteen.
   ========================================================================== */

const P = { x: 10, y: 84, w: 194, h: 132 };
const K = { x: 353, y: 66, w: 194, h: 168 };
const Y = { x: 696, y: 84, w: 194, h: 132 };

const TOP = 124;
const BOT = 196;

export default function MoneyFlow({ label }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  /* Left and right gaps, used by both lanes. */
  const lA = P.x + P.w;          /* 204 */
  const lB = K.x;                /* 353 */
  const rA = K.x + K.w;          /* 547 */
  const rB = Y.x;                /* 696 */

  return (
    <figure ref={ref} className={`mf${inView ? ' is-in' : ''}`}>
      <svg viewBox="0 0 900 300" role="img" aria-label={label}>
        {/* ---- lane 1: invoices, left to right ---- */}
        <path className="mf-line is-doc" style={{ '--i': 0 }} d={`M ${lA} ${TOP} L ${lB - 8} ${TOP}`} pathLength="1" />
        <path className="mf-head is-doc" style={{ '--i': 0 }} d={`M ${lB - 13} ${TOP - 5} L ${lB - 3} ${TOP} L ${lB - 13} ${TOP + 5}`} />
        <path className="mf-line is-doc" style={{ '--i': 1 }} d={`M ${rA} ${TOP} L ${rB - 8} ${TOP}`} pathLength="1" />
        <path className="mf-head is-doc" style={{ '--i': 1 }} d={`M ${rB - 13} ${TOP - 5} L ${rB - 3} ${TOP} L ${rB - 13} ${TOP + 5}`} />

        {/* ---- lane 2: money, right to left ---- */}
        <path className="mf-line is-cash" style={{ '--i': 2 }} d={`M ${rB} ${BOT} L ${rA + 8} ${BOT}`} pathLength="1" />
        <path className="mf-head is-cash" style={{ '--i': 2 }} d={`M ${rA + 13} ${BOT - 5} L ${rA + 3} ${BOT} L ${rA + 13} ${BOT + 5}`} />
        <path className="mf-line is-cash" style={{ '--i': 3 }} d={`M ${lB} ${BOT} L ${lA + 8} ${BOT}`} pathLength="1" />
        <path className="mf-head is-cash" style={{ '--i': 3 }} d={`M ${lA + 13} ${BOT - 5} L ${lA + 3} ${BOT} L ${lA + 13} ${BOT + 5}`} />

        {/* ---- the three parties ---- */}
        <g className="mf-node" style={{ '--i': 0 }}>
          <rect x={P.x} y={P.y} width={P.w} height={P.h} rx="10" />
          <text x={P.x + P.w / 2} y={P.y + 52} textAnchor="middle" className="mf-node-t">Your providers</text>
          <text x={P.x + P.w / 2} y={P.y + 73} textAnchor="middle" className="mf-node-s">19 specialist firms</text>
          <text x={P.x + P.w / 2} y={P.y + 89} textAnchor="middle" className="mf-node-s">the ones you use today</text>
        </g>

        <g className="mf-node is-kiwi" style={{ '--i': 1 }}>
          <rect x={K.x} y={K.y} width={K.w} height={K.h} rx="12" />
          <text x={K.x + K.w / 2} y={K.y + 68} textAnchor="middle" className="mf-kiwi-t">KIWI</text>
          <text x={K.x + K.w / 2} y={K.y + 90} textAnchor="middle" className="mf-kiwi-s">checks every invoice</text>
          <text x={K.x + K.w / 2} y={K.y + 106} textAnchor="middle" className="mf-kiwi-s">against the quote</text>
          <text x={K.x + K.w / 2} y={K.y + 122} textAnchor="middle" className="mf-kiwi-s">and the evidence</text>
        </g>

        <g className="mf-node is-you" style={{ '--i': 2 }}>
          <rect x={Y.x} y={Y.y} width={Y.w} height={Y.h} rx="10" />
          <text x={Y.x + Y.w / 2} y={Y.y + 52} textAnchor="middle" className="mf-node-t">You</text>
          <text x={Y.x + Y.w / 2} y={Y.y + 73} textAnchor="middle" className="mf-node-s">one supplier on your</text>
          <text x={Y.x + Y.w / 2} y={Y.y + 89} textAnchor="middle" className="mf-node-s">purchase ledger</text>
        </g>

        {/* ---- what travels on each lane ---- */}
        <text x={(lA + lB) / 2} y={TOP - 15} textAnchor="middle" className="mf-lab">214 invoices in</text>
        <text x={(lA + lB) / 2} y={TOP + 22} textAnchor="middle" className="mf-sub">checked line by line</text>

        <text x={(rA + rB) / 2} y={TOP - 15} textAnchor="middle" className="mf-lab is-strong">1 invoice out</text>
        <text x={(rA + rB) / 2} y={TOP + 22} textAnchor="middle" className="mf-sub">itemised, monthly</text>

        <text x={(rA + rB) / 2} y={BOT - 15} textAnchor="middle" className="mf-lab is-strong">1 payment</text>
        <text x={(rA + rB) / 2} y={BOT + 22} textAnchor="middle" className="mf-sub">on your terms</text>

        <text x={(lA + lB) / 2} y={BOT - 15} textAnchor="middle" className="mf-lab">19 providers paid</text>
        <text x={(lA + lB) / 2} y={BOT + 22} textAnchor="middle" className="mf-sub">on ours, not yours</text>

        {/* ---- lane keys ---- */}
        <text x="450" y="30" textAnchor="middle" className="mf-lane">INVOICES TRAVEL THIS WAY →</text>
        <text x="450" y="278" textAnchor="middle" className="mf-lane is-cash">← MONEY TRAVELS THIS WAY</text>
      </svg>
    </figure>
  );
}

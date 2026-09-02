'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { useInView } from './hooks';
import { EMAILS, WEEK, FAN } from './inboxData';

/* ==========================================================================
   Your inbox is the interface
   The platform section that follows shows a system. This one exists to say
   the customer is not expected to use it: Kiwi works the estate, and the
   only thing that reaches the facilities manager is an email they can
   answer in a line. The platform is drawn behind the mailbox, dimmed, to
   make the hierarchy literal.
   ========================================================================== */

/* --- the fan-in ----------------------------------------------------------
   Six providers converging on Kiwi and one line out. The whole argument is
   the asymmetry between the two sides, so the counts sit on the flows. */

const VB = { w: 880, h: 330 };
const CHIP = { x: 6, w: 176, h: 34 };
const KIWI = { x: 372, y: 122, w: 150, h: 86 };
const BOX = { x: 700, y: 128, w: 174, h: 74 };

function chipY(i) {
  const span = VB.h - 40 - CHIP.h;
  return 20 + (span / (FAN.length - 1)) * i;
}

function FanIn() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const kx = KIWI.x;
  const kcy = KIWI.y + KIWI.h / 2;

  return (
    <figure ref={ref} className={`fan${inView ? ' is-in' : ''}`}>
      <svg viewBox={`0 0 ${VB.w} ${VB.h}`} role="img"
           aria-label="Six compliance providers correspond with Kiwi; Kiwi sends one thread to your inbox.">
        {/* provider → Kiwi */}
        {FAN.map((p, i) => {
          const y = chipY(i) + CHIP.h / 2;
          const x1 = CHIP.x + CHIP.w;
          const mid = x1 + (kx - x1) / 2;
          return (
            <path
              key={p.name}
              className="fan-line"
              style={{ '--i': i }}
              d={`M ${x1} ${y} C ${mid} ${y}, ${mid} ${kcy}, ${kx} ${kcy}`}
              pathLength="1"
            />
          );
        })}

        {/* Kiwi → inbox */}
        <path className="fan-out" d={`M ${KIWI.x + KIWI.w} ${kcy} L ${BOX.x} ${kcy}`} pathLength="1" />
        <path className="fan-head" d={`M ${BOX.x - 11} ${kcy - 5} L ${BOX.x - 1} ${kcy} L ${BOX.x - 11} ${kcy + 5}`} />

        {/* provider chips */}
        {FAN.map((p, i) => (
          <g key={p.name} className="fan-chip" style={{ '--i': i }}>
            <rect x={CHIP.x} y={chipY(i)} width={CHIP.w} height={CHIP.h} rx="8" />
            <text x={CHIP.x + 12} y={chipY(i) + 15}>{p.name}</text>
            <text x={CHIP.x + 12} y={chipY(i) + 27} className="fan-chip-sub">{p.field}</text>
          </g>
        ))}

        {/* Kiwi */}
        <g className="fan-kiwi">
          <rect x={KIWI.x} y={KIWI.y} width={KIWI.w} height={KIWI.h} rx="12" />
          <text x={KIWI.x + KIWI.w / 2} y={KIWI.y + 38} textAnchor="middle" className="fan-kiwi-t">KIWI</text>
          <text x={KIWI.x + KIWI.w / 2} y={KIWI.y + 57} textAnchor="middle" className="fan-kiwi-s">one desk</text>
        </g>

        {/* inbox */}
        <g className="fan-box">
          <rect x={BOX.x} y={BOX.y} width={BOX.w} height={BOX.h} rx="10" />
          <text x={BOX.x + BOX.w / 2} y={BOX.y + 32} textAnchor="middle" className="fan-box-t">Your inbox</text>
          <text x={BOX.x + BOX.w / 2} y={BOX.y + 51} textAnchor="middle" className="fan-box-s">4 emails</text>
        </g>

        <text x="278" y="42" textAnchor="middle" className="fan-note">143 exchanges</text>
        <text x="278" y="58" textAnchor="middle" className="fan-note fan-note-sub">handled by us</text>
        <text x="611" y="138" textAnchor="middle" className="fan-note">4 emails</text>
        <text x="611" y="153" textAnchor="middle" className="fan-note fan-note-sub">1 needed a reply</text>
      </svg>
    </figure>
  );
}

/* --- the mailbox --------------------------------------------------------- */

function Mail({ mail }) {
  return (
    <div className="mb-read">
      <header className="mb-read-head">
        <h4 className="mb-read-subject">{mail.subject}</h4>
        <p className="mb-read-meta">
          <span className="mb-read-from">{mail.from}</span>
          <span className="mono mb-read-addr">{mail.address}</span>
        </p>
        <p className="mb-read-to mono">to {mail.to} · {mail.day} {mail.time}</p>
      </header>

      <p className="mb-body">{mail.body}</p>

      {mail.reply ? (
        <>
          <div className="mb-reply">
            <p className="mb-reply-label">
              <span className="mb-reply-tag">Your reply</span>
              <span className="mono mb-reply-time">{mail.replyTime}</span>
            </p>
            <p className="mb-reply-text">{mail.reply}</p>
          </div>
          <div className="mb-close">
            <p className="mb-close-label">
              <span className="mb-close-tag">Kiwi, {mail.closeTime}</span>
            </p>
            <p className="mb-close-text">{mail.close}</p>
          </div>
        </>
      ) : (
        <p className="mb-noreply">Nothing to do. Filed on your record either way.</p>
      )}
    </div>
  );
}

export default function InboxLayer() {
  const [open, setOpen] = useState(EMAILS[0].id);
  const mail = EMAILS.find((e) => e.id === open) ?? EMAILS[0];

  return (
    <section className="section sunk has-fruit" id="inbox">
      <FruitCorner where="inbox" />
      <div className="container">
        <Reveal className="ib-head">
          <div>
            <p className="eyebrow">How you actually use Kiwi</p>
            <h2 className="h2">Your inbox is the interface.</h2>
          </div>
          <p className="lead muted ib-head-copy">
            There is nothing for your team to log into, learn or administer. Kiwi works the estate
            in the background and writes to you only when something genuinely needs a person. When
            it does, it arrives as an email you can answer in one line.
          </p>
        </Reveal>

        {/* --------------------------------------------------- the ratio */}
        <Reveal className="ib-ratio">
          <PerchedKiwi where="rule" pose="tuck" flip tilt={0} />
          <div className="ib-ratio-grid">
            <div className="ib-stat">
              <span className="mono ib-stat-n">{WEEK.handled}</span>
              <span className="ib-stat-l">exchanges with providers, settled by Kiwi</span>
            </div>
            <div className="ib-stat is-mid">
              <span className="mono ib-stat-n">{WEEK.reached}</span>
              <span className="ib-stat-l">emails that reached you</span>
            </div>
            <div className="ib-stat is-you">
              <span className="mono ib-stat-n">{WEEK.replied}</span>
              <span className="ib-stat-l">needed a reply</span>
            </div>
          </div>
          <p className="ib-ratio-note muted">{WEEK.label}. A normal week.</p>
        </Reveal>
      </div>

      {/* --------------------------------------------- the layered stage */}
      <div className="container-wide">
        <div className="ib-stage">
          {/* The platform, behind and out of the way. Decorative only — the
              real thing is the next section down. */}
          <div className="ib-behind" aria-hidden="true">
            <div className="ib-behind-rail">
              <span className="ib-behind-brand">KIWI</span>
              {['Overview', 'Register', 'Coordination', 'Comms', 'Invoicing', 'Intake'].map((n) => (
                <span key={n} className="ib-behind-nav">{n}</span>
              ))}
            </div>
            <div className="ib-behind-main">
              <span className="ib-behind-bar" style={{ width: '38%' }} />
              <span className="ib-behind-bar" style={{ width: '62%' }} />
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="ib-behind-row" style={{ '--w': `${94 - (i % 4) * 9}%` }} />
              ))}
            </div>
          </div>

          <Reveal className="ib-front">
            <div className="mb">
              <header className="mb-top">
                <span className="mb-title">Inbox</span>
                <span className="mb-who">Sarah Whitfield · Head of Estates</span>
              </header>

              <div className="mb-split">
                <ul className="mb-list" role="tablist" aria-label="Emails from Kiwi this week">
                  {EMAILS.map((e) => (
                    <li key={e.id}>
                      <button
                        role="tab"
                        aria-selected={e.id === open}
                        className={`mb-item${e.id === open ? ' is-on' : ''}`}
                        onClick={() => setOpen(e.id)}
                      >
                        <span className="mb-item-top">
                          <span className={`mb-dot is-${e.tone}`} aria-hidden="true" />
                          <span className="mb-item-from">{e.from}</span>
                          <span className="mono mb-item-time">{e.day}</span>
                        </span>
                        <span className="mb-item-subject">{e.subject}</span>
                        <span className="mb-item-snip">{e.snippet}</span>
                        <span className={`mb-item-flag${e.needsReply ? ' is-you' : ''}`}>{e.flag}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mb-pane"><Mail mail={mail} /></div>
              </div>
            </div>
          </Reveal>
        </div>

        <p className="ib-stage-note">
          The platform is behind, greyed out on purpose. You open it to export something or look at
          a detail — not to run your week.
        </p>
      </div>

      {/* ------------------------------------------------------- the fan-in */}
      <div className="container">
        <Reveal className="ib-fan-head">
          <h3 className="h3 ib-fan-title">Ten providers in. One thread out.</h3>
          <p className="muted ib-fan-copy">
            Today every specialist on your estate emails your team, and your team holds ten separate
            conversations to keep them moving. With Kiwi, the providers correspond with us. You keep
            one thread, with one desk, about the whole estate.
          </p>
        </Reveal>
        <FanIn />
      </div>
    </section>
  );
}

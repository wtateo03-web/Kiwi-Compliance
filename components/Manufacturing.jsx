import Logo from './Logo';
import Reveal from './Reveal';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner, FruitPile } from './Decor';
import { Lift, Ventilation, PressureVessel, Electrical, Flame, Droplet } from './Icons';

/* Written for the industrial reader specifically: few sites, very high asset
   density, continuous process, and an audit calendar driven as much by
   customers and insurers as by the HSE. The main site stays general. */

const REGIMES = [
  {
    Icon: PressureVessel,
    name: 'Pressure systems',
    reg: 'PSSR 2000',
    body:
      'Steam raising plant, air receivers, accumulators and the process circuits between them. The ' +
      'written scheme of examination is a living document, and keeping it aligned with the plant as ' +
      'it changes is usually the part that slips.',
  },
  {
    Icon: Lift,
    name: 'Lifting equipment',
    reg: 'LOLER 1998',
    body:
      'Goods and passenger lifts, hoists, cranes and the bulk handling that moves product vertically ' +
      'through the process. Six or twelve month intervals depending on the duty, across far more ' +
      'units than most estates carry.',
  },
  {
    Icon: Ventilation,
    name: 'Local exhaust ventilation',
    reg: 'COSHH reg. 9',
    body:
      'Dust and fume extraction on a maximum 14-month cycle. In a milling or powder-handling ' +
      'environment this is not paperwork — it is the control measure the DSEAR assessment relies on.',
  },
  {
    Icon: Electrical,
    name: 'Electrical & hazardous area',
    reg: 'EAWR 1989 · DSEAR',
    body:
      'Rolling fixed-wire programmes across a large installation, thermographic survey of ' +
      'distribution, and inspection of equipment in classified zones where a combustible dust ' +
      'atmosphere can occur.',
  },
  {
    Icon: Flame,
    name: 'Fire & life safety',
    reg: 'RRO 2005',
    body:
      'Detection and suppression across production, storage and silo areas, fire damper testing, and ' +
      'a fire risk assessment that keeps pace with process changes.',
  },
  {
    Icon: Droplet,
    name: 'Water hygiene',
    reg: 'ACoP L8',
    body:
      'Cooling systems, process water and domestic services. Monitoring, sampling and the risk ' +
      'assessment review behind them.',
  },
];

const PRESSURES = [
  {
    n: '01',
    t: 'A lapsed certificate stops the line',
    b:
      'An examination that falls out of date takes the asset out of lawful use. On a continuous ' +
      'process that is not an administrative problem, it is lost output — and the emergency call-out ' +
      'to fix it costs more than a year of coordination.',
  },
  {
    n: '02',
    t: 'The defects are the hard part',
    b:
      'A thorough examination that raises a defect starts a legal clock. Across a dense estate that ' +
      'is hundreds of open actions with individual deadlines, spread across engineering, production ' +
      'and third parties.',
  },
  {
    n: '03',
    t: 'You are audited by more than the HSE',
    b:
      'BRCGS, your retail customers, your engineering insurer and your certification body all ask ' +
      'for the same evidence in different formats and on different weeks. Producing it should not ' +
      'be a project each time.',
  },
  {
    n: '04',
    t: 'Density, not site count',
    b:
      'Four sites with a thousand assets each is a different problem from forty sites with twenty. ' +
      'The volume sits inside the site boundary, which is exactly where a general multi-site tool ' +
      'stops being useful.',
  },
];

export default function Manufacturing() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav is-scrolled">
        <div className="container nav-inner">
          <a href="/" aria-label="Kiwi Compliance — home"><Logo /></a>
          <a className="btn btn-primary" href="#talk">
            Talk to Kiwi <span className="arw" aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero mfg-hero has-fruit">
          <FruitCorner where="hero" />
          <div className="container">
            <Reveal className="hero-head">
              <p className="eyebrow">Manufacturing &amp; industrial</p>
              <h1 className="display">We run compliance on production estates.</h1>
            </Reveal>
            <Reveal className="mfg-lede" delay={60}>
              <p className="lead">
                Statutory compliance on a production estate is dense, continuous and unforgiving of
                gaps. Kiwi keeps every asset on it in date, evidenced and closed &mdash; as a state
                you can show on any date, not a calendar of visits &mdash; without replacing your
                engineering team, your CAFM or your inspection bodies.
              </p>
              <p className="hero-sub muted">
                One flat fee per covered asset. Your specialists&rsquo; work at the rate you already agreed. The first cycle is free.
              </p>
              <div className="btn-row">
                <a className="btn btn-primary" href="#talk">
                  Start with one site <span className="arw" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost" href="/">
                  How Kiwi works <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section sunk">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Why this is different on a production estate</p>
              <h2 className="h2 measure">The inspection is the easy part.</h2>
            </Reveal>
            <Reveal className="mfg-grid">
              <PerchedKiwi where="rule" pose="peck" tilt={0} />
              {PRESSURES.map(({ n, t, b }) => (
                <div key={n} className="mfg-item">
                  <span className="mfg-n mono">{n}</span>
                  <h3 className="h3 mfg-title">{t}</h3>
                  <p className="muted mfg-body">{b}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section has-fruit">
          <FruitCorner where="services" />
          <div className="container">
            <Reveal>
              <p className="eyebrow">What we run</p>
              <h2 className="h2 measure">The regimes that actually run your plant.</h2>
              <p className="lead muted svc-lede">
                Each of these can stay with the specialist you use today. Where your thorough
                examinations come through your engineering insurer&rsquo;s inspection body, that
                arrangement is untouched — we run the process around it.
              </p>
            </Reveal>

            <Reveal className="mfg-regimes">
              {REGIMES.map(({ Icon, name, reg, body }) => (
                <div key={name} className="mfg-regime">
                  <span className="svc-icon"><Icon width="21" height="21" /></span>
                  <h3 className="svc-name">{name}</h3>
                  <p className="mfg-reg mono">{reg}</p>
                  <p className="mfg-regime-body muted">{body}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="section sunk">
          <div className="container">
            <Reveal>
              <p className="eyebrow">Where we would start</p>
              <h2 className="h2 measure">One asset class. One site.</h2>
            </Reveal>
            <Reveal className="mfg-start" delay={70}>
              <p className="muted">
                We do not think a first engagement should need a procurement process. Pick the regime
                that causes you the most administration — for most production estates it is LOLER or
                LEV — at a single site, and let us run it end to end for one cycle.
              </p>
              <ol className="mfg-steps">
                <li>
                  <span className="mfg-step-n mono">1</span>
                  Send us whatever you have: the register, last year&rsquo;s certificates, the
                  contractor names. It does not need tidying first.
                </li>
                <li>
                  <span className="mfg-step-n mono">2</span>
                  We enrol it, tell you what we could not account for, and agree the programme with
                  you before contacting anybody.
                </li>
                <li>
                  <span className="mfg-step-n mono">3</span>
                  We keep it in date, collect the evidence and drive every defect raised to closure.
                </li>
                <li>
                  <span className="mfg-step-n mono">4</span>
                  You decide whether it was worth extending. Nothing was signed, and the first cycle cost you nothing beyond the examinations themselves.
                </li>
              </ol>
              <p className="mfg-candid">
                We are early, and choosing who we work with deliberately. You would be talking to the
                founder, not an account team.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="section cta dark" id="talk">
          <FruitPile />
          <div className="container">
            <Reveal className="cta-inner">
              <h2 className="h2 cta-head">Show us one site.</h2>
              <p className="lead muted cta-copy">
                Twenty minutes, one asset class, and an honest answer about whether we can take work
                off your team.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-primary"
                  href="mailto:william@kiwicompliance.com?subject=Manufacturing%20site%20walkthrough"
                >
                  william@kiwicompliance.com <span className="arw" aria-hidden="true">→</span>
                </a>
                <a className="btn btn-ghost" href="tel:+447452907011">+44 (0)7452 907011</a>
              </div>
              <p className="cta-small">
                <PerchedKiwi where="cta" pose="lookup" flip tilt={0} />
                William Tate, Founder &middot; +44 (0)7452 907011
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer dark">
        <div className="container">
          <div className="footer-base">
            <p>© 2026 Kiwi Compliance</p>
            <p><a href="/">kiwicompliance.com</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

import Reveal from './Reveal';
import { KiwiSlice } from './KiwiMarks';
import { PerchedKiwi } from './KiwiMarks';
import { FruitCorner } from './Decor';
import { Lift, Ventilation, PressureVessel, Electrical, Flame, Droplet } from './Icons';

const SERVICES = [
  {
    Icon: Lift,
    name: 'Lifting equipment',
    desc: 'Thorough examination under LOLER, at the interval the equipment calls for.',
    reg: 'LOLER 1998',
  },
  {
    Icon: Ventilation,
    name: 'Local exhaust ventilation',
    desc: 'Thorough examination and testing at intervals of no more than 14 months.',
    reg: 'COSHH reg. 9',
  },
  {
    Icon: PressureVessel,
    name: 'Pressure systems',
    desc: 'Examination against the written scheme, and the scheme itself kept live.',
    reg: 'PSSR 2000',
  },
  {
    Icon: Electrical,
    name: 'Electrical',
    desc: 'Periodic inspection and testing, including rolling fixed-wire programmes and EICR remedials.',
    reg: 'EAWR 1989',
  },
  {
    Icon: Flame,
    name: 'Fire & life safety',
    desc: 'Alarm and suppression servicing, damper testing and fire risk assessment review.',
    reg: 'RRO 2005',
  },
  {
    Icon: Droplet,
    name: 'Water hygiene',
    desc: 'Monitoring, sampling and risk assessment review across the water system.',
    reg: 'ACoP L8',
  },
];

export default function Services() {
  return (
    <section className="section sunk has-fruit" id="services">
      <FruitCorner where="services" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="h2 measure">One operator across every discipline.</h2>
          <p className="lead muted svc-lede">
            Every discipline below can run through the provider you already use, or one we source for
            you. Either way there is one number to call and one record to look at.
          </p>
        </Reveal>

        <Reveal className="svc-list">
          <PerchedKiwi where="rule" pose="walk" tilt={0} />
          {SERVICES.map(({ Icon, name, desc, reg }) => (
            <div key={name} className="svc-row">
              <span className="svc-icon"><Icon width="21" height="21" /></span>
              <h3 className="svc-name">{name}</h3>
              <p className="svc-desc">{desc}</p>
              <p className="svc-cover"><span className="svc-reg mono">{reg}</span>Your provider <span>or Kiwi-sourced</span></p>
            </div>
          ))}
          <div className="svc-row svc-row-more">
            <span className="svc-icon svc-icon-kiwi"><KiwiSlice tone="simple" /></span>
            <h3 className="svc-name">And other physical compliance requirements.</h3>
            <p className="svc-desc">Tell us what you look after and we&rsquo;ll tell you what we can cover.</p>
            <p className="svc-cover" />
          </div>
        </Reveal>

        <Reveal className="svc-note muted">
          <span className="svc-note-strong">
            Where your thorough examinations come through your engineering insurer&rsquo;s inspection
            body, that arrangement stays exactly where it is.
          </span>{' '}
          We run the process around it. Requirements vary by site, asset and use, so Kiwi establishes
          the programme your estate actually needs rather than applying a fixed annual cycle to
          everything.
        </Reveal>
      </div>
    </section>
  );
}

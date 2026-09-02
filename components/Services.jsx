import Reveal from './Reveal';
import { Lift, Ventilation, PressureVessel, Electrical, Flame, Droplet } from './Icons';

const SERVICES = [
  { Icon: Lift,           name: 'Lifting equipment',        desc: 'LOLER examinations and associated requirements.' },
  { Icon: Ventilation,    name: 'Local exhaust ventilation', desc: 'LEV examination and testing.' },
  { Icon: PressureVessel, name: 'Pressure systems',         desc: 'PSSR examination and related records.' },
  { Icon: Electrical,     name: 'Electrical',               desc: 'Periodic inspection and testing.' },
  { Icon: Flame,          name: 'Fire & life safety',       desc: 'Testing, assessment and ongoing compliance.' },
  { Icon: Droplet,        name: 'Water hygiene',            desc: 'Scheduled water-system compliance activity.' },
];

export default function Services() {
  return (
    <section className="section sunk" id="services">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Services</p>
          <h2 className="h2 measure">One place for physical compliance.</h2>
        </Reveal>

        <Reveal className="svc-list">
          {SERVICES.map(({ Icon, name, desc }) => (
            <div key={name} className="svc-row">
              <span className="svc-icon"><Icon width="21" height="21" /></span>
              <h3 className="svc-name">{name}</h3>
              <p className="svc-desc">{desc}</p>
            </div>
          ))}
          <div className="svc-row svc-row-more">
            <span className="svc-icon" aria-hidden="true" />
            <h3 className="svc-name">And other physical compliance requirements.</h3>
            <p className="svc-desc">Tell us what you look after and we&rsquo;ll tell you what we can cover.</p>
          </div>
        </Reveal>

        <Reveal className="svc-note muted">
          Requirements vary by site, asset and use. Kiwi helps establish the appropriate programme for
          your estate rather than applying a fixed annual cycle to everything.
        </Reveal>
      </div>
    </section>
  );
}

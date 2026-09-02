import Reveal from './Reveal';

export default function FinalCta() {
  return (
    <section className="section cta dark" id="contact">
      <div className="container">
        <Reveal className="cta-inner">
          <h2 className="h2 cta-head">Show us the mess.</h2>
          <p className="lead muted cta-copy">
            Send us your existing spreadsheets, certificates, contractor lists or asset records. We&rsquo;ll
            help turn them into one managed compliance programme.
          </p>
          <div className="btn-row">
            <a className="btn btn-primary" href="mailto:hello@kiwicompliance.com?subject=Talk%20to%20Kiwi">
              Talk to Kiwi <span className="arw" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="mailto:hello@kiwicompliance.com">hello@kiwicompliance.com</a>
          </div>
          <p className="cta-small">No perfect asset register required.</p>
        </Reveal>
      </div>
    </section>
  );
}

import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms — Kiwi Compliance',
  description: 'Terms covering use of the Kiwi Compliance website.',
  alternates: { canonical: '/terms/' },
};

export default function Terms() {
  return (
    <LegalPage title="Terms">
      <p>
        These terms cover use of this website. Terms covering our services form part of the agreement we
        put in place with each client, and are provided separately.
      </p>

      <h2>About the information on this site</h2>
      <p>
        The content here describes what Kiwi Compliance does. It is general information, not advice on
        your specific obligations, and it does not form a contract or an offer.
      </p>
      <p>
        Inspection and examination requirements vary by site, asset, use and legislation. Nothing on this
        site should be relied on as a statement of what your organisation is legally required to do. We
        establish that with you directly.
      </p>

      <h2>Interface illustrations</h2>
      <p>
        The platform shown on the home page is an illustration of how information is presented. The
        sites, assets, providers and dates in it are examples, not real customer records.
      </p>

      <h2>Contact</h2>
      <p>
        Email <a href="mailto:hello@kiwicompliance.com">hello@kiwicompliance.com</a>.
      </p>
    </LegalPage>
  );
}

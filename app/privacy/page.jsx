import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy — Kiwi Compliance',
  description: 'How Kiwi Compliance handles personal data on this website.',
  alternates: { canonical: '/privacy/' },
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy">
      <p>
        This page describes how this website handles personal data. A full privacy policy covering our
        services is being prepared; until it is published, please contact us for any detail you need.
      </p>

      <h2>This website</h2>
      <p>
        This site sets no cookies and runs no analytics or tracking. We do not build a profile of
        visitors and we do not pass visitor data to advertisers.
      </p>
      <p>
        The site is hosted on GitHub Pages. As with any web host, GitHub processes the network requests
        needed to serve the pages, which includes visitors&rsquo; IP addresses.
      </p>
      <p>
        Typefaces are loaded from Google Fonts, which means Google receives the IP address of your
        browser when a page loads. If you would prefer this not to happen, we can serve the fonts from
        our own domain instead — tell us and we will.
      </p>

      <h2>If you contact us</h2>
      <p>
        When you email us, we keep that correspondence and any details you include so that we can
        respond and, if we go on to work together, provide the service. We do not add you to a marketing
        list without asking.
      </p>

      <h2>Your rights</h2>
      <p>
        Under UK data protection law you may ask what personal data we hold about you, ask for it to be
        corrected, or ask for it to be deleted. Write to{' '}
        <a href="mailto:william@kiwicompliance.com">william@kiwicompliance.com</a> and we will respond.
      </p>
    </LegalPage>
  );
}

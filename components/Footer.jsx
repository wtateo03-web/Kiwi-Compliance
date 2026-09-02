import Logo from './Logo';

const COLUMNS = [
  {
    heading: 'Company',
    links: [
      { href: '#how', label: 'How it works' },
      { href: '#platform', label: 'Platform' },
      { href: '#services', label: 'Services' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Access',
    links: [
      { href: '#contact', label: 'Client login' },
      { href: '/privacy/', label: 'Privacy' },
      { href: '/terms/', label: 'Terms' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" aria-label="Kiwi Compliance — home">
              <Logo />
            </a>
            <p className="footer-tag">Physical compliance, managed.</p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="footer-heading">{col.heading}</h2>
              <ul className="footer-links">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Add "Ltd", the registered company number and registered office here
            once incorporated — not before. */}
        <div className="footer-base">
          <p>© {new Date().getFullYear()} Kiwi Compliance</p>
          <p>
            <a href="mailto:hello@kiwicompliance.com">hello@kiwicompliance.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

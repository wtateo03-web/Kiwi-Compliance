import Logo from './Logo';

export default function LegalPage({ title, children }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="nav is-scrolled">
        <div className="container nav-inner">
          <a href="/" aria-label="Kiwi Compliance — home"><Logo /></a>
          <a className="btn btn-ghost" href="/">Back to site</a>
        </div>
      </header>

      <main id="main" className="legal">
        <div className="container legal-inner">
          <h1 className="h2 legal-title">{title}</h1>
          {children}
          <a className="link-arrow legal-back" href="/">
            <span aria-hidden="true">←</span> Back to Kiwi Compliance
          </a>
        </div>
      </main>

      <footer className="footer dark legal-footer">
        <div className="container">
          <div className="footer-base">
            <p>© 2026 Kiwi Compliance</p>
            <p><a href="mailto:william@kiwicompliance.com">william@kiwicompliance.com</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

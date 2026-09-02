'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#platform', label: 'Platform' },
  { href: '#services', label: 'Services' },
  { href: '#commercial', label: 'Pricing' },
  { href: '#about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 940 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" aria-label="Kiwi Compliance — home">
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-quiet" href="#contact">
            Client login
          </a>
          <a className="btn btn-primary" href="#contact">
            Talk to Kiwi <span className="arw" aria-hidden="true">→</span>
          </a>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile" id="nav-mobile" onClick={(e) => e.target.closest('a') && setOpen(false)}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href="#contact">Client login</a>
          <a className="btn btn-primary" href="#contact">
            Talk to Kiwi <span className="arw" aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </header>
  );
}

import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kiwicompliance.com'),
  title: 'Kiwi Compliance — Managed compliance coordination',
  description:
    'Kiwi takes care of the chasing behind statutory compliance — organising your records, arranging specialist inspections, tracking completion and keeping the evidence current. Keep your existing team, systems and contractors.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Kiwi Compliance',
    title: 'Kiwi Compliance — Less compliance admin. More control.',
    description:
      'You stay in control. Kiwi keeps the work moving — booking inspections, chasing providers and keeping the evidence current, around the systems and contractors you already have.',
    url: '/',
    locale: 'en_GB',
  },
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  themeColor: '#F6F7F2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

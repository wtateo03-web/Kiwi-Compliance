import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kiwicompliance.com'),
  title: 'Kiwi Compliance — We keep your estate in date',
  description:
    'Managed physical compliance. Every asset that must be examined, tested or certified — kept in date, evidenced and closed, continuously, with the specialists you already use. One fee per covered asset.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Kiwi Compliance',
    title: 'Kiwi Compliance — We keep your estate in date.',
    description:
      'Your contractors can each prove their work was done. None of them can prove your estate is complete. Kiwi keeps every asset in date, evidenced and closed, and can.',
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

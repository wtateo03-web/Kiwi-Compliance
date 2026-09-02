import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kiwicompliance.com'),
  title: 'Kiwi Compliance — Physical compliance, managed',
  description:
    'Kiwi takes your spreadsheets, certificates, contractors and inspection schedules and brings them into one managed system. We arrange the work, track what has been completed and keep the record current.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Kiwi Compliance',
    title: 'Kiwi Compliance — Compliance, run properly.',
    description:
      'One schedule. One record. One accountable partner. Kiwi operates physical compliance for organisations with buildings and equipment to look after.',
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

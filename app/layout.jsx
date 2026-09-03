import './globals.css';

export const metadata = {
  metadataBase: new URL('https://kiwicompliance.com'),
  title: 'Kiwi Compliance — We run your physical compliance',
  description:
    'Managed physical compliance. Kiwi runs recurring statutory compliance across your estate — from what falls due, through inspection and evidence, to every action closed. Using the specialists, systems and rates you already have.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Kiwi Compliance',
    title: 'Kiwi Compliance — We run your physical compliance.',
    description:
      'Software tells you what is due. Kiwi gets it done — the independent specialist signs the examination, and we run everything around it.',
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

import Manufacturing from '@/components/Manufacturing';

export const metadata = {
  title: 'Manufacturing & industrial — Kiwi Compliance',
  description:
    'Managed compliance coordination for production estates. LOLER, PSSR, LEV, electrical and DSEAR, fire and water — booked, chased, evidenced and tracked to closure, around the inspection bodies and systems you already use.',
  alternates: { canonical: '/manufacturing/' },
  openGraph: {
    type: 'website',
    siteName: 'Kiwi Compliance',
    title: 'Thousands of assets. Four sites. One record.',
    description:
      'Statutory compliance coordination for UK production estates, without replacing your engineering team, your CAFM or your inspection bodies.',
    url: '/manufacturing/',
    locale: 'en_GB',
  },
};

export default function Page() {
  return <Manufacturing />;
}

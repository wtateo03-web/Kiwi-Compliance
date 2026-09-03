import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Reassurance from '@/components/Reassurance';
import MessToOrder from '@/components/MessToOrder';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfter from '@/components/BeforeAfter';
import Accountability from '@/components/Accountability';
import InboxLayer from '@/components/InboxLayer';
import Platform from '@/components/Platform';
import OperatingModel from '@/components/OperatingModel';
import Technology from '@/components/Technology';
import Services from '@/components/Services';
import MultiSite from '@/components/MultiSite';
import HowPaid from '@/components/HowPaid';
import Pilot from '@/components/Pilot';
import About from '@/components/About';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Reassurance />
        <MessToOrder />
        <HowItWorks />
        <BeforeAfter />
        <Accountability />
        <InboxLayer />
        <Platform />
        <OperatingModel />
        <Technology />
        <Services />
        <MultiSite />
        <HowPaid />
        <About />
        <Pilot />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

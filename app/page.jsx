import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import MessToOrder from '@/components/MessToOrder';
import HowItWorks from '@/components/HowItWorks';
import BeforeAfter from '@/components/BeforeAfter';
import Platform from '@/components/Platform';
import OperatingModel from '@/components/OperatingModel';
import Technology from '@/components/Technology';
import Services from '@/components/Services';
import MultiSite from '@/components/MultiSite';
import Trust from '@/components/Trust';
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
        <MessToOrder />
        <HowItWorks />
        <BeforeAfter />
        <Platform />
        <OperatingModel />
        <Technology />
        <Services />
        <MultiSite />
        <Trust />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

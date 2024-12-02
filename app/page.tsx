import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import PricesSection from './components/PricesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CallButton from './components/CallButton';

export default function Home() {
  return (
<main className="pt-24">
      <Navbar />
      <LandingSection />
      <PricesSection />
      <ContactSection />
      <Footer />
      <CallButton />
   
</main>
  );
}
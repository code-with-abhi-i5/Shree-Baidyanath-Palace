import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import Statistics from './components/Statistics';
import Testimonials from './components/Testimonials';
import BookingCTA from './components/BookingCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins once at app level
gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  // Ensure ScrollTrigger recalculates positions after images load
  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', handleLoad);

    // Also refresh after a short delay for dynamic content
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Facilities />
        <Gallery />
        <Amenities />
        <Statistics />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

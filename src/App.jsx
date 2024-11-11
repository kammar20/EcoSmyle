import { useRef } from 'react';
import BenefitSection from './components/BenefitSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MakingSection from './components/MakingSection';
import MediaCoverage from './components/MediaCoverage';
import Navbar from './components/Navbar';
import ProductSection from './components/ProductSection';
import TestimonialSection from './components/TestimonialSection';

export default function App() {
  const heroRef = useRef(null);
  const benefitRef = useRef(null);
  const makingRef = useRef(null);
  const productRef = useRef(null);
  const testRef = useRef(null);
  const faqRef = useRef(null);

  function scrollTo(ref) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className="max-w-[1600px] m-auto">
        <Navbar
          heroRef={heroRef}
          benefitRef={benefitRef}
          makingRef={makingRef}
          productRef={productRef}
          testRef={testRef}
          faqRef={faqRef}
          scrollTo={scrollTo}
        />
        <div ref={heroRef}>
          <Hero />
        </div>
        <MediaCoverage />
        <div ref={benefitRef}>
          <BenefitSection />
        </div>
        <div ref={makingRef}>
          <MakingSection />
        </div>
        <div ref={productRef}>
          <ProductSection />
        </div>
        <div ref={testRef}>
          <TestimonialSection />
        </div>
        <div ref={faqRef}>
          <FaqSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

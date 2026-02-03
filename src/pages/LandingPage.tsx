import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import GameStateSection from '../components/GameStateSection';
import MoveHistorySection from '../components/MoveHistorySection';
import PredictionSection from '../components/PredictionSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <GameStateSection />
      <MoveHistorySection />
      <PredictionSection />
      <Footer />
    </div>
  );
}

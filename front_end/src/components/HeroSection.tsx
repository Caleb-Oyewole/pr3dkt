import { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Sparkles, TrendingUp, Shield } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes after mount
    const timer = setTimeout(() => {
      if (heroRef.current) {
        heroRef.current.classList.add('animate-in');
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/rift-background.dim_1920x1080.png"
          alt="Summoner's Rift"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-lol-gold/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-lol-blue/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-lol-gold" />
            <span className="text-sm font-medium">AI-Powered Draft Intelligence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Master Your{' '}
            <span className="bg-gradient-to-r from-lol-gold via-lol-blue to-lol-gold bg-clip-text text-transparent">
              Draft Phase
            </span>
            <br />
            Win Before the Game Starts
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Leverage advanced AI predictions to dominate champion select. Get real-time
            recommendations, counter-pick suggestions, and team composition analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-lol-gold to-lol-blue hover:opacity-90 text-black font-semibold px-8 py-6 text-lg shadow-2xl shadow-lol-gold/30 group transition-all hover:scale-105"
            >
              Start Drafting
              <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg backdrop-blur-sm transition-all hover:scale-105"
            >
              Watch Demo
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            {[
              { icon: Shield, text: 'Real-time Analysis' },
              { icon: TrendingUp, text: '95% Accuracy' },
              { icon: Sparkles, text: 'AI-Powered' },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-lol-gold/50 transition-all hover:scale-105"
              >
                <feature.icon className="w-4 h-4 text-lol-gold" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1500ms' }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 animate-bounce-slow">
          <div className="w-1 h-2 bg-lol-gold rounded-full" />
        </div>
      </div>
    </section>
  );
}

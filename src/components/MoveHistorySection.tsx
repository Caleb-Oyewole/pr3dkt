import { useRef, useEffect, useState } from 'react';
import { UserPlus, Sparkles, Target, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Connect Your Account',
    description: 'Link your League of Legends account to get personalized recommendations.',
    number: '01',
  },
  {
    icon: Sparkles,
    title: 'AI Analyzes Draft',
    description: 'Our AI processes picks, bans, and team compositions in real-time.',
    number: '02',
  },
  {
    icon: Target,
    title: 'Get Predictions',
    description: 'Receive instant champion suggestions with win rate probabilities.',
    number: '03',
  },
  {
    icon: Trophy,
    title: 'Dominate Games',
    description: 'Make informed decisions and increase your win rate significantly.',
    number: '04',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/ai-brain-pattern.dim_400x300.png"
          alt="AI Pattern"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-sm font-medium text-lol-blue">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Simple, Fast &{' '}
            <span className="bg-gradient-to-r from-lol-gold to-lol-blue bg-clip-text text-transparent">
              Effortless
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get started in minutes and transform your drafting strategy with AI-powered insights.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-lol-gold/50 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="glass-card p-6 sm:p-8 text-center relative z-10 border border-white/10 hover:border-lol-gold/50 transition-all duration-300 group">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-lol-gold to-lol-blue flex items-center justify-center font-bold text-black shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative inline-block mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lol-gold/20 to-lol-blue/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-lol-gold" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-lol-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

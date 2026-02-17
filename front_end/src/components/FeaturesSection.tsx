import { useRef, useEffect, useState } from 'react';
import { Lightbulb, Target, TrendingUp, Zap, Lock, Users } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'AI-Powered Predictions',
    description: 'Advanced machine learning algorithms analyze millions of matches to predict optimal picks.',
    gradient: 'from-lol-gold to-yellow-600',
  },
  {
    icon: Target,
    title: 'Counter-Pick Suggestions',
    description: 'Get instant recommendations for champions that counter enemy selections.',
    gradient: 'from-lol-blue to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Win Rate Analysis',
    description: 'Real-time statistics showing champion synergies and matchup win rates.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get predictions in milliseconds, never miss your turn in champion select.',
    gradient: 'from-lol-gold to-orange-600',
  },
  {
    icon: Lock,
    title: 'Team Composition',
    description: 'Analyze team balance and identify missing roles or damage types.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Users,
    title: 'Meta Insights',
    description: 'Stay updated with current meta trends and champion tier rankings.',
    gradient: 'from-lol-blue to-cyan-600',
  },
];

export default function FeaturesSection() {
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
    <section id="features" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-lol-dark-blue/5 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-sm font-medium text-lol-gold">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why Choose{' '}
            <span className="bg-linear-to-r from-lol-gold to-lol-blue bg-clip-text text-transparent">
              LoL Draft AI
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Gain the competitive edge with cutting-edge AI technology designed for League of Legends players.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="glass-card p-6 sm:p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} p-3 shadow-lg`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-lol-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-lol-gold/5 to-lol-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

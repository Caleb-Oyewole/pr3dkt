import { useState, useRef, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { Badge } from './ui/badge';

interface Champion {
  id: number;
  name: string;
  role: string;
  image: string;
}

const mockChampions: Champion[] = [
  { id: 1, name: 'Ahri', role: 'Mid', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
  { id: 2, name: 'Lee Sin', role: 'Jungle', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
  { id: 3, name: 'Thresh', role: 'Support', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
  { id: 4, name: 'Jinx', role: 'ADC', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
  { id: 5, name: 'Darius', role: 'Top', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
];

const mockBans: Champion[] = [
  { id: 6, name: 'Yasuo', role: 'Mid', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
  { id: 7, name: 'Zed', role: 'Mid', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
  { id: 8, name: 'Vayne', role: 'ADC', image: '/assets/generated/champion-placeholder-transparent.dim_128x128.png' },
];

export default function GameStateSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTeam, setActiveTeam] = useState<'blue' | 'red'>('blue');

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
    <section id="draft-assistant" ref={sectionRef} className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-lol-dark-blue/10 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <span className="text-sm font-medium text-lol-gold">Live Draft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Real-Time{' '}
            <span className="bg-gradient-to-r from-lol-gold to-lol-blue bg-clip-text text-transparent">
              Draft Analysis
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Watch as our AI analyzes every pick and ban, providing instant insights and recommendations.
          </p>
        </div>

        {/* Draft Interface */}
        <div className={`max-w-6xl mx-auto transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
          <div className="glass-card p-6 sm:p-8 lg:p-12 border border-white/10">
            {/* Phase Indicator */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="border-lol-gold text-lol-gold px-4 py-2">
                Pick Phase
              </Badge>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lol-gold animate-pulse" />
                <span className="text-sm text-foreground/70">Live</span>
              </div>
            </div>

            {/* Team Selector */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTeam('blue')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTeam === 'blue'
                    ? 'bg-lol-blue text-white shadow-lg shadow-lol-blue/30 scale-105'
                    : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                }`}
              >
                Blue Team
              </button>
              <button
                onClick={() => setActiveTeam('red')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTeam === 'red'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-white/5 text-foreground/70 hover:bg-white/10'
                }`}
              >
                Red Team
              </button>
            </div>

            {/* Bans Section */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Banned Champions
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {mockBans.map((champion, index) => (
                  <div
                    key={champion.id}
                    className={`relative group transition-all duration-400 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden border-2 border-red-500/50 relative">
                      <img
                        src={champion.image}
                        alt={champion.name}
                        className="w-full h-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-red-500/20" />
                      <X className="absolute inset-0 m-auto w-8 h-8 text-red-500" />
                    </div>
                    <p className="text-xs text-center mt-2 text-foreground/70">{champion.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Picks Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                {activeTeam === 'blue' ? 'Blue' : 'Red'} Team Picks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {mockChampions.map((champion, index) => (
                  <div
                    key={champion.id}
                    className={`relative group cursor-pointer transition-all duration-400 hover:scale-105 hover:-translate-y-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 300}ms` }}
                  >
                    <div className={`aspect-square rounded-xl overflow-hidden border-2 ${
                      activeTeam === 'blue' ? 'border-lol-blue' : 'border-red-500'
                    } relative shadow-lg`}>
                      <img
                        src={champion.image}
                        alt={champion.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${
                        activeTeam === 'blue' ? 'from-lol-blue/50' : 'from-red-500/50'
                      } to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <div className="mt-2 text-center">
                      <p className="font-semibold text-sm">{champion.name}</p>
                      <p className="text-xs text-foreground/60">{champion.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

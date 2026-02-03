import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Draft Assistant', href: '#draft-assistant' },
    { label: 'Predictions', href: '#predictions' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform">
            <div className="relative">
              <Zap className="w-8 h-8 text-lol-gold" fill="currentColor" />
              <div className="absolute inset-0 blur-lg bg-lol-gold/30" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-lol-gold via-lol-blue to-lol-gold bg-clip-text text-transparent">
              LoL Draft AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
                className="text-sm font-medium text-foreground/80 hover:text-lol-gold transition-colors relative group animate-fade-in-up"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lol-gold to-lol-blue group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block animate-fade-in-scale" style={{ animationDelay: '500ms' }}>
            <Button className="bg-gradient-to-r from-lol-gold to-lol-blue hover:opacity-90 text-black font-semibold px-6 shadow-lg shadow-lol-gold/20 transition-all hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground transition-transform hover:scale-110"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-lol-gold transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-gradient-to-r from-lol-gold to-lol-blue hover:opacity-90 text-black font-semibold w-full">
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}

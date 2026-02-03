import { Heart, Zap } from 'lucide-react';
import { SiGithub, SiX, SiDiscord } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: SiGithub, href: '#', label: 'GitHub' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
    { icon: SiDiscord, href: '#', label: 'Discord' },
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Pricing', href: '#' },
        { label: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 scroll-animate">
              <div className="relative">
                <Zap className="w-8 h-8 text-lol-gold" fill="currentColor" />
                <div className="absolute inset-0 blur-lg bg-lol-gold/30" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-lol-gold via-lol-blue to-lol-gold bg-clip-text text-transparent">
                LoL Draft AI
              </span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-sm">
              Master your draft phase with AI-powered predictions and real-time analysis. Win before the game starts.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="scroll-animate">
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-lol-gold transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/60 flex items-center gap-2">
              © {currentYear}. Built with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-current inline" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lol-gold hover:underline"
              >
                caffeine.ai
              </a>
            </p>
            <p className="text-xs text-foreground/50">
              LoL Draft AI is not endorsed by Riot Games and does not reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

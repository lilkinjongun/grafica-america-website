import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface NavbarProps {
  companyName: string;
}

export default function Navbar({ companyName }: NavbarProps) {
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
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/#sobre' },
    { label: 'Portfólio', href: '/#portfolio' },
    { label: 'Serviços', href: '/#servicos' },
    { label: 'AR/VR', href: '/ar-vr' },
    { label: 'Contato', href: '/#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <a className="text-xl md:text-2xl font-bold">
              <span className={isScrolled ? 'text-primary' : 'text-white'}>
                {companyName}
              </span>
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a
                  className={`font-medium transition-colors hover:text-ring ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/#contato">
              <Button
                variant={isScrolled ? 'default' : 'outline'}
                className={!isScrolled ? 'border-white text-white hover:bg-white/10' : ''}
                data-testid="button-cta"
              >
                Solicitar Orçamento
              </Button>
            </Link>
          </div>

          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border" data-testid="mobile-menu">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <a
                  className="block py-2 text-foreground hover:text-ring"
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/#contato">
              <Button className="w-full" data-testid="mobile-button-cta">
                Solicitar Orçamento
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

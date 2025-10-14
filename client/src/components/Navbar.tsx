import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@assets/Sem Título-1_1760450880157.png';

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMobileMenuOpen(false);
      }
    }
  };

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
          <a href="/" className="flex items-center" data-testid="link-home">
            <img 
              src={logoImage} 
              alt={companyName}
              className={`h-16 md:h-20 w-auto transition-all ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a href="/#contato" onClick={(e) => handleNavClick(e, '/#contato')}>
              <Button
                variant={isScrolled ? 'default' : 'default'}
                className={!isScrolled ? 'bg-white text-primary hover:bg-white/90' : ''}
                data-testid="button-cta"
              >
                Solicitar Orçamento
              </Button>
            </a>
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
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-2 text-foreground hover:text-primary"
                data-testid={`mobile-link-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <a href="/#contato" onClick={(e) => handleNavClick(e, '/#contato')} className="block">
              <Button className="w-full" data-testid="mobile-button-cta">
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

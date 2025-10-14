import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logoImage from '@assets/Sem Título-1_1760450880157.png';

interface FooterProps {
  companyName: string;
}

export default function Footer({ companyName }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12" data-testid="footer">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <img 
              src={logoImage} 
              alt={companyName}
              className="h-20 md:h-24 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm">
              Tradição e qualidade em serviços gráficos desde 1995. 
              Transformando suas ideias em impressões perfeitas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Sobre Nós</a></li>
              <li><a href="#portfolio" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Portfólio</a></li>
              <li><a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Serviços</a></li>
              <li><a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-md bg-primary-foreground/10 flex items-center justify-center hover-elevate active-elevate-2"
                aria-label="LinkedIn"
                data-testid="link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} {companyName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

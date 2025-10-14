import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ARExperienceCard from '@/components/ARExperienceCard';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Smartphone, Eye, Layers, Sparkles } from 'lucide-react';

import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import realEstateImage from '@assets/stock_images/real_estate_augmente_5ba68dbf.jpg';
import businessCardImage from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import catalogImage from '@assets/generated_images/product_packaging_samples_663bc71a.png';
import tourismImage from '@assets/stock_images/tourism_map_augmente_2c91bd53.jpg';

export default function ARVRPage() {
  const experiences = [
    {
      title: 'Imóveis em Realidade Aumentada',
      description: 'Transforme plantas baixas e folders imobiliários em tours virtuais 3D. Clientes podem visualizar o imóvel completo antes mesmo de visitar.',
      image: realEstateImage,
      category: 'Real Estate',
      features: [
        'Tour virtual 3D do imóvel ao escanear a planta',
        'Visualização de diferentes acabamentos',
        'Informações interativas sobre cada ambiente',
        'Galeria de fotos 360° integrada'
      ],
      demoUrl: '#demo-real-estate'
    },
    {
      title: 'Cartões de Visita Interativos',
      description: 'Cartões que ganham vida ao serem escaneados, apresentando vídeos, portfólios e links diretos para contato.',
      image: businessCardImage,
      category: 'Marketing',
      features: [
        'Vídeo de apresentação pessoal ou da empresa',
        'Links diretos para redes sociais e WhatsApp',
        'Portfólio de trabalhos em 3D',
        'Formulário de contato integrado'
      ],
      demoUrl: '#demo-business-card'
    },
    {
      title: 'Catálogos de Produtos 3D',
      description: 'Catálogos impressos que revelam produtos em 3D com texturas personalizáveis e informações detalhadas.',
      image: catalogImage,
      category: 'E-commerce',
      features: [
        'Visualização 3D de produtos ao escanear',
        'Troca de cores e texturas em tempo real',
        'Fichas técnicas e vídeos demonstrativos',
        'Botão "Comprar Agora" integrado'
      ],
      demoUrl: '#demo-catalog'
    },
    {
      title: 'Mapas Turísticos Aumentados',
      description: 'Mapas que ganham vida com informações interativas, vídeos de pontos turísticos e rotas personalizadas.',
      image: tourismImage,
      category: 'Turismo',
      features: [
        'Pontos de interesse com vídeos e fotos',
        'Informações históricas e culturais',
        'Rotas sugeridas e navegação AR',
        'Promoções de estabelecimentos locais'
      ],
      demoUrl: '#demo-tourism'
    }
  ];

  const benefits = [
    {
      icon: Smartphone,
      title: 'Fácil de Usar',
      description: 'Não precisa de aplicativo. Funciona direto no navegador do celular.'
    },
    {
      icon: Eye,
      title: 'Engajamento Elevado',
      description: 'Aumente o tempo de interação com seu material em até 300%.'
    },
    {
      icon: Layers,
      title: 'Versatilidade',
      description: 'Funciona em qualquer material impresso: cartões, folders, embalagens.'
    },
    {
      icon: Sparkles,
      title: 'Inovação',
      description: 'Diferencie-se da concorrência com tecnologia de ponta.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar companyName="Gráfica América" />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[70vh] flex items-center overflow-hidden" data-testid="ar-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="AR/VR Technology" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Realidade Aumentada e Virtual
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transforme seus impressos em experiências interativas que surpreendem e engajam
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#experiences">
                <button className="px-8 py-3 bg-white text-primary font-semibold rounded-md hover-elevate active-elevate-2">
                  Ver Exemplos
                </button>
              </a>
              <a href="#lead-form">
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md bg-white/10 backdrop-blur-sm hover-elevate active-elevate-2">
                  Solicitar Demonstração
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is AR/VR Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="ar-info">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O que é AR/VR em Impressos?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Realidade Aumentada (AR) e Realidade Virtual (VR) aplicadas a materiais impressos 
              criam uma ponte entre o físico e o digital, permitindo que seus clientes tenham 
              experiências imersivas ao escanear seus materiais com o celular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-6 rounded-md bg-background hover-elevate active-elevate-2"
                data-testid={`benefit-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-md bg-ring/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-ring" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="py-20 md:py-24" data-testid="ar-experiences">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Exemplos de Experiências
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça algumas das possibilidades que a tecnologia AR/VR pode trazer para seus materiais impressos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <ARExperienceCard key={index} {...experience} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-20 md:py-24 bg-muted/30" data-testid="ar-lead-section">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Pronto para Inovar?
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato para criar uma experiência personalizada
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>

      <Footer companyName="Gráfica América" />
    </div>
  );
}

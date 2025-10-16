import { useState } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ARExperienceCard from '@/components/ARExperienceCard';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Smartphone, Eye, Layers, Sparkles, ArrowRight } from 'lucide-react';

import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import realEstateImage from '@assets/stock_images/real_estate_augmente_5ba68dbf.jpg';
import businessCardImage from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import catalogImage from '@assets/generated_images/product_packaging_samples_663bc71a.png';
import tourismImage from '@assets/stock_images/tourism_map_augmente_2c91bd53.jpg';
import packagingImage from '@assets/generated_images/product_packaging_samples_663bc71a.png';
import lotrImage from '@assets/stock_images/lord_of_the_rings_mo_4cbeeeb1.jpg';

export default function ARVRPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
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
      demoUrl: '/ar-vr/imoveis'
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
      demoUrl: '/ar-vr/cartao-visita'
    },
    {
      title: 'AR para Produtos Impressos: Vídeo & 3D',
      description: 'Transforme imagens estáticas em experiências multimídia com trailers, vídeos e objetos 3D interativos.',
      image: catalogImage,
      category: 'Produtos Impressos',
      features: [
        'Rastreamento mundial (World Tracking)',
        'Vídeos em alta definição sobrepostos',
        'Modelos 3D interativos com animações',
        'Cartões de informação com Call-to-Action'
      ],
      demoUrl: '/ar-vr/video-3d'
    },
    {
      title: 'Menu de Restaurante em AR',
      description: 'Cardápios aumentados que trazem pratos à vida com visualização 3D e lazy loading.',
      image: tourismImage,
      category: 'Gastronomia',
      features: [
        'Visualização 3D realista de pratos',
        'Sistema de Lazy Loading para menus extensos',
        'Personalização total de cores e marca',
        'Compatível com qualquer cardápio impresso'
      ],
      demoUrl: '/ar-vr/menu-restaurante'
    }
  ];

  // Biblioteca completa de experiências
  const allExperiences = [
    {
      id: 'real-estate',
      title: 'Imóveis em Realidade Aumentada',
      category: 'Real Estate',
      level: 'medium',
      image: realEstateImage,
      path: '/ar-vr/imoveis'
    },
    {
      id: 'business-card',
      title: 'Cartões de Visita com AR',
      category: 'Marketing',
      level: 'basic',
      image: businessCardImage,
      path: '/ar-vr/cartao-visita'
    },
    {
      id: 'video-3d',
      title: 'AR para Produtos Impressos: Vídeo & 3D',
      category: 'Produtos Impressos',
      level: 'medium',
      image: catalogImage,
      path: '/ar-vr/video-3d'
    },
    {
      id: 'restaurant-menu',
      title: 'Menu de Restaurante em AR',
      category: 'Gastronomia',
      level: 'medium',
      image: tourismImage,
      path: '/ar-vr/menu-restaurante'
    },
    {
      id: 'memory-game',
      title: 'Jogo da Memória para Embalagens',
      category: 'Packaging',
      level: 'advanced',
      image: packagingImage,
      path: '/ar-vr/jogo-memoria'
    },
    {
      id: 'lotr',
      title: 'Lord of the Rings: Pôster AR',
      category: 'Cinema & Entretenimento',
      level: 'advanced',
      image: lotrImage,
      path: '/ar-vr/lotr'
    }
  ];

  const levelColors = {
    basic: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    medium: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    advanced: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
  };

  const categories = ['all', 'Produtos Impressos', 'Gastronomia', 'Packaging', 'Marketing', 'Real Estate', 'Cinema & Entretenimento'];
  const levels = ['all', 'basic', 'medium', 'advanced'];

  const filteredExperiences = allExperiences.filter(exp => {
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || exp.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

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

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Realidade Aumentada para Imóveis e Impressos",
    "description": "Soluções de AR/VR para materiais impressos, tours virtuais imobiliários e experiências interativas. Atendemos imobiliárias e empresas em Juiz de Fora, Rio de Janeiro e São Paulo.",
    "provider": {
      "@type": "Organization",
      "name": "Gráfica América",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua Christovam Molinari, 50",
        "addressLocality": "Juiz de Fora",
        "addressRegion": "MG",
        "postalCode": "36035-125"
      }
    },
    "areaServed": ["Juiz de Fora", "Rio de Janeiro", "São Paulo"],
    "serviceType": "Realidade Aumentada, Tour Virtual 3D, AR para Impressos, Marketing Imobiliário"
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Realidade Aumentada para Imóveis | Tour Virtual 3D | Gráfica América"
        description="Tours virtuais em AR para imobiliárias e soluções AR para impressos. Transforme folders e plantas baixas em experiências 3D interativas. Atendemos Juiz de Fora, Rio de Janeiro e São Paulo."
        keywords="realidade aumentada, AR imóveis, tour virtual 3D, AR impressos, marketing imobiliário AR, experiências interativas, imobiliária tecnologia Juiz de Fora, AR Rio de Janeiro, tour 3D São Paulo"
        schema={schema}
      />
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
                  Solicitar Orçamento
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
                className="text-center p-6 rounded-md bg-background border border-primary/20 hover-elevate active-elevate-2"
                data-testid={`benefit-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-md bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
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

      {/* Complete Library Section */}
      <section className="py-20 md:py-24 bg-muted/30" data-testid="library-section">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Biblioteca Completa de Experiências
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore exemplos inspiradores de Web AR com passos, benefícios e casos de uso para tornar seus projetos mais rápidos e fáceis
            </p>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-1">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger data-testid="select-category">
                    <SelectValue placeholder="Filtrar por categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as categorias</SelectItem>
                    {categories.slice(1).map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger data-testid="select-level">
                    <SelectValue placeholder="Filtrar por nível" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os níveis</SelectItem>
                    <SelectItem value="basic">Básico</SelectItem>
                    <SelectItem value="medium">Intermediário</SelectItem>
                    <SelectItem value="advanced">Avançado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Library Grid */}
          {filteredExperiences.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                Nenhuma experiência encontrada com os filtros selecionados.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredExperiences.map((experience) => (
                <Link key={experience.id} href={experience.path}>
                  <Card className="group cursor-pointer overflow-hidden hover-elevate active-elevate-2 h-full" data-testid={`experience-card-${experience.id}`}>
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={experience.image} 
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge variant="outline" className={levelColors[experience.level as keyof typeof levelColors]}>
                          {experience.level}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <Badge variant="outline" className="mb-3">
                        {experience.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-primary font-medium">
                        Ver detalhes
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
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

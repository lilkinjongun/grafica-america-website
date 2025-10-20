import { useState } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import SEO from '@/components/SEO';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import realEstateImage from '@assets/stock_images/real_estate_augmente_5ba68dbf.jpg';
import businessCardImage from '@assets/business_card_target.webp';
import lotrImage from '@assets/lotr_poster_target.webp';
import chaplinImage from '@assets/chaplin_poster_target.webp';
import birthdayImage from '@assets/birthday_card_target.webp';
import menuImage from '@assets/stock_images/tourism_map_augmente_2c91bd53.jpg';

export default function ARVRPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  // 6 Experiências principais
  const allExperiences = [
    {
      id: 'real-estate',
      title: 'Real Estate AR Experience',
      category: 'Real Estate',
      level: 'medium',
      image: realEstateImage,
      path: '/ar-vr/imoveis'
    },
    {
      id: 'business-card',
      title: 'Business Card with Augmented Reality',
      category: 'Marketing',
      level: 'basic',
      image: businessCardImage,
      path: '/ar-vr/cartao-visita'
    },
    {
      id: 'video-3d',
      title: 'AR for Printed Products: Video & 3D',
      category: 'Produtos Impressos',
      level: 'medium',
      image: lotrImage,
      path: '/ar-vr/video-3d'
    },
    {
      id: 'movie-poster',
      title: 'Movie Poster in AR',
      category: 'Cinema & Entretenimento',
      level: 'basic',
      image: chaplinImage,
      path: '/ar-vr/movie-poster'
    },
    {
      id: 'birthday-card',
      title: 'Augmented Birthday Wishes Card',
      category: 'Marketing',
      level: 'basic',
      image: birthdayImage,
      path: '/ar-vr/birthday-card'
    },
    {
      id: 'restaurant-menu',
      title: 'Restaurant Menu for Web AR',
      category: 'Gastronomia',
      level: 'medium',
      image: menuImage,
      path: '/ar-vr/menu-restaurante'
    }
  ];

  const levelColors = {
    basic: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    medium: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
    advanced: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
  };

  const levelBars = {
    basic: 1,
    medium: 2,
    advanced: 3
  };

  const categories = ['all', 'Real Estate', 'Marketing', 'Produtos Impressos', 'Cinema & Entretenimento', 'Gastronomia'];
  const levels = ['all', 'basic', 'medium', 'advanced'];

  const filteredExperiences = allExperiences.filter(exp => {
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || exp.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

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
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Experience Library
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Explore exemplos inspiradores de Web AR com passos, benefícios e casos de uso para tornar seus projetos mais rápidos e fáceis
            </p>
          </div>
        </div>
      </section>

      {/* Biblioteca de Experiências */}
      <section id="experiences" className="py-20 md:py-24" data-testid="ar-experiences">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {/* Filtros */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[250px]">
                <SelectValue placeholder="Todas as categorias" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat === 'all' ? 'Todas as categorias' : cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedLevel} onValueChange={setSelectedLevel}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Todos os níveis" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level === 'all' ? 'Todos os níveis' : level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Grid de Experiências - Estilo Oniryx */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExperiences.map((exp) => (
              <Link key={exp.id} href={exp.path}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300 hover-elevate">
                    {/* Imagem */}
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img 
                        src={exp.image} 
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="p-4 bg-background">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[3rem]">
                        {exp.title}
                      </h3>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={levelColors[exp.level as keyof typeof levelColors]}>
                          {exp.level}
                        </Badge>
                        
                        {/* Barras de nível */}
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-1 h-4 rounded-full ${
                                i < levelBars[exp.level as keyof typeof levelBars] 
                                  ? exp.level === 'basic' ? 'bg-green-500' 
                                    : exp.level === 'medium' ? 'bg-orange-500' 
                                    : 'bg-purple-500'
                                  : 'bg-muted'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-20 md:py-24 bg-muted/30" data-testid="ar-lead-section">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
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


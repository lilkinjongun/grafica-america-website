import { useState } from 'react';
import { Link } from 'wouter';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';

import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import realEstateImage from '@assets/stock_images/real_estate_augmente_5ba68dbf.jpg';
import businessCardImage from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import packagingImage from '@assets/generated_images/product_packaging_samples_663bc71a.png';

export default function ExperienceLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const experiences = [
    {
      id: 'video-3d',
      title: 'AR para Produtos Impressos: Vídeo & 3D',
      category: 'Produtos Impressos',
      level: 'medium',
      image: heroImage,
      path: '/ar-vr/video-3d'
    },
    {
      id: 'restaurant-menu',
      title: 'Menu de Restaurante em AR',
      category: 'Gastronomia',
      level: 'medium',
      image: heroImage,
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
      id: 'business-card',
      title: 'Cartões de Visita com AR',
      category: 'Marketing',
      level: 'basic',
      image: businessCardImage,
      path: '/ar-vr/cartao-visita'
    },
    {
      id: 'real-estate',
      title: 'Imóveis em Realidade Aumentada',
      category: 'Real Estate',
      level: 'medium',
      image: realEstateImage,
      path: '/ar-vr/imoveis'
    }
  ];

  const levelColors = {
    basic: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    medium: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    advanced: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
  };

  const categories = ['all', 'Produtos Impressos', 'Gastronomia', 'Packaging', 'Marketing', 'Real Estate'];
  const levels = ['all', 'basic', 'medium', 'advanced'];

  const filteredExperiences = experiences.filter(exp => {
    const categoryMatch = selectedCategory === 'all' || exp.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || exp.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen">
      <Navbar companyName="Gráfica América" />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-muted/30" data-testid="library-hero">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Biblioteca de Experiências AR
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore exemplos inspiradores de Web AR com passos, benefícios e casos de uso para tornar seus projetos mais rápidos e fáceis
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mt-12">
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
      </section>

      {/* Experiences Grid */}
      <section className="py-16 md:py-20" data-testid="library-grid">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para criar suas próprias experiências AR?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Entre em contato e descubra como podemos transformar seus materiais impressos
            </p>
            <Link href="/ar-vr">
              <Button size="lg" data-testid="button-back-arvr">
                Voltar para AR/VR
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer companyName="Gráfica América" />
    </div>
  );
}

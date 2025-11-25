import { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import LoadingFallback from '@/components/LoadingFallback';
// Lazy load de componentes pesados (below the fold)
const PortfolioGallery = lazy(() => import('@/components/PortfolioGallery'));
const FacilitiesSection = lazy(() => import('@/components/FacilitiesSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
import { Award, Users, Briefcase, FileText, Package, Image, Clipboard, Palette, Printer } from 'lucide-react';

import heroImage1 from '@assets/generated_images/printing_press_in_action_e75a2bcd.png';
import heroImage2 from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import heroImage3 from '@assets/generated_images/designer_workspace_c9d97f9d.png';
import heroImageAR from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import aboutImage from '@assets/image_1760654565115.png';
import portfolioImg1 from '@assets/image_1760654627708.png';
import portfolioImg2 from '@assets/image_1760654636833.png';
import portfolioImg3 from '@assets/image_1760654644636.png';
import portfolioImg4 from '@assets/image_1760654652532.png';
import portfolioImg5 from '@assets/image_1760654574841.png';
import portfolioImg6 from '@assets/image_1760654585304.png';

export default function Home() {
  const heroSlides = [
    {
      image: heroImage1,
      title: 'Qualidade e Tradição desde 1995',
      subtitle: 'Tecnologia moderna e profissionais especializados para resultados excepcionais'
    },
    {
      image: heroImageAR,
      title: 'Realidade Aumentada e Virtual',
      subtitle: 'Transforme seus impressos em experiências interativas que surpreendem e engajam',
      customButton: {
        text: 'Conhecer AR/VR',
        href: '/ar-vr'
      }
    },
    {
      image: heroImage2,
      title: 'Impressão de Alta Qualidade',
      subtitle: 'Do design à finalização, cuidamos de cada detalhe do seu projeto'
    },
    {
      image: heroImage3,
      title: 'Criatividade e Inovação',
      subtitle: 'Soluções gráficas personalizadas para o seu negócio'
    }
  ];

  const stats = [
    { icon: Award, value: '29+', label: 'Anos de Experiência' },
    { icon: Users, value: '5000+', label: 'Clientes Satisfeitos' },
    { icon: Briefcase, value: '15000+', label: 'Projetos Concluídos' }
  ];

  const portfolioItems = [
    { id: 1, title: 'Impressão Offset', category: 'Impressão', image: portfolioImg1 },
    { id: 2, title: 'Material Promocional', category: 'Marketing', image: portfolioImg2 },
    { id: 3, title: 'Embalagens Personalizadas', category: 'Embalagem', image: portfolioImg3 },
    { id: 4, title: 'Banners e Faixas', category: 'Sinalização', image: portfolioImg4 },
    { id: 5, title: 'Cartões de Visita', category: 'Corporativo', image: portfolioImg5 },
    { id: 6, title: 'Catálogos e Revistas', category: 'Editorial', image: portfolioImg6 }
  ];

  const services = [
    {
      icon: FileText,
      title: 'Impressão Offset',
      description: 'Alta qualidade para grandes tiragens de materiais impressos'
    },
    {
      icon: Package,
      title: 'Embalagens',
      description: 'Soluções criativas e funcionais para seus produtos'
    },
    {
      icon: Image,
      title: 'Impressão Digital',
      description: 'Rapidez e qualidade para pequenas e médias tiragens'
    },
    {
      icon: Clipboard,
      title: 'Material Promocional',
      description: 'Folders, flyers, catálogos e muito mais'
    },
    {
      icon: Palette,
      title: 'Design Gráfico',
      description: 'Criação e desenvolvimento de identidade visual'
    },
    {
      icon: Printer,
      title: 'Acabamento',
      description: 'Laminação, verniz, hot stamping e outros acabamentos especiais'
    }
  ];

  const contactInfo = {
    address: 'Rua Exemplo, 123 - Centro, Juiz de Fora - MG',
    phone: '(32) 3215-0000',
    email: 'contato@graficaamerica.com.br',
    hours: 'Segunda a Sexta: 8h às 18h'
  };

  return (
    <>
      <SEO 
        title="Gráfica América - Qualidade e Tradição desde 1995"
        description="Atuando no mercado gráfico desde 1995, a Gráfica América oferece serviços de impressão de alta qualidade em Juiz de Fora, MG. Criatividade, tecnologia e excelência."
        keywords="gráfica, impressão, offset, digital, embalagens, Juiz de Fora, MG"
      />
      <Navbar companyName="Gráfica América" />
      <HeroSection slides={heroSlides} />
      <AboutSection
        title="A Gráfica América"
        description="Atuando no mercado gráfico desde 1995, a América aposta na criatividade e na ousadia de seus profissionais, além da utilização de modernas tecnologias para propiciar aos seus clientes um excelente padrão de qualidade. Com permanente investimento em especialização, aperfeiçoamento da mão de obra e recursos tecnológicos."
        stats={stats}
        image={aboutImage}
      />
      
      {/* Componentes pesados carregados sob demanda */}
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><LoadingFallback message="Carregando portfólio..." /></div>}>
        <PortfolioGallery items={portfolioItems} />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><LoadingFallback message="Carregando instalações..." /></div>}>
        <FacilitiesSection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><LoadingFallback message="Carregando serviços..." /></div>}>
        <ServicesSection
          title="Nossos Serviços"
          subtitle="A criatividade, imaginação e sensibilidade do designer gráfico e a experiência e conhecimento do impressor são os requisitos necessários para um impresso de sucesso."
          services={services}
        />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><LoadingFallback message="Carregando contato..." /></div>}>
        <ContactSection contactInfo={contactInfo} />
      </Suspense>
      
      <Footer companyName="Gráfica América" />
    </>
  );
}


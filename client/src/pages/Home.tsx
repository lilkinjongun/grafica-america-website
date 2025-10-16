import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioGallery from '@/components/PortfolioGallery';
import FacilitiesSection from '@/components/FacilitiesSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Award, Users, Briefcase, FileText, Package, Image, Clipboard, Palette, Printer } from 'lucide-react';

import heroImage1 from '@assets/generated_images/printing_press_in_action_e75a2bcd.png';
import heroImage2 from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import heroImage3 from '@assets/generated_images/designer_workspace_c9d97f9d.png';
import heroImageAR from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import aboutImage from '@assets/generated_images/designer_workspace_c9d97f9d.png';
import portfolioImg1 from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import portfolioImg2 from '@assets/generated_images/product_packaging_samples_663bc71a.png';
import portfolioImg3 from '@assets/generated_images/banners_and_signage_98280056.png';
import portfolioImg4 from '@assets/generated_images/brochures_and_catalogs_3c7bdcb7.png';

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
    { icon: Award, label: 'Anos de Experiência', value: '28+' },
    { icon: Users, label: 'Clientes Atendidos', value: '500+' },
    { icon: Briefcase, label: 'Projetos Realizados', value: '2000+' }
  ];

  const portfolioItems = [
    { id: 1, image: portfolioImg1, title: 'Cartões de Visita Premium', category: 'Cartões' },
    { id: 2, image: portfolioImg2, title: 'Embalagens Personalizadas', category: 'Embalagens' },
    { id: 3, image: portfolioImg3, title: 'Banners Externos', category: 'Sinalização' },
    { id: 4, image: portfolioImg4, title: 'Catálogos Corporativos', category: 'Catálogos' },
    { id: 5, image: portfolioImg1, title: 'Material Corporativo', category: 'Cartões' },
    { id: 6, image: portfolioImg2, title: 'Caixas e Boxes', category: 'Embalagens' },
  ];

  const services = [
    {
      icon: FileText,
      title: 'Impressão Offset',
      description: 'Alta qualidade para grandes tiragens de materiais gráficos, garantindo cores precisas e acabamento profissional.'
    },
    {
      icon: Package,
      title: 'Embalagens',
      description: 'Desenvolvimento e impressão de embalagens personalizadas que valorizam seu produto.'
    },
    {
      icon: Image,
      title: 'Impressão Digital',
      description: 'Soluções rápidas para pequenas e médias tiragens com excelente qualidade.'
    },
    {
      icon: Clipboard,
      title: 'Material Corporativo',
      description: 'Cartões de visita, papelaria, pastas e todo material necessário para sua empresa.'
    },
    {
      icon: Palette,
      title: 'Design Gráfico',
      description: 'Equipe criativa especializada em desenvolver layouts profissionais e impactantes.'
    },
    {
      icon: Printer,
      title: 'Grande Formato',
      description: 'Banners, faixas, adesivos e sinalização para divulgar sua marca.'
    }
  ];

  const contactInfo = {
    address: 'Rua Christovam Molinari, 50, Morro da Glória - CEP: 36035-125, Juiz de Fora - MG',
    phone: '(32) 3257-8000',
    email: 'contato@graficaamerica.com.br',
    hours: 'Segunda a Sexta: 8h às 18h'
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://graficaamerica.com.br/#business",
        "name": "Gráfica América",
        "description": "Gráfica especializada em Realidade Aumentada para Imóveis e Construtoras em Juiz de Fora, Rio de Janeiro e São Paulo. Tours virtuais 3D, plantas baixas AR e marketing imobiliário inovador.",
        "url": "https://graficaamerica.com.br",
        "telephone": "+55-32-3257-8000",
        "email": "contato@graficaamerica.com.br",
        "foundingDate": "1995",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Christovam Molinari, 50, Morro da Glória",
          "addressLocality": "Juiz de Fora",
          "addressRegion": "MG",
          "postalCode": "36035-125",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-21.7654",
          "longitude": "-43.3496"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Juiz de Fora"
          },
          {
            "@type": "City",
            "name": "Rio de Janeiro"
          },
          {
            "@type": "City",
            "name": "São Paulo"
          }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "Service",
        "@id": "https://graficaamerica.com.br/#ar-imoveis",
        "name": "Realidade Aumentada para Imóveis",
        "description": "Tours virtuais 3D em AR para imobiliárias e construtoras. Transforme plantas baixas e folders imobiliários em experiências interativas.",
        "provider": {
          "@id": "https://graficaamerica.com.br/#business"
        },
        "areaServed": [
          "Juiz de Fora",
          "Rio de Janeiro",
          "São Paulo"
        ],
        "serviceType": "Realidade Aumentada, Tour Virtual 3D, Marketing Imobiliário"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://graficaamerica.com.br"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Gráfica América | AR para Imóveis e Construtoras - Juiz de Fora, RJ e SP"
        description="Transforme plantas baixas e folders imobiliários em tours virtuais 3D com Realidade Aumentada. Atendemos imobiliárias e construtoras em Juiz de Fora, Rio de Janeiro e São Paulo. Solicite orçamento!"
        keywords="realidade aumentada imóveis, tour virtual 3D, AR imobiliária, plantas baixas AR, marketing imobiliário, construtora tecnologia, imobiliária Juiz de Fora, tour virtual Rio de Janeiro, AR São Paulo"
        schema={schema}
      />
      <Navbar companyName="Gráfica América" />
      <HeroSection slides={heroSlides} />
      <AboutSection
        title="A Gráfica América"
        description="Atuando no mercado gráfico desde 1995, a América aposta na criatividade e na ousadia de seus profissionais, além da utilização de modernas tecnologias para propiciar aos seus clientes um excelente padrão de qualidade. Com permanente investimento em especialização, aperfeiçoamento da mão de obra e recursos tecnológicos."
        image={aboutImage}
        stats={stats}
      />
      <PortfolioGallery items={portfolioItems} />
      <FacilitiesSection />
      <ServicesSection
        title="Nossos Serviços"
        subtitle="A criatividade, imaginação e sensibilidade do designer gráfico e a experiência e conhecimento do impressor são os requisitos necessários para um impresso de sucesso."
        services={services}
      />
      <ContactSection contactInfo={contactInfo} />
      <Footer companyName="Gráfica América" />
    </div>
  );
}

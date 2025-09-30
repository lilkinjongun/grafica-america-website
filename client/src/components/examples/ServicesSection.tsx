import ServicesSection from '../ServicesSection';
import { FileText, Package, Image, Clipboard, Palette, Printer } from 'lucide-react';

export default function ServicesSectionExample() {
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

  return (
    <ServicesSection
      title="Nossos Serviços"
      subtitle="A criatividade, imaginação e sensibilidade do designer gráfico e a experiência e conhecimento do impressor são os requisitos necessários para um impresso de sucesso."
      services={services}
    />
  );
}

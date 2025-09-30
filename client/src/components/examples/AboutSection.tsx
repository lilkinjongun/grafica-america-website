import AboutSection from '../AboutSection';
import { Award, Users, Briefcase } from 'lucide-react';
import aboutImage from '@assets/generated_images/designer_workspace_c9d97f9d.png';

export default function AboutSectionExample() {
  const stats = [
    { icon: Award, label: 'Anos de Experiência', value: '28+' },
    { icon: Users, label: 'Clientes Atendidos', value: '500+' },
    { icon: Briefcase, label: 'Projetos Realizados', value: '2000+' }
  ];

  return (
    <AboutSection
      title="A Gráfica América"
      description="Atuando no mercado gráfico desde 1995, a América aposta na criatividade e na ousadia de seus profissionais, além da utilização de modernas tecnologias para propiciar aos seus clientes um excelente padrão de qualidade. Com permanente investimento em especialização, aperfeiçoamento da mão de obra e recursos tecnológicos."
      image={aboutImage}
      stats={stats}
    />
  );
}

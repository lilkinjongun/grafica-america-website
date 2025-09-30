import HeroSection from '../HeroSection';
import heroImage1 from '@assets/generated_images/printing_press_in_action_e75a2bcd.png';
import heroImage2 from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import heroImage3 from '@assets/generated_images/designer_workspace_c9d97f9d.png';

export default function HeroSectionExample() {
  const slides = [
    {
      image: heroImage1,
      title: 'Qualidade e Tradição desde 1995',
      subtitle: 'Tecnologia moderna e profissionais especializados para resultados excepcionais'
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

  return <HeroSection slides={slides} />;
}

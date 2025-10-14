import ARExperienceCard from '../ARExperienceCard';
import demoImage from '@assets/generated_images/business_cards_and_brochures_164696ab.png';

export default function ARExperienceCardExample() {
  return (
    <div className="p-8 bg-background">
      <ARExperienceCard
        title="Cartões de Visita com AR"
        description="Transforme cartões de visita tradicionais em experiências interativas"
        image={demoImage}
        category="Marketing"
        features={[
          'Vídeo de apresentação ao escanear o cartão',
          'Links diretos para redes sociais',
          'Portfólio 3D interativo'
        ]}
        demoUrl="#demo"
      />
    </div>
  );
}

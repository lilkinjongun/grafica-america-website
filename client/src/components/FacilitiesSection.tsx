import { Building2, Trophy, Cog } from 'lucide-react';

import fachadaImage from '@assets/image_1760654565115.png';
import recepcaoImage from '@assets/image_1760654574841.png';
import escritorioImage from '@assets/image_1760654585304.png';
import escadaImage from '@assets/image_1760654609096.png';
import trofeuImage from '@assets/image_1760654620248.png';
import offsetImage from '@assets/image_1760654627708.png';
import offsetImage2 from '@assets/image_1760654636833.png';
import laserImage from '@assets/image_1760654644636.png';
import acabamentoImage from '@assets/image_1760654652532.png';

export default function FacilitiesSection() {
  const facilities = [
    {
      title: 'Infraestrutura Moderna',
      icon: Building2,
      images: [
        { src: fachadaImage, alt: 'Fachada da Gráfica América' },
        { src: recepcaoImage, alt: 'Recepção Moderna' },
        { src: escritorioImage, alt: 'Escritório de Design' },
        { src: escadaImage, alt: 'Interior com Logo América' }
      ]
    },
    {
      title: 'Credibilidade e Conquistas',
      icon: Trophy,
      images: [
        { src: trofeuImage, alt: 'Troféus e Medalhas' },
        { src: recepcaoImage, alt: 'Sala de Troféus' }
      ]
    },
    {
      title: 'Equipamentos de Ponta',
      icon: Cog,
      images: [
        { src: offsetImage, alt: 'Impressora Offset RYOBI' },
        { src: offsetImage2, alt: 'Equipamento Offset Profissional' },
        { src: laserImage, alt: 'Máquina de Corte a Laser' },
        { src: acabamentoImage, alt: 'Dobradeira Industrial' }
      ]
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-muted/30" id="estrutura">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossa Estrutura
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tecnologia de ponta, profissionais qualificados e uma infraestrutura moderna 
            para entregar resultados excepcionais desde 1995
          </p>
        </div>

        <div className="space-y-16">
          {facilities.map((facility, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                  <facility.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{facility.title}</h3>
              </div>

              <div className={`grid ${facility.images.length >= 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                {facility.images.map((image, imageIdx) => (
                  <div 
                    key={imageIdx}
                    className="group relative aspect-video rounded-md overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

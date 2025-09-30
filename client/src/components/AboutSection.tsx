import { Award, Users, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface AboutSectionProps {
  title: string;
  description: string;
  image: string;
  stats: Array<{ icon: any; label: string; value: string }>;
}

export default function AboutSection({ title, description, image, stats }: AboutSectionProps) {
  return (
    <section id="sobre" className="py-20 md:py-24 bg-muted/30" data-testid="section-about">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover-elevate" data-testid={`stat-card-${index}`}>
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-ring" />
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={image}
                alt="Sobre a empresa"
                className="w-full h-full object-cover"
                data-testid="about-image"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-ring text-primary-foreground px-8 py-4 rounded-md shadow-lg">
              <div className="text-3xl font-bold">1995</div>
              <div className="text-sm">Desde</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

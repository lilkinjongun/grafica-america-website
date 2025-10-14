import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play } from 'lucide-react';

interface ARExperienceCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  demoUrl?: string;
}

export default function ARExperienceCard({ 
  title, 
  description, 
  image, 
  category, 
  features,
  demoUrl 
}: ARExperienceCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all" data-testid={`ar-card-${title.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="relative aspect-video overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-ring text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-ring mt-2 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
        {demoUrl && (
          <Button 
            variant="outline" 
            className="w-full gap-2"
            onClick={() => console.log('Demo clicked:', demoUrl)}
            data-testid="button-demo"
          >
            Ver Exemplo <ExternalLink className="w-4 h-4" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

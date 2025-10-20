import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface PortfolioGalleryProps {
  items: PortfolioItem[];
}

export default function PortfolioGallery({ items }: PortfolioGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const categories = ['Todos', ...Array.from(new Set(items.map(item => item.category)))];
  
  const filteredItems = selectedCategory === 'Todos' 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-24" data-testid="section-portfolio">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos realizados com excelência
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase()}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-md overflow-hidden cursor-pointer hover-elevate active-elevate-2"
              onClick={() => setSelectedImage(item)}
              data-testid={`portfolio-item-${item.id}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="lightbox"
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            className="max-w-full max-h-full object-contain"
            loading="lazy"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

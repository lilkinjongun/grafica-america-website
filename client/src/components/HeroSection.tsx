import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  customButton?: {
    text: string;
    href: string;
  };
}

interface HeroSectionProps {
  slides: Slide[];
}

export default function HeroSection({ slides }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" data-testid="section-hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                data-testid="button-contact"
                onClick={() => trackEvent('cta_click', { 
                  button_text: 'Solicitar Orçamento',
                  location: 'hero_section'
                })}
              >
                Solicitar Orçamento
              </Button>
              {slides[currentSlide].customButton ? (
                <a href={slides[currentSlide].customButton!.href}>
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 shadow-lg"
                    data-testid="button-custom"
                  >
                    {slides[currentSlide].customButton!.text}
                  </Button>
                </a>
              ) : (
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                  data-testid="button-portfolio"
                  onClick={() => trackEvent('cta_click', { 
                  button_text: 'Ver Portfólio',
                  location: 'hero_section'
                })}
                >
                  Ver Portfólio
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover-elevate active-elevate-2"
        aria-label="Slide anterior"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover-elevate active-elevate-2"
        aria-label="Próximo slide"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            data-testid={`button-slide-${index}`}
          />
        ))}
      </div>
    </section>
  );
}

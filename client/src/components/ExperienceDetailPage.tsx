import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Eye, QrCode, Scan } from 'lucide-react';

interface ExperienceDetailPageProps {
  title: string;
  subtitle: string;
  category: string;
  level: 'basic' | 'medium' | 'advanced';
  heroImage: string;
  description: string;
  overviewTitle: string;
  overviewContent: string[];
  features: string[];
  qrCodeImage?: string;
  markerImage?: string;
  demoUrl?: string;
  videoUrl?: string;
}

export default function ExperienceDetailPage({
  title,
  subtitle,
  category,
  level,
  heroImage,
  description,
  overviewTitle,
  overviewContent,
  features,
  qrCodeImage,
  markerImage,
  demoUrl,
  videoUrl
}: ExperienceDetailPageProps) {
  
  const levelColors = {
    basic: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    medium: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
    advanced: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
  };

  return (
    <div className="min-h-screen">
      <Navbar companyName="Gráfica América" />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[60vh] flex items-center overflow-hidden" data-testid="experience-hero">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-7xl py-16">
          <div className="max-w-4xl">
            <div className="flex gap-3 mb-4">
              <Badge variant="outline" className="border-white/30 text-white bg-white/10 backdrop-blur-sm">
                {category}
              </Badge>
              <Badge variant="outline" className={`border-white/30 ${levelColors[level]} bg-white/10 backdrop-blur-sm`}>
                {level}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {demoUrl && (
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm">
                    <Eye className="w-5 h-5 mr-2" />
                    Ver Demonstração
                  </Button>
                </a>
              )}
              <a href="#lead-form">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Solicitar Orçamento
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-20 bg-muted/30" data-testid="experience-description">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-16 md:py-20" data-testid="experience-overview">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
              Experience Overview
              <span className="text-2xl">📖</span>
            </h2>
            <div className="space-y-4 max-w-5xl">
              {overviewContent.map((paragraph, index) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          {features && features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-md bg-muted/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Try it Section */}
      <section className="py-16 md:py-20 bg-muted/30" data-testid="experience-try">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Visualize esta Experiência
            </h2>
            <p className="text-lg text-muted-foreground">
              Escaneie o QR code e aponte para o marker para ver em AR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* QR Code Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-md bg-primary/10 flex items-center justify-center">
                  <QrCode className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Escaneie o QR Code
                </h3>
                {qrCodeImage ? (
                  <div className="bg-white p-4 rounded-md inline-block">
                    <img 
                      src={qrCodeImage} 
                      alt="QR Code" 
                      className="w-48 h-48 mx-auto"
                    />
                  </div>
                ) : (
                  <div className="bg-muted p-8 rounded-md">
                    <p className="text-muted-foreground">QR Code disponível em breve</p>
                  </div>
                )}
                {demoUrl && (
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
                    <Button variant="outline" size="sm">
                      Ver com 3D Viewer
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>

            {/* Marker Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-md bg-primary/10 flex items-center justify-center">
                  <Scan className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Marker de Referência
                </h3>
                {markerImage ? (
                  <img 
                    src={markerImage} 
                    alt="AR Marker" 
                    className="w-full max-w-sm mx-auto rounded-md border border-border"
                  />
                ) : (
                  <div className="bg-muted p-8 rounded-md">
                    <p className="text-muted-foreground">Aponte sua câmera para o material impresso</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16 md:py-20" data-testid="experience-lead-section">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Interessado nesta Experiência?
            </h2>
            <p className="text-lg text-muted-foreground">
              Solicite um orçamento e nossa equipe criará uma solução personalizada para você
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </section>

      <Footer companyName="Gráfica América" />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Eye, QrCode, Scan, Image as ImageIcon } from 'lucide-react';

interface ExperienceDetailPageProps {
  title: string;
  subtitle: string;
  category: string;
  level: 'basic' | 'medium' | 'advanced';
  heroImage: string;
  description: string;
  overviewTitle: string;
  overviewContent: string[];
  features?: string[];
  qrCodeImage?: string;
  targetImage?: string;
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
  targetImage,
  demoUrl,
  videoUrl
}: ExperienceDetailPageProps) {
  
  const levelColors = {
    basic: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
    medium: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
    advanced: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
  };

  const levelBars = {
    basic: 1,
    medium: 2,
    advanced: 3
  };

  return (
    <div className="min-h-screen">
      <Navbar companyName="Gráfica América" />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-[50vh] flex items-center overflow-hidden" data-testid="experience-hero">
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
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline" className={`${levelColors[level]} border-white/30 bg-white/10 backdrop-blur-sm`}>
                {level}
              </Badge>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 h-4 rounded-full ${
                      i < levelBars[level] 
                        ? level === 'basic' ? 'bg-green-400' 
                          : level === 'medium' ? 'bg-orange-400' 
                          : 'bg-purple-400'
                        : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-muted/30" data-testid="experience-description">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Columns */}
      <section className="py-16 md:py-20" data-testid="experience-content">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Experience Overview & Video */}
            <div className="lg:col-span-2 space-y-8">
              {/* Video Demo */}
              {videoUrl && (
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-black">
                      <video 
                        src={videoUrl}
                        controls
                        className="w-full h-full"
                        poster={targetImage}
                      >
                        Seu navegador não suporta vídeos.
                      </video>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Experience Overview */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                  {overviewTitle}
                  <span className="text-2xl">📖</span>
                </h2>
                <div className="space-y-4">
                  {overviewContent.map((paragraph, index) => (
                    <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              {features && features.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 rounded-md bg-muted/50">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column - Visualize & Image Target */}
            <div className="lg:col-span-1 space-y-6">
              {/* Visualize this experience - Estilo Oniryx */}
              <Card className="overflow-hidden bg-purple-600 text-white border-0">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">
                    Visualize esta Experiência
                  </h3>
                  <p className="text-white/90 mb-6">
                    Escaneie o QR code e aponte seu dispositivo para a imagem para visualizar em AR
                  </p>
                  
                  {/* QR Code */}
                  {qrCodeImage ? (
                    <div className="bg-white p-4 rounded-lg mb-6">
                      <img 
                        src={qrCodeImage} 
                        alt="QR Code" 
                        className="w-full aspect-square object-contain"
                      />
                    </div>
                  ) : (
                    <div className="bg-white/20 p-8 rounded-lg mb-6 aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <QrCode className="w-16 h-16 mx-auto mb-2 text-white/70" />
                        <p className="text-white/70 text-sm">QR Code Mock</p>
                      </div>
                    </div>
                  )}
                  
                  {demoUrl && (
                    <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="outline" size="lg" className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20">
                        <Eye className="w-5 h-5 mr-2" />
                        Ver com visualizador 3D
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>

              {/* Image Target */}
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ImageIcon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Imagem-Alvo (Image Target)
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Aponte sua câmera para esta imagem para ativar a experiência AR
                  </p>
                  
                  {targetImage ? (
                    <div className="bg-muted p-4 rounded-lg">
                      <img 
                        src={targetImage} 
                        alt="Image Target" 
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  ) : (
                    <div className="bg-muted p-8 rounded-lg aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <Scan className="w-12 h-12 mx-auto mb-2 text-muted-foreground/50" />
                        <p className="text-muted-foreground/70 text-sm">Imagem-alvo disponível em breve</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16 md:py-20 bg-muted/30" data-testid="experience-lead-section">
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


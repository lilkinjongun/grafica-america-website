import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo;
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const departments = [
    {
      title: 'Vendas',
      contacts: [
        {
          name: 'Marcelo Nepomuceno',
          whatsapp: '(32) 9 9123.0144',
          whatsappLink: 'https://api.whatsapp.com/send?phone=5532991230144',
          email: 'marcelo@graficaamerica.com.br'
        },
        {
          name: 'Vivian',
          whatsapp: '(32) 9 9823.6338',
          whatsappLink: 'https://api.whatsapp.com/send?phone=5532998236338',
          email: 'vendas@graficaamerica.com.br'
        },
        {
          name: 'Mariana',
          whatsapp: '(32) 9 9990.3050',
          whatsappLink: 'https://api.whatsapp.com/send?phone=5532999903050',
          email: 'vendas1@graficaamerica.com.br'
        }
      ]
    },
    {
      title: 'Financeiro / Faturamento',
      contacts: [
        {
          name: 'Jéssica',
          whatsapp: '(32) 9 8847.0625',
          whatsappLink: 'https://api.whatsapp.com/send?phone=5532988470625',
          email: 'atendimento@graficaamerica.com.br'
        },
        {
          name: 'Anna',
          whatsapp: '(32) 9 8847.0624',
          whatsappLink: 'https://api.whatsapp.com/send?phone=5532988470624',
          email: 'financeiro@graficaamerica.com.br'
        }
      ]
    },
    {
      title: 'Atendimento ao Cliente',
      contacts: [
        {
          name: 'Lanuza',
          whatsapp: '(32) 9 8847.0626',
          whatsappLink: 'https://api.whatsapp.com/send?phone=5532988470626',
          email: 'lanuza@graficaamerica.com.br'
        }
      ]
    }
  ];

  return (
    <section id="contato" className="py-20 md:py-24" data-testid="section-contact">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      data-testid="input-name"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-email"
                    />
                    <Input
                      type="tel"
                      placeholder="Seu telefone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Descreva seu projeto ou dúvida"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      data-testid="input-message"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border border-primary/20 hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                    <p className="text-muted-foreground text-sm">{contactInfo.address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-muted-foreground text-sm hover:text-primary">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground text-sm hover:text-primary">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 hover-elevate">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horário</h3>
                    <p className="text-muted-foreground text-sm">{contactInfo.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.598389471739!2d-43.3585899!3d-21.742558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b5f9c5ee5b9%3A0x4e9e8a8f7c6e5d4c!2sR.%20Cristovam%20Molinari%2C%2050%20-%20Morro%20da%20Gl%C3%B3ria%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036035-125!5e0!3m2!1spt-BR!2sbr!4v1697568000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Gráfica América"
                  data-testid="map-location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="border border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{dept.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dept.contacts.map((contact, contactIndex) => (
                  <div key={contactIndex} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <p className="font-semibold text-foreground mb-2">{contact.name}</p>
                    <div className="space-y-1">
                      <a
                        href={contact.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-whatsapp-${contact.name.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        {contact.whatsapp}
                      </a>
                      <a
                        href={`mailto:${contact.email}`}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`link-email-${contact.name.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        <Mail className="w-4 h-4" />
                        {contact.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

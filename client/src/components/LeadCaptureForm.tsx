import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles } from 'lucide-react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    experienceType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted:', formData);
  };

  return (
    <Card className="border-2 border-ring/20" data-testid="lead-form">
      <CardHeader className="bg-gradient-to-r from-ring/10 to-transparent pb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-ring flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-2xl">Solicite uma Demonstração</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Descubra como AR/VR pode revolucionar seus impressos
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Nome completo *"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              data-testid="input-lead-name"
            />
            <Input
              type="email"
              placeholder="E-mail corporativo *"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              data-testid="input-lead-email"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              data-testid="input-lead-company"
            />
            <Input
              type="tel"
              placeholder="Telefone *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              data-testid="input-lead-phone"
            />
          </div>
          <Select 
            value={formData.experienceType} 
            onValueChange={(value) => setFormData({ ...formData, experienceType: value })}
          >
            <SelectTrigger data-testid="select-experience-type">
              <SelectValue placeholder="Tipo de experiência desejada" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="real-estate">Imóveis e Real Estate</SelectItem>
              <SelectItem value="product-catalog">Catálogo de Produtos</SelectItem>
              <SelectItem value="business-card">Cartões de Visita</SelectItem>
              <SelectItem value="packaging">Embalagens Interativas</SelectItem>
              <SelectItem value="tourism">Turismo e Mapas</SelectItem>
              <SelectItem value="other">Outro</SelectItem>
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Conte-nos sobre seu projeto e como podemos ajudar"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            data-testid="input-lead-message"
          />
          <Button type="submit" size="lg" className="w-full" data-testid="button-lead-submit">
            Solicitar Demonstração
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você concorda em receber comunicações da Gráfica América
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

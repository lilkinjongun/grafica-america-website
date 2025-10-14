# Gráfica América - Website Moderno

## Visão Geral
Website moderno e responsivo para a Gráfica América, empresa estabelecida desde 1995 em Juiz de Fora - MG, especializada em serviços de impressão gráfica de alta qualidade.

## Estrutura do Projeto
- **Framework**: React com Vite
- **Routing**: Wouter
- **Styling**: Tailwind CSS + Shadcn UI
- **Backend**: Express.js
- **Linguagem**: TypeScript

## Páginas Principais

### 1. Home (/)
- Hero Section com slider de imagens
- Seção Sobre com estatísticas (28+ anos, 500+ clientes, 2000+ projetos)
- Galeria de Portfólio com filtros
- Seção de Serviços (6 serviços principais)
- Formulário de Contato
- Footer com redes sociais

### 2. AR/VR (/ar-vr)
Página dedicada a experiências de Realidade Aumentada e Virtual aplicadas a materiais impressos:
- 4 tipos de experiências destacadas:
  - Imóveis em Realidade Aumentada (Real Estate)
  - Cartões de Visita Interativos
  - Catálogos de Produtos 3D
  - Mapas Turísticos Aumentados
- Formulário de captação de leads específico para AR/VR
- Seção de benefícios da tecnologia

## Design e Cores

### Paleta de Cores (Atualizada - Vermelho como Cor Principal)
- **Primary (Vermelho Vibrante)**: `0 84% 50%` - Cor principal da marca, usada em CTAs, ícones e destaques
- **Secondary**: Tons neutros de cinza
- **Background**: Branco/Tons escuros (dark mode)
- **Accent**: Variações de vermelho para hover states

### Elementos com Vermelho Destacado
- Todos os botões principais (CTAs)
- Ícones em cards de serviços e estatísticas
- Badges e categorias
- Links hover
- Bordas sutis em cards
- Footer com fundo vermelho
- Badge "Desde 1995" na seção Sobre

## Componentes Principais

### Navbar
- Navegação sticky com blur backdrop
- Links para: Início, Sobre, Portfólio, Serviços, AR/VR, Contato
- Menu mobile responsivo
- Botão CTA "Solicitar Orçamento"

### ARExperienceCard
- Card interativo para experiências AR/VR
- Overlay com ícone Play no hover
- Badge de categoria
- Lista de features
- Botão para demonstração

### LeadCaptureForm
- Formulário específico para AR/VR
- Campos: Nome, Email, Empresa, Telefone, Tipo de Experiência, Mensagem
- Validação e styling moderno

## Dados da Empresa
- **Nome**: Gráfica América
- **Fundação**: 1995 (28+ anos de experiência)
- **Localização**: Rua Christovam Molinari, 50, Morro da Glória - CEP: 36035-125, Juiz de Fora - MG
- **Telefone**: (32) 3257-8000
- **Email**: contato@graficaamerica.com.br
- **Horário**: Segunda a Sexta: 8h às 18h

## Serviços Oferecidos
1. Impressão Offset
2. Embalagens Personalizadas
3. Impressão Digital
4. Material Corporativo
5. Design Gráfico
6. Grande Formato (banners, faixas, sinalização)

## Tecnologias Utilizadas
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI Components
- Wouter (routing)
- Lucide Icons
- Express.js
- TanStack Query

## Scripts
- `npm run dev` - Inicia servidor de desenvolvimento
- Build automático via Vite

## Status
✅ Website completo e funcional
✅ Página AR/VR implementada
✅ Design atualizado com vermelho como cor principal
✅ Totalmente responsivo
✅ Imagens geradas via stock photos

## Próximas Melhorias Sugeridas
- Integração com backend real para formulários
- Galeria de portfólio com mais imagens reais
- Sistema de filtros funcionais no portfólio
- Integração com Google Maps na seção de contato
- Animações e transições mais elaboradas

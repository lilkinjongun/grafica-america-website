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
- Hero Section com slider de imagens (4 slides incluindo AR/VR)
  - Slide 1: Qualidade e Tradição desde 1995
  - Slide 2: Realidade Aumentada e Virtual (com botão para página AR/VR)
  - Slide 3: Impressão de Alta Qualidade
  - Slide 4: Criatividade e Inovação
- Seção Sobre com estatísticas (28+ anos, 500+ clientes, 2000+ projetos)
- Galeria de Portfólio com filtros
- Seção de Serviços (6 serviços principais)
- Formulário de Contato
- Footer com redes sociais

### 2. AR/VR (/ar-vr)
Página dedicada a experiências de Realidade Aumentada e Virtual aplicadas a materiais impressos:
- 4 tipos de experiências destacadas na página principal
- Botão "Explorar Biblioteca Completa" que leva à biblioteca de experiências
- Formulário de orçamento (anteriormente "Solicitar Demonstração", agora "Solicitar Orçamento")
- Seção de benefícios da tecnologia

### 3. Biblioteca de Experiências AR (integrada em /ar-vr)
Biblioteca completa integrada na página AR/VR principal:
- Grid responsivo de experiências
- Filtros por categoria (Produtos Impressos, Gastronomia, Packaging, Marketing, Real Estate, Cinema & Entretenimento)
- Filtros por nível de complexidade (Básico, Intermediário, Avançado)
- Cards clicáveis que levam às páginas individuais de cada experiência
- Sem rota separada - tudo em uma página única

### 4. Páginas Individuais de Experiências AR
Cada experiência tem sua própria página dedicada com estrutura completa:

#### a) AR para Produtos Impressos: Vídeo & 3D (/ar-vr/video-3d)
- Transformação de imagens estáticas em trailers com AR
- World tracking technology
- Modelos 3D interativos e vídeos

#### b) Menu de Restaurante em AR (/ar-vr/menu-restaurante)
- Cardápios aumentados com pratos em 3D
- Sistema de Lazy Loading
- Personalização de marca

#### c) Jogo da Memória para Embalagens (/ar-vr/jogo-memoria)
- Jogo interativo de memória com AR
- Aplicação em packaging
- Gamificação de produtos

#### d) Cartões de Visita com AR (/ar-vr/cartao-visita)
- Cartões que ganham vida com vídeos e 3D
- Links para redes sociais
- Experiência de networking diferenciada

#### e) Imóveis em Realidade Aumentada (/ar-vr/imoveis)
- Tours virtuais 3D de propriedades
- Visualização de plantas baixas em AR
- Virtual staging e diferentes acabamentos

#### f) Lord of the Rings: Pôster AR (/ar-vr/lotr)
- Pôsteres de filmes com AR
- Trailers e making-of interativos
- Modelos 3D de personagens
- Conteúdo exclusivo ao escanear

**Estrutura de cada página de experiência (Layout Onirix):**
- Hero section com título e descrição
- Experience Overview com detalhes técnicos
- Seção "Visualize esta Experiência" com layout Onirix:
  - QR code à esquerda (1/3)
  - Preview/vídeo grande à direita (2/3)
  - Suporte para vídeo demonstrativo
- Lista de features/benefícios
- Formulário "Solicitar Orçamento" ao final

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
- Formulário de orçamento para AR/VR
- Título: "Solicite um Orçamento" (atualizado de "Solicite uma Demonstração")
- Campos: Nome, Email, Empresa, Telefone, Tipo de Experiência, Mensagem
- Validação e styling moderno

### ExperienceDetailPage
- Componente reutilizável para páginas de experiências
- Suporta diferentes níveis (basic, medium, advanced)
- Seções: Hero, Description, Overview, Features, QR Code/Marker, Lead Form
- Totalmente responsivo e integrado com o sistema de cores da marca

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

## Assets
- **Logo Principal**: `Sem Título-1_1760450880157.png` - Logo completo com texto "América INDÚSTRIA GRÁFICA"
- **Logo Ícone**: `d507fa_6d174c7163334165bebbe83e3aa2fbab~mv2_1760450511060.png` - Símbolo circular
- Logos implementados no Navbar e Footer com filtros para adaptação de cor

## Status
✅ Website completo e funcional
✅ Página AR/VR implementada
✅ Design atualizado com vermelho como cor principal
✅ Logos oficiais da Gráfica América integrados (navbar e footer)
✅ Navegação smooth scroll funcionando (desktop e mobile)
✅ Formulários de contato e lead capture funcionais
✅ Totalmente responsivo
✅ Imagens geradas via stock photos
✅ Testado end-to-end com sucesso

## Mudanças Recentes (Outubro 2025)

### Design e Branding
- ✅ Logo integrado no Navbar (branco no hero, colorido ao scrollar) e Footer (branco)
- ✅ Branding vermelho intensificado em todos os componentes
- ✅ Badges AR/VR agora com fundo vermelho vibrante
- ✅ Botões do Hero atualizados com tema vermelho principal
- ✅ Navegação mobile com smooth scroll implementado
- ✅ Todos os ícones e destaques em vermelho (hsl(0, 84%, 50%))

### Funcionalidades Home
- ✅ Slide dedicado a AR/VR adicionado ao Hero da página inicial com botão "Conhecer AR/VR"
- ✅ **Mapa do Google Maps integrado** na seção de contato mostrando localização exata (R. Cristovam Molinari, 50 - Morro da Glória)
- ✅ **Seção de contatos expandida** com informações detalhadas por departamento:
  - Vendas: Marcelo Nepomuceno, Vivian, Mariana
  - Financeiro/Faturamento: Jéssica, Anna
  - Atendimento ao Cliente: Lanuza
- ✅ **Redes sociais atualizadas no Footer**:
  - Removido: LinkedIn
  - Adicionado: WhatsApp (link direto para contato)
  - Atualizados: Links do Facebook e Instagram com URLs oficiais
- ✅ **Reorganização da seção de contatos**: Cards de departamentos movidos para logo após o cabeçalho, melhorando a hierarquia visual e facilitando o acesso rápido aos contatos por departamento
- ✅ **Correção de overflow de texto**: Implementado `break-words` e `break-all` nos cards de departamentos para garantir que emails e telefones longos quebrem corretamente sem ultrapassar os limites dos cards em qualquer tamanho de tela

### Expansão AR/VR (14/10/2025)
- ✅ **Mudança de nomenclatura**: Todos os formulários agora usam "Solicitar Orçamento" ao invés de "Solicitar Demonstração"
- ✅ **Biblioteca de Experiências AR** (`/ar-vr/biblioteca`):
  - Grid responsivo com cards de experiências
  - Filtros por categoria e nível de complexidade
  - Navegação integrada para páginas individuais
- ✅ **5 Páginas de Experiências AR Detalhadas**:
  - AR para Produtos Impressos: Vídeo & 3D (`/ar-vr/video-3d`)
  - Menu de Restaurante em AR (`/ar-vr/menu-restaurante`)
  - Jogo da Memória para Embalagens (`/ar-vr/jogo-memoria`)
  - Cartões de Visita com AR (`/ar-vr/cartao-visita`)
  - Imóveis em Realidade Aumentada (`/ar-vr/imoveis`)
- ✅ **Componente Reutilizável ExperienceDetailPage**:
  - Estrutura completa: Hero, Description, Overview, Features, QR Code, Lead Form
  - Suporte a diferentes níveis (basic, medium, advanced)
  - Integração com formulário de orçamento
- ✅ **Navegação Aprimorada**: Botão "Explorar Biblioteca Completa" na página AR/VR principal
- ✅ **Todas as rotas configuradas** no App.tsx
- ✅ **Testes E2E realizados com sucesso**: Navegação, filtros, formulários e visualização de experiências

## Próximas Melhorias Sugeridas
- Integração com backend real para formulários
- Sistema de filtros funcionais no portfólio
- Animações e transições mais elaboradas

## SEO para Imobiliárias/Construtoras (Implementado - 16/10/2025)
- ✅ **Meta tags otimizadas** para JF, RJ e SP
- ✅ **Schema.org completo**: LocalBusiness, Service, BreadcrumbList, Geo-tags
- ✅ **Open Graph** para WhatsApp, Facebook, LinkedIn
- ✅ **Keywords focadas**: realidade aumentada imóveis, tour virtual 3D, AR imobiliária, plantas baixas AR
- ✅ **Páginas otimizadas**:
  - Home: "Gráfica América | AR para Imóveis e Construtoras - JF, RJ e SP"
  - AR/VR: "Realidade Aumentada para Imóveis | Tour Virtual 3D"
  - Imóveis AR: "Tour Virtual AR para Imobiliárias | Juiz de Fora, RJ e SP"

## Imagens Reais da Estrutura (16/10/2025)
- ✅ 9 fotos profissionais da Gráfica América:
  - Fachada externa (prédio vermelho/cinza)
  - Recepção moderna com troféus
  - Salas de design e escritório
  - Escadaria com logo América
  - Quadro de medalhas e conquistas
  - Equipamentos: Impressora Offset RYOBI (2 modelos)
  - Máquina de Corte a Laser
  - Dobradeira industrial
- ✅ Imagens AR profissionais: LOTR poster, restaurante 3D, embalagens, cartão visita, imóveis

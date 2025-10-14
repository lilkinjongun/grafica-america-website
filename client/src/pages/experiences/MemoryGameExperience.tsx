import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/generated_images/product_packaging_samples_663bc71a.png';
import qrCodeImage from '@assets/stock_images/qr_code_black_and_wh_d280473f.jpg';

export default function MemoryGameExperience() {
  return (
    <ExperienceDetailPage
      title="Jogo da Memória para Embalagens"
      subtitle="Jogo interativo de memória com marca para embalagens de produtos"
      category="Packaging & Gamificação"
      level="advanced"
      heroImage={heroImage}
      description="Experimente este divertido jogo da memória, onde você deve combinar pares de animais em tempo recorde. Esta experiência foi projetada para dar vida a um pacote de biscoitos associado a uma marca de animais. A vantagem é que, a partir deste template, um jogo como este pode ser adaptado a qualquer tipo de marca e embalagem de produto de forma simples."
      overviewTitle="Visão Geral da Experiência"
      overviewContent={[
        'Neste caso, criamos um jogo com dinâmica de correspondência de peças, colocadas por rastreamento de imagem em um pacote de biscoitos. Uma experiência que pode ser claramente aplicada a projetos de embalagem para dinamizar produtos e o relacionamento com compradores.',
        'Também é uma experiência onde a lógica do jogo foi programada dentro do editor de código online da Onirix. Usando diferentes eventos e interações, modelos 3D com animações e o uso de variantes (texturas intercambiáveis), alcançamos uma dinâmica divertida que pode ser adaptada a uma infinidade de cenários potenciais.'
      ]}
      features={[
        'Dinâmica de jogo de memória com matching de pares',
        'Rastreamento de imagem em embalagens',
        'Modelos 3D com animações personalizadas',
        'Sistema de variantes com texturas intercambiáveis',
        'Lógica de jogo programável no editor online',
        'Temporizador e sistema de pontuação',
        'Adaptável a qualquer marca ou produto'
      ]}
      qrCodeImage={qrCodeImage}
      demoUrl="https://player.onirix.com/projects/56863ceaed454e9785fdc91b50b0a184/webar"
    />
  );
}

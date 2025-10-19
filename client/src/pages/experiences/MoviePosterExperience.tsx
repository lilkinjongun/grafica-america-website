import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import targetImage from '@assets/chaplin_poster_target.webp';

export default function MoviePosterExperience() {
  return (
    <ExperienceDetailPage
      title="Movie Poster in AR: The Gold Rush (Chaplin)"
      subtitle="Cena animada e música para dar vida ao poster do filme Gold Rush de Chaplin"
      category="Cinema & Entretenimento"
      level="basic"
      heroImage={heroImage}
      description="Esta é uma experiência simples, cujo objetivo é dar vida a um elemento físico representado por uma imagem visual, neste caso o poster de um filme mítico de Charles Chaplin. Graças à realidade aumentada web, podemos associar este poster a uma cena animada, onde diferentes elementos da imagem ganham vida."
      overviewTitle="Experience Overview"
      overviewContent={[
        'Neste caso, uma cena 3D é adicionada com uma série de animações já incluídas (o personagem de Chaplin acenando, letras com movimento e brilho, etc.); e um som de fundo também está associado à cena que fornece uma camada extra de comunicação com o usuário final.',
        'Exemplo de uma experiência relacionada ao mundo do marketing experiencial. Através da web AR, podemos dar vida a um conteúdo gráfico estático e, assim, transformar uma experiência como um poster de filme em um elemento que pode contar uma história mais elaborada e animada ao usuário final.'
      ]}
      features={[
        'Conteúdo 3D animado com múltiplas animações',
        'Sons e efeitos sincronizados com a cena',
        'Rastreamento de imagem (image tracking)',
        'Personagem animado (Chaplin acenando)',
        'Letras com movimento e efeitos de brilho',
        'Música de fundo em loop durante a experiência'
      ]}
      targetImage={targetImage}
    />
  );
}


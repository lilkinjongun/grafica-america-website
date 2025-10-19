import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import targetImage from '@assets/lotr_poster_target.webp';

export default function Video3DExperience() {
  return (
    <ExperienceDetailPage
      title="AR for Printed Products: Video & 3D"
      subtitle="Transforme imagens estáticas em experiências multimídia com trailers, vídeos e objetos 3D"
      category="Produtos Impressos"
      level="medium"
      heroImage={heroImage}
      description="Neste projeto, você verá uma imagem estática transformada em um famoso trailer de filme com efeitos de AR, mostrando as possibilidades da tecnologia para converter imagens impressas em uma tela digital, incluindo vídeos, objetos 3D e todos os tipos de interações."
      overviewTitle="Experience Overview"
      overviewContent={[
        'Através desta experiência, você verá o uso da tecnologia de rastreamento mundial (world tracking), implantando uma loja virtual na superfície que você escolher.',
        'Uma vez na loja, você pode selecionar o produto que deseja explorar e ver como toda a cena é transformada: desde o 3D principal até as imagens nas paredes virtuais. Isso pode ser feito graças à nossa ação "Toggle visibility" vinculada a um evento de clique.',
        'Finalmente, você verá um Call-to-action ao lado de cada produto para implantar um cartão de informações com uma imagem do produto e uma descrição completa.',
        'Quer reduzir o tempo de carregamento? Agora você pode fazer isso através da documentação sobre lazy loading e criação dinâmica de elementos.'
      ]}
      features={[
        'Rastreamento mundial (World Tracking) para posicionamento preciso',
        'Vídeos em alta definição sobrepostos a imagens impressas',
        'Modelos 3D interativos com animações',
        'Toggle de visibilidade para alternar entre conteúdos',
        'Cartões de informação com Call-to-Action',
        'Otimização de carregamento com lazy loading'
      ]}
      targetImage={targetImage}
      demoUrl="https://player.onirix.com/projects/944721d500c34cdaac3a9bdcb9a8cd23/webar"
    />
  );
}


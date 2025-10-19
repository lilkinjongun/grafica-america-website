import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import qrCodeImage from '@assets/stock_images/qr_code_black_and_wh_d280473f.jpg';
import targetImage from '@assets/business_card_target.webp';

export default function BusinessCardExperience() {
  return (
    <ExperienceDetailPage
      title="Business Card with Augmented Reality"
      subtitle="Cartões que ganham vida com vídeos, modelos 3D e links interativos"
      category="Marketing & Networking"
      level="basic"
      heroImage={heroImage}
      description="Eventos, networking, reuniões... Depois de um período turbulento, tudo volta, assim como os cartões de visita. O que mudou é a maneira pela qual esses cartões podem transmitir uma mensagem diferenciada, graças à AR. Por exemplo, nosso próprio cartão Onirix, dê uma olhada!"
      overviewTitle="Visão Geral da Experiência"
      overviewContent={[
        'Esta é uma experiência simples de realidade aumentada onde um cartão de visita foi projetado para ganhar vida e trazer valor extra ao seu destinatário. Isso os fará manter seu negócio em mente de forma mais clara e impactante.',
        'Adicionamos um design ao qual inicialmente sobrepusemos um vídeo animado (o personagem começa a se mover) e depois um modelo 3D animado (o robô neste caso sai do cartão e começa a girar e pular).',
        'No final, também adicionamos dois botões para ter acesso às informações da empresa: um botão para acessar o LinkedIn e outro para acessar o site. Uma maneira eficaz de oferecer informações mais valiosas do que qualquer outro cartão normalmente oferece.'
      ]}
      features={[
        'Vídeo de apresentação animado sobre o cartão',
        'Modelos 3D interativos que "saem" do cartão',
        'Animações sincronizadas (personagem e robô)',
        'Botões de acesso direto ao LinkedIn',
        'Link direto para website corporativo',
        'Experiência memorável que diferencia seu networking',
        'Implementação simples e rápida'
      ]}
      qrCodeImage={qrCodeImage}
      targetImage={targetImage}
      demoUrl="https://player.onirix.com/projects/df6fea9b217846fab93f0490305e1539/webar"
    />
  );
}

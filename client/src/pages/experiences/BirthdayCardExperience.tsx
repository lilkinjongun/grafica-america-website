import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import targetImage from '@assets/birthday_card_target.webp';

export default function BirthdayCardExperience() {
  return (
    <ExperienceDetailPage
      title="Augmented Birthday Wishes Card"
      subtitle="Uma nova forma divertida de enviar desejos de aniversário com conteúdo animado e personalizado"
      category="Marketing"
      level="basic"
      heroImage={heroImage}
      description="Uma nova forma divertida de enviar desejos de aniversário! Adicionando conteúdo animado, contando histórias e até adicionando suas próprias fotos e vídeos para tornar os desejos muito mais pessoais."
      overviewTitle="Experience Overview"
      overviewContent={[
        'Sempre que a data especial chega, sempre procuramos maneiras diferentes de surpreender e nos aproximar das pessoas que mais amamos. Cartões de aniversário podem nos ajudar a enviar uma mensagem que gera mais impacto, e graças à realidade aumentada podemos adicionar uma mensagem oculta que nossos destinatários nunca esquecerão.',
        'Para designers gráficos ou empresas de impressão, a realidade aumentada web traz novo valor aos seus serviços já existentes. Transforme cartões de aniversário tradicionais em experiências memoráveis e interativas.'
      ]}
      features={[
        'Conteúdo animado personalizado',
        'Possibilidade de adicionar fotos e vídeos próprios',
        'Mensagens ocultas reveladas em AR',
        'Experiência memorável e emocionante',
        'Fácil de compartilhar digitalmente',
        'Valor agregado para serviços de design gráfico'
      ]}
      targetImage={targetImage}
    />
  );
}


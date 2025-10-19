import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/stock_images/augmented_reality_te_97825157.jpg';
import qrCodeImage from '@assets/stock_images/qr_code_black_and_wh_d280473f.jpg';

export default function RestaurantMenuExperience() {
  return (
    <ExperienceDetailPage
      title="Restaurant Menu for Web AR"
      subtitle="Cardápios aumentados que trazem pratos à vida com visualização 3D"
      category="Gastronomia"
      level="medium"
      heroImage={heroImage}
      description="Com este template você pode criar um menu de realidade aumentada para o restaurante de seus clientes. Adapte as cores e elementos de marca e adicione pratos 3D para dar vida ao menu."
      overviewTitle="Visão Geral da Experiência"
      overviewContent={[
        'Menu de realidade aumentada para dar vida aos pratos de restaurante. Ao acessar nosso editor de código online, você pode modificar toda a aparência deste template e adaptá-lo às necessidades de qualquer cliente, suas cores e sua marca.',
        'Possui também a funcionalidade de Lazy Loading que nos permite carregar conteúdo AR dinamicamente. Dessa forma, o tempo de espera do usuário é o mesmo, independentemente de seu menu ter 5 pratos ou 30. A espera será sempre mínima.'
      ]}
      features={[
        'Visualização 3D realista de pratos e bebidas',
        'Sistema de Lazy Loading para menus extensos',
        'Personalização total de cores e marca',
        'Editor de código online para customização',
        'Compatível com qualquer cardápio impresso',
        'Tempo de carregamento otimizado independente da quantidade de itens'
      ]}
      qrCodeImage={qrCodeImage}
      targetImage={heroImage}
      demoUrl="https://player.onirix.com/projects/5abd0c8df43048febf355e2c9c2cf122/webar"
    />
  );
}

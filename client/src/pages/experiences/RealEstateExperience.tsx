import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import heroImage from '@assets/stock_images/real_estate_augmente_5ba68dbf.jpg';
import qrCodeImage from '@assets/stock_images/qr_code_black_and_wh_d280473f.jpg';

export default function RealEstateExperience() {
  return (
    <ExperienceDetailPage
      title="Imóveis em Realidade Aumentada"
      subtitle="Tours virtuais 3D e visualização de propriedades com AR"
      category="Real Estate"
      level="medium"
      heroImage={heroImage}
      description="Transforme plantas baixas e folders imobiliários em experiências imersivas de visualização de propriedades. Clientes podem explorar imóveis completos em 3D antes mesmo de visitar, ver diferentes acabamentos e acessar informações detalhadas de cada ambiente."
      overviewTitle="Visão Geral da Experiência"
      overviewContent={[
        'Experiência de realidade aumentada especialmente desenvolvida para o mercado imobiliário, permitindo que compradores visualizem propriedades de forma interativa através de materiais impressos.',
        'Ao escanear uma planta baixa ou folder imobiliário, os usuários podem fazer tours virtuais 3D completos da propriedade, ver diferentes opções de acabamento, acessar galerias de fotos 360° e obter informações detalhadas sobre cada ambiente.',
        'A tecnologia permite visualizar móveis e decoração em espaços vazios (virtual staging), testar se móveis do cliente cabem nos ambientes, e até mesmo pré-vender projetos em desenvolvimento mostrando o resultado final antes da construção.',
        'Solução ideal para imobiliárias que desejam oferecer experiências diferenciadas, alcançar clientes internacionais com tours remotos e acelerar o ciclo de vendas através de visualizações imersivas.'
      ]}
      features={[
        'Tour virtual 3D completo ao escanear planta baixa',
        'Visualização de diferentes opções de acabamento',
        'Informações interativas sobre cada ambiente',
        'Galeria de fotos 360° integrada',
        'Virtual staging com móveis e decoração',
        'Teste de compatibilidade de móveis do cliente',
        'Pré-venda de projetos em desenvolvimento',
        'Acesso remoto para clientes internacionais',
        'Disponível 24/7 sem necessidade de agente',
        'Transformação de placas de venda em portais digitais'
      ]}
      qrCodeImage={qrCodeImage}
      demoUrl="#"
    />
  );
}

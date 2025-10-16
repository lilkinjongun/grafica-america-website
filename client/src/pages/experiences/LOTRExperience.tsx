import ExperienceDetailPage from '@/components/ExperienceDetailPage';
import SEO from '@/components/SEO';
import lotrImage from '@assets/stock_images/lord_of_the_rings_mo_4cbeeeb1.jpg';

export default function LOTRExperience() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AR para Cinema e Entretenimento - Lord of the Rings",
    "description": "Experiência de Realidade Aumentada para pôsteres e materiais promocionais de filmes. Transforme pôsteres estáticos em trailers interativos com AR.",
    "provider": {
      "@type": "Organization",
      "name": "Gráfica América"
    },
    "areaServed": ["Juiz de Fora", "Rio de Janeiro", "São Paulo"],
    "serviceType": "Realidade Aumentada para Cinema, Marketing de Filmes, AR Entretenimento"
  };

  return (
    <>
      <SEO
        title="AR para Cinema: Lord of the Rings | Pôsteres Interativos | Gráfica América"
        description="Transforme pôsteres de filmes em experiências AR interativas. Trailers, making-of e conteúdo exclusivo ao escanear o material impresso. Ideal para cinemas, distribuidoras e eventos."
        keywords="AR cinema, realidade aumentada filmes, pôster interativo, marketing filmes AR, Lord of the Rings AR, trailer AR, entretenimento AR"
        schema={schema}
      />
      <ExperienceDetailPage
        title="Lord of the Rings: Pôster AR"
        subtitle="Transforme pôsteres de filmes em portais para conteúdo exclusivo"
        category="Cinema & Entretenimento"
        level="advanced"
        heroImage={lotrImage}
        description="Experiência de Realidade Aumentada que transforma pôsteres de filmes em experiências interativas. Ao escanear o material impresso, o público acessa trailers, making-of, entrevistas e conteúdo exclusivo, criando uma conexão emocional profunda com a obra."
        overviewTitle="Como funciona?"
        overviewContent={[
          "Esta experiência foi criada para materiais promocionais de filmes, especialmente para grandes produções como The Lord of the Rings. O objetivo é transformar um simples pôster em um portal de engajamento.",
          "Ao escanear o pôster com o celular, o usuário tem acesso instantâneo a trailers em alta definição, cenas dos bastidores, entrevistas com o elenco e até mesmo modelos 3D de personagens icônicos.",
          "A tecnologia de World Tracking permite que elementos virtuais sejam sobrepostos ao mundo real, criando uma experiência verdadeiramente imersiva que vai além do papel impresso."
        ]}
        features={[
          "Trailers em alta definição sobrepostos ao pôster",
          "Making-of exclusivo e cenas dos bastidores",
          "Modelos 3D interativos de personagens",
          "Galeria de imagens e concept art",
          "Links diretos para compra de ingressos",
          "Compartilhamento social integrado",
          "World Tracking para experiência imersiva",
          "Compatível com qualquer material impresso"
        ]}
        markerImage={lotrImage}
        videoUrl=""
      />
    </>
  );
}

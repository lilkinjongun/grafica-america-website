import PortfolioGallery from '../PortfolioGallery';
import img1 from '@assets/generated_images/business_cards_and_brochures_164696ab.png';
import img2 from '@assets/generated_images/product_packaging_samples_663bc71a.png';
import img3 from '@assets/generated_images/banners_and_signage_98280056.png';
import img4 from '@assets/generated_images/brochures_and_catalogs_3c7bdcb7.png';

export default function PortfolioGalleryExample() {
  const items = [
    { id: 1, image: img1, title: 'Cartões de Visita Premium', category: 'Cartões' },
    { id: 2, image: img2, title: 'Embalagens Personalizadas', category: 'Embalagens' },
    { id: 3, image: img3, title: 'Banners Externos', category: 'Sinalização' },
    { id: 4, image: img4, title: 'Catálogos Corporativos', category: 'Catálogos' },
    { id: 5, image: img1, title: 'Material Corporativo', category: 'Cartões' },
    { id: 6, image: img2, title: 'Caixas e Boxes', category: 'Embalagens' },
  ];

  return <PortfolioGallery items={items} />;
}

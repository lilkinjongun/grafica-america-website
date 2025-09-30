import ContactSection from '../ContactSection';

export default function ContactSectionExample() {
  const contactInfo = {
    address: 'Rua Christovam Molinari, 50, Morro da Glória - CEP: 36035-125, Juiz de Fora - MG',
    phone: '(32) 3257-8000',
    email: 'contato@graficaamerica.com.br',
    hours: 'Segunda a Sexta: 8h às 18h'
  };

  return <ContactSection contactInfo={contactInfo} />;
}

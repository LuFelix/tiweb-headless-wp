export const LISA_WHATSAPP_NUMBER = '5582982179000';

export const getLisaWhatsAppUrl = (customMessage?: string): string => {
  const message =
    customMessage ||
    'Olá Lisa! Vim pelo portal da TIWEB e gostaria de saber mais sobre as soluções de IA e engenharia.';
  return `https://wa.me/${LISA_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

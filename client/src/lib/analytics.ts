export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }
};

// Adicione ao arquivo de tipos globais
declare global {
  interface Window {
    dataLayer: any[];
  }
}


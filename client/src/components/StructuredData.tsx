import { useEffect } from 'react';

interface StructuredDataProps {
  data: any;
}

export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    let scriptTag = document.querySelector('script[type="application/ld+json"][data-structured-data]');
    
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-structured-data', 'true');
      document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(data);
    
    return () => {
      const existingScript = document.querySelector('script[type="application/ld+json"][data-structured-data]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
}


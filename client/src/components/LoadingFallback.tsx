import { Loader2 } from 'lucide-react';

interface LoadingFallbackProps {
  message?: string;
}

export default function LoadingFallback({ message = "Carregando..." }: LoadingFallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
        <p className="text-muted-foreground text-lg">{message}</p>
      </div>
    </div>
  );
}


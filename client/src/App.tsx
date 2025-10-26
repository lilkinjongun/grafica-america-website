import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingFallback from "@/components/LoadingFallback";

// Lazy load de páginas principais
const Home = lazy(() => import("@/pages/Home"));
const ARVRPage = lazy(() => import("@/pages/ARVRPage"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Lazy load de páginas de experiências AR/VR
const Video3DExperience = lazy(() => import("@/pages/experiences/Video3DExperience"));
const RestaurantMenuExperience = lazy(() => import("@/pages/experiences/RestaurantMenuExperience"));
const MemoryGameExperience = lazy(() => import("@/pages/experiences/MemoryGameExperience"));
const BusinessCardExperience = lazy(() => import("@/pages/experiences/BusinessCardExperience"));
const RealEstateExperience = lazy(() => import("@/pages/experiences/RealEstateExperience"));
const LOTRExperience = lazy(() => import("@/pages/experiences/LOTRExperience"));
const MoviePosterExperience = lazy(() => import("@/pages/experiences/MoviePosterExperience"));
const BirthdayCardExperience = lazy(() => import("@/pages/experiences/BirthdayCardExperience"));

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ar-vr" component={ARVRPage} />
        <Route path="/ar-vr/video-3d" component={Video3DExperience} />
        <Route path="/ar-vr/menu-restaurante" component={RestaurantMenuExperience} />
        <Route path="/ar-vr/jogo-memoria" component={MemoryGameExperience} />
        <Route path="/ar-vr/cartao-visita" component={BusinessCardExperience} />
        <Route path="/ar-vr/imoveis" component={RealEstateExperience} />
        <Route path="/ar-vr/lotr" component={LOTRExperience} />
        <Route path="/ar-vr/movie-poster" component={MoviePosterExperience} />
        <Route path="/ar-vr/birthday-card" component={BirthdayCardExperience} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;


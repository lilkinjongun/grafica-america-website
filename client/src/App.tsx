import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ARVRPage from "@/pages/ARVRPage";
import Video3DExperience from "@/pages/experiences/Video3DExperience";
import RestaurantMenuExperience from "@/pages/experiences/RestaurantMenuExperience";
import MemoryGameExperience from "@/pages/experiences/MemoryGameExperience";
import BusinessCardExperience from "@/pages/experiences/BusinessCardExperience";
import RealEstateExperience from "@/pages/experiences/RealEstateExperience";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/ar-vr" component={ARVRPage} />
      <Route path="/ar-vr/video-3d" component={Video3DExperience} />
      <Route path="/ar-vr/menu-restaurante" component={RestaurantMenuExperience} />
      <Route path="/ar-vr/jogo-memoria" component={MemoryGameExperience} />
      <Route path="/ar-vr/cartao-visita" component={BusinessCardExperience} />
      <Route path="/ar-vr/imoveis" component={RealEstateExperience} />
      <Route component={NotFound} />
    </Switch>
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

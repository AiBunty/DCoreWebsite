import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import BookDemo from "./pages/BookDemo";
import Compare from "./pages/Compare";

// Comparison Pages
import CompareFlexifunnels from "./pages/compare/Flexifunnels";
import CompareTagMango from "./pages/compare/TagMango";
import CompareGraphy from "./pages/compare/Graphy";
import CompareGoHighLevel from "./pages/compare/GoHighLevel";
import CompareKajabi from "./pages/compare/Kajabi";
import CompareAiSensy from "./pages/compare/AiSensy";
import CompareSkool from "./pages/compare/Skool";

// Solution Pages
import Coaches from "./pages/solutions/Coaches";
import RealEstate from "./pages/solutions/RealEstate";
import Fitness from "./pages/solutions/Fitness";
import Consultants from "./pages/solutions/Consultants";
import Events from "./pages/solutions/Events";
import Agencies from "./pages/solutions/Agencies";

// Admin Pages
import ProcessMascot from "./pages/admin/ProcessMascot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-demo" element={<BookDemo />} />
          
          {/* Compare Routes */}
          <Route path="/compare" element={<Compare />} />
          <Route path="/compare/flexifunnels" element={<CompareFlexifunnels />} />
          <Route path="/compare/tagmango" element={<CompareTagMango />} />
          <Route path="/compare/graphy" element={<CompareGraphy />} />
          <Route path="/compare/gohighlevel" element={<CompareGoHighLevel />} />
          <Route path="/compare/kajabi" element={<CompareKajabi />} />
          <Route path="/compare/aisensy" element={<CompareAiSensy />} />
          <Route path="/compare/skool" element={<CompareSkool />} />
          
          {/* Solution Routes */}
          <Route path="/solutions/coaches" element={<Coaches />} />
          <Route path="/solutions/real-estate" element={<RealEstate />} />
          <Route path="/solutions/fitness" element={<Fitness />} />
          <Route path="/solutions/consultants" element={<Consultants />} />
          <Route path="/solutions/events" element={<Events />} />
          <Route path="/solutions/agencies" element={<Agencies />} />
          
          {/* Admin Routes */}
          <Route path="/admin/process-mascot" element={<ProcessMascot />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

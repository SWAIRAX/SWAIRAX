import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Clients from '@/pages/clients';
import Industries from '@/pages/Industries';
import FinancialServices from '@/pages/industries/FinancialServices';
import Telecommunications from '@/pages/industries/Telecommunications';
import EducationServices from '@/pages/industries/EducationServices';
import Utilities from '@/pages/industries/Utilities';
import RetailLogistics from '@/pages/industries/RetailLogistics';
import HealthcarePharmacy from '@/pages/industries/HealthcarePharmacy';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/telecommunications" element={<Telecommunications />} />
          <Route path="/industries/education-services" element={<EducationServices />} />
          <Route path="/industries/utilities" element={<Utilities />} />
          <Route path="/industries/retail-logistics" element={<RetailLogistics />} />
          <Route path="/industries/healthcare-pharmacy" element={<HealthcarePharmacy />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

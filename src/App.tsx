import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
import AIStudio from '@/pages/AIStudio';
import MLOps from '@/pages/MLOps';
import MLOpsDevOps from '@/pages/MLOpsDevOps';
import QuantumGenAI from '@/pages/QuantumGenAI';
import QuantumAnalytics from '@/pages/QuantumAnalytics';
import QuantumAnnotate from '@/pages/QuantumAnnotate';
import BusinessAnalysis from '@/pages/BusinessAnalysis';
import TryNow from '@/pages/TryNow';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import FAQ from '@/pages/FAQ';
import Glossary from '@/pages/Glossary';
import Research from '@/pages/Research';
import ResearchDetail from '@/pages/ResearchDetail';
import BlogDetail from '@/pages/BlogDetail';
import Partnerships from '@/pages/Partnerships';
import { initScrollReveal } from "./hooks/useScrollReveal";
import { setSEO, pageSEO } from "@/utils/seo";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    // Set SEO based on current route
    const pathname = location.pathname;

    if (pathname === "/") {
      setSEO(pageSEO.home);
    } else if (pathname === "/services") {
      setSEO(pageSEO.services);
    } else if (pathname === "/about") {
      setSEO(pageSEO.about);
    } else if (pathname === "/contact") {
      setSEO(pageSEO.contact);
    } else if (pathname === "/blog") {
      setSEO(pageSEO.blog);
    } else if (pathname === "/careers") {
      setSEO(pageSEO.careers);
    } else if (pathname === "/industries") {
      setSEO(pageSEO.industries);
    } else if (pathname === "/ai-studio") {
      setSEO(pageSEO.aiStudio);
    } else if (pathname === "/mlops") {
      setSEO(pageSEO.mlops);
    } else if (pathname === "/quantum-genai") {
      setSEO(pageSEO.quantumGenAI);
    } else if (pathname === "/deep-operator") {
      setSEO(pageSEO.quantumAnalytics);
    } else if (pathname === "/quantum-annotate") {
      setSEO(pageSEO.quantumAnnotate);
    } else if (pathname === "/resources") {
      setSEO(pageSEO.resources);
    } else if (pathname === "/privacy") {
      setSEO(pageSEO.privacy);
    } else if (pathname === "/terms") {
      setSEO(pageSEO.terms);
    } else if (pathname === "/faq") {
      setSEO(pageSEO.faq);
    }

    // Scroll reveal
    const stop = initScrollReveal({
      autoAttach: true,
      selector:
        '[data-scroll-reveal], section, article, .feature-card, .solution-card, .partner-card, .metric-card, .card',
    });

    return () => {
      if (typeof stop === "function") stop();
    };
  }, [location.pathname]);

  return (
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
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ai-studio" element={<AIStudio />} />
      <Route path="/mlops" element={<MLOps />} />
      <Route path="/mlops-devops" element={<MLOpsDevOps />} />
      <Route path="/quantum-genai" element={<QuantumGenAI />} />
      <Route path="/deep-operator" element={<QuantumAnalytics />} />
      <Route path="/quantum-annotate" element={<QuantumAnnotate />} />
      <Route path="/business-analysis" element={<BusinessAnalysis />} />
      <Route path="/try-now" element={<TryNow />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/glossary" element={<Glossary />} />
      <Route path="/research" element={<Research />} />
      <Route path="/research/:solutionName" element={<ResearchDetail />} />
      <Route path="/partnerships" element={<Partnerships />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

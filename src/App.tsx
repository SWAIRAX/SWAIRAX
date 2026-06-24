import { useEffect, lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// Home + 404 stay eager (landing page + fallback); everything else is
// code-split so it isn't shipped in the initial bundle.
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Products = lazy(() => import("./pages/Products"));
const Sectors = lazy(() => import("./pages/Sectors"));
const SectorDetail = lazy(() => import("./pages/SectorDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const Resources = lazy(() => import("./pages/Resources"));
const Blog = lazy(() => import("./pages/Blog"));
const Clients = lazy(() => import("@/pages/clients"));
const Industries = lazy(() => import("@/pages/Industries"));
const FinancialServices = lazy(() => import("@/pages/industries/FinancialServices"));
const Telecommunications = lazy(() => import("@/pages/industries/Telecommunications"));
const EducationServices = lazy(() => import("@/pages/industries/EducationServices"));
const Utilities = lazy(() => import("@/pages/industries/Utilities"));
const RetailLogistics = lazy(() => import("@/pages/industries/RetailLogistics"));
const HealthcarePharmacy = lazy(() => import("@/pages/industries/HealthcarePharmacy"));
const AIStudio = lazy(() => import("@/pages/AIStudio"));
const MLOps = lazy(() => import("@/pages/MLOps"));
const MLOpsDevOps = lazy(() => import("@/pages/MLOpsDevOps"));
const QuantumGenAI = lazy(() => import("@/pages/QuantumGenAI"));
const QuantumAnalytics = lazy(() => import("@/pages/QuantumAnalytics"));
const QuantumAnnotate = lazy(() => import("@/pages/QuantumAnnotate"));
const BusinessAnalysis = lazy(() => import("@/pages/BusinessAnalysis"));
const TryNow = lazy(() => import("@/pages/TryNow"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const Glossary = lazy(() => import("@/pages/Glossary"));
const Research = lazy(() => import("@/pages/Research"));
const ResearchDetail = lazy(() => import("@/pages/ResearchDetail"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const Partnerships = lazy(() => import("@/pages/Partnerships"));
const OurWork = lazy(() => import("@/pages/OurWork"));
const MfumoSMS = lazy(() => import("@/pages/MfumoSMS"));
const MifumoLabs = lazy(() => import("@/pages/MifumoLabs"));
const KinaraCopilot = lazy(() => import("@/pages/KinaraCopilot"));
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
    } else if (pathname === "/products") {
      setSEO(pageSEO.products);
    } else if (pathname === "/sectors") {
      setSEO(pageSEO.sectors);
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
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sectors" element={<Sectors />} />
      <Route path="/sectors/:slug" element={<SectorDetail />} />
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
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/mfumo-sms" element={<MfumoSMS />} />
      <Route path="/mfumo-labs" element={<MifumoLabs />} />
      <Route path="/kinara-copilot" element={<KinaraCopilot />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  );
};

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem={false}
    storageKey="swairax-theme"
    disableTransitionOnChange
  >
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          <Analytics />
          <SpeedInsights />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;

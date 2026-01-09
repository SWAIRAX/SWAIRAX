import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";
import {
  Zap,
  Grid3X3,
  BarChart3,
  AlertTriangle,
  Droplets,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Utilities = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const solutions = [
    {
      title: "Smart Grid Management",
      description: "AI-powered grid optimization and demand forecasting for efficient energy distribution",
      icon: Grid3X3,
      features: ["Load Balancing", "Demand Forecasting", "Grid Optimization"]
    },
    {
      title: "Consumption Analytics",
      description: "Advanced analytics for energy and water usage patterns and efficiency optimization",
      icon: BarChart3,
      features: ["Usage Patterns", "Efficiency Insights", "Cost Optimization"]
    },
    {
      title: "Predictive Fault Detection",
      description: "Early detection and prevention of equipment failures and service disruptions",
      icon: AlertTriangle,
      features: ["Equipment Monitoring", "Failure Prevention", "Maintenance Scheduling"]
    },
    {
      title: "Resource Management",
      description: "Intelligent management of water, electricity, and other essential public services",
      icon: Droplets,
      features: ["Resource Allocation", "Quality Monitoring", "Distribution Optimization"]
    }
  ];

  const outcomes = [
    {
      title: "Smart Grid",
      result: "Balanced load",
      description: "AI will forecast demand and route power before peaks hit."
    },
    {
      title: "Fault Detection",
      result: "Fewer outages",
      description: "Sensors will flag failures early so crews fix them faster."
    },
    {
      title: "Consumption Analytics",
      result: "Efficient use",
      description: "Usage insights will trim waste and smooth demand curves."
    },
    {
      title: "Resource Management",
      result: "Reliable supply",
      description: "Water and power flows will re-route around disruptions."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-28 pb-10 md:pb-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[300px] bg-gradient-to-b from-red-600/15 via-red-500/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-700/10 via-red-600/10 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-center shadow-lg shadow-red-600/40">
              <Zap className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Utilities
            </Badge>

            <SectionHeading className="text-white text-left">
              From electricity, to water supplies to
              <span className="bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"> Public Services</span>
            </SectionHeading>

            <SectionLead className="max-w-3xl text-muted-foreground text-left mx-0">
              Optimize your utility operations with AI-powered smart grid management,
              predictive maintenance, and intelligent resource allocation for essential services.
            </SectionLead>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-500 hover:to-red-300 text-white"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
                className="border-white/20 text-white hover:bg-white/10"
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative py-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-left mb-10 max-w-4xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
              AI for Utilities, built with research-grade rigor
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We build resilient AI for grids and water—demand-aware balancing, early fault flags, and routing that keeps services steady.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We will tailor smart grid forecasting, fault detection, consumption analytics, and resource routing to your operations. Some capabilities may be phased or co-developed with partners—let's align on what moves the needle fastest.
            </p>
          </div>
        </div>
      </section>

      {/* Future Outcomes */}
      <section className="relative py-20 bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-black overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-red-500 to-white bg-clip-text text-transparent">
              What AI will do for Utilities
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Future-state outcomes you can expect as we deploy AI across your grid
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left text-muted-foreground">
            {outcomes.map((item, index) => (
              <p key={item.title} className="text-sm md:text-base leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                <span className="text-white font-semibold">{item.title}:</span> {item.result}. {item.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700/15 via-red-600/10 to-red-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Partner with Quantum Intelligence in transforming your industry
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to modernize your utility operations with AI? Let's discuss how we can help you
              improve efficiency, reduce costs, and enhance service reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-500 hover:to-red-300 text-white px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Estimate Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
                className="px-8 py-6 text-base font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Utilities;

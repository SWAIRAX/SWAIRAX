import { useNavigate } from "react-router-dom";
import { openMeeting } from "@/utils/meeting";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CTASection from "@/components/CTASection";
import Parallax from "@/components/Parallax";
import { SectionHeading, SectionLead, Section, Heading } from "@/components/typography";
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[300px] bg-gradient-to-b from-secondary-accent/10 via-secondary-accent/5 to-transparent pointer-events-none" />
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-transparent" />
        </Parallax>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <Zap className="h-6 w-6 text-primary-foreground" />
            </div>

            <SectionHeading className="text-foreground text-left">
              From electricity, to water supplies to
              Public Services
            </SectionHeading>

            <SectionLead className="max-w-3xl text-muted-foreground text-left mx-0">
              Optimize your utility operations with AI-powered smart grid management,
              predictive maintenance, and intelligent resource allocation for essential services.
            </SectionLead>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => openMeeting()}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
                className="border-border text-foreground hover:bg-muted"
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
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-card rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-left mb-10 max-w-4xl mx-auto space-y-4">
            <Heading as="h2" size="h2" className="mb-2">
              AI for Utilities, built with research-grade rigor
            </Heading>
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
      <section className="relative py-20 bg-card overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">
              What AI will do for Utilities
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              Future-state outcomes you can expect as we deploy AI across your grid
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left text-muted-foreground">
            {outcomes.map((item, index) => (
              <p key={item.title} className="text-sm md:text-base leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                <span className="text-foreground font-semibold">{item.title}:</span> {item.result}. {item.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Partner with SWAIRAX in transforming your industry"
        description="Ready to modernize your utility operations with AI? Let's discuss how we can help you improve efficiency, reduce costs, and enhance service reliability."
        primary={{ label: "Estimate Project", href: "/contact" }}
        secondary={{ label: "View Solutions", href: "#solutions" }}
      />

      <Footer />
    </div>
  );
};

export default Utilities;

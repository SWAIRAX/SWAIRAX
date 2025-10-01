import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  Radio,
  GraduationCap,
  Zap,
  Package,
  Heart,
  ArrowRight
} from "lucide-react";

const Industries = () => {
  const navigate = useNavigate();

  const industries = [
    {
      id: "financial-services",
      name: "Financial Services",
      tagline: "Getting easy with the payment sector",
      description: "Intelligent automation, fraud detection, and financial analytics solutions that transform banking and payment systems.",
      icon: Banknote,
      color: "from-blue-500 to-indigo-600",
      features: ["Fraud Detection", "Payment Processing", "Risk Analytics", "Digital Banking"]
    },
    {
      id: "telecommunications",
      name: "Telecommunications",
      tagline: "Everything that involves communication",
      description: "Network optimization, customer support automation, and real-time data routing for seamless connectivity.",
      icon: Radio,
      color: "from-purple-500 to-violet-600",
      features: ["Network Optimization", "Support Automation", "Data Routing", "5G Infrastructure"]
    },
    {
      id: "education-services",
      name: "Education Services",
      tagline: "Everything that involves Learning and students",
      description: "Adaptive learning platforms, AI tutors, and automated grading systems for modern education.",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-600",
      features: ["Adaptive Learning", "AI Tutoring", "Grade Automation", "Student Analytics"]
    },
    {
      id: "utilities",
      name: "Utilities",
      tagline: "From electricity, to water supplies to public services",
      description: "Smart grid management, consumption analytics, and predictive fault detection for essential services.",
      icon: Zap,
      color: "from-yellow-500 to-orange-600",
      features: ["Smart Grids", "Usage Analytics", "Fault Detection", "Resource Management"]
    },
    {
      id: "retail-logistics",
      name: "Retail & Logistics",
      tagline: "Great brands who chose secure data",
      description: "Inventory prediction, delivery optimization, and personalized e-commerce experiences.",
      icon: Package,
      color: "from-red-500 to-pink-600",
      features: ["Inventory Prediction", "Route Optimization", "E-commerce AI", "Supply Chain"]
    },
    {
      id: "healthcare-pharmacy",
      name: "Healthcare & Pharmacy",
      tagline: "Health sector covered",
      description: "Computer vision diagnostics, patient data systems, and prescription automation for better healthcare.",
      icon: Heart,
      color: "from-teal-500 to-cyan-600",
      features: ["Medical Imaging", "Patient Systems", "Drug Discovery", "Clinical Analytics"]
    }
  ];

  const handleExploreIndustry = (industryId: string) => {
    navigate(`/industries/${industryId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[url('/uploads/Hero%20Illustration%20F1.svg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 text-xs font-medium">
              Industry Solutions
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Industries We Empower
            </h1>
            <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
              Custom AI solutions designed for your sector's needs. From healthcare to finance,
              we deliver intelligent systems that transform how industries operate.
            </p>
            <Button
              size="sm"
              onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              Explore Sectors
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="sectors" className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">
              Transforming Industries with AI
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Discover how our specialized solutions are revolutionizing different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={industry.id}
                  className="group cursor-pointer hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleExploreIndustry(industry.id)}
                >
                  <CardContent className="p-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                      {industry.name}
                    </h3>

                    <p className="text-xs text-muted-foreground font-medium mb-3 italic">
                      {industry.tagline}
                    </p>

                    <p className="text-muted-foreground mb-4 line-clamp-3 text-xs">
                      {industry.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {industry.features.slice(0, 2).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {industry.features.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{industry.features.length - 2} more
                        </Badge>
                      )}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      Explore Solutions
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with Quantum Intelligence to unlock the power of AI in your sector.
            Let's build the future together.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;

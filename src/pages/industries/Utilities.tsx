import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
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

  const caseStudies = [
    {
      title: "Smart Grid Implementation",
      result: "25% reduction in energy waste",
      description: "Deployed AI-powered grid management system for a regional utility company"
    },
    {
      title: "Water Management System",
      result: "40% faster leak detection",
      description: "Implemented predictive maintenance system for municipal water infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/5 to-primary/10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
              <Zap className="h-10 w-10 text-white" />
            </div>
            
            <Badge variant="outline" className="mb-4">
              Utilities
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              From electricity, to water supplies to 
              <span className="bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent"> Public Services</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Optimize your utility operations with AI-powered smart grid management, 
              predictive maintenance, and intelligent resource allocation for essential services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Solutions for Utilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technologies for efficient and sustainable utility management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={solution.title}
                  className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">
                      {solution.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from our utility clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="text-3xl font-bold text-yellow-600 mb-4">{study.result}</div>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Quantum Intelligence in transforming your industry
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to modernize your utility operations with AI? Let's discuss how we can help you 
            improve efficiency, reduce costs, and enhance service reliability.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Utilities;
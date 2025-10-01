import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  TrendingUp,
  Route,
  ShoppingCart,
  Warehouse,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const RetailLogistics = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Inventory Prediction",
      description: "AI-powered demand forecasting and inventory optimization for reduced costs",
      icon: TrendingUp,
      features: ["Demand Forecasting", "Stock Optimization", "Seasonal Analysis"]
    },
    {
      title: "Delivery Route Optimization",
      description: "Smart routing algorithms for efficient logistics and faster delivery times",
      icon: Route,
      features: ["Route Planning", "Traffic Analysis", "Cost Reduction"]
    },
    {
      title: "Personalized E-commerce",
      description: "AI-driven product recommendations and personalized shopping experiences",
      icon: ShoppingCart,
      features: ["Product Recommendations", "Customer Insights", "Conversion Optimization"]
    },
    {
      title: "Supply Chain Intelligence",
      description: "End-to-end supply chain visibility and optimization with predictive analytics",
      icon: Warehouse,
      features: ["Supply Chain Visibility", "Risk Management", "Performance Analytics"]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Optimization",
      result: "45% increase in conversion rates",
      description: "Implemented AI-powered recommendation engine for major online retailer"
    },
    {
      title: "Logistics Network Optimization",
      result: "30% reduction in delivery costs",
      description: "Deployed smart routing system for regional logistics company"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/5 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Retail & Logistics
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Great brands who chose
              <span className="bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent"> Secure Data</span>
            </h1>

            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
              Transform your retail and logistics operations with AI-powered inventory prediction,
              delivery optimization, and personalized e-commerce experiences that drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
              >
                Get Started
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Button
                size="sm"
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
      <section id="solutions" className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">
              AI Solutions for Retail & Logistics
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions designed to optimize retail operations and logistics efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center mb-4">
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    <h3 className="text-sm font-bold mb-2">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-xs">
                      {solution.description}
                    </p>

                    <div className="space-y-1">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs">{feature}</span>
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
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">
              Success Stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Real results from our retail and logistics clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="border-0 bg-card">
                <CardContent className="p-4 text-center">
                  <h3 className="text-sm font-bold mb-2">{study.title}</h3>
                  <div className="text-xl font-bold text-red-600 mb-3">{study.result}</div>
                  <p className="text-muted-foreground text-xs">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-red-500/10 via-pink-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3">
            Partner with Quantum Intelligence in transforming your industry
          </h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
            Ready to optimize your retail and logistics operations with AI? Let's discuss how we can
            help you improve efficiency, reduce costs, and enhance customer experiences.
          </p>
          <Button
            size="sm"
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailLogistics;

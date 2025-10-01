import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Banknote,
  Shield,
  TrendingUp,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FinancialServices = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Fraud Detection",
      description: "AI-powered real-time transaction monitoring and anomaly detection",
      icon: Shield,
      features: ["Real-time Analysis", "Pattern Recognition", "Risk Scoring"]
    },
    {
      title: "Payment Processing",
      description: "Intelligent payment routing and optimization for better conversion rates",
      icon: Smartphone,
      features: ["Smart Routing", "Conversion Optimization", "Multi-channel Support"]
    },
    {
      title: "Risk Analytics",
      description: "Advanced predictive models for credit scoring and risk assessment",
      icon: TrendingUp,
      features: ["Credit Scoring", "Portfolio Risk", "Stress Testing"]
    },
    {
      title: "Digital Banking",
      description: "AI-enhanced customer experience and automated banking services",
      icon: Brain,
      features: ["Chatbots", "Personal Finance", "Automated Services"]
    }
  ];

  const caseStudies = [
    {
      title: "Global Bank Fraud Reduction",
      result: "87% reduction in false positives",
      description: "Implemented ML-based fraud detection system for a major international bank"
    },
    {
      title: "FinTech Payment Optimization",
      result: "23% increase in payment success",
      description: "Optimized payment routing for a leading digital payment platform"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
              <Banknote className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Financial Services
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Getting Easy with the
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"> Payment Sector</span>
            </h1>

            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
              Transform your financial services with intelligent automation, advanced fraud detection,
              and AI-powered analytics that deliver secure, efficient, and customer-centric solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
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
              AI Solutions for Financial Services
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI-powered solutions designed specifically for the financial sector
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
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
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
                        <div key={feature} className="flex items-center gap-1">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from our financial services clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{study.result}</div>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Quantum Intelligence in transforming your industry
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to revolutionize your financial services with AI? Let's discuss how we can
            help you achieve better security, efficiency, and customer satisfaction.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialServices;

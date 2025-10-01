import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Scan,
  Database,
  Pill,
  Activity,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HealthcarePharmacy = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Medical Imaging AI",
      description: "Computer vision for advanced diagnostics and medical image analysis",
      icon: Scan,
      features: ["Image Analysis", "Diagnostic Support", "Pattern Recognition"]
    },
    {
      title: "Patient Data Systems",
      description: "Intelligent patient data management and clinical decision support systems",
      icon: Database,
      features: ["Data Integration", "Clinical Insights", "Care Coordination"]
    },
    {
      title: "Drug Discovery & Development",
      description: "AI-accelerated pharmaceutical research and prescription automation",
      icon: Pill,
      features: ["Drug Discovery", "Clinical Trials", "Prescription Management"]
    },
    {
      title: "Health Monitoring",
      description: "Real-time patient monitoring and predictive health analytics",
      icon: Activity,
      features: ["Vital Monitoring", "Risk Prediction", "Early Intervention"]
    }
  ];

  const caseStudies = [
    {
      title: "Medical Imaging Platform",
      result: "92% diagnostic accuracy",
      description: "Implemented AI-powered radiology system for a major hospital network"
    },
    {
      title: "Clinical Decision Support",
      result: "50% faster diagnosis",
      description: "Deployed intelligent patient data system across multiple healthcare facilities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Healthcare & Pharmacy
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">Health Sector</span> Covered
            </h1>

            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
              Revolutionize healthcare with AI-powered diagnostic imaging, intelligent patient data systems,
              and advanced pharmaceutical research tools that improve patient outcomes and save lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
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
              AI Solutions for Healthcare & Pharmacy
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI technologies designed to enhance patient care and accelerate medical research
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
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4">
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
              Real results from our healthcare and pharmacy clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="border-0 bg-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <div className="text-3xl font-bold text-teal-600 mb-4">{study.result}</div>
                  <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with Quantum Intelligence in transforming your industry
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to advance healthcare with AI? Let's discuss how we can help you
            improve patient outcomes, accelerate research, and enhance clinical decision-making.
          </p>
          <Button
            size="lg"
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HealthcarePharmacy;

import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
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
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

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
      <section className="relative pt-24 md:pt-28 pb-10 md:pb-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[300px] bg-gradient-to-b from-teal-500/10 via-teal-500/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-primary/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Healthcare & Pharmacy
            </Badge>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">Health Sector</span> Covered
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
              Revolutionize healthcare with AI-powered diagnostic imaging, intelligent patient data systems,
              and advanced pharmaceutical research tools that improve patient outcomes and save lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigateToTop('/contact')}
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
      <section id="solutions" className="relative py-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-teal-500/30 bg-teal-500/5">
                Solutions
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-teal-500 to-foreground bg-clip-text text-transparent">
              AI Solutions for Healthcare & Pharmacy
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge AI technologies designed to enhance patient care and accelerate medical research
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="group relative overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-gradient-to-br from-card to-card/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 via-cyan-600/20 to-teal-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                  <CardContent className="p-6 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm group-hover:text-foreground transition-colors">
                      {solution.description}
                    </p>

                    <div className="space-y-2">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 group-hover:scale-110 transition-transform" />
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
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
      <section className="relative py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-background overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-teal-500/30 bg-teal-500/5">
                Case Studies
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-teal-500 to-foreground bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Real results from our healthcare and pharmacy clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card
                key={study.title}
                className="group relative overflow-hidden border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card to-card/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/10 to-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-background/10 via-background/10 to-background/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-r from-background/20 via-background/20 to-background/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                <CardContent className="p-8 text-center relative z-10">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">{study.result}</div>
                  <p className="text-muted-foreground text-base group-hover:text-foreground transition-colors">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Partner with Quantum Intelligence in transforming your industry
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to advance healthcare with AI? Let's discuss how we can help you
              improve patient outcomes, accelerate research, and enhance clinical decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Estimate Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
                className="px-8 py-6 text-base font-semibold border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
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

export default HealthcarePharmacy;

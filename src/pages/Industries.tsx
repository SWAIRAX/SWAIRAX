import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";
import {
  Banknote,
  Radio,
  GraduationCap,
  Zap,
  Package,
  Heart,
  ArrowRight,
} from "lucide-react";

const Industries = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const showreelRef = useRef<HTMLDivElement | null>(null);

  const industries = [
    {
      id: "financial-services",
      name: "Financial Services",
      tagline: "Getting easy with the payment sector",
      description: "Intelligent automation, fraud detection, and financial analytics solutions that transform banking and payment systems.",
      icon: <Banknote className="h-7 w-7" />,
      features: ["Fraud Detection", "Payment Processing", "Risk Analytics", "Digital Banking"]
    },
    {
      id: "telecommunications",
      name: "Telecommunications",
      tagline: "Everything that involves communication",
      description: "Network optimization, customer support automation, and real-time data routing for seamless connectivity.",
      icon: <Radio className="h-7 w-7" />,
      features: ["Network Optimization", "Support Automation", "Data Routing", "5G Infrastructure"]
    },
    {
      id: "education-services",
      name: "Education Services",
      tagline: "Everything that involves Learning and students",
      description: "Adaptive learning platforms, AI tutors, and automated grading systems for modern education.",
      icon: <GraduationCap className="h-7 w-7" />,
      features: ["Adaptive Learning", "AI Tutoring", "Grade Automation", "Student Analytics"]
    },
    {
      id: "utilities",
      name: "Utilities",
      tagline: "From electricity, to water supplies to public services",
      description: "Smart grid management, consumption analytics, and predictive fault detection for essential services.",
      icon: <Zap className="h-7 w-7" />,
      features: ["Smart Grids", "Usage Analytics", "Fault Detection", "Resource Management"]
    },
    {
      id: "retail-logistics",
      name: "Retail & Logistics",
      tagline: "Great brands who chose secure data",
      description: "Inventory prediction, delivery optimization, and personalized e-commerce experiences.",
      icon: <Package className="h-7 w-7" />,
      features: ["Inventory Prediction", "Route Optimization", "E-commerce AI", "Supply Chain"]
    },
    {
      id: "healthcare-pharmacy",
      name: "Healthcare & Pharmacy",
      tagline: "Health sector covered",
      description: "Computer vision diagnostics, patient data systems, and prescription automation for better healthcare.",
      icon: <Heart className="h-7 w-7" />,
      features: ["Medical Imaging", "Patient Systems", "Drug Discovery", "Clinical Analytics"]
    }
  ];

  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-16 lg:pb-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{ backgroundImage: "url('/uploads/INDUSTRY.jpg')", backgroundPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/90" />
          <div className="absolute inset-0 holo-grid opacity-15" />
          <div className="absolute -left-20 top-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute right-0 -top-20 w-[520px] h-[520px] bg-gradient-to-br from-foreground/10 via-transparent to-primary/15 opacity-65 rotate-12 animate-pan-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-xs font-medium border-primary/30 text-primary-foreground bg-primary/10">
              Industry Solutions
            </Badge>
            <ScrollReveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent mb-6">
                Industries we power with AI.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <SectionLead className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl">
                From finance to healthcare, telecom to logistics—we tailor AI, data, and MLOps to each sector's reality.
              </SectionLead>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Explore sectors
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="sectors" className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Transforming Industries with AI
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our specialized solutions are revolutionizing different sectors
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.id} delay={index * 80}>
                <Card
                  className="group relative overflow-hidden border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card via-card/80 to-background shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 lg:p-8 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-3 text-primary shadow-inner shadow-primary/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        {industry.icon}
                      </div>
                      <h3 className="text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {industry.name}
                      </h3>
                    </div>

                    <p className="text-sm text-primary/70 font-medium mb-3 italic">
                      {industry.tagline}
                    </p>

                    <p className="text-sm lg:text-base text-muted-foreground mb-5 leading-relaxed group-hover:text-foreground/80 transition-colors">
                      {industry.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {industry.features.map((feature) => (
                        <Badge 
                          key={feature} 
                          variant="secondary" 
                          className="text-xs bg-muted/50 text-muted-foreground border border-border/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={showreelRef} className="py-16 md:py-20 bg-gradient-to-r from-primary/15 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              See AI in action across every sector we serve.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl">
              A cinematic mix of financial fraud defense, telecom routing, adaptive learning, smart grids, logistics optimization, and healthcare imaging—paired with the MLOps rigor that keeps them live.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 hover:border-primary/50 h-12 px-6 text-base transition-all duration-300"
                onClick={() => navigateToTop("/services")}
              >
                Explore services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative group overflow-hidden rounded-2xl border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card via-card/70 to-background shadow-2xl shadow-primary/10 transition-all duration-500">
              <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative aspect-video">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/uploads/Quantum.png"
                >
                  <source src={showreel} type="video/mp4" />
                </video>
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: "url('/uploads/CTA%20GIF.gif')" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
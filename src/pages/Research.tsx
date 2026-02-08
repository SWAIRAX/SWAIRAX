import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionLead } from "@/components/typography";
import { ArrowRight, Shield, Users, FileText, ExternalLink } from "lucide-react";

const Research = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const showreelRef = useRef<HTMLDivElement | null>(null);

  const archivedSolutions = [
    {
      title: "SURASOFT",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered security SaaS using existing camera networks for biometric verification and instant crime prevention alerts.",
      keyFeatures: [
        "Real-time video analysis",
        "Biometric verification",
        "Instant crime prevention alerts"
      ],
      tags: ["SaaS", "Computer Vision"],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "AI Proctoring",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered proctoring system for secure online assessments with real-time behavior monitoring and automated suspicious activity detection.",
      keyFeatures: [
        "Real-time behavior monitoring",
        "Automated suspicious activity detection",
        "Secure online assessments"
      ],
      tags: ["Education", "AI Monitoring", "SaaS"],
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Askari LLM",
      category: "Self-hosted",
      status: "Retired",
      launchDate: "2023",
      description: "Python package for LLM policy enforcement and compliance. Customizable guardrails ensure ethical AI interactions within defined operational boundaries.",
      keyFeatures: [
        "Policy enforcement for LLMs",
        "Customizable compliance rules",
        "Easy Python integration"
      ],
      tags: ["LLM Guardrails"],
      icon: <FileText className="w-6 h-6" />,
    }
  ];

  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-24 pb-12 lg:pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/50 to-background" />
        <div className="absolute -left-20 top-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute right-0 -top-10 w-[520px] h-[520px] rotate-6 bg-gradient-to-br from-foreground/10 via-transparent to-primary/20 opacity-60 animate-pan-slow" />
        <div className="absolute inset-0 holo-grid opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">Research & Innovation</Badge>
              <ScrollReveal>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Research that feeds production AI.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <SectionLead className="text-muted-foreground max-w-2xl text-sm md:text-base lg:text-lg">
                  Explore archived experiments shaping Deep Operator, Annotate, GenAI, and MLOps—built with ethics, evals, and observability from day one.
                </SectionLead>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={200} className="relative max-w-xl mx-auto lg:mx-0">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 via-transparent to-muted/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-2xl shadow-primary/10">
                <img
                  src="/uploads/RESEARCH.jpg"
                  alt="Research spotlight"
                  className="h-full w-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Archived Solutions Grid */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Impossible? Let's see.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Our archived experiments that shaped today's production-grade solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {archivedSolutions.map((solution, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group relative overflow-hidden border border-border/50 hover:border-primary/50 bg-gradient-to-br from-card via-card/80 to-background shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-6 lg:p-8 relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{solution.title}</h3>
                          <p className="text-xs text-muted-foreground">{solution.category}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors">
                      {solution.description}
                    </p>

                    {solution.keyFeatures && solution.keyFeatures.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-xs font-semibold text-primary mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {solution.keyFeatures.map((feature, featureIndex) => (
                            <span key={featureIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {solution.tags && solution.tags.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {solution.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-full border border-border/50">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => navigateToTop(`/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="w-full text-sm text-primary hover:text-primary/80 hover:bg-primary/5 group-hover:bg-primary/10 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={showreelRef} className="py-16 md:py-20 bg-gradient-to-r from-primary/15 via-background to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <ScrollReveal className="space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Research in motion: security, education, guardrails.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-xl">
              See how SURASOFT, AI Proctoring, and Askari LLM experiments flow into today's production-grade analytics, annotation, GenAI, and MLOps. Real footage, AI overlays, and production guardrails together.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-6 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                onClick={() => navigateToTop("/services")}
              >
                Explore current solutions
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

export default Research;
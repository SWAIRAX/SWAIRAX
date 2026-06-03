import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FullBleedHero from "@/components/FullBleedHero";
import HeroBackdrop from "@/components/HeroBackdrop";
import { Badge } from "@/components/ui/badge";
import { SectionLead, Heading, Lead } from "@/components/typography";
import {
  Banknote,
  Radio,
  GraduationCap,
  Zap,
  Package,
  Heart,
  ArrowRight,
  Sparkles,
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
      icon: <Banknote className="h-8 w-8" />,
      features: ["Fraud Detection", "Payment Processing", "Risk Analytics", "Digital Banking"]
    },
    {
      id: "telecommunications",
      name: "Telecommunications",
      tagline: "Everything that involves communication",
      description: "Network optimization, customer support automation, and real-time data routing for seamless connectivity.",
      icon: <Radio className="h-8 w-8" />,
      features: ["Network Optimization", "Support Automation", "Data Routing", "5G Infrastructure"]
    },
    {
      id: "education-services",
      name: "Education Services",
      tagline: "Everything that involves Learning and students",
      description: "Adaptive learning platforms, AI tutors, and automated grading systems for modern education.",
      icon: <GraduationCap className="h-8 w-8" />,
      features: ["Adaptive Learning", "AI Tutoring", "Grade Automation", "Student Analytics"]
    },
    {
      id: "utilities",
      name: "Utilities",
      tagline: "From electricity, to water supplies to public services",
      description: "Smart grid management, consumption analytics, and predictive fault detection for essential services.",
      icon: <Zap className="h-8 w-8" />,
      features: ["Smart Grids", "Usage Analytics", "Fault Detection", "Resource Management"]
    },
    {
      id: "retail-logistics",
      name: "Retail & Logistics",
      tagline: "Great brands who chose secure data",
      description: "Inventory prediction, delivery optimization, and personalized e-commerce experiences.",
      icon: <Package className="h-8 w-8" />,
      features: ["Inventory Prediction", "Route Optimization", "E-commerce AI", "Supply Chain"]
    },
    {
      id: "healthcare-pharmacy",
      name: "Healthcare & Pharmacy",
      tagline: "Health sector covered",
      description: "Computer vision diagnostics, patient data systems, and prescription automation for better healthcare.",
      icon: <Heart className="h-8 w-8" />,
      features: ["Medical Imaging", "Patient Systems", "Drug Discovery", "Clinical Analytics"]
    }
  ];


  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — scale.com FullBleedMediaSection pattern. */}
      <FullBleedHero
        imageSrc="/uploads/INDUSTRY.jpg"
        imageAlt="Industries we power with AI"
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            Industries we power with AI.
          </Heading>
        }
        subtitle="From finance to healthcare, telecom to logistics—we tailor AI, data, and MLOps to each sector’s reality."
        cta={
          <Button
            size="lg"
            onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
          >
            Explore sectors
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        }
      />

      {/* Industries Grid */}
      <section id="sectors" className="relative py-12 overflow-hidden -mt-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-card rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-8">
            <Heading as="h2" size="h2" className="mb-4">
              Transforming Industries with AI
            </Heading>
            <Lead className="max-w-2xl mx-auto">
              Discover how our specialized solutions are revolutionizing different sectors
            </Lead>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              return (
                <Card
                  key={industry.id}
                  className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Animated SVG background */}
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`rounded-xl bg-white/10 p-3 shadow-inner ${index % 2 === 1 ? "text-secondary-accent" : "text-primary"}`}>
                        {industry.icon}
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 transition-colors duration-300">
                        {industry.features[0]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">{industry.name}</h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                      {industry.description}
                    </p>

                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-primary bg-transparent hover:bg-transparent p-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300 focus-visible:ring-0"
                      onClick={() => navigateToTop(`/industries/${industry.id}`)}
                    >
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    {/* Sparkle effect on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA with live reel */}
      <section ref={showreelRef} className="relative overflow-hidden pt-16 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 rounded-2xl border border-border/60 bg-background/85 p-6 md:p-8 shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] backdrop-blur-md">
            <Heading as="h2" size="h2" className="text-foreground font-bold leading-tight">
              See AI in action across every sector we serve.
            </Heading>
            <p className="text-foreground/85 text-sm md:text-base max-w-xl leading-relaxed">
              A cinematic mix of financial fraud defense, telecom routing, adaptive learning, smart grids, logistics optimization, and healthcare imaging—paired with the MLOps rigor that keeps them live.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-3 pt-1">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-auto h-10 sm:h-12 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => navigateToTop("/contact")}
              >
                Estimate project
              </Button>
              <Button
                variant="outline"
                className="border-foreground/30 text-foreground bg-transparent hover:bg-foreground/5 hover:border-foreground/50 hover:text-foreground w-auto h-10 sm:h-12 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
                onClick={() => navigateToTop("/services")}
              >
                Explore services
              </Button>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-lg">
            <div className="absolute -inset-12 bg-gradient-to-r from-card via-transparent to-card blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative">
              <video
                className="h-full w-full object-cover animate-pan-slow"
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;

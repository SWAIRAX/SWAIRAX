import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section with diagonal motion */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-14">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{ backgroundImage: "url('/uploads/INDUSTRY.jpg')", backgroundPosition: "center 30%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0b0c12]/70 to-black/85" />
          <div className="absolute inset-0 holo-grid opacity-15" />
          <div className="absolute -left-20 top-10 w-80 h-80 bg-red-500/12 rounded-full blur-2xl" />
          <div className="absolute right-0 -top-20 w-[520px] h-[520px] bg-gradient-to-br from-white/10 via-transparent to-red-500/12 opacity-65 rotate-12 animate-pan-slow" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge variant="outline" className="mb-1 text-xs font-medium border-white/30 text-white">
                Industry Solutions
              </Badge>
              <SectionHeading className="text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Industries we power with AI.
              </SectionHeading>
              <SectionLead className="text-muted-foreground text-base md:text-lg">
                From finance to healthcare, telecom to logistics—we tailor AI, data, and MLOps to each sector’s reality.
              </SectionLead>
              <div className="flex flex-wrap gap-3">
                <Button
                  size="sm"
                  onClick={() => document.getElementById('sectors')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-500 hover:to-red-500 text-white px-5 py-3 shadow-[0_20px_60px_-30px_rgba(255,0,0,0.75)]"
                >
                  Explore sectors
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="sectors" className="relative py-12 overflow-hidden -mt-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Transforming Industries with AI
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how our specialized solutions are revolutionizing different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card
                  key={industry.id}
                  className="group relative cursor-pointer overflow-hidden border border-white/10 hover:border-red-400/50 transition-all duration-500 hover:shadow-[0_25px_80px_-40px_rgba(255,0,0,0.6)] hover:-translate-y-2 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleExploreIndustry(industry.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-lg opacity-0 group-hover:opacity-25 blur-sm transition-opacity duration-700 -z-10 animate-pan-slow`} />
                  <CardContent className="p-6 relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="text-lg font-bold mb-2 group-hover:text-red-200 transition-colors">
                      {industry.name}
                    </h3>

                    <p className="text-sm text-red-200 font-medium mb-3 italic">
                      {industry.tagline}
                    </p>

                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm group-hover:text-white transition-colors">
                      {industry.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {industry.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs bg-white/10 text-white border-white/10">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Button temporarily hidden per request */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA with live reel */}
      <section ref={showreelRef} className="py-16 bg-gradient-to-r from-red-600/20 via-black to-red-500/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              See AI in action across every sector we serve.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              A cinematic mix of financial fraud defense, telecom routing, adaptive learning, smart grids, logistics optimization, and healthcare imaging—paired with the MLOps rigor that keeps them live.
            </p>
            <div className="flex gap-3">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white"
                onClick={() => navigate("/contact")}
              >
                Estimate project
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigateToTop("/services")}
              >
                Explore services
              </Button>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900/70 to-black shadow-[0_30px_100px_-60px_rgba(255,0,0,0.6)]">
            <div className="absolute -inset-12 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
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

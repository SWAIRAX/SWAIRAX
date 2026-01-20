import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading, SectionLead } from "@/components/typography";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ArrowRight, Calendar, Shield, Users, FileText, ExternalLink, Sparkles, Play } from "lucide-react";

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
      demoLink: "#",
      caseStudyLink: "#"
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
      demoLink: "#",
      caseStudyLink: "#"
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
      demoLink: "#",
      caseStudyLink: "#"
    }
  ];

  const filteredSolutions = archivedSolutions;

  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section with asymmetric layout */}
      <section className="relative overflow-hidden pt-16 md:pt-20 pb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d12] to-black" />
        <div className="absolute -left-20 top-10 w-80 h-80 bg-red-500/15 rounded-full blur-3xl" />
        <div className="absolute right-0 -top-10 w-[520px] h-[520px] rotate-6 bg-gradient-to-br from-white/10 via-transparent to-red-500/20 opacity-60 animate-pan-slow" />
        <div className="absolute inset-0 holo-grid opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2">
                <Badge className="bg-white/10 text-white border-white/10">Research & Innovation</Badge>
              </div>
              <TextRevealCard
                text="Research that feeds production AI."
                revealText="Innovation drives implementation"
                className="bg-transparent border-none w-full p-0"
              />
              <SectionLead className="text-muted-foreground max-w-2xl text-sm md:text-base">
              Explore archived experiments shaping Deep Operator, Annotate, GenAI, and MLOps—built with ethics, evals, and observability from day one.
            </SectionLead>
            </div>

            <div className="relative max-w-xl mx-auto">
              <div className="absolute -inset-6 bg-gradient-to-r from-red-500/15 via-transparent to-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_100px_-60px_rgba(255,0,0,0.6)]">
                <img
                  src="/uploads/RESEARCH.jpg"
                  alt="Research spotlight"
                  className="h-full w-full object-cover"
                />
                <div />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archived Solutions Grid */}
      <section className="relative py-8 overflow-hidden -mt-2">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            {/* Desktop: TextRevealCard */}
            <div className="hidden md:block">
              <TextRevealCard
                text="Impossible? Let's see."
                revealText="Innovation drives implementation"
                className="bg-transparent border-none w-full p-0 text-center"
              />
            </div>

            {/* Mobile: Regular heading */}
            <div className="block md:hidden">
              <h2 className="text-xl font-semibold mb-2 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Impossible? Let's see.
              </h2>
            </div>

            {/* <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether we're shaping the future of sustainability, or optimizing algorithms,
              or even exploring epidemiological studies, Our Research strives to continuously progress science,
              advance society.
            </p> */}
          </div>

          {/* Mobile: Static Cards | Desktop: Infinite Moving Cards */}
          <div className="block md:hidden">
            {/* Mobile Layout - Static Cards */}
            <div className="space-y-4">
              {filteredSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black border border-red-500/20 rounded-lg p-4 hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500/30 to-white/10 rounded-lg flex items-center justify-center text-red-200">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{solution.title}</h3>
                        <p className="text-xs text-gray-400">{solution.category}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed mb-3">
                    {solution.description}
                  </p>

                  {solution.keyFeatures && solution.keyFeatures.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-red-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {solution.keyFeatures.map((feature, featureIndex) => (
                          <span key={featureIndex} className="text-xs bg-red-500/20 text-red-200 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {solution.tags && solution.tags.length > 0 && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {solution.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs bg-gray-500/20 text-gray-300 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => navigateToTop(`/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    className="w-full text-xs border-white/20 text-white hover:bg-red-600 hover:text-white"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet: Infinite Moving Cards */}
          <div className="hidden md:block">
            <InfiniteMovingCards
              items={filteredSolutions.map((solution) => ({
                quote: solution.description,
                name: solution.title,
                title: solution.category,
                keyFeatures: solution.keyFeatures,
                tags: solution.tags,
              }))}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              className="mt-4"
              onLearnMore={(item) => {
                // Find the original solution by title
                const solution = filteredSolutions.find(s => s.title === item.name);
                if (solution) {
                  navigateToTop(`/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`);
                }
              }}
            />
          </div>
        </div>
      </section>

{/* Evolution Timeline */}
{/* <section className="py-20 bg-card">
<div className="container mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">Our Innovation Journey</h2>
<p className="text-xl text-muted-foreground">
From security solutions to advanced AI platforms - our evolution continues
</p>
</div>

<div className="max-w-4xl mx-auto">
<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

<div className="space-y-12">
<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2022</h3>
<p className="text-muted-foreground">SURASOFT & AI Proctoring Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8"></div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8">
<h3 className="text-xl font-bold">2023</h3>
<p className="text-muted-foreground">Askari LLM Development</p>
</div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2024</h3>
<p className="text-muted-foreground">New Solution Framework Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>
</div>
</div>
</div>
</div>
</section> */}

      {/* CTA Section */}
      {/* CTA with live reel */}
      <section ref={showreelRef} className="py-12 bg-gradient-to-r from-red-600/20 via-black to-red-500/15">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <ScrollReveal className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Research in motion: security, education, guardrails.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg lg:max-w-xl">
              See how SURASOFT, AI Proctoring, and Askari LLM experiments flow into today's production-grade analytics, annotation, GenAI, and MLOps. Real footage, AI overlays, and production guardrails together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white w-full sm:w-auto"
                onClick={() => navigateToTop("/services")}
              >
                Explore current solutions
              </Button>
            </div>
          </ScrollReveal>

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

export default Research;

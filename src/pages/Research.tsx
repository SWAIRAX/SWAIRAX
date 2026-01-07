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
      description: "AI-powered security SaaS with biometric verification using camera networks. Surasoft analyzed video footage in existing camera infrastructure, offering affordable biometric verification and instant alerts to prevent crimes for businesses and homes.",
      keyFeatures: [
        "Real-time video analysis",
        "Biometric verification",
        "Instant crime prevention alerts",
        "Affordable security solution",
        "Integration with existing cameras"
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
      description: "Remote integrity solution with intelligent student and interviewee monitoring. A comprehensive proctoring system powered by artificial intelligence, designed to monitor students and interviewees for safe and credible online assessments.",
      keyFeatures: [
        "Real-time behavior monitoring",
        "Automated suspicious activity detection",
        "Secure online assessments",
        "Integration with learning platforms",
        "Detailed reporting and analytics"
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
      description: "Python-based policy guardrails package for customizing LLM behavior and compliance. A comprehensive package designed to enforce policy guardrails on user input, particularly in the context of language models and other AI systems, ensuring interactions remain within defined ethical and operational boundaries.",
      keyFeatures: [
        "Policy enforcement for LLMs",
        "Customizable compliance rules",
        "Easy Python integration",
        "Ethical AI boundaries",
        "Real-time content filtering"
      ],
      tags: ["LLM Guardrails"],
      icon: <FileText className="w-6 h-6" />,
      demoLink: "#",
      caseStudyLink: "#"
    }
  ];

  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const allTags = Array.from(new Set(archivedSolutions.flatMap(solution => solution.tags)));

  const filteredSolutions = selectedTags.length === 0
    ? archivedSolutions
    : archivedSolutions.filter(solution =>
        selectedTags.some(tag => solution.tags.includes(tag))
      );

  const showreel = "https://cdn.coverr.co/videos/coverr-abstract-technology-10926/1080p.mp4";

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section with asymmetric layout */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0d12] to-black" />
        <div className="absolute -left-20 top-10 w-80 h-80 bg-red-500/15 rounded-full blur-3xl" />
        <div className="absolute right-0 -top-10 w-[520px] h-[520px] rotate-6 bg-gradient-to-br from-white/10 via-transparent to-red-500/20 opacity-60 animate-pan-slow" />
        <div className="absolute inset-0 holo-grid opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <Badge className="bg-white/10 text-white border-white/10">Research & Innovation</Badge>
                <Badge variant="outline" className="border-red-500/40 text-red-200">
                  Proof to product
            </Badge>
              </div>
              <SectionHeading className="text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Research that feeds production AI.
            </SectionHeading>
              <SectionLead className="text-muted-foreground max-w-3xl text-base md:text-lg">
                Explore archived experiments shaping Quantum Analytics, Annotate, GenAI, and MLOps—built with ethics, evals, and observability from day one.
            </SectionLead>
              <div className="h-4" />
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

      {/* Filter Section */}
      <section className="py-4 border-b border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <span className="text-[0.6rem] tracking-[0.4em] text-muted-foreground uppercase">Filter</span>
            <Button
              size="sm"
              variant={selectedTags.length === 0 ? "default" : "outline"}
              onClick={() => setSelectedTags([])}
              className="text-xs px-4 py-2"
            >
              All Products
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                size="sm"
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter(t => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
                className="text-xs px-4 py-2"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Archived Solutions Grid */}
      <section className="relative py-12 overflow-hidden -mt-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-red-400/40 bg-red-500/10 text-white">
                Research
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Impossible? Let's see.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether we're shaping the future of sustainability, or optimizing algorithms,
              or even exploring epidemiological studies, Our Research strives to continuously progress science,
              advance society.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredSolutions.map((solution, index) => (
              <Card
                key={index}
                className="group relative research-card bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black border border-red-500/20 hover:border-red-400/50 overflow-hidden transition-all duration-500 hover:shadow-[0_25px_80px_-40px_rgba(255,0,0,0.6)] hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="pb-3 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-500/30 to-white/10 rounded-xl flex items-center justify-center text-red-200 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                        {solution.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-red-300 transition-colors">{solution.title}</CardTitle>
                        <div className="flex items-center space-x-1 mt-1">
                          <Badge variant="secondary" className="text-xs bg-white/10 text-white border-white/10">{solution.category}</Badge>
                          <Badge variant="outline" className="text-white/70 border-white/20 text-xs">
                            <Calendar className="w-2 h-2 mr-1" />
                            {solution.launchDate}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Badge variant="destructive" className="bg-red-500/20 text-red-200 border-red-200 text-xs">
                      {solution.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-white transition-colors">
                    {solution.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-red-200 mb-1 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.keyFeatures.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-1 text-sm">
                          <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {solution.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-white/20 text-white/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-1 pt-3 border-t border-border/50">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => navigateToTop(`/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="flex-1 text-sm font-medium border-white/20 text-white hover:bg-red-600 hover:text-white transition-all group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
      <section ref={showreelRef} className="py-16 bg-gradient-to-r from-red-600/20 via-black to-red-500/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.08em]">
              <Sparkles className="h-4 w-4 text-red-300" />
              Live experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Research in motion: security, education, guardrails.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl">
              See how SURASOFT, AI Proctoring, and Askari LLM experiments flow into today’s production-grade analytics, annotation, GenAI, and MLOps. Real footage, AI overlays, and production guardrails together.
            </p>
            <div className="flex gap-3">
              <Button
                className="bg-red-600 hover:bg-red-500 text-white"
                onClick={() => navigateToTop("/services")}
              >
                Explore current solutions
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigateToTop("/contact")}
              >
                Discuss migration
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
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;

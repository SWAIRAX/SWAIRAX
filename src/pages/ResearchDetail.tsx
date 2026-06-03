import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import Parallax from "@/components/Parallax";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Users, FileText, Target, Lightbulb, CheckCircle } from "lucide-react";
import { Heading } from "@/components/typography";

const ResearchDetail = () => {
  const { solutionName } = useParams();
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();

  const researchData = {
    "surasoft": {
      title: "SURASOFT",
      tagline: "AI-Powered Security with Biometric Verification",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered security SaaS with biometric verification using camera networks. Surasoft analyzed video footage in existing camera infrastructure, offering affordable biometric verification and instant alerts to prevent crimes for businesses and homes.",
      problem: "Traditional security systems were expensive, required new hardware installations, and lacked intelligent monitoring capabilities. Businesses and homes needed affordable, smart security solutions that could leverage existing camera infrastructure.",
      methodology: [
        "Computer vision algorithms for real-time video analysis",
        "Machine learning models for biometric recognition",
        "Cloud-based SaaS architecture for scalability",
        "Integration APIs for existing camera systems",
        "Real-time alert notification system"
      ],
      technologies: ["Computer Vision", "Machine Learning", "Cloud Computing", "API Integration", "Real-time Processing"],
      results: [
        "Reduced security infrastructure costs by 60%",
        "Achieved 95% accuracy in biometric verification",
        "Enabled instant crime prevention alerts",
        "Successfully integrated with 50+ camera systems",
        "Served 100+ businesses and residential clients"
      ],
      impact: "SURASOFT democratized advanced security technology, making it accessible to small businesses and residential users who previously couldn't afford comprehensive security solutions.",
      icon: <Shield className="w-8 h-8" />,
      heroImage: "/uploads/Hero Illustration F1.svg"
    },
    "ai-proctoring": {
      title: "AI Proctoring",
      tagline: "Remote Integrity Solution with Intelligent Monitoring",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "Remote integrity solution with intelligent student and interviewee monitoring. A comprehensive proctoring system powered by artificial intelligence, designed to monitor students and interviewees for safe and credible online assessments.",
      problem: "The shift to online education and remote hiring created challenges in maintaining assessment integrity. Educational institutions and companies needed reliable, automated solutions to monitor online exams and interviews without compromising user experience.",
      methodology: [
        "Real-time behavioral analysis using computer vision",
        "Audio pattern recognition for suspicious activities",
        "Automated flag generation for unusual behaviors",
        "Integration with popular learning management systems",
        "Comprehensive reporting and analytics dashboard"
      ],
      technologies: ["Artificial Intelligence", "Computer Vision", "Audio Processing", "Learning Management Systems", "Real-time Analytics"],
      results: [
        "Monitored 10,000+ online assessments",
        "Achieved 92% accuracy in suspicious activity detection",
        "Reduced manual monitoring effort by 80%",
        "Integrated with 20+ educational platforms",
        "Maintained 99.5% system uptime during peak usage"
      ],
      impact: "AI Proctoring enabled educational institutions and companies to maintain assessment credibility while embracing digital transformation, ensuring fair evaluations in remote environments.",
      icon: <Users className="w-8 h-8" />,
      heroImage: "/uploads/Hero Illustration F1.svg"
    },
    "askari-llm": {
      title: "Askari LLM",
      tagline: "Python-Based Policy Guardrails for LLM Compliance",
      category: "Self-hosted",
      status: "Retired",
      launchDate: "2023",
      description: "Python-based policy guardrails package for customizing LLM behavior and compliance. A comprehensive package designed to enforce policy guardrails on user input, particularly in the context of language models and other AI systems, ensuring interactions remain within defined ethical and operational boundaries.",
      problem: "As organizations adopted large language models, they faced challenges in ensuring AI outputs aligned with company policies, regulatory requirements, and ethical standards. There was a critical need for customizable guardrails that could be easily integrated into existing AI workflows.",
      methodology: [
        "Rule-based policy engine for content filtering",
        "Machine learning classifiers for context understanding",
        "Configurable compliance templates for different industries",
        "Real-time content analysis and flagging",
        "Comprehensive logging and audit trail system"
      ],
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "Policy Enforcement", "Compliance Monitoring"],
      results: [
        "Processed 1M+ LLM interactions for policy compliance",
        "Achieved 97% accuracy in policy violation detection",
        "Reduced compliance review time by 70%",
        "Supported 15+ industry-specific policy templates",
        "Enabled real-time content filtering with <100ms latency"
      ],
      impact: "Askari LLM empowered organizations to safely deploy large language models in production environments, ensuring AI interactions remained compliant with organizational policies and industry regulations.",
      icon: <FileText className="w-8 h-8" />,
      heroImage: "/uploads/Hero Illustration F1.svg"
    }
  };

  const solution = researchData[solutionName as keyof typeof researchData];

  if (!solution) {
    navigate('/research');
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section — red brand background */}
      <section className="relative overflow-hidden bg-[#b3210a] text-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        <Parallax speed={-0.24} clamp={140} className="pointer-events-none absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,110,60,0.4),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(110,18,4,0.6),transparent_55%)]" />
        </Parallax>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigateToTop('/research')}
              className="mb-4 group text-xs text-white hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="w-3 h-3 mr-1 group-hover:-translate-x-1 transition-transform" />
              View All Research
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center text-white">
                    {solution.icon}
                  </div>
                  <div>
                    <Heading as="h1" size="h3" className="mb-1 animate-fade-in text-white">
                      {solution.title}
                    </Heading>
                    <p className="text-sm text-white/80 font-medium">{solution.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <Badge className="bg-white/15 text-white border-white/30 text-xs">{solution.category}</Badge>
                </div>
              </div>

              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-6 bg-gradient-to-r from-white/10 via-transparent to-white/10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-neutral-900 shadow-lg">
                  <img
                    src={solution.heroImage}
                    alt={`${solution.title} hero`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-card rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="max-w-4xl mx-auto">
            <Card className="rounded-lg border border-border bg-secondary text-card-foreground shadow-[var(--shadow-card)] animate-slide-up transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]">
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-4 flex items-center text-foreground">
                  <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                  About the Solution
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="rounded-lg border border-border bg-secondary text-card-foreground shadow-[var(--shadow-card)] animate-slide-up transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-4 flex items-center text-foreground">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    Problem It Addresses
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.problem}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Methodology & Technologies */}
      <section className="relative py-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ScrollReveal>
              <Card className="rounded-lg border border-border bg-secondary text-card-foreground shadow-[var(--shadow-card)] animate-slide-up transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Methodology</h3>
                  <ul className="space-y-3">
                    {solution.methodology.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal>
              <Card className="rounded-lg border border-border bg-secondary text-card-foreground shadow-[var(--shadow-card)] animate-slide-up transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]" style={{ animationDelay: '0.3s' }}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-foreground">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {solution.technologies.map((tech, index) => (
                      <Badge key={index} className="bg-primary/10 text-primary border-primary/30 px-2 py-1 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <Card className="rounded-lg border border-border bg-secondary text-card-foreground shadow-[var(--shadow-card)] animate-slide-up transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-glow)]" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-6 text-foreground">Results & Impact</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-primary">Key Results</h3>
                      <ul className="space-y-3">
                        {solution.results.map((result, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold mb-3 text-primary">Overall Impact</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {solution.impact}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Inspired by Our Research?"
        description="Let's discuss how we can bring similar innovation to your organization"
        primary={{ label: "Work With Us", href: "/contact" }}
        secondary={{ label: "Explore More Research", href: "/research" }}
      />

      <Footer />
    </div>
  );
};

export default ResearchDetail;

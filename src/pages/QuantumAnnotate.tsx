import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import HeroBackdrop from "@/components/HeroBackdrop";
import FullBleedHero from "@/components/FullBleedHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Image, Volume2, Video, CheckCircle, Sparkles, Target, Users, Shield, Clock, Zap, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Lead } from "@/components/ui/section";

const QuantumAnnotate = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Multi-Modal Data Annotation",
      description: "Expert annotation services across all data types including text, images, audio, and video with specialized tools and quality assurance for each modality.",
      benefits: ["Text & image annotation", "Audio/video processing", "Quality validation", "Multi-format support"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Annotation Team",
      description: "Professional annotators with domain expertise ensuring high-quality, consistent results across complex annotation projects and specialized requirements.",
      benefits: ["Expert annotators", "Domain specialists", "Quality assurance", "Project scalability"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Custom Frameworks & Quality Control",
      description: "Tailored annotation frameworks with rigorous quality control processes, ensuring your data meets the highest standards for machine learning model training.",
      benefits: ["Custom frameworks", "Quality control", "ML-ready data", "Enterprise standards"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Planning",
      description: "We analyze your data and requirements to design the optimal annotation strategy and workflow.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Framework Design",
      description: "Create custom annotation guidelines and quality standards tailored to your specific use case.",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Team Assignment",
      description: "Assign specialized annotators with relevant domain expertise to your project.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Annotation & Quality Control",
      description: "Execute the annotation process with continuous quality monitoring and validation.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "05",
      title: "Delivery & Support",
      description: "Deliver high-quality annotated data with ongoing support and iteration capabilities.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const stats = [
    { value: "99.5%", label: "Accuracy Rate", icon: <Target className="h-6 w-6" /> },
    { value: "50k+", label: "Annotations/Day", icon: <Zap className="h-6 w-6" /> },
    { value: "24/7", label: "Quality Monitoring", icon: <Shield className="h-6 w-6" /> },
    { value: "100+", label: "Expert Annotators", icon: <Users className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — scale.com FullBleedMediaSection pattern. */}
      <FullBleedHero
        imageSrc="/uploads/ANNOTATE.jpg"
        imageAlt="Quantum Annotate"
        eyebrow={<><Database className="h-4 w-4 mr-2" />Quantum Annotate</>}
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            Industry-grade labeling for every modality.
          </Heading>
        }
        subtitle="Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets."
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("features")}
            >
              Explore Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white"
              onClick={() => navigateToTop('/contact')}
            >
              Get Started
            </Button>
          </>
        }
      />

      {/* Stats Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pb-8">
        {/* Interlocking ring divider — flush with the section's top edge. */}
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-6 pt-8">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Comprehensive Annotation Services</Heading>
              <Lead className="max-w-3xl mx-auto">
                Professional data annotation services that deliver high-quality, consistent results across all data modalities.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="rounded-xl bg-white/10 p-3 shadow-inner text-primary">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 relative z-10">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-card pb-8">
        {/* Interlocking matrix divider — flush with the section's top edge. */}
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-6 pt-8">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Our Annotation Process</Heading>
              <Lead className="max-w-3xl mx-auto">
                A systematic approach to delivering high-quality annotated data that meets your specific requirements.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:shadow-[0_15px_40px_-20px_rgba(214,46,10,0.25)] hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
                <div className="relative z-10 space-y-3 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-inner">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-20 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              Ready to Annotate Your Data?
            </Heading>
            <p className="text-sm text-foreground/85 mb-6 max-w-2xl mx-auto">
              Let's discuss how our professional annotation services can help you create high-quality training data for your machine learning models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
                onClick={() => navigateToTop('/contact')}
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                onClick={() => navigateToTop('/services')}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumAnnotate;

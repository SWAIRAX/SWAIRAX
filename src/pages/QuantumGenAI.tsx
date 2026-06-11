import { useState, useEffect } from "react";
import { openMeeting } from "@/utils/meeting";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import HeroBackdrop from "@/components/HeroBackdrop";
import FullBleedHero from "@/components/FullBleedHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Cog, Database, Zap, CheckCircle, Target, TrendingUp, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Lead } from "@/components/ui/section";

const QuantumGenAI = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced AI Model Development",
      description: "Expert fine-tuning of large language models with domain-specific optimization to achieve superior performance and accuracy for your specific use cases.",
      benefits: ["Model fine-tuning", "Domain optimization", "Performance enhancement", "Custom architectures"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Processing & Quality Assurance",
      description: "Comprehensive data preparation services including preprocessing, augmentation, quality assessment, and privacy-compliant data handling for optimal AI training.",
      benefits: ["Data preprocessing", "Quality assurance", "Privacy compliance", "Augmentation strategies"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Custom AI Solutions & Deployment",
      description: "End-to-end AI solution development from concept to deployment, including custom applications, API development, and scalable infrastructure setup.",
      benefits: ["Custom AI solutions", "API development", "Scalable deployment", "Integration services"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Data Preparation",
      description: "We analyze your requirements and prepare your data through cleaning, preprocessing, and optimization for maximum AI performance.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "02",
      title: "AI Model Development & Testing",
      description: "Fine-tune and optimize models using advanced techniques with rigorous testing to ensure performance benchmarks are met.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Deployment & Ongoing Support",
      description: "Deploy your AI solution with continuous monitoring, maintenance, and optimization support for long-term success.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const stats = [
    { value: "40%", label: "Performance Improvement", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "60%", label: "Faster Deployment", icon: <Clock className="h-6 w-6" /> },
    { value: "95%", label: "Accuracy Rate", icon: <Target className="h-6 w-6" /> },
    { value: "24/7", label: "Monitoring Support", icon: <Shield className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — scale.com FullBleedMediaSection pattern. */}
      <FullBleedHero
        imageSrc="/uploads/GENAI.avif"
        imageAlt="SWAIRAX GenAI"
        eyebrow={<><Brain className="h-4 w-4 mr-2" />SWAIRAX GenAI</>}
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            Generative AI that's accurate, reliable, and fast.
          </Heading>
        }
        subtitle="Enhance generative AI model accuracy, reliability, and speed through our in-house data expertise and advanced fine-tuning techniques."
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("features")}
            >
              Explore Features <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white"
              onClick={() => openMeeting()}
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
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Powerful AI Capabilities</Heading>
              <Lead className="max-w-3xl mx-auto">
                Our comprehensive suite of AI services delivers measurable improvements in model performance, speed, and reliability.
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
                    <div className="card-icon rounded-xl bg-white/10 p-3 shadow-inner text-primary">
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
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Our Development Process</Heading>
              <Lead className="max-w-3xl mx-auto">
                A proven methodology that ensures your AI solutions are delivered on time, within budget, and exceed expectations.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

      {/* Technology Stack */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3">Cutting-Edge Technology</Heading>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                We leverage the latest AI frameworks, tools, and methodologies to deliver state-of-the-art solutions.
              </p>
            </div>
          </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "PyTorch", description: "Deep Learning Framework" },
              { name: "TensorFlow", description: "ML Platform" },
              { name: "Hugging Face", description: "Transformers Library" },
              { name: "OpenAI API", description: "Language Models" },
              { name: "LangChain", description: "LLM Applications" },
              { name: "Weights & Biases", description: "Experiment Tracking" },
              { name: "Docker", description: "Containerization" },
              { name: "Kubernetes", description: "Orchestration" }
            ].map((tech, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-sm font-bold text-primary">{tech.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold mb-1 text-sm group-hover:text-primary transition-colors">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              Ready to Transform Your AI Capabilities?
            </Heading>
            <p className="text-sm text-foreground/85 mb-4 max-w-2xl mx-auto">
              Let's discuss how our SWAIRAX GenAI services can enhance your AI models and drive better business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                onClick={() => openMeeting()}
              >
                Start Your Project <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
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

export default QuantumGenAI;

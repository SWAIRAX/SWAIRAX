import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Brain, Database, Cog, BarChart3, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
  const { navigateToTop } = useNavigationWithScroll();
  const [expandedServices, setExpandedServices] = useState<{[key: string]: boolean}>({});

  const toggleService = (serviceId: string) => {
    setExpandedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Quantum Analytics",
      description: "Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.",
      features: ["Machine Learning & RLHF", "Impact Measurement", "Progress Tracking", "Smart Decision Making"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Quantum Annotate",
      description: "Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets.",
      features: ["Multi-modal Annotation", "Professional Workforce", "Industry-Grade Quality", "Scalable Solutions"]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Quantum GenAI",
      description: "Enhance generative AI model accuracy, reliability, and speed through in-house data expertise and fine-tuning techniques.",
      features: ["Model Fine-tuning", "Data Expertise", "Performance Enhancement", "Speed Optimization"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "MLOps & DevOps",
      description: "Bridge the gap between data science and production with our MLOps expertise and deployment solutions.",
      features: ["Model Deployment", "CI/CD for ML", "Model Monitoring", "Infrastructure as Code"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute inset-0 bg-[url('/uploads/Hero%20Illustration%20F1.svg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-3 text-xs font-medium">
              Products & Services
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Products & Services
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Comprehensive AI and data solutions designed to accelerate your digital transformation journey.
            </p>
            {/* <Button
              size="lg"
              onClick={() => navigateToTop('/contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started Today
            </Button> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-10 -mt-6">
        {/* Decorative Background Elements */}
        <div className="absolute inset-x-0 top-4 h-48 bg-gradient-to-b from-background via-background/80 to-transparent opacity-80" />
        <div className="absolute top-4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-4 right-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-primary/30 bg-primary/5">
                Our Solutions
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="sr-only">
              Our Core Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end solutions for your AI and data needs
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/50 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-card/50 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-background/10 via-background/10 to-background/10 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center text-primary mr-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                      {service.icon}
                    </div>
                  <h3 className="text-base font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-xs">{service.description}</p>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs group-hover:text-foreground transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Collapsible open={expandedServices[service.title]} onOpenChange={() => toggleService(service.title)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-foreground hover:text-primary p-0 mb-3"
                        aria-expanded={expandedServices[service.title]}
                      >
                        Show More Details
                        {expandedServices[service.title] ? (
                          <ChevronUp className="ml-1 h-3 w-3" />
                        ) : (
                          <ChevronDown className="ml-1 h-3 w-3" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-accordion-down overflow-hidden">
                      <div className="bg-gradient-to-br from-background/80 to-primary/5 p-4 rounded-xl border border-primary/20 mb-3 backdrop-blur-sm shadow-lg">
                        {service.title === "Quantum Analytics" && (
                          <>
                            <h4 className="text-base font-semibold mb-3 text-primary">Detailed Capabilities:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Machine Learning & RLHF</h5>
                                  <p className="text-sm text-muted-foreground">Advanced ML algorithms with human feedback integration</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Impact Measurement</h5>
                                  <p className="text-sm text-muted-foreground">Track and measure organizational impact and progress</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Smart Decision Making</h5>
                                  <p className="text-sm text-muted-foreground">Data-driven insights for better business decisions</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {service.title === "Quantum Annotate" && (
                          <>
                            <h4 className="text-base font-semibold mb-3 text-primary">Annotation Excellence:</h4>
<div className="space-y-2">
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-sm">Multi-modal Support</h5>
      <p className="text-sm text-muted-foreground">Text, image, audio, and video dataset labeling</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-sm">Professional Workforce</h5>
      <p className="text-sm text-muted-foreground">Industry-grade quality with dedicated annotation specialists</p>
    </div>
  </div>
</div>
                          </>
                        )}
                        {service.title === "Quantum GenAI" && (
                          <>
                            <h4 className="text-base font-semibold mb-3 text-primary">AI Enhancement:</h4>
<div className="space-y-2">
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-sm">Model Fine-tuning</h5>
      <p className="text-sm text-muted-foreground">Expert fine-tuning for enhanced model performance</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-sm">Data Expertise</h5>
      <p className="text-sm text-muted-foreground">In-house specialists for optimal training strategies</p>
    </div>
  </div>
</div>
                          </>
                        )}
                        {service.title === "MLOps & DevOps" && (
                          <>
                            <h4 className="text-base font-semibold mb-3 text-primary">Deployment Excellence:</h4>
<div className="space-y-2">
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-sm">Automated Deployment</h5>
      <p className="text-sm text-muted-foreground">CI/CD pipelines for machine learning models</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-sm">Model Monitoring</h5>
      <p className="text-sm text-muted-foreground">Real-time performance tracking and drift detection</p>
    </div>
  </div>
</div>
                          </>
                        )}
                        <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg border border-primary/20">
  <p className="text-sm text-primary font-medium flex items-center gap-2">
    <span className="text-green-500">✓</span> Free consultation • <span className="text-green-500">✓</span> 30-day trial available • <span className="text-green-500">✓</span> Custom implementation
  </p>
</div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Button
  variant="ghost"
  onClick={() => {
    if (service.title === "Quantum Analytics") {
      navigateToTop('/quantum-analytics');
    } else if (service.title === "Quantum Annotate") {
      navigateToTop('/quantum-annotate');
    } else if (service.title === "Quantum GenAI") {
      navigateToTop('/quantum-genai');
    } else if (service.title === "MLOps & DevOps") {
      navigateToTop('/mlops-devops');
    } else {
      navigateToTop('/contact');
    }
  }}
  className="group/btn text-foreground hover:text-primary p-0 text-sm font-medium hover:gap-2 transition-all"
>
  Learn More <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 bg-gradient-to-br from-card via-card/50 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-primary/30 bg-primary/5">
                Methodology
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for delivering successful AI projects
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business challenges and requirements" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive AI strategy and roadmap" },
              { step: "03", title: "Implementation", description: "Building and deploying your AI solutions" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative text-center p-8 rounded-xl bg-gradient-to-br from-card/50 to-background/50 border border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-primary-foreground font-bold text-base mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Solutions Section */}
      <section className="relative py-16 bg-gradient-to-br from-muted/30 via-muted/20 to-background overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
              <Badge variant="outline" className="px-4 py-1 text-xs font-semibold border-primary/30 bg-primary/5">
                Legacy
              </Badge>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Explore Our Legacy
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover our archived innovations and past products that shaped our AI evolution
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => navigateToTop('/research')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View Archived Solutions <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 text-base font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateToTop('/careers')}
                className="px-8 py-6 text-base font-semibold border-2 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

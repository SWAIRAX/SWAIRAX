import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, Brain, Database, Cog, BarChart3, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const Services = () => {
  const navigate = useNavigate();
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
      <section className="pt-20 pb-8 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 animate-fade-in">
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive AI and data solutions designed to accelerate your digital transformation journey.
            </p>
            {/* <Button
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started Today
            </Button> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">Our Core Services</h2>
            <p className="text-sm text-muted-foreground">
              End-to-end solutions for your AI and data needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-sm font-bold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 text-xs">{service.description}</p>

                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
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
                      <div className="bg-background/50 p-3 rounded-lg border border-border/50 mb-3">
                        {service.title === "Quantum Analytics" && (
                          <>
                            <h4 className="text-sm font-semibold mb-3 text-primary">Detailed Capabilities:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-xs">Machine Learning & RLHF</h5>
                                  <p className="text-xs text-muted-foreground">Advanced ML algorithms with human feedback integration</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-xs">Impact Measurement</h5>
                                  <p className="text-xs text-muted-foreground">Track and measure organizational impact and progress</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-xs">Smart Decision Making</h5>
                                  <p className="text-xs text-muted-foreground">Data-driven insights for better business decisions</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {service.title === "Quantum Annotate" && (
                          <>
                            <h4 className="text-sm font-semibold mb-3 text-primary">Annotation Excellence:</h4>
<div className="space-y-2">
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-xs">Multi-modal Support</h5>
      <p className="text-xs text-muted-foreground">Text, image, audio, and video dataset labeling</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-xs">Professional Workforce</h5>
      <p className="text-xs text-muted-foreground">Industry-grade quality with dedicated annotation specialists</p>
    </div>
  </div>
</div>
                          </>
                        )}
                        {service.title === "Quantum GenAI" && (
                          <>
                            <h4 className="text-sm font-semibold mb-3 text-primary">AI Enhancement:</h4>
<div className="space-y-2">
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-xs">Model Fine-tuning</h5>
      <p className="text-xs text-muted-foreground">Expert fine-tuning for enhanced model performance</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-xs">Data Expertise</h5>
      <p className="text-xs text-muted-foreground">In-house specialists for optimal training strategies</p>
    </div>
  </div>
</div>
                          </>
                        )}
                        {service.title === "MLOps & DevOps" && (
                          <>
                            <h4 className="text-sm font-semibold mb-3 text-primary">Deployment Excellence:</h4>
<div className="space-y-2">
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-xs">Automated Deployment</h5>
      <p className="text-xs text-muted-foreground">CI/CD pipelines for machine learning models</p>
    </div>
  </div>
  <div className="flex items-start space-x-2">
    <CheckCircle className="w-3 h-3 text-primary mt-0.5" />
    <div>
      <h5 className="font-medium text-xs">Model Monitoring</h5>
      <p className="text-xs text-muted-foreground">Real-time performance tracking and drift detection</p>
    </div>
  </div>
</div>
                          </>
                        )}
                        <div className="mt-3 p-2 bg-primary/10 rounded-lg">
  <p className="text-xs text-primary font-medium">
    ✓ Free consultation • ✓ 30-day trial available • ✓ Custom implementation
  </p>
</div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Button
  variant="ghost"
  onClick={() => {
    if (service.title === "Quantum Analytics") {
      navigate('/quantum-analytics');
    } else if (service.title === "Quantum Annotate") {
      navigate('/quantum-annotate');
    } else if (service.title === "Quantum GenAI") {
      navigate('/quantum-genai');
    } else if (service.title === "MLOps & DevOps") {
      navigate('/mlops-devops');
    } else {
      navigate('/contact');
    }
  }}
  className="text-foreground hover:text-primary p-0 text-xs"
>
  Learn More <ArrowRight className="ml-1 h-3 w-3" />
</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">Our Process</h2>
            <p className="text-sm text-muted-foreground">
              A proven methodology for delivering successful AI projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business challenges and requirements" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive AI strategy and roadmap" },
              { step: "03", title: "Implementation", description: "Building and deploying your AI solutions" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Solutions Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3">Explore Our Legacy</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Discover our archived innovations and past products that shaped our AI evolution
          </p>
          <Button
            size="sm"
            variant="outline"
            onClick={() => window.location.href = '/research'}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Archived Solutions <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Let's discuss how our AI solutions can drive your success
          </p>
          <Button
            size="sm"
            onClick={() => window.location.href = '/contact'}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

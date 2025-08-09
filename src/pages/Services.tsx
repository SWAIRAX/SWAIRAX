import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, Brain, Database, Cog, BarChart3, ChevronDown, ChevronUp, CheckCircle } from "lucide-react";

const Services = () => {
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
      <section className="pt-24 pb-16 bg-gradient-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Products & <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground">
              End-to-end solutions for your AI and data needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Collapsible open={expandedServices[service.title]} onOpenChange={() => toggleService(service.title)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-foreground hover:text-primary p-0 mb-4"
                        aria-expanded={expandedServices[service.title]}
                      >
                        Show More Details
                        {expandedServices[service.title] ? (
                          <ChevronUp className="ml-2 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-accordion-down overflow-hidden">
                      <div className="bg-background/50 p-6 rounded-lg border border-border/50 mb-4">
                        {service.title === "Quantum Analytics" && (
                          <>
                            <h4 className="text-lg font-semibold mb-4 text-primary">Detailed Capabilities:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Machine Learning & RLHF</h5>
                                  <p className="text-sm text-muted-foreground">Advanced ML algorithms with human feedback integration</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Impact Measurement</h5>
                                  <p className="text-sm text-muted-foreground">Track and measure organizational impact and progress</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Smart Decision Making</h5>
                                  <p className="text-sm text-muted-foreground">Data-driven insights for better business decisions</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {service.title === "Quantum Annotate" && (
                          <>
                            <h4 className="text-lg font-semibold mb-4 text-primary">Annotation Excellence:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Multi-modal Support</h5>
                                  <p className="text-sm text-muted-foreground">Text, image, audio, and video dataset labeling</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Professional Workforce</h5>
                                  <p className="text-sm text-muted-foreground">Industry-grade quality with dedicated annotation specialists</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {service.title === "Quantum GenAI" && (
                          <>
                            <h4 className="text-lg font-semibold mb-4 text-primary">AI Enhancement:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Model Fine-tuning</h5>
                                  <p className="text-sm text-muted-foreground">Expert fine-tuning for enhanced model performance</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Data Expertise</h5>
                                  <p className="text-sm text-muted-foreground">In-house specialists for optimal training strategies</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        {service.title === "MLOps & DevOps" && (
                          <>
                            <h4 className="text-lg font-semibold mb-4 text-primary">Deployment Excellence:</h4>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Automated Deployment</h5>
                                  <p className="text-sm text-muted-foreground">CI/CD pipelines for machine learning models</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium">Model Monitoring</h5>
                                  <p className="text-sm text-muted-foreground">Real-time performance tracking and drift detection</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                          <p className="text-sm text-primary font-medium">
                            ✓ Free consultation • ✓ 30-day trial available • ✓ Custom implementation
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Button
                    variant="ghost"
                    onClick={() => {
                      if (service.title === "MLOps & DevOps") {
                        window.location.href = '/mlops';
                      } else {
                        window.location.href = '/contact';
                      }
                    }}
                    className="text-foreground hover:text-primary p-0"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              A proven methodology for delivering successful AI projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business challenges and requirements" },
              { step: "02", title: "Strategy", description: "Developing a comprehensive AI strategy and roadmap" },
              { step: "03", title: "Implementation", description: "Building and deploying your AI solutions" },
              { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Solutions Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Our Legacy</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Discover our archived innovations and past products that shaped our AI evolution
          </p>
          <Button
            size="lg"
            variant="outline"
            onClick={() => window.location.href = '/research'}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View Archived Solutions <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our AI solutions can drive your success
          </p>
          <Button
            size="lg"
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

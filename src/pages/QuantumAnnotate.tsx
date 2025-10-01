import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database, Image, Volume2, Video, CheckCircle, Sparkles, Target, Users, Shield, Clock, Zap, FileText, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const QuantumAnnotate = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Multi-modal Annotation",
      description: "Comprehensive annotation services for text, image, audio, and video datasets. Our platform supports all major data types with specialized tools for each modality.",
      benefits: ["Text annotation", "Image labeling", "Audio transcription", "Video analysis"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Professional Workforce",
      description: "Industry-grade quality delivered by our dedicated team of annotation specialists with expertise across various domains and data types.",
      benefits: ["Expert annotators", "Domain specialists", "Quality assurance", "Consistent standards"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Industry-Grade Quality",
      description: "Rigorous quality control processes ensure high accuracy and consistency across all annotation projects, meeting enterprise standards.",
      benefits: ["Quality control", "Accuracy validation", "Consistency checks", "Enterprise standards"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Handle projects of any size with our scalable infrastructure and flexible workforce that can adapt to your project requirements and timelines.",
      benefits: ["Flexible scaling", "Rapid deployment", "Custom workflows", "Timeline management"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Custom Annotation Frameworks",
      description: "Tailored annotation frameworks designed specifically for your use case, ensuring optimal data quality for your machine learning models.",
      benefits: ["Custom schemas", "Use-case optimization", "Model-specific labeling", "Flexible guidelines"]
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

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mr-3 animate-pulse">
                  <Database className="h-6 w-6" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Quantum <span className="text-primary">Annotate</span>
                </h1>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
                Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                  onClick={() => {
                    const target = document.getElementById("features");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Services <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section id="features" className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-xl font-bold mb-3">Comprehensive Annotation Services</h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Professional data annotation services that deliver high-quality, consistent results across all data modalities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:shadow-card transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-sm font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-xs">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
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
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-xl font-bold mb-3">Our Annotation Process</h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to delivering high-quality annotated data that meets your specific requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto group-hover:bg-primary/30 transition-colors">
                    {step.icon}
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl md:text-3xl font-bold mb-3">
              Ready to Annotate Your Data?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 max-w-3xl mx-auto">
              Let's discuss how our professional annotation services can help you create high-quality training data for your machine learning models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
                asChild
              >
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                asChild
              >
                <Link to="/services">View All Services</Link>
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

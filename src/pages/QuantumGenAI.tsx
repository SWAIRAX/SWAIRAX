import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Cog, Database, Zap, CheckCircle, Sparkles, Target, TrendingUp, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const QuantumGenAI = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced Model Fine-tuning",
      description: "Leverage our expertise in fine-tuning large language models to achieve superior performance on your specific use cases. We optimize models for accuracy, efficiency, and domain-specific requirements.",
      benefits: ["Custom model architectures", "Domain-specific optimization", "Performance benchmarking", "Continuous improvement"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Expertise & Curation",
      description: "Our in-house data specialists ensure your AI models are trained on high-quality, relevant datasets. We handle data preprocessing, augmentation, and quality assurance.",
      benefits: ["Data quality assessment", "Automated preprocessing", "Data augmentation strategies", "Privacy compliance"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Speed & Performance Optimization",
      description: "Achieve faster inference times and improved model efficiency through advanced optimization techniques including quantization, pruning, and hardware-specific optimizations.",
      benefits: ["Model compression", "Inference acceleration", "Memory optimization", "Hardware optimization"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Custom AI Solutions",
      description: "Build tailored generative AI solutions that align with your business objectives. From chatbots to content generation, we create AI systems that deliver measurable results.",
      benefits: ["Custom AI applications", "Integration services", "API development", "Scalable deployment"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability & Monitoring",
      description: "Ensure your AI models perform consistently with comprehensive monitoring, error handling, and automated quality assurance systems.",
      benefits: ["Real-time monitoring", "Error detection", "Performance tracking", "Automated alerts"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your requirements, existing data, and business objectives to design the optimal AI solution.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Data Preparation",
      description: "Our experts clean, preprocess, and optimize your data for maximum model performance.",
      icon: <Database className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Model Development",
      description: "We fine-tune and optimize models using cutting-edge techniques and your specific data.",
      icon: <Cog className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing ensures your AI solution meets performance benchmarks and business requirements.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing monitoring, maintenance, and optimization support.",
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

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-secondary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary mr-4 animate-pulse">
                  <Brain className="h-8 w-8" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold">
                  Quantum <span className="text-primary">GenAI</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Enhance generative AI model accuracy, reliability, and speed through our in-house data expertise and advanced fine-tuning techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
                  onClick={() => {
                    const target = document.getElementById("features");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Features <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
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
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful AI Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive suite of AI services delivers measurable improvements in model performance, speed, and reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:shadow-card transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm group-hover:text-foreground transition-colors">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Development Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures your AI solutions are delivered on time, within budget, and exceed expectations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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

                  {/* Connecting line */}
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

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Cutting-Edge Technology</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We leverage the latest AI frameworks, tools, and methodologies to deliver state-of-the-art solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                className={`text-center p-6 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your AI Capabilities?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let's discuss how our Quantum GenAI services can enhance your AI models and drive better business outcomes.
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

export default QuantumGenAI;

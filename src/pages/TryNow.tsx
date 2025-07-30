import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const TryNow = () => {
  const platforms = [
    {
      name: "SURASOFT",
      type: "AI Security Platform",
      description: "Advanced video analytics and biometric verification for real-time crime prevention.",
      features: ["Real-time monitoring", "Biometric verification", "Instant alerts", "Affordable pricing"],
      cta: "Start Free Trial"
    },
    {
      name: "AI Proctoring",
      type: "Online Assessment",
      description: "AI-powered proctoring system for secure online examinations and interviews.",
      features: ["Real-time monitoring", "Automated detection", "Secure assessments", "Easy integration"],
      cta: "Request Demo"
    },
    {
      name: "Askari LLM",
      type: "Policy Guardrails",
      description: "Python package for enforcing ethical and operational boundaries in AI systems.",
      features: ["Policy enforcement", "Easy integration", "Customizable rules", "Open source"],
      cta: "Download Package"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Try Our <span className="text-primary">AI Solutions</span> Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience the power of our data-centric AI solutions. Get started with free trials, 
              demos, and developer packages to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select from our suite of AI-powered solutions designed for different business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                      {platform.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{platform.name}</h3>
                  <p className="text-muted-foreground mb-6">{platform.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {platform.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant="outline"
                    onClick={() => window.location.href = '/contact'}
                  >
                    {platform.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Implementation</h3>
              <p className="text-muted-foreground">
                Get up and running in minutes with our easy-to-use platforms and comprehensive documentation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Scale</h3>
              <p className="text-muted-foreground">
                Cloud-native solutions that scale globally with enterprise-grade infrastructure and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-muted-foreground">
                Bank-level security and compliance with industry standards to protect your data and operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the Data-Centric AI Movement
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect, profile, understand & orchestrate your data preparation flows to train models more efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">40x</div>
                <p className="text-sm text-muted-foreground">More productivity</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">20%</div>
                <p className="text-sm text-muted-foreground">Faster delivery</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <p className="text-sm text-muted-foreground">Happy customers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2k+</div>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose your platform and start your AI transformation journey today. No credit card required for trials.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TryNow;
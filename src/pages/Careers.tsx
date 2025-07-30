import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Users, ArrowRight, Zap, Heart, Globe } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior AI/ML Engineer",
      department: "Engineering",
      location: "Dar es Salaam / Remote",
      type: "Full-time",
      description: "Join our AI team to build cutting-edge machine learning solutions for enterprise clients.",
      requirements: ["5+ years ML experience", "Python/TensorFlow", "MLOps knowledge"]
    },
    {
      title: "Data Scientist",
      department: "Data Science",
      location: "Remote",
      type: "Full-time",
      description: "Analyze complex datasets and build predictive models to drive business insights.",
      requirements: ["PhD/Masters in relevant field", "Python/R", "Statistical modeling"]
    },
    {
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Dar es Salaam",
      type: "Full-time",
      description: "Develop and maintain web applications for our AI platform and client solutions.",
      requirements: ["React/TypeScript", "Node.js", "Cloud platforms"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain scalable infrastructure for AI/ML workloads.",
      requirements: ["Kubernetes", "AWS/Azure", "CI/CD pipelines"]
    },
    {
      title: "Product Manager - AI",
      department: "Product",
      location: "Dar es Salaam / Remote",
      type: "Full-time",
      description: "Lead product strategy and development for our AI-powered solutions.",
      requirements: ["Product management experience", "AI/ML knowledge", "Technical background"]
    },
    {
      title: "Business Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth by identifying and developing new business opportunities.",
      requirements: ["B2B sales experience", "Tech industry knowledge", "Communication skills"]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and async collaboration"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Cutting-Edge Projects",
      description: "Work on innovative AI solutions that impact businesses globally"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Comprehensive Benefits",
      description: "Health insurance, learning budget, and wellness programs"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Diverse Team",
      description: "Join a global team of talented individuals from diverse backgrounds"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and data science"
    },
    {
      title: "Inclusive Excellence",
      description: "We believe diverse perspectives drive better solutions"
    },
    {
      title: "Client Impact",
      description: "We measure success by the value we create for our clients"
    },
    {
      title: "Continuous Learning",
      description: "We invest in growth and learning for every team member"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the Future of <span className="text-primary">AI Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of a team that's transforming businesses through cutting-edge AI and data science solutions.
            </p>
            <Button 
              size="lg" 
              onClick={() => document.getElementById('positions')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and help us build a culture where everyone can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-card border-border text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Join Quantum Intelligence?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer competitive benefits and a work environment designed to help you grow and succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting opportunities to make an impact in the AI industry.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold">{position.title}</h3>
                        <Badge variant="secondary">{position.department}</Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {position.type}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <Badge key={reqIndex} variant="outline" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      onClick={() => window.location.href = '/contact'}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't see the right fit?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and tell us how you'd like to contribute.
            </p>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href = '/contact'}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
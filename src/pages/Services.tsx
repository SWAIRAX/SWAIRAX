import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, Cog, BarChart3 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Solutions Development",
      description: "Custom AI-powered solutions tailored to your business needs, from computer vision to natural language processing.",
      features: ["Computer Vision", "NLP & LLMs", "Generative AI", "Custom AI Models"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure to support your data-driven decision making.",
      features: ["Data Pipeline Design", "ETL Processes", "Data Lake Architecture", "Real-time Processing"]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "MLOps & DevOps",
      description: "Bridge the gap between data science and production with our MLOps expertise.",
      features: ["Model Deployment", "CI/CD for ML", "Model Monitoring", "Infrastructure as Code"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our BI and analytics solutions.",
      features: ["Data Visualization", "Business Analytics", "Reporting Dashboards", "Predictive Analytics"]
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
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started Today
            </Button>
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
                  
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      if (service.title === "MLOps & DevOps") {
                        window.location.href = '/mlops';
                      } else if (service.title === "Business Intelligence") {
                        window.location.href = '/business-analysis';
                      } else if (service.title === "AI Solutions Development") {
                        window.location.href = '/ai-studio';
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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Server, GitBranch, Monitor, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const MLOps = () => {
  const features = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Model Deployment",
      description: "Seamless deployment of ML models to production environments with automated scaling."
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Version Control",
      description: "Track model versions, experiments, and data lineage for complete transparency."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring & Analytics",
      description: "Real-time monitoring of model performance and data drift detection."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security and compliance for regulated industries."
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
              Machine Learning <span className="text-primary">+ DevOps</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Bridge the gap between data science and IT operations. Convert your data to business 
              value by deploying your models into production with our MLOps expertise.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Deploy Your Models</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Last-Mile Problem</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Research shows that <span className="text-primary font-semibold">50-90% of AI models</span> 
              are never commercialized because of deployment challenges. You have the data and the model, 
              but still can't see the return on investment for your AI projects.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our MLOps Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete machine learning operations platform for enterprise-grade AI deployment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-secondary border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your AI Investment
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We practice Machine Learning Operations (MLOps) by bridging the gap between 
                data and IT Ops teams. Our approach ensures your models deliver real business value.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Faster time-to-market for AI solutions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Reduced operational complexity</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Improved model reliability and performance</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Scalable infrastructure for growing needs</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-lg border">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <p className="text-sm text-muted-foreground">Faster Deployment</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Deploy Your AI Models?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our MLOps experts help you bridge the gap between development and production.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">Start MLOps Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLOps;
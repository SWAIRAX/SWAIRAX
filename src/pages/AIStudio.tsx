import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Brain, Code, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const AIStudio = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Computer Vision",
      description: "Advanced image recognition, object detection, and visual analytics solutions."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Natural Language Processing",
      description: "Text analysis, sentiment recognition, and language understanding systems."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Generative AI",
      description: "Large language models, content generation, and creative AI applications."
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
              AI Studio & <span className="text-primary">Ideas</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get customized AI powered solutions for research or business challenges. 
              Our expert team combines data scientists, developers, and business strategists 
              to deliver innovative solutions.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in cutting-edge AI technologies to solve complex business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our AI Studio?
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Reduce development timeline by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Cost-effective solutions with faster delivery</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>Expert team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>End-to-end support from concept to deployment</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-secondary p-8 rounded-lg border">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Successful AI Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how our AI solutions can drive your success.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIStudio;
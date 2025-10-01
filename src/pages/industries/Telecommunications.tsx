import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Radio,
  Network,
  Bot,
  Zap,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Telecommunications = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const solutions = [
    {
      title: "Network Optimization",
      description: "AI-driven network performance monitoring and predictive maintenance",
      icon: Network,
      features: ["Performance Monitoring", "Predictive Maintenance", "Capacity Planning"]
    },
    {
      title: "Customer Support Automation",
      description: "Intelligent chatbots and automated support systems for 24/7 customer service",
      icon: Bot,
      features: ["AI Chatbots", "Automated Ticketing", "Self-Service Portals"]
    },
    {
      title: "Real-time Data Routing",
      description: "Smart data routing and traffic management for optimal network performance",
      icon: Zap,
      features: ["Traffic Management", "Load Balancing", "Quality of Service"]
    },
    {
      title: "5G Infrastructure",
      description: "Next-generation network solutions and edge computing capabilities",
      icon: Radio,
      features: ["Edge Computing", "Network Slicing", "IoT Integration"]
    }
  ];

  const caseStudies = [
    {
      title: "Telecom Network Optimization",
      result: "40% reduction in network downtime",
      description: "Implemented AI-powered predictive maintenance for a major telecom provider"
    },
    {
      title: "Customer Support Automation",
      result: "60% faster response times",
      description: "Deployed intelligent chatbot system handling 80% of customer inquiries"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center">
              <Radio className="h-6 w-6 text-white" />
            </div>

            <Badge variant="outline" className="mb-3 text-xs">
              Telecommunications
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Everything that involves
              <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent"> Communication</span>
            </h1>

            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
              Revolutionize your telecommunications infrastructure with AI-powered network optimization,
              intelligent customer support, and real-time data routing for seamless connectivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigateToTop('/contact')}
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
              >
                Get Started
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">
              AI Solutions for Telecommunications
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technologies designed to enhance communication networks and customer experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="group hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-card/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center mb-4">
                      <Icon className="h-4 w-4 text-white" />
                    </div>

                    <h3 className="text-sm font-bold mb-2">
                      {solution.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-xs">
                      {solution.description}
                    </p>

                    <div className="space-y-1">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-3">
              Success Stories
            </h2>
            <p className="text-sm text-muted-foreground">
              Real results from our telecommunications clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={study.title} className="border-0 bg-card">
                <CardContent className="p-4 text-center">
                  <h3 className="text-sm font-bold mb-2">{study.title}</h3>
                  <div className="text-xl font-bold text-purple-600 mb-3">{study.result}</div>
                  <p className="text-muted-foreground text-xs">{study.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-3">
            Partner with Quantum Intelligence in transforming your industry
          </h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-2xl mx-auto">
            Ready to enhance your telecommunications infrastructure with AI? Let's discuss how we can
            help you improve network performance, customer satisfaction, and operational efficiency.
          </p>
          <Button
            size="sm"
            onClick={() => navigateToTop('/contact')}
            className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700"
          >
            Estimate Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Telecommunications;

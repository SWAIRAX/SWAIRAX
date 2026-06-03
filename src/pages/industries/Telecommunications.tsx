import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CTASection from "@/components/CTASection";
import Parallax from "@/components/Parallax";
import { SectionHeading, SectionLead, Section, Heading } from "@/components/typography";
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

  const outcomes = [
    {
      title: "Network Uptime",
      result: "Less downtime",
      description: "Predictive maintenance will prevent outages before they spread."
    },
    {
      title: "Smart Routing",
      result: "Stable QoS",
      description: "Traffic will auto-balance to keep latency and jitter in check."
    },
    {
      title: "Support Automation",
      result: "Faster answers",
      description: "Bots will resolve routine tickets and hand off cleanly when needed."
    },
    {
      title: "5G & Edge",
      result: "Ready for scale",
      description: "Edge and slicing will adapt capacity to real-time demand."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[280px] md:h-[300px] bg-gradient-to-b from-secondary-accent/10 via-secondary-accent/5 to-transparent pointer-events-none" />
        <Parallax speed={-0.25} clamp={150} className="absolute inset-x-0 -inset-y-[24%] h-[148%]">
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-transparent" />
        </Parallax>

          <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="max-w-4xl mx-auto text-left">
            <div className="w-12 h-12 mb-3 rounded-xl bg-primary flex items-center justify-center shadow-lg">
              <Radio className="h-6 w-6 text-primary-foreground" />
            </div>

            <SectionHeading className="text-foreground text-left">
              Everything that involves
              Communication
            </SectionHeading>

            <SectionLead className="max-w-3xl text-muted-foreground text-left mx-0">
              Revolutionize your telecommunications infrastructure with AI-powered network optimization,
              intelligent customer support, and real-time data routing for seamless connectivity.
            </SectionLead>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                onClick={() => navigateToTop('/contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => scrollToSection('solutions')}
                className="border-border text-foreground hover:bg-muted"
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative py-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-card rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-left mb-10 max-w-4xl mx-auto space-y-4">
            <Heading as="h2" size="h2" className="mb-2">
              AI for Telecommunications, tuned for reliability
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              We build network-aware AI for telcos—predictive uptime, self-tuning traffic, and customer care that answers before queues form.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We will focus on uptime, traffic routing, and support automation where they matter most. Some capabilities may be phased or co-developed—let's prioritize what keeps QoS stable and customers happy.
            </p>
          </div>
        </div>
      </section>

      {/* Future Outcomes */}
      <section className="relative py-20 bg-card overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">
              What AI will do for Telecommunications
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              Future-state outcomes you can expect as we deploy AI across your network
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left text-muted-foreground">
            {outcomes.map((item, index) => (
              <p key={item.title} className="text-sm md:text-base leading-relaxed animate-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                <span className="text-foreground font-semibold">{item.title}:</span> {item.result}. {item.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Partner with Quantum Intelligence in transforming your industry"
        description="Ready to enhance your telecommunications infrastructure with AI? Let's discuss how we can help you improve network performance, customer satisfaction, and operational efficiency."
        primary={{ label: "Estimate Project", href: "/contact" }}
        secondary={{ label: "View Solutions", href: "#solutions" }}
      />

      <Footer />
    </div>
  );
};

export default Telecommunications;

import { useNavigationWithScroll } from "@/utils/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBackdrop from "@/components/HeroBackdrop";
import CTASection from "@/components/CTASection";
import { Eyebrow, Heading, Lead } from "@/components/typography";
import {
  Banknote,
  Shield,
  TrendingUp,
  Smartphone,
  Brain,
  ArrowRight,
} from "lucide-react";

const FinancialServices = () => {
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();

  const solutions = [
    {
      title: "Fraud Detection",
      description: "AI-powered real-time transaction monitoring and anomaly detection",
      icon: Shield,
      features: ["Real-time Analysis", "Pattern Recognition", "Risk Scoring"]
    },
    {
      title: "Payment Processing",
      description: "Intelligent payment routing and optimization for better conversion rates",
      icon: Smartphone,
      features: ["Smart Routing", "Conversion Optimization", "Multi-channel Support"]
    },
    {
      title: "Risk Analytics",
      description: "Advanced predictive models for credit scoring and risk assessment",
      icon: TrendingUp,
      features: ["Credit Scoring", "Portfolio Risk", "Stress Testing"]
    },
    {
      title: "Digital Banking",
      description: "AI-enhanced customer experience and automated banking services",
      icon: Brain,
      features: ["Chatbots", "Personal Finance", "Automated Services"]
    }
  ];

  const outcomes = [
    {
      title: "Real-time Fraud",
      result: "Faster fraud stops",
      description: "AI will flag anomalies before approvals go through."
    },
    {
      title: "Payment Routing",
      result: "Fewer declines",
      description: "Smart routing will lift approvals and lower fees."
    },
    {
      title: "Risk Analytics",
      result: "Clearer risk",
      description: "Models will score portfolios and stress scenarios in minutes."
    },
    {
      title: "Digital CX",
      result: "Personalized banking",
      description: "Assistants will resolve tasks instantly with context."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-left">
            <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
              <Banknote className="h-7 w-7" />
            </div>

            <Eyebrow className="mb-3">Financial Services</Eyebrow>

            <Heading as="h1" size="display" className="mb-5 text-foreground">
              Getting Easy with the Payment Sector
            </Heading>

            <Lead className="mb-8 max-w-3xl mx-0 text-muted-foreground">
              Transform your financial services with intelligent automation, advanced fraud detection,
              and AI-powered analytics that deliver secure, efficient, and customer-centric solutions.
            </Lead>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                onClick={() => navigateToTop('/contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
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
      <section id="solutions" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-left mb-10 max-w-4xl mx-auto space-y-4">
            <Eyebrow>Solutions</Eyebrow>
            <Heading as="h2" size="h2" className="mb-2">
              AI for Financial Services, with production safety
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              We build fraud-safe, compliant AI for banks and payments—precision scoring, smarter routing, and trusted automation that protect revenue.
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We will target fraud, routing, risk scoring, and digital CX where they drive impact. Some capabilities may be phased or co-developed—let's pick the bets that move approvals, lower losses, and earn trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card
                  key={solution.title}
                  className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between mb-6 relative z-10">
                      <div className={`rounded-xl bg-primary/10 p-3 ${index % 2 === 1 ? "text-secondary-accent" : "text-primary"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 transition-colors duration-300">
                        {solution.features[0]}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                      {solution.description}
                    </p>

                    <ul className="space-y-2 relative z-10">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Outcomes */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-card overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-16">
            <Heading as="h2" size="h2" className="mb-4">
              What AI will do for Financial Services
            </Heading>
            <p className="text-base md:text-lg text-muted-foreground">
              Future-state outcomes you can expect as we deploy AI across your stack
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
        description="Ready to revolutionize your financial services with AI? Let's discuss how we can help you achieve better security, efficiency, and customer satisfaction."
        primary={{ label: "Estimate Project", href: "/contact" }}
        secondary={{ label: "View Solutions", href: "#solutions" }}
      />

      <Footer />
    </div>
  );
};

export default FinancialServices;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import HeroBackdrop from "@/components/HeroBackdrop";
import FullBleedHero from "@/components/FullBleedHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Cog, Cloud, Database, CheckCircle, Zap, Target, TrendingUp, Shield, Clock, GitBranch, Monitor, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Lead } from "@/components/ui/section";

const MLOpsDevOps = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Model Deployment & Infrastructure",
      description: "Deploy ML models to production with auto-scaling infrastructure, load balancing, and high availability across multi-cloud environments.",
      benefits: ["Auto-scaling deployment", "Multi-cloud support", "Load balancing", "High availability"]
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "CI/CD Pipelines for ML",
      description: "Automated continuous integration and deployment pipelines designed specifically for machine learning workflows with model validation and version control.",
      benefits: ["Automated pipelines", "Model validation", "Version control", "Rollback capabilities"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring system with real-time performance tracking, drift detection, automated alerts, and full observability for ML models in production.",
      benefits: ["Real-time monitoring", "Drift detection", "Performance tracking", "Automated observability"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Infrastructure Assessment",
      description: "We evaluate your current infrastructure and identify opportunities for optimization and automation.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Pipeline Design",
      description: "Design and architect MLOps pipelines tailored to your specific use cases and requirements.",
      icon: <GitBranch className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Build and configure your MLOps infrastructure with best practices and industry standards.",
      icon: <Cog className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Thoroughly test all components to ensure reliability, performance, and security.",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Deploy your MLOps solution and provide comprehensive training for your team.",
      icon: <Cloud className="h-6 w-6" />
    }
  ];

  const stats = [
    { value: "20%", label: "Faster Deployment", icon: <Zap className="h-6 w-6" /> },
    { value: "50%", label: "Reduced Errors", icon: <Shield className="h-6 w-6" /> },
    { value: "99.9%", label: "Uptime Guarantee", icon: <Clock className="h-6 w-6" /> },
    { value: "24/7", label: "Monitoring Support", icon: <Monitor className="h-6 w-6" /> }
  ];

  const tools = [
    { name: "Kubernetes", description: "Container Orchestration", category: "Orchestration" },
    { name: "Docker", description: "Containerization", category: "Containers" },
    { name: "Terraform", description: "Infrastructure as Code", category: "IaC" },
    { name: "Jenkins", description: "CI/CD Pipeline", category: "CI/CD" },
    { name: "GitLab CI", description: "DevOps Platform", category: "CI/CD" },
    { name: "Prometheus", description: "Monitoring", category: "Monitoring" },
    { name: "Grafana", description: "Visualization", category: "Monitoring" },
    { name: "ELK Stack", description: "Logging", category: "Logging" },
    { name: "Apache Airflow", description: "Workflow Orchestration", category: "Orchestration" },
    { name: "MLflow", description: "ML Lifecycle", category: "MLOps" },
    { name: "Kubeflow", description: "ML Pipelines", category: "MLOps" },
    { name: "Seldon Core", description: "Model Serving", category: "Serving" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — scale.com FullBleedMediaSection pattern. */}
      <FullBleedHero
        imageSrc="/uploads/MLOPS&DEVOPS.webp"
        imageAlt="MLOps & DevOps"
        eyebrow={<><BarChart3 className="h-4 w-4 mr-2" />MLOps & DevOps</>}
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            From data science to production-grade AI.
          </Heading>
        }
        subtitle="Bridge the gap between data science and production with our MLOps expertise and deployment solutions. Transform your AI models into reliable, scalable business applications."
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("features")}
            >
              Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="border-white/40 text-white bg-transparent hover:bg-white/10 hover:text-white hover:border-white"
              onClick={() => navigateToTop('/contact')}
            >
              Get Started
            </Button>
          </>
        }
      />

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
      <section id="features" className="pb-8">
        {/* Interlocking ring divider — flush with the section's top edge. */}
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-6 pt-8">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Comprehensive MLOps Solutions</Heading>
              <Lead className="max-w-3xl mx-auto">
                Our end-to-end MLOps platform ensures your machine learning models are deployed, monitored, and maintained with enterprise-grade reliability.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="animate-spin-slow" />
                      <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="rounded-xl bg-white/10 p-3 shadow-inner text-primary">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-primary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed relative z-10">
                    {feature.description}
                  </p>

                  <ul className="space-y-2 relative z-10">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-card pb-8">
        {/* Interlocking matrix divider — flush with the section's top edge. */}
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-6 pt-8">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Our MLOps Implementation Process</Heading>
              <Lead className="max-w-3xl mx-auto">
                A systematic approach to implementing MLOps that ensures smooth deployment and long-term success of your machine learning initiatives.
              </Lead>
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
                <div className="relative mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary mx-auto group-hover:bg-primary/30 transition-colors">
                    {step.icon}
                  </div>

                  {/* Connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>

                <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3">Enterprise-Grade Tools & Technologies</Heading>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                We use industry-leading tools and technologies to build robust, scalable MLOps solutions that meet enterprise requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Cog className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-bold mb-1 text-sm group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{tool.description}</p>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <Heading as="h2" size="h2" className="mb-4">
                  Why Choose Our MLOps Solutions?
                </Heading>
                <p className="text-sm text-muted-foreground mb-6">
                  Our MLOps expertise helps organizations overcome the "last-mile" deployment problem that prevents 50-90% of AI models from reaching production.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Faster Time to Market",
                  description: "Reduce deployment time from months to weeks with our automated pipelines and proven methodologies.",
                  icon: <Zap className="h-4 w-4" />
                },
                {
                  title: "Improved Model Performance",
                  description: "Continuous monitoring and retraining ensure your models maintain peak performance in production.",
                  icon: <TrendingUp className="h-4 w-4" />
                },
                {
                  title: "Reduced Operational Costs",
                  description: "Automated scaling and resource optimization minimize infrastructure costs while maximizing efficiency.",
                  icon: <Target className="h-4 w-4" />
                },
                {
                  title: "Enhanced Reliability",
                  description: "Built-in redundancy, monitoring, and automated failover ensure 99.9% uptime for your ML services.",
                  icon: <Shield className="h-4 w-4" />
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 p-3 rounded-lg hover:bg-background/50 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              Ready to Deploy Your AI Models?
            </Heading>
            <p className="text-sm text-foreground/85 mb-4 max-w-2xl mx-auto">
              Let's discuss how our MLOps solutions can help you bridge the gap between data science and production, ensuring your AI models deliver real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                onClick={() => navigateToTop('/contact')}
              >
                Start Your MLOps Journey <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
                onClick={() => navigateToTop('/services')}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MLOpsDevOps;

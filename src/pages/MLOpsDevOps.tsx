import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart3, Cog, Cloud, Database, CheckCircle, Zap, Target, TrendingUp, Shield, Clock, GitBranch, Monitor, Settings } from "lucide-react";
import { Link } from "react-router-dom";

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
      title: "Model Deployment & Scaling",
      description: "Deploy your machine learning models to production with automated scaling, load balancing, and high availability. Our solutions ensure your models can handle any traffic load.",
      benefits: ["Auto-scaling infrastructure", "Load balancing", "High availability", "Multi-cloud deployment"]
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "CI/CD for Machine Learning",
      description: "Implement continuous integration and deployment pipelines specifically designed for ML workflows. Automate testing, validation, and deployment of your models.",
      benefits: ["Automated testing", "Model validation", "Version control", "Rollback capabilities"]
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Model Monitoring & Observability",
      description: "Monitor your models in production with real-time performance tracking, drift detection, and automated alerts. Ensure your models maintain accuracy over time.",
      benefits: ["Real-time monitoring", "Drift detection", "Performance tracking", "Automated alerts"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Infrastructure as Code",
      description: "Manage your ML infrastructure using code with Terraform, Kubernetes, and other IaC tools. Ensure consistent, reproducible, and scalable deployments.",
      benefits: ["Terraform automation", "Kubernetes orchestration", "Environment consistency", "Cost optimization"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Pipeline Automation",
      description: "Build robust data pipelines that automatically process, validate, and prepare data for your ML models. Ensure data quality and consistency across all stages.",
      benefits: ["Automated data processing", "Data validation", "Quality checks", "Pipeline orchestration"]
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-14 bg-black text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85"
            style={{ backgroundImage: "url(\"/uploads/MLOPS&DEVOPS.webp\")" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />
          <div className="absolute inset-0 holo-grid opacity-15" />
          <div className="absolute -left-10 top-10 w-64 h-64 aurora-glow opacity-60" />
          <div className="absolute -right-12 bottom-12 w-72 h-72 aurora-glow opacity-60 delay-300" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-primary mr-3 shadow-inner shadow-red-500/20">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  MLOps & <span className="text-primary">DevOps</span>
                </h1>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
                Bridge the gap between data science and production with our MLOps expertise and deployment solutions. Transform your AI models into reliable, scalable business applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-500 hover:to-red-500 text-white px-6 md:px-8 py-4 text-base font-semibold shadow-[0_20px_60px_-30px_rgba(255,0,0,0.75)]"
                  onClick={() => scrollToSection("features")}
                >
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => navigateToTop('/contact')}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section id="features" className="py-8">
        <div className="container mx-auto px-6">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Comprehensive MLOps Solutions</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Our end-to-end MLOps platform ensures your machine learning models are deployed, monitored, and maintained with enterprise-grade reliability.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:shadow-card transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                    {feature.icon}
                  </div>

                  <h3 className="text-sm font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs group-hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
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
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Our MLOps Implementation Process</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to implementing MLOps that ensures smooth deployment and long-term success of your machine learning initiatives.
              </p>
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
              <h2 className="text-xl font-bold mb-3">Enterprise-Grade Tools & Technologies</h2>
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
                <h2 className="text-xl font-bold mb-4">
                  Why Choose Our MLOps Solutions?
                </h2>
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

      {/* CTA Section */}
      <section className="py-8 bg-gradient-secondary">
        <div className="container mx-auto px-6 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-xl font-bold mb-3">
              Ready to Deploy Your AI Models?
            </h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
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

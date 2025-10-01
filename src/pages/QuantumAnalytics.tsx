import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, TrendingUp, CheckCircle, Sparkles, Target, BarChart3, PieChart, Activity, Shield, Clock, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const QuantumAnalytics = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Machine Learning & RLHF",
      description: "Advanced machine learning algorithms enhanced with Reinforcement Learning from Human Feedback (RLHF) to deliver more accurate and contextually relevant insights from your data.",
      benefits: ["Advanced ML algorithms", "Human feedback integration", "Contextual learning", "Continuous improvement"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Impact Measurement & Tracking",
      description: "Comprehensive analytics platform that measures and tracks the real-world impact of your initiatives, providing clear ROI metrics and performance indicators.",
      benefits: ["ROI measurement", "Performance tracking", "Impact visualization", "Progress monitoring"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Smart Decision Making",
      description: "Transform raw data into actionable insights with our AI-powered analytics engine that identifies patterns, trends, and opportunities for strategic decision making.",
      benefits: ["Pattern recognition", "Trend analysis", "Predictive insights", "Strategic recommendations"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data-Centric Platform",
      description: "A comprehensive data platform that centralizes, processes, and analyzes information from multiple sources, ensuring data quality and consistency across your organization.",
      benefits: ["Data centralization", "Quality assurance", "Multi-source integration", "Real-time processing"]
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Progress Tracking & Optimization",
      description: "Monitor and optimize your business processes with real-time dashboards and automated reporting that keeps you informed of key performance metrics.",
      benefits: ["Real-time dashboards", "Automated reporting", "Process optimization", "Performance alerts"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Data Discovery",
      description: "We analyze your existing data sources and identify opportunities for insights and optimization.",
      icon: <Database className="h-6 w-6" />
    },
    {
      step: "02",
      title: "Platform Setup",
      description: "Configure and deploy our analytics platform tailored to your specific business needs.",
      icon: <Target className="h-6 w-6" />
    },
    {
      step: "03",
      title: "Model Training",
      description: "Train custom ML models using your data to generate accurate predictions and insights.",
      icon: <Brain className="h-6 w-6" />
    },
    {
      step: "04",
      title: "Dashboard Creation",
      description: "Build interactive dashboards and reports that visualize your data in meaningful ways.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      step: "05",
      title: "Deployment & Training",
      description: "Deploy the solution and provide comprehensive training for your team to maximize value.",
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const stats = [
    { value: "40x", label: "More Productivity", icon: <TrendingUp className="h-6 w-6" /> },
    { value: "20%", label: "Faster Delivery", icon: <Clock className="h-6 w-6" /> },
    { value: "100+", label: "Active Users", icon: <Target className="h-6 w-6" /> },
    { value: "10x", label: "Performance Boost", icon: <Zap className="h-6 w-6" /> }
  ];

  const capabilities = [
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced statistical models and machine learning algorithms.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Real-time Monitoring",
      description: "Track key performance indicators and business metrics in real-time with automated alerts.",
      icon: <Activity className="h-6 w-6" />
    },
    {
      title: "Data Visualization",
      description: "Create compelling visualizations that make complex data easy to understand and act upon.",
      icon: <PieChart className="h-6 w-6" />
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically, saving time and ensuring consistency.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Custom Dashboards",
      description: "Build personalized dashboards tailored to different roles and business functions.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Data Integration",
      description: "Connect and analyze data from multiple sources for comprehensive insights.",
      icon: <Database className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-secondary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/15 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mr-3 animate-pulse">
                  <Brain className="h-6 w-6" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Quantum <span className="text-primary">Analytics</span>
                </h1>
              </div>
              <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
                Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                  onClick={() => {
                    const target = document.getElementById("features");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Explore Platform <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
                  asChild
                >
                  <Link to="/contact">Get Started</Link>
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
              <h2 className="text-xl font-bold mb-3">Powerful Analytics Capabilities</h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive analytics platform delivers measurable improvements in data understanding, decision-making speed, and business impact.
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

                  <p className="text-muted-foreground mb-4 leading-relaxed text-xs">
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

      {/* Capabilities Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-xl font-bold mb-3">Advanced Analytics Features</h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                Comprehensive analytics tools designed to transform your data into actionable business intelligence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border border-border/50 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-xl font-bold mb-3">Implementation Process</h2>
              <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to implementing our analytics platform that ensures maximum value and adoption.
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

      {/* Benefits Section */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <h2 className="text-xl font-bold mb-4">
                  Why Choose Quantum Analytics?
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Our data-centric approach helps organizations unlock the full potential of their data, driving smarter decisions and measurable business impact.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Data-Driven Insights",
                  description: "Transform raw data into actionable insights that drive strategic decision-making and business growth.",
                  icon: <Brain className="h-4 w-4" />
                },
                {
                  title: "Measurable Impact",
                  description: "Track and measure the real-world impact of your initiatives with comprehensive ROI analytics.",
                  icon: <Target className="h-4 w-4" />
                },
                {
                  title: "Scalable Platform",
                  description: "Grows with your business, handling increasing data volumes and complexity without performance degradation.",
                  icon: <TrendingUp className="h-4 w-4" />
                },
                {
                  title: "User-Friendly Interface",
                  description: "Intuitive dashboards and reports that make complex data accessible to all stakeholders.",
                  icon: <BarChart3 className="h-4 w-4" />
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
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-sm text-muted-foreground mb-4 max-w-3xl mx-auto">
              Let's discuss how our Quantum Analytics platform can help you understand your data, measure impact, and make smarter business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                asChild
              >
                <Link to="/contact">
                  Start Your Analytics Journey <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 text-sm"
                asChild
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuantumAnalytics;

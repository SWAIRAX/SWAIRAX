import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Database, TrendingUp, CheckCircle, Sparkles, Target, BarChart3, PieChart, Activity, Shield, Clock, Zap, ChevronRight, Network, ArrowUp, Users, Settings, AlertTriangle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const QuantumAnalytics = () => {
  const navigate = useNavigate();
  const { navigateToTop, scrollToSection } = useNavigationWithScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Advanced AI & Machine Learning",
      description: "Leverage cutting-edge AI algorithms and machine learning models to extract meaningful insights from your data and drive intelligent decision-making.",
      benefits: ["Advanced ML algorithms", "Predictive analytics", "Pattern recognition", "Automated insights"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Processing & Integration",
      description: "Comprehensive data platform that centralizes, processes, and analyzes information from multiple sources with enterprise-grade security and performance.",
      benefits: ["Data centralization", "Multi-source integration", "Real-time processing", "Enterprise security"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Interactive Dashboards & Reporting",
      description: "Beautiful, interactive dashboards and automated reporting systems that transform complex data into clear, actionable business intelligence.",
      benefits: ["Interactive dashboards", "Automated reporting", "Real-time visualization", "Custom metrics"]
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
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-14 bg-black text-white">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-85"
            style={{ backgroundImage: "url('/uploads/QUANTUM ANALYTICS.png')" }}
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
                  <Brain className="h-6 w-6" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black leading-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Deep <span className="text-primary">Operator</span>
                </h1>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto">
                Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 hover:from-red-500 hover:to-red-500 text-white px-6 md:px-8 py-4 text-base font-semibold shadow-[0_20px_60px_-30px_rgba(255,0,0,0.75)]"
                  onClick={() => scrollToSection("features")}
                >
                  Explore Platform <ArrowRight className="ml-2 h-5 w-5" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Powerful Analytics Capabilities</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive analytics platform delivers measurable improvements in data understanding, decision-making speed, and business impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border border-red-500/15 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black shadow-[0_20px_70px_-50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-2 hover:border-red-400/40 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/10" />
                <CardContent className="relative z-10 p-6 space-y-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-4 shadow-inner shadow-red-500/20">
                    {feature.icon}
                  </div>

                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-white/80 group-hover:text-white transition-colors">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">Advanced Analytics Features</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive analytics tools designed to transform your data into actionable business intelligence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border border-red-500/15 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-black hover:shadow-[0_20px_70px_-50px_rgba(0,0,0,0.8)] hover:border-red-400/40 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-inner shadow-red-500/20">
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

      {/* Problem Solving Approach Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900/10" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Red accent line animation */}
            <div className="mb-8">
              <div className={`h-0.5 bg-red-500 mx-auto transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />
            </div>

            {/* Main headline */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
                How do we approach problem solving?
              </h2>
            </div>

            {/* Body text with sequential fade-in */}
            <div className="space-y-4 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>We approach problem solving by first understanding what is happening,</p>
              </div>
              <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>then why it is happening,</p>
              </div>
              <div className={`transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>before guiding action that drives growth,</p>
              </div>
              <div className={`transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>improves customer outcomes,</p>
              </div>
              <div className={`transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p>and strengthens long-term business performance.</p>
              </div>
            </div>

            {/* Animated red underline */}
            <div className={`mt-8 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`h-0.5 bg-red-500 mx-auto transition-all duration-2000 delay-2000 ${isVisible ? 'w-32' : 'w-0'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Evolution Section */}
      <section className="py-16 bg-gradient-to-br from-background via-background to-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                From Questions to Decisions
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The evolution of data analytics maturity across four transformative stages
              </p>
            </div>
          </div>

          {/* Analytics Evolution Panels */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Panel 1 - Descriptive Analytics */}
            <div className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-gradient-to-br from-background to-background/50 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <PieChart className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">What happened?</h3>
                  <p className="text-sm font-semibold text-primary mb-3">DESCRIPTIVE ANALYTICS</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Understanding historical data patterns and current business states through comprehensive reporting and dashboards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Panel 2 - Diagnostic Analytics */}
            <div className={`group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-gradient-to-br from-background/80 to-background/60 border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">Why did it happen?</h3>
                  <p className="text-sm font-semibold text-primary mb-3">DIAGNOSTIC ANALYTICS</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Investigating root causes and correlations to understand the drivers behind observed patterns and outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Panel 3 - Predictive Analytics */}
            <div className={`group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-gradient-to-br from-primary/5 to-primary/10 border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Network className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">What might happen?</h3>
                  <p className="text-sm font-semibold text-primary mb-3">PREDICTIVE ANALYTICS</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Forecasting future trends and scenarios using statistical models and machine learning algorithms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Panel 4 - Prescriptive Analytics */}
            <div className={`group transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/20 border-primary/50 hover:border-primary/70 transition-all duration-500 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ArrowUp className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">How can we make it happen?</h3>
                  <p className="text-sm font-semibold text-primary mb-3">PRESCRIPTIVE ANALYTICS</p>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Recommending optimal actions and strategies to achieve desired outcomes and maximize business value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Flow indicator */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <ChevronRight className="h-5 w-5 text-primary animate-pulse" />
            </div>
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <ChevronRight className="h-5 w-5 text-primary animate-pulse" />
            </div>
            <div className={`transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <ChevronRight className="h-5 w-5 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems to Growth Results Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="container mx-auto px-6">
          <div className="text-center">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
              From Business Problems<br />to Growth Results
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We bridge insight to impact, converting real business challenges into clear growth outcomes through intelligence.
            </p>

            {/* Executive Table */}
            <div className="relative w-full max-w-7xl mx-auto px-1 sm:px-2 md:px-4 lg:px-6">
              {/* Table Glow Effect - Responsive blur and inset */}
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary/20 via-red-500/20 to-primary/20 rounded-xl sm:rounded-2xl blur-sm sm:blur-md opacity-20 sm:opacity-25" />

              <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl bg-card/80 backdrop-blur-md">
                {/* Table Header - Visible on all screens */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-primary/15 via-primary/8 to-primary/15 border-b border-border/60">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-foreground flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-primary rounded-full animate-pulse" />
                      <span>Area</span>
                    </h3>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-foreground flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <AlertTriangle className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 text-orange-500" />
                      <span className="hidden xs:inline">If the problem is…</span>
                      <span className="xs:hidden">Problem</span>
                    </h3>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/10">
                    <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primary flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <CheckCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
                      <span className="hidden xs:inline">We enable…</span>
                      <span className="xs:hidden">Solution</span>
                    </h3>
                  </div>
                </div>

                {/* Table Rows - Visible on all screens */}
                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-background/30 transition-all duration-1000">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                    <div className="relative flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <Brain className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold leading-tight">Decisions</h4>
                        <div className="w-3 h-0.5 sm:w-4 md:w-6 bg-white/60 rounded-full mt-0.5 sm:mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-background/80 to-background/60">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base break-words">Decisions are slow and based on outdated reports</p>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-primary/8 via-primary/12 to-primary/8">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed text-xs sm:text-sm md:text-base break-words">Faster decisions using what is happening now</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-background/30 transition-all duration-1000">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-r from-green-500/20 to-green-600/20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                    <div className="relative flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold leading-tight">Customers</h4>
                        <div className="w-3 h-0.5 sm:w-4 md:w-6 bg-white/60 rounded-full mt-0.5 sm:mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-background/80 to-background/60">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base break-words">Teams do not clearly understand customer needs or behavior</p>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-primary/8 via-primary/12 to-primary/8">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed text-xs sm:text-sm md:text-base break-words">A clear view of customer behavior and value</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-background/30 transition-all duration-1000">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                    <div className="relative flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <Settings className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold leading-tight">Operations</h4>
                        <div className="w-3 h-0.5 sm:w-4 md:w-6 bg-white/60 rounded-full mt-0.5 sm:mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-background/80 to-background/60">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base break-words">Teams rely on spreadsheets and manual updates to run daily work</p>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-primary/8 via-primary/12 to-primary/8">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed text-xs sm:text-sm md:text-base break-words">Live operational visibility so teams know what to do next</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-background/30 transition-all duration-1000">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                    <div className="relative flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold leading-tight">Growth & Revenue</h4>
                        <div className="w-3 h-0.5 sm:w-4 md:w-6 bg-white/60 rounded-full mt-0.5 sm:mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-background/80 to-background/60">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base break-words">Revenue loss or churn is noticed after it has already happened</p>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-primary/8 via-primary/12 to-primary/8">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed text-xs sm:text-sm md:text-base break-words">Early signals that reveal risk and opportunity in time to act</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 hover:bg-background/30 transition-all duration-1000">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-r from-red-500/20 to-red-600/20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
                    <div className="relative flex items-center space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                        <Zap className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm sm:text-base md:text-lg font-bold leading-tight">Scaling</h4>
                        <div className="w-3 h-0.5 sm:w-4 md:w-6 bg-white/60 rounded-full mt-0.5 sm:mt-1" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-background/80 to-background/60">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
                      </div>
                      <p className="text-foreground/80 leading-relaxed text-xs sm:text-sm md:text-base break-words">Growth increases confusion instead of control</p>
                    </div>
                  </div>
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-gradient-to-r from-primary/8 via-primary/12 to-primary/8">
                    <div className="flex items-start space-x-1 sm:space-x-2 md:space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary/20 rounded-lg flex items-center justify-center">
                          <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 text-primary" />
                        </div>
                      </div>
                      <p className="text-foreground font-semibold leading-relaxed text-xs sm:text-sm md:text-base break-words">Systems that keep the business organized and clear as it grows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Transition Statement */}
            <div className="mt-20 max-w-4xl mx-auto relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />

            </div>
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
                  Why Choose Deep Operator?
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
              Let's discuss how our Deep Operator platform can help you understand your data, measure impact, and make smarter business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm group"
                onClick={() => navigateToTop('/contact')}
              >
                Start Your Analytics Journey <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
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

export default QuantumAnalytics;

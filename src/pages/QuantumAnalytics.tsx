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
import { ArrowRight, Brain, Database, TrendingUp, CheckCircle, Sparkles, Target, BarChart3, PieChart, Activity, Shield, Clock, Zap, ChevronRight, Network, ArrowUp, Users, Settings, AlertTriangle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Heading, Lead } from "@/components/ui/section";

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

      {/* Hero Section — scale.com FullBleedMediaSection pattern. */}
      <FullBleedHero
        imageSrc="/uploads/QUANTUM ANALYTICS.png"
        imageAlt="Quantum Analytics platform"
        eyebrow={
          <>
            <Brain className="h-4 w-4 mr-2" />
            Deep Operator
          </>
        }
        title={
          <Heading as="h1" size="display" className="font-black text-white">
            Turn data into the decisions your business runs on.
          </Heading>
        }
        subtitle={
          <>
            Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.
          </>
        }
        cta={
          <>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-4 text-base font-semibold"
              onClick={() => scrollToSection("features")}
            >
              Explore Platform <ArrowRight className="ml-2 h-5 w-5" />
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
        {/* Interlocking ring divider — flush with the section's top edge so
            it visually belongs to this section instead of floating between
            two sections. */}
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-6 pt-8">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Powerful Analytics Capabilities</Heading>
              <Lead className="max-w-3xl mx-auto">
                Our comprehensive analytics platform delivers measurable improvements in data understanding, decision-making speed, and business impact.
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

      {/* Capabilities Section */}
      <section className="bg-card pb-8">
        {/* Interlocking matrix divider — flush with the section's top edge. */}
        <SectionDivider variant="matrix" flip className="w-full text-[hsl(var(--background))]" />
        <div className="container mx-auto px-6 pt-8">
            <div className="text-center mb-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-3 text-foreground">Advanced Analytics Features</Heading>
              <Lead className="max-w-3xl mx-auto">
                Comprehensive analytics tools designed to transform your data into actionable business intelligence.
              </Lead>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border border-border bg-white hover:shadow-[0_20px_70px_-50px_rgba(0,0,0,0.25)] hover:border-secondary-accent/40 transition-all duration-300 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-inner">
                  {capability.icon}
                </div>
                <h3 className="text-sm font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
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
              <Heading as="h2" size="h2" className="mb-3">Implementation Process</Heading>
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

      {/* Problem Solving Approach Section — light theme. */}
      <section className="py-16 bg-card text-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Accent line animation */}
            <div className="mb-8">
              <div className={`h-0.5 bg-primary mx-auto transition-all duration-1000 ${isVisible ? 'w-24' : 'w-0'}`} />
            </div>

            {/* Main headline */}
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-8 text-foreground">
                How do we approach problem solving?
              </Heading>
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

            {/* Animated underline */}
            <div className={`mt-8 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <div className={`h-0.5 bg-primary mx-auto transition-all duration-2000 delay-2000 ${isVisible ? 'w-32' : 'w-0'}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Evolution Section */}
      <section className="bg-gradient-to-br from-background via-background to-card pb-16">
        {/* Interlocking ring divider — flush with the section's top edge. */}
        <SectionDivider variant="ring" flip className="w-full text-[hsl(var(--card))]" />
        <div className="container mx-auto px-6 pt-16">
          <div className="text-center mb-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
              <Heading as="h2" size="h2" className="mb-4 text-foreground">
                From Questions to Decisions
              </Heading>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The evolution of data analytics maturity across four transformative stages
              </p>
            </div>
          </div>

          {/* Analytics Evolution Panels */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Panel 1 - Descriptive */}
            <div className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-white border border-border hover:border-secondary-accent/40 hover:shadow-[0_20px_70px_-50px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-secondary-accent/15 transition-all duration-300">
                    <PieChart className="h-8 w-8 text-secondary-accent" />
                  </div>
                  <p className="text-[11px] font-semibold text-secondary-accent tracking-[0.14em] uppercase mb-2">Descriptive analytics</p>
                  <h3 className="text-lg font-bold mb-3 text-foreground">What happened?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Understanding historical data patterns and current business states through comprehensive reporting and dashboards.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Panel 2 - Diagnostic */}
            <div className={`group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-white border border-border hover:border-primary/40 hover:shadow-[0_20px_70px_-50px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-[11px] font-semibold text-primary tracking-[0.14em] uppercase mb-2">Diagnostic analytics</p>
                  <h3 className="text-lg font-bold mb-3 text-foreground">Why did it happen?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Investigating root causes and correlations to understand the drivers behind observed patterns and outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Panel 3 - Predictive */}
            <div className={`group transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-white border border-border hover:border-secondary-accent/40 hover:shadow-[0_20px_70px_-50px_rgba(0,0,0,0.25)] transition-all duration-500 group-hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-secondary-accent/15 transition-all duration-300">
                    <Network className="h-8 w-8 text-secondary-accent" />
                  </div>
                  <p className="text-[11px] font-semibold text-secondary-accent tracking-[0.14em] uppercase mb-2">Predictive analytics</p>
                  <h3 className="text-lg font-bold mb-3 text-foreground">What might happen?</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Forecasting future trends and scenarios using statistical models and machine learning algorithms.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Panel 4 - Prescriptive (brand highlight) */}
            <div className={`group transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Card className="h-full bg-gradient-to-br from-primary to-primary/85 text-white border border-primary/40 hover:shadow-[0_20px_50px_-15px_rgba(214,46,10,0.55)] transition-all duration-500 group-hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-white/15 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                    <ArrowUp className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-[11px] font-semibold text-white/85 tracking-[0.14em] uppercase mb-2">Prescriptive analytics</p>
                  <h3 className="text-lg font-bold mb-3 text-white">How can we make it happen?</h3>
                  <p className="text-xs text-white/85 leading-relaxed">
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

      {/* Business Problems to Growth Results Section — pure white canvas
          so the table reads as a polished panel against a clean surface. */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Very subtle primary-tinted spotlight in the upper left, with a
            tiny tint band across the middle. Both are quiet enough that
            the section still reads as white. */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.015] to-transparent" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-40" />
        <div className="container mx-auto px-6">
          <div className="text-center">

            <Heading as="h2" size="h2" className="mb-6 text-foreground">
              From Business Problems<br />to Growth Results
            </Heading>
            <Lead className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
              We bridge insight to impact, converting real business challenges into clear growth outcomes through intelligence.
            </Lead>

            {/* Executive Table — light theme: white surface with a soft
                primary-tinted ring instead of the dark blurred glow, and a
                gentler header tint so the table reads as a polished panel
                instead of a glassy dark overlay. */}
            <div className="relative w-full max-w-7xl mx-auto px-1 sm:px-2 md:px-4 lg:px-6">
              {/* Table outer halo — gentle primary tint at very low opacity. */}
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 rounded-xl sm:rounded-2xl blur-md opacity-50" />

              <div className="relative overflow-hidden rounded-2xl border border-border bg-white shadow-[0_25px_60px_-30px_rgba(15,23,42,0.18)]">
                {/* Table Header — softer primary wash so headings stay readable on white. */}
                <div className="grid grid-cols-3 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b border-border">
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
                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-slate-100/60 transition-colors duration-300">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-br from-foreground to-foreground/80 text-white relative overflow-hidden">
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
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-slate-50">
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

                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-slate-100/60 transition-colors duration-300">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-br from-secondary-accent to-secondary-accent/80 text-white relative overflow-hidden">
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
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-slate-50">
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

                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-slate-100/60 transition-colors duration-300">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-br from-foreground to-foreground/80 text-white relative overflow-hidden">
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
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-slate-50">
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

                <div className="grid grid-cols-3 border-b border-border/40 hover:bg-slate-100/60 transition-colors duration-300">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-br from-orange-500 to-orange-700 text-white relative overflow-hidden">
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
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-slate-50">
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

                <div className="grid grid-cols-3 hover:bg-slate-100/60 transition-colors duration-300">
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 bg-gradient-to-br from-primary to-primary/85 text-white relative overflow-hidden">
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
                  <div className="p-2 sm:p-3 md:p-4 lg:p-6 border-l border-border/60 bg-slate-50">
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
                <Heading as="h2" size="h2" className="mb-4">
                  Why Choose Deep Operator?
                </Heading>
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

      {/* CTA Section — glass card wraps the content so it stays readable on
          top of the HeroBackdrop's red plexus canvas. */}
      <section className="relative overflow-hidden pt-12 pb-40 sm:pb-44 bg-background">
        <HeroBackdrop />
        <div className="container relative z-10 mx-auto px-6">
          <div className={`max-w-3xl mx-auto rounded-2xl border border-border/60 bg-background/85 backdrop-blur-md shadow-[0_15px_40px_-25px_rgba(15,23,42,0.25)] p-6 md:p-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Heading as="h2" size="h2" className="mb-3 text-foreground">
              Ready to Transform Your Data into Insights?
            </Heading>
            <p className="text-sm text-foreground/85 mb-4 max-w-2xl mx-auto">
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

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Users, FileText, Calendar, Target, Lightbulb, CheckCircle } from "lucide-react";

const ResearchDetail = () => {
  const { solutionName } = useParams();
  const navigate = useNavigate();

  const researchData = {
    "surasoft": {
      title: "SURASOFT",
      tagline: "AI-Powered Security with Biometric Verification",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "AI-powered security SaaS with biometric verification using camera networks. Surasoft analyzed video footage in existing camera infrastructure, offering affordable biometric verification and instant alerts to prevent crimes for businesses and homes.",
      problem: "Traditional security systems were expensive, required new hardware installations, and lacked intelligent monitoring capabilities. Businesses and homes needed affordable, smart security solutions that could leverage existing camera infrastructure.",
      methodology: [
        "Computer vision algorithms for real-time video analysis",
        "Machine learning models for biometric recognition",
        "Cloud-based SaaS architecture for scalability",
        "Integration APIs for existing camera systems",
        "Real-time alert notification system"
      ],
      technologies: ["Computer Vision", "Machine Learning", "Cloud Computing", "API Integration", "Real-time Processing"],
      results: [
        "Reduced security infrastructure costs by 60%",
        "Achieved 95% accuracy in biometric verification",
        "Enabled instant crime prevention alerts",
        "Successfully integrated with 50+ camera systems",
        "Served 100+ businesses and residential clients"
      ],
      impact: "SURASOFT democratized advanced security technology, making it accessible to small businesses and residential users who previously couldn't afford comprehensive security solutions.",
      icon: <Shield className="w-8 h-8" />,
      heroImage: "/public/uploads/Hero Illustration F1.svg"
    },
    "ai-proctoring": {
      title: "AI Proctoring",
      tagline: "Remote Integrity Solution with Intelligent Monitoring",
      category: "SaaS",
      status: "Retired",
      launchDate: "2022",
      description: "Remote integrity solution with intelligent student and interviewee monitoring. A comprehensive proctoring system powered by artificial intelligence, designed to monitor students and interviewees for safe and credible online assessments.",
      problem: "The shift to online education and remote hiring created challenges in maintaining assessment integrity. Educational institutions and companies needed reliable, automated solutions to monitor online exams and interviews without compromising user experience.",
      methodology: [
        "Real-time behavioral analysis using computer vision",
        "Audio pattern recognition for suspicious activities",
        "Automated flag generation for unusual behaviors",
        "Integration with popular learning management systems",
        "Comprehensive reporting and analytics dashboard"
      ],
      technologies: ["Artificial Intelligence", "Computer Vision", "Audio Processing", "Learning Management Systems", "Real-time Analytics"],
      results: [
        "Monitored 10,000+ online assessments",
        "Achieved 92% accuracy in suspicious activity detection",
        "Reduced manual monitoring effort by 80%",
        "Integrated with 20+ educational platforms",
        "Maintained 99.5% system uptime during peak usage"
      ],
      impact: "AI Proctoring enabled educational institutions and companies to maintain assessment credibility while embracing digital transformation, ensuring fair evaluations in remote environments.",
      icon: <Users className="w-8 h-8" />,
      heroImage: "/public/uploads/Hero Illustration F1.svg"
    },
    "askari-llm": {
      title: "Askari LLM",
      tagline: "Python-Based Policy Guardrails for LLM Compliance",
      category: "Self-hosted",
      status: "Retired",
      launchDate: "2023",
      description: "Python-based policy guardrails package for customizing LLM behavior and compliance. A comprehensive package designed to enforce policy guardrails on user input, particularly in the context of language models and other AI systems, ensuring interactions remain within defined ethical and operational boundaries.",
      problem: "As organizations adopted large language models, they faced challenges in ensuring AI outputs aligned with company policies, regulatory requirements, and ethical standards. There was a critical need for customizable guardrails that could be easily integrated into existing AI workflows.",
      methodology: [
        "Rule-based policy engine for content filtering",
        "Machine learning classifiers for context understanding",
        "Configurable compliance templates for different industries",
        "Real-time content analysis and flagging",
        "Comprehensive logging and audit trail system"
      ],
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "Policy Enforcement", "Compliance Monitoring"],
      results: [
        "Processed 1M+ LLM interactions for policy compliance",
        "Achieved 97% accuracy in policy violation detection",
        "Reduced compliance review time by 70%",
        "Supported 15+ industry-specific policy templates",
        "Enabled real-time content filtering with <100ms latency"
      ],
      impact: "Askari LLM empowered organizations to safely deploy large language models in production environments, ensuring AI interactions remained compliant with organizational policies and industry regulations.",
      icon: <FileText className="w-8 h-8" />,
      heroImage: "/public/uploads/Hero Illustration F1.svg"
    }
  };

  const solution = researchData[solutionName as keyof typeof researchData];

  if (!solution) {
    navigate('/research');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-secondary/10 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => navigate('/research')}
              className="mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              View All Research
            </Button>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center text-primary">
                {solution.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-fade-in">
                  {solution.title}
                </h1>
                <p className="text-xl text-primary font-medium">{solution.tagline}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <Badge variant="secondary">{solution.category}</Badge>
              <Badge variant="outline" className="text-muted-foreground">
                <Calendar className="w-3 h-3 mr-1" />
                {solution.launchDate}
              </Badge>
              <Badge variant="destructive" className="bg-red-500/20 text-red-600 border-red-200">
                {solution.status}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-slide-up">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Lightbulb className="w-8 h-8 mr-3 text-primary" />
                  About the Solution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-primary" />
                  Problem It Addresses
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.problem}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology & Technologies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Methodology</h3>
                <ul className="space-y-3">
                  {solution.methodology.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {solution.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Overall Impact</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.impact}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Inspired by Our Research?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can bring similar innovation to your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate('/contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Work With Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/research')}
            >
              Explore More Research
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchDetail;
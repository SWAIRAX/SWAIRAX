
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Cube3D from "@/components/3DCube";
import AnimatedCounter from "@/components/AnimatedCounter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogModal from "@/components/BlogModal";
import { ArrowRight, CheckCircle, Database, Cog, Cloud, BarChart3, PieChart, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate} from "react-router-dom";

const Index = () => {
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({});
  const navigate = useNavigate();

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const stats = [
    { value: "40x", label: "More productivity for data scientists" },
    { value: "20%", label: "Faster to deliver AI models" },
    { value: "100+", label: "Data scientists and software Developers using our products." },
    { value: "10x", label: "Boost" },
    { value: "40%", label: "Model performance boost through improved" },
    { value: "2k+", label: "Downloads & Interactions" }
  ];

  const products = [
    {
      title: "Quantum Analytics",
      category: "Saas",
      description: "Data-centric platform leveraging Machine Learning & RLHF to help organizations understand impact, learn from their data, measure progress, and make smarter decisions.",
      cta: "Get Started"
    },
    {
      title: "Quantum Annotate",
      category: "Annotation Service",
      description: "Robust annotation solution supported by a full workforce, offering industry-grade labeling for text, image, audio, and video datasets.",
      cta: "Request Demo"
    },
    {
      title: "Quantum GenAI",
      category: "AI Enhancement",
      description: "Enhance generative AI model accuracy, reliability, and speed through in-house data expertise and fine-tuning techniques.",
      cta: "Learn More"
    }
  ];

  const articles = [
    {
      id: "1",
      date: "June 3, 2023",
      category: "Blog",

      title: "Digital Data is the new software code",
      excerpt: "Drawing inspiration from the profound words of British Mathematician Clive Humby that 'Data is the new oil', we embark on a journey to discover the secrets of successful AI development, where data takes center stage.",
      content: "Drawing inspiration from the profound words of British Mathematician Clive Humby that 'Data is the new oil', we embark on a journey to discover the secrets of successful AI development, where data takes center stage.\n\nIn the modern era of artificial intelligence, data has emerged as the fundamental building block of innovation. Just as oil powered the industrial revolution, data is now the driving force behind the AI revolution that's transforming industries across the globe.\n\nThe parallels between oil and data are striking. Both require extraction, refinement, and careful processing to unlock their true value. Raw data, like crude oil, needs to be cleaned, structured, and analyzed before it can fuel intelligent systems and drive meaningful insights.\n\nAt Quantum Intelligence, we understand that successful AI implementation begins with understanding your data landscape. Our data-centric approach ensures that every AI solution we develop is built on a foundation of high-quality, well-understood data that delivers measurable business value.",
      author: "Quantum Intelligence Team",
      readTime: "5 min read",
      imageUrl: "blog1.jpg",
      tags: ["Data Science", "AI Development", "Digital Transformation"],
      cta: "Read More"
    },
    {
      id: "2",
      date: "May 3, 2023",
      category: "Life On Data",
      title: "Overcoming the Barriers: A Look at the Challenges of Implementing AI in Africa.",
      excerpt: "Implementing AI in Africa is not without its challenges. In this article, we will explore some of the key challenges of implementing AI in Africa, and we will discuss how these challenges can be addressed in order to realize the full potential of AI in the region.",
      content: "Implementing AI in Africa is not without its challenges. In this article, we will explore some of the key challenges of implementing AI in Africa, and we will discuss how these challenges can be addressed in order to realize the full potential of AI in the region.\n\nAfrica presents a unique landscape for AI implementation, with both significant opportunities and distinct challenges. The continent's rapidly growing digital infrastructure and young, tech-savvy population create fertile ground for AI innovation, yet several barriers must be addressed to unlock this potential.\n\nKey challenges include limited access to quality data, insufficient technical infrastructure, and a shortage of skilled AI professionals. Additionally, regulatory frameworks are still evolving, and there's a need for greater investment in research and development.\n\nDespite these challenges, we're seeing remarkable progress across various sectors. From mobile banking solutions in Kenya to agricultural AI applications in Nigeria, African entrepreneurs and organizations are finding innovative ways to leverage AI for local challenges.\n\nThe path forward requires collaborative efforts between governments, private sector, and international partners to build sustainable AI ecosystems that benefit local communities while contributing to global AI advancement.",
      author: "Quantum Intelligence Team",
      readTime: "8 min read",
      imageUrl: "blog2.png",
      tags: ["AI in Africa", "Digital Transformation", "Tech Innovation"],
      cta: "Read More"
    },
    {
      id: "3",
      date: "April 4, 2023",
      category: "Case Study",
      title: "What is Retrieval Augmented Generation (RAG) in AI?",
      excerpt: "Think of RAG like having a super-smart assistant who can help you find just the right information you need, exactly when you need it Here we will teach you how to build one.",
      content: "Think of RAG like having a super-smart assistant who can help you find just the right information you need, exactly when you need it. Here we will teach you how to build one.\n\nRetrieval Augmented Generation (RAG) represents a breakthrough in how AI systems access and utilize information. Unlike traditional language models that rely solely on their training data, RAG systems can dynamically retrieve relevant information from external knowledge bases to enhance their responses.\n\nThis approach combines the generative capabilities of large language models with the precision of information retrieval systems. When you ask a RAG system a question, it first searches through relevant documents or databases to find pertinent information, then uses this context to generate more accurate and up-to-date responses.\n\nThe benefits of RAG are particularly evident in enterprise applications where accuracy and currency of information are critical. For example, a RAG system can access the latest company policies, product specifications, or market data to provide responses that are both contextually relevant and factually current.\n\nBuilding an effective RAG system involves several key components: a robust document retrieval mechanism, efficient embedding strategies, and careful prompt engineering to ensure the retrieved information is properly utilized in the generation process.",
      author: "Quantum Intelligence Team",
      readTime: "6 min read",
      imageUrl: "blog.jpg",
      tags: ["RAG", "Machine Learning", "NLP", "AI Architecture"],
      cta: "Read More"
    }
  ];

  const handleBlogClick = (article: any) => {
    setSelectedBlog(article);
    setIsBlogModalOpen(true);
  };

  const closeBlogModal = () => {
    setIsBlogModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(1.0)' }}
          >
            <source src="https://6266199.fs1.hubspotusercontent-na1.net/hubfs/6266199/YData_background_large_compressed.mp4#t=0.001" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/60"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              We build, innovate &<br />
              deliver <span className="text-primary">data and AI solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Adopting data-centric operations and building AI solutions has never been easier, we are working on that.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg animate-glow-pulse"
            >
              <Link to="/contact">Estimate Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Quantum Intelligence Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Why Quantum Intelligence?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              We help Business & Data Scientists to unlock<br />
              data & artificial intelligence full potential.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                Through measurable <span className="text-primary">performance</span> & improvements we offer services as follows.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="metric-card text-center p-4 rounded-lg border border-primary/10 animate-slide-in-bottom" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="metric-value text-4xl md:text-5xl font-bold mb-2 animate-counter-up" style={{ animationDelay: `${index * 0.15}s` }}>
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-8">
                And trusted by the <span className="text-primary">community</span> with
              </p>
              <div className="text-6xl font-bold mb-4">
                <AnimatedCounter value="100+" />
              </div>
              <p className="text-muted-foreground">
                Data scientists and software Developers using our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Centric Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold mb-4">What do we do?</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Data-Centric and AI solutions
              </h2>
            </div>

            <div>
              <div className="bg-card p-8 rounded-lg border">
                <p className="text-primary text-sm font-semibold mb-4">AI STUDIO & IDEAS</p>
                <h3 className="text-2xl font-bold mb-4">
                  Get Customized AI powered solution for a research or business.
                </h3>
                <p className="text-muted-foreground mb-6">
                  Tell us a bit about your research and business challenge and our AI Team with combination
                  of expert data scientists, developers, and business strategists — will come up with a few solutions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We are working on computer vision, NLP, LLMs, Generative AI and more. We help you to
                  reduce development timeline, cheap and faster.
                </p>

                <Collapsible open={expandedSections['ai-studio']} onOpenChange={() => toggleSection('ai-studio')}>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-foreground hover:text-primary p-0 mb-4"
                      aria-expanded={expandedSections['ai-studio']}
                    >
                      Show More Details
                      {expandedSections['ai-studio'] ? (
                        <ChevronUp className="ml-2 h-4 w-4" />
                      ) : (
                        <ChevronDown className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="animate-accordion-down overflow-hidden">
                    <div className="bg-background/50 p-6 rounded-lg border border-border/50 mb-4">
                      <h4 className="text-lg font-semibold mb-4 text-primary">Our AI Capabilities Include:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-medium">Computer Vision</h5>
                            <p className="text-sm text-muted-foreground">Object detection, image classification, facial recognition</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-medium">Natural Language Processing</h5>
                            <p className="text-sm text-muted-foreground">Text analysis, sentiment analysis, chatbots</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-medium">Generative AI</h5>
                            <p className="text-sm text-muted-foreground">Content creation, code generation, image synthesis</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                          <div>
                            <h5 className="font-medium">Predictive Analytics</h5>
                            <p className="text-sm text-muted-foreground">Forecasting, risk assessment, trend analysis</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our team delivers end-to-end AI solutions with 40% faster deployment compared to traditional approaches,
                        ensuring your AI projects reach production quickly and efficiently.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0">
                  <Link to="/ai-studio">Know More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MLOps Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm font-semibold mb-4">MLOps</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Machine Learning + Devops
              </h2>
              <p className="text-muted-foreground mb-6">
                You have the data and the model, but you still can't see the return on investment for your AI
                projects. Research shows that 50 - 90% of AI models are never commercialized because of
                the "last-mile" deployment problem.
              </p>
              <p className="text-muted-foreground mb-8">
                We practices Machine Learning Operations (MLOps) by bridging the gap between data and
                IT Ops teams. We help you convert your data to business value by deploying your models
                into production.
              </p>
              <Collapsible open={expandedSections['mlops']} onOpenChange={() => toggleSection('mlops')}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary p-0 mb-4"
                    aria-expanded={expandedSections['mlops']}
                  >
                    Show MLOps Process
                    {expandedSections['mlops'] ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="animate-accordion-down overflow-hidden">
                  <div className="bg-background/50 p-6 rounded-lg border border-border/50 mb-4">
                    <h4 className="text-lg font-semibold mb-4 text-primary">MLOps Pipeline Steps:</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 bg-card/50 rounded-lg">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h5 className="font-medium">Data Pipeline Setup</h5>
                          <p className="text-sm text-muted-foreground">Automated data ingestion and preprocessing</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-3 bg-card/50 rounded-lg">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h5 className="font-medium">Model Training & Validation</h5>
                          <p className="text-sm text-muted-foreground">Continuous integration for ML models</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 p-3 bg-card/50 rounded-lg">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h5 className="font-medium">Deployment & Monitoring</h5>
                          <p className="text-sm text-muted-foreground">Real-time performance tracking and alerts</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        ✓ 20% faster deployment • ✓ 50% reduced errors • ✓ Automated scaling
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0">
                <Link to="/mlops">Learn more <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="relative">
              {/* Animated Pipeline Flow */}
              <div className="flex items-center justify-center space-x-8">
                <div className="flex flex-col items-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group hover:bg-primary/30 transition-colors duration-300">
                    <Database className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm text-muted-foreground">Dataset</span>
                </div>

                <div className="animate-pulse">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>

                <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group hover:bg-primary/30 transition-colors duration-300">
                    <Cog className="w-8 h-8 text-primary group-hover:scale-110 transition-transform animate-spin-slow" />
                  </div>
                  <span className="text-sm text-muted-foreground">Model</span>
                </div>

                <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>

                <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center group hover:bg-primary/30 transition-colors duration-300">
                    <Cloud className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm text-muted-foreground">Deploy</span>
                </div>
              </div>

              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Analysis Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Interactive Dashboard Illustration */}
              <div className="bg-card/50 p-8 rounded-lg border border-border/50 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {/* Bar Chart */}
                  <div className="bg-background/80 p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <span className="text-xs text-muted-foreground">Revenue</span>
                    </div>
                    <div className="space-y-2">
                      {[60, 80, 45, 90].map((height, i) => (
                        <div key={i} className="flex items-end space-x-1">
                          <div
                            className="bg-primary/70 w-6 rounded-sm transition-all duration-1000 hover:bg-primary"
                            style={{
                              height: `${height * 0.4}px`,
                              animationDelay: `${i * 0.2}s`
                            }}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pie Chart */}
                  <div className="bg-background/80 p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <PieChart className="w-5 h-5 text-primary" />
                      <span className="text-xs text-muted-foreground">Growth</span>
                    </div>
                    <div className="relative w-16 h-16 mx-auto">
                      <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin-slow"></div>
                    </div>
                  </div>

                  {/* KPI Widgets */}
                  <div className="bg-background/80 p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <TrendingUp className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter value="24%" />
                    </div>
                    <span className="text-xs text-muted-foreground">Customer Growth</span>
                  </div>

                  <div className="bg-background/80 p-4 rounded-lg border group hover:shadow-lg transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary mb-2" />
                    <div className="text-2xl font-bold text-primary">
                      <AnimatedCounter value="98%" />
                    </div>
                    <span className="text-xs text-muted-foreground">Data Quality</span>
                  </div>
                </div>

                {/* Floating Analytics Icons */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-xs">📊</span>
                </div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-xs">🎯</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary text-sm font-semibold mb-4">Business Analysis</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Turn Insight Into Strategy
              </h2>
              <p className="text-muted-foreground mb-6">
                A free SaaS option to start with Data analysis and visualization with AI with drag and drop a
                dataset in a minute. We help to you to see opportunities from your data.
              </p>
              <p className="text-muted-foreground mb-8">
                In the digital age of data we can Quickly understand human better, our needs,
                and business science overall.
              </p>
              <Collapsible open={expandedSections['business-analysis']} onOpenChange={() => toggleSection('business-analysis')}>
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary p-0 mb-4"
                    aria-expanded={expandedSections['business-analysis']}
                  >
                    View Analytics Features
                    {expandedSections['business-analysis'] ? (
                      <ChevronUp className="ml-2 h-4 w-4" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="animate-accordion-down overflow-hidden">
                  <div className="bg-background/50 p-6 rounded-lg border border-border/50 mb-4">
                    <h4 className="text-lg font-semibold mb-4 text-primary">Business Intelligence Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Real-time Dashboards</h5>
                          <p className="text-sm text-muted-foreground">Live data visualization and KPI tracking</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Predictive Analytics</h5>
                          <p className="text-sm text-muted-foreground">AI-powered forecasting and trend analysis</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Data Mining</h5>
                          <p className="text-sm text-muted-foreground">Pattern discovery and anomaly detection</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <h5 className="font-medium">Custom Reports</h5>
                          <p className="text-sm text-muted-foreground">Automated report generation and distribution</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-medium">
                        Free SaaS trial available • Drag & drop interface • AI-powered insights
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0">
                <Link to="/business-analysis">Explore how <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-semibold mb-4">Ready to start?</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Solutions Built to Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="solution-card bg-secondary border-border animate-slide-in-bottom group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  {/* Animated SVG background */}
                  <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="30"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="animate-spin-slow"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="animate-spin-slow"
                        style={{ animationDirection: 'reverse' }}
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <div className="w-6 h-6 bg-primary rounded group-hover:animate-pulse"></div>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-primary/20 transition-colors duration-300">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 relative z-10">{product.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed relative z-10">
                    {product.description}
                  </p>

                  <Collapsible open={expandedSections[product.title]} onOpenChange={() => toggleSection(product.title)}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-foreground hover:text-primary p-0 mb-4 relative z-10"
                        aria-expanded={expandedSections[product.title]}
                      >
                        Show Details
                        {expandedSections[product.title] ? (
                          <ChevronUp className="ml-2 h-4 w-4" />
                        ) : (
                          <ChevronDown className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="animate-accordion-down overflow-hidden relative z-10">
                      <div className="bg-background/50 p-4 rounded-lg border border-border/50 mb-4">
                        {product.title === "Quantum Analytics" && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-primary">Key Features:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Machine Learning & RLHF</h5>
                                  <p className="text-xs text-muted-foreground">Advanced ML algorithms with human feedback integration</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Impact Measurement</h5>
                                  <p className="text-xs text-muted-foreground">Track and measure organizational impact and progress</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Smart Decision Making</h5>
                                  <p className="text-xs text-muted-foreground">Data-driven insights for better business decisions</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {product.title === "Quantum Annotate" && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-primary">Capabilities:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Multi-modal Annotation</h5>
                                  <p className="text-xs text-muted-foreground">Text, image, audio, and video dataset labeling</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Industry-Grade Quality</h5>
                                  <p className="text-xs text-muted-foreground">Professional workforce ensuring high-quality annotations</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Scalable Solutions</h5>
                                  <p className="text-xs text-muted-foreground">Handle large-scale annotation projects efficiently</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {product.title === "Quantum GenAI" && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-primary">Features:</h4>
                            <div className="space-y-2">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Model Fine-tuning</h5>
                                  <p className="text-xs text-muted-foreground">Enhance AI model performance through expert fine-tuning</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Data Expertise</h5>
                                  <p className="text-xs text-muted-foreground">In-house data specialists for optimal model training</p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <div>
                                  <h5 className="font-medium text-sm">Speed & Reliability</h5>
                                  <p className="text-xs text-muted-foreground">Improved accuracy and speed for generative AI models</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Button asChild variant="ghost" className="text-foreground hover:text-primary p-0 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                    <Link to="/try-now">{product.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>

                  {/* Sparkle effect on hover */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Want to develop AI and data related solutions on-premises?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Quantum Intelligence offers AI related solutions that can be deployed in any infrastructure for
              anyone eager to enter in the industry.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to know more!
            </p>
            <Button
            variant="outline"
            size="lg"
            className="border-foreground text-foreground hover:bg-foreground hover:text-background"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the <span className="text-primary">Data-Centric AI</span> movement!
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect, profile, understand & orchestrate your data preparation flows to train models more
            efficiently! Improve AI initiatives performance in a iterative way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              <Link to="/try-now">Try now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8"
            >
              <Link to="/contact">Estimate Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Our Featured Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer hover-scale"
                onClick={() => handleBlogClick(article)}
              >
                {article.imageUrl && (
                  <img
                    src={`/uploads/${article.imageUrl.replace(/^\/+/,'')}`}
                    alt={article.title}
                    className="w-full aspect-video object-cover"
                    loading="lazy"
                  />
                )}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-4">{article.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>

                  <Button variant="ghost" className="text-foreground hover:text-primary p-0" onClick={() => handleBlogClick(article)}>
                    {article.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                View All Blogs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Blog Modal */}
      <BlogModal
        post={selectedBlog}
        isOpen={isBlogModalOpen}
        onClose={closeBlogModal}
      />
    </div>
  );
};

export default Index;

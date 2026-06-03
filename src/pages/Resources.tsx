import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Section, Heading, Lead, PageHero } from "@/components/ui/section";
import { Download, BookOpen, Video, FileText, ExternalLink, Wrench } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Documentation",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Comprehensive guides and API documentation",
      items: [
        { name: "Getting Started Guide", type: "PDF", size: "2.3 MB" },
        { name: "API Reference", type: "Online", size: "Live" },
        { name: "Best Practices", type: "PDF", size: "1.8 MB" }
      ]
    },
    {
      title: "Video Tutorials",
      icon: <Video className="h-6 w-6" />,
      description: "Step-by-step video guides and webinars",
      items: [
        { name: "AI Model Deployment", type: "Video", size: "45 min" },
        { name: "Data Pipeline Setup", type: "Video", size: "32 min" },
        { name: "MLOps Fundamentals", type: "Video", size: "58 min" }
      ]
    },
    {
      title: "Whitepapers",
      icon: <FileText className="h-6 w-6" />,
      description: "In-depth research and industry insights",
      items: [
        { name: "AI in Healthcare", type: "PDF", size: "4.2 MB" },
        { name: "Data-Centric AI", type: "PDF", size: "3.1 MB" },
        { name: "MLOps Survey 2024", type: "PDF", size: "2.7 MB" }
      ]
    },
    {
      title: "Tools & SDKs",
      icon: <Wrench className="h-6 w-6" />,
      description: "Development tools and software kits",
      items: [
        { name: "Python SDK", type: "Package", size: "12 MB" },
        { name: "CLI Tools", type: "Binary", size: "25 MB" },
        { name: "Docker Images", type: "Container", size: "1.2 GB" }
      ]
    }
  ];

  const featuredResources = [
    {
      title: "AI Implementation Playbook",
      description: "A comprehensive guide to implementing AI solutions in enterprise environments",
      category: "Guide",
      downloadCount: "2.3k",
      featured: true
    },
    {
      title: "Data Science Toolkit",
      description: "Collection of Python tools and notebooks for data analysis and machine learning",
      category: "Tools",
      downloadCount: "1.8k",
      featured: true
    },
    {
      title: "MLOps Workshop Series",
      description: "Complete video series covering MLOps best practices and implementation",
      category: "Video",
      downloadCount: "950",
      featured: true
    }
  ];

  const upcomingWebinars = [
    {
      title: "Building Scalable AI Systems",
      date: "March 15, 2024",
      time: "2:00 PM EAT",
      presenter: "Dr. Sarah Chen"
    },
    {
      title: "Data Quality for AI Success",
      date: "March 22, 2024",
      time: "3:00 PM EAT",
      presenter: "Prof. Michael Rodriguez"
    },
    {
      title: "Computer Vision in Production",
      date: "March 29, 2024",
      time: "2:30 PM EAT",
      presenter: "Lisa Wang"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <PageHero
        className="bg-card"
        title={<>Knowledge Resources</>}
        description={<>Access comprehensive guides, tools, and insights to accelerate your AI journey. Everything you need to build successful AI solutions.</>}
        actions={
          <Button
            size="lg"
            onClick={() => document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          >
            Explore Resources
          </Button>
        }
      />

      {/* Featured Resources */}
      <Section id="featured">
          <div className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">Featured Resources</Heading>
            <Lead className="max-w-2xl mx-auto">
              Our most popular and comprehensive resources to help you get started quickly.
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary">{resource.category}</Badge>
                    <span className="text-sm text-muted-foreground">{resource.downloadCount} downloads</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* Resource Categories */}
      <Section bg="card">
          <div className="text-center mb-12">
            <Heading as="h2" size="h2" className="mb-4">Browse by Category</Heading>
            <Lead className="max-w-2xl mx-auto">
              Find the right resources for your specific needs and expertise level.
            </Lead>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-card rounded-lg border">
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.type} • {item.size}</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => window.location.href = '/contact'}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    onClick={() => window.location.href = '/contact'}
                    className="w-full mt-4 text-primary hover:text-primary"
                  >
                    View All in {category.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
      </Section>

      {/* Upcoming Webinars */}
      <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading as="h2" size="h2" className="mb-4">Upcoming Webinars</Heading>
              <Lead>
                Join our experts for live sessions on the latest AI trends and best practices.
              </Lead>
            </div>

            <div className="space-y-6">
              {upcomingWebinars.map((webinar, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{webinar.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span>{webinar.date}</span>
                          <span>{webinar.time}</span>
                          <span>Presenter: {webinar.presenter}</span>
                        </div>
                      </div>
                      <Button 
                        onClick={() => window.location.href = '/contact'}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
      </Section>

      {/* Newsletter Signup */}
      <Section bg="card" className="text-center">
          <div className="max-w-2xl mx-auto">
            <Heading as="h2" size="h2" className="mb-4">
              Stay Updated
            </Heading>
            <Lead className="mb-8">
              Subscribe to our newsletter to get the latest resources, insights, and updates delivered to your inbox.
            </Lead>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button 
                onClick={() => window.location.href = '/contact'}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              >
                Subscribe
              </Button>
            </div>
          </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Resources;
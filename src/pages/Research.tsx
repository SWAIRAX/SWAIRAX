import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Shield, Users, FileText, ExternalLink } from "lucide-react";

const Research = () => {
const archivedSolutions = [
{
title: "SURASOFT",
category: "SaaS",
status: "Retired",
launchDate: "2022",
description: "AI-powered security SaaS with biometric verification using camera networks. Surasoft analyzed video footage in existing camera infrastructure, offering affordable biometric verification and instant alerts to prevent crimes for businesses and homes.",
keyFeatures: [
"Real-time video analysis",
"Biometric verification",
"Instant crime prevention alerts",
"Affordable security solution",
"Integration with existing cameras"
],
tags: ["SaaS",  "Computer Vision"],
icon: <Shield className="w-6 h-6" />,
demoLink: "#",
caseStudyLink: "#"
},
{
title: "AI Proctoring",
category: "SaaS",
status: "Retired",
launchDate: "2022",
description: "Remote integrity solution with intelligent student and interviewee monitoring. A comprehensive proctoring system powered by artificial intelligence, designed to monitor students and interviewees for safe and credible online assessments.",
keyFeatures: [
"Real-time behavior monitoring",
"Automated suspicious activity detection",
"Secure online assessments",
"Integration with learning platforms",
"Detailed reporting and analytics"
],
tags: ["Education", "AI Monitoring"],
icon: <Users className="w-6 h-6" />,
demoLink: "#",
caseStudyLink: "#"
},
{
title: "Askari LLM",
category: "Self-hosted",
status: "Retired",
launchDate: "2023",
description: "Python-based policy guardrails package for customizing LLM behavior and compliance. A comprehensive package designed to enforce policy guardrails on user input, particularly in the context of language models and other AI systems, ensuring interactions remain within defined ethical and operational boundaries.",
keyFeatures: [
"Policy enforcement for LLMs",
"Customizable compliance rules",
"Easy Python integration",
"Ethical AI boundaries",
"Real-time content filtering"
],
tags: [ "LLM Guardrails"],
icon: <FileText className="w-6 h-6" />,
demoLink: "#",
caseStudyLink: "#"
}
];

const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
const allTags = Array.from(new Set(archivedSolutions.flatMap(solution => solution.tags)));

const filteredSolutions = selectedTags.length === 0
? archivedSolutions
: archivedSolutions.filter(solution =>
selectedTags.some(tag => solution.tags.includes(tag))
);

return (
<div className="min-h-screen bg-background">
<Header />

{/* Hero Section */}
<section className="pt-24 pb-16 bg-gradient-secondary">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
Archived Innovations & <span className="text-primary">Past Products</span>
</h1>
<p className="text-xl text-muted-foreground mb-8">
Honoring our legacy products that shaped Quantum Intelligence's evolution. These innovations paved the way for our current cutting-edge solutions.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Button
size="lg"
onClick={() => window.location.href = '/services'}
className="bg-primary hover:bg-primary/90 text-primary-foreground"
>
View Current Solutions <ArrowRight className="ml-2 h-4 w-4" />
</Button>
<Button
size="lg"
variant="outline"
onClick={() => window.location.href = '/contact'}
>
Discuss Legacy Migration
</Button>
</div>
</div>
</div>
</section>

{/* Filter Section */}
<section className="py-8 border-b border-border">
<div className="container mx-auto px-6">
<div className="flex flex-wrap gap-2 justify-center">
<Button
size="sm"
variant={selectedTags.length === 0 ? "default" : "outline"}
onClick={() => setSelectedTags([])}
>
All Products
</Button>
{allTags.map((tag) => (
<Button
key={tag}
size="sm"
variant={selectedTags.includes(tag) ? "default" : "outline"}
onClick={() => {
if (selectedTags.includes(tag)) {
setSelectedTags(selectedTags.filter(t => t !== tag));
} else {
setSelectedTags([...selectedTags, tag]);
}
}}
>
{tag}
</Button>
))}
</div>
</div>
</section>

{/* Archived Solutions Grid */}
<section className="py-20">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">Looking Back, Moving Forward</h2>
<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
These products represent important milestones in our journey to develop sophisticated AI solutions.
While retired, they continue to inform our approach to innovation and customer-centric product development.
</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
{filteredSolutions.map((solution, index) => (
<Card key={index} className="research-card bg-card border-primary/10 animate-slide-in-left group relative overflow-hidden" style={{ animationDelay: `${index * 0.15}s` }}>
<CardHeader>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
{solution.icon}
</div>
<div>
<CardTitle className="text-xl">{solution.title}</CardTitle>
<div className="flex items-center space-x-2 mt-1">
<Badge variant="secondary">{solution.category}</Badge>
<Badge variant="outline" className="text-muted-foreground">
<Calendar className="w-3 h-3 mr-1" />
{solution.launchDate}
</Badge>
</div>
</div>
</div>
<Badge variant="destructive" className="bg-red-500/20 text-red-600 border-red-200">
{solution.status}
</Badge>
</div>
</CardHeader>

<CardContent className="space-y-6">
<p className="text-muted-foreground leading-relaxed">
{solution.description}
</p>

<div>
<h4 className="font-semibold text-primary mb-3">Key Features:</h4>
<ul className="space-y-2">
{solution.keyFeatures.map((feature, featureIndex) => (
<li key={featureIndex} className="flex items-start space-x-2 text-sm">
<div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
<span>{feature}</span>
</li>
))}
</ul>
</div>

<div className="flex flex-wrap gap-1">
{solution.tags.map((tag, tagIndex) => (
<Badge key={tagIndex} variant="outline" className="text-xs">
{tag}
</Badge>
))}
</div>

<div className="flex space-x-2 pt-4 border-t border-border">
<Button
size="sm"
variant="ghost"
                      onClick={() => window.location.href = '/contact'}
                      onClick={() => window.location.href = `/research/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
className="flex-1"
>
<ExternalLink className="w-4 h-4 mr-2" />
Learn More
</Button>
</div>
</CardContent>
</Card>
))}
</div>
</div>
</section>

{/* Evolution Timeline */}
<section className="py-20 bg-card">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold mb-4">Our Innovation Journey</h2>
<p className="text-xl text-muted-foreground">
From security solutions to advanced AI platforms - our evolution continues
</p>
</div>

<div className="max-w-4xl mx-auto">
<div className="relative">
<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>

<div className="space-y-12">
<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2022</h3>
<p className="text-muted-foreground">SURASOFT & AI Proctoring Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8"></div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8">
<h3 className="text-xl font-bold">2023</h3>
<p className="text-muted-foreground">Askari LLM Development</p>
</div>
</div>

<div className="relative flex items-center">
<div className="w-1/2 pr-8 text-right">
<h3 className="text-xl font-bold">2024</h3>
<p className="text-muted-foreground">New Solution Framework Launch</p>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
<div className="w-1/2 pl-8"></div>
</div>
</div>
</div>
</div>
</div>
</section>

{/* CTA Section */}
<section className="py-20">
<div className="container mx-auto px-6 text-center">
<h2 className="text-4xl font-bold mb-4">Ready for the Next Generation?</h2>
<p className="text-xl text-muted-foreground mb-8">
Discover our current cutting-edge AI solutions built on years of innovation
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Button
size="lg"
onClick={() => window.location.href = '/services'}
className="bg-primary hover:bg-primary/90 text-primary-foreground"
>
Explore Current Solutions
</Button>
<Button
size="lg"
variant="outline"
onClick={() => window.location.href = '/contact'}
>
Discuss Migration Options
</Button>
</div>
</div>
</section>

<Footer />
</div>
);
};

export default Research;

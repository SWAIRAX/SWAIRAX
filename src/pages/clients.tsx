import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientModal from "@/components/clientsmodal";

import { MapPin, Clock, Users, ArrowRight, Zap, Heart, Globe } from "lucide-react";

interface Client {
id: string;
name: string;
title: string;
description: string;
details: string;
industry: string;
logoUrl?: string;
logoLinkUrl?: string; // URL to open when logo is clicked
imageUrl?: string; // Main card image (not logo)
tags: string[];
}

import { useState } from "react";

const Clients = () => {
const [selectedClient, setSelectedClient] = useState<Client | null>(null);
const [isModalOpen, setIsModalOpen] = useState(false);
const clients = [
    {
    id: "1",
    title: "PAL Africa",
    description: "Transforming education through innovative STEAM programs that celebrate African culture and creativity.",
    details: `PAL Africa is an African initiative dedicated to transforming education through innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that celebrate African culture and creativity.

We believe in teaching mindset, not just subject matter. Our approach combines traditional African storytelling with modern educational techniques to create engaging, memorable learning experiences.

From rural schools to urban centers, we're building a generation of African innovators, problem-solvers, and creative thinkers who will shape the future of our continent.

About This Program
A heartwarming session where children and their parents, guardians or siblings team up to create amazing STEAM projects. Whether it's building a robot, lighting up a circuit, art and crafts or coding a game this session is all about teamwork, laughter and quality time. You'll leave with more than just a project you'll leave with memories.

"This isn't just another workshop – it's a place where your child will explore, create and grow. And for you as a parent, it's a chance to join the magic. If you're not part of this, you're missing the spark that could light up your child's future."`,
    name: "PAL Africa",
    industry: "AI & Data",
    logoUrl: "pal-africa-logo.png", // just the filename
    logoLinkUrl: "https://palafrica.org", // example external link
    imageUrl: "palaafrica.png", // main card image filename in uploads
    tags: ["artificial-intelligence", "data-science", "machine-learning", "innovation"]
    },
    {
    id: "2",
    title: "Overcoming the Barriers: AI Implementation in Africa",
    description: "Comprehensive analysis of AI implementation challenges in Africa and strategies to unlock the continent's potential.",
    details: `Implementing AI in Africa is not without its challenges. In this comprehensive analysis, we explore the key challenges of implementing AI in Africa and discuss how these challenges can be addressed to realize the full potential of AI in the region.

Africa represents one of the most promising frontiers for AI adoption and innovation. With a young, tech-savvy population and rapidly growing economies, the continent is poised to benefit significantly from AI technologies.

However, several barriers must be overcome to fully realize this potential. Infrastructure challenges, including limited internet connectivity and unreliable power supply, pose significant obstacles to AI implementation.

Skills gap is another critical challenge. While Africa has talented individuals in technology, there's a need for more specialized AI and machine learning expertise. Educational institutions and training programs must adapt to meet this growing demand.

Data availability and quality remain persistent challenges. Many African organizations lack the structured data necessary for effective AI implementation. Additionally, privacy and regulatory frameworks are still evolving.

Despite these challenges, numerous success stories demonstrate the transformative potential of AI in Africa. From healthcare applications that diagnose diseases to agricultural solutions that optimize crop yields, AI is already making a positive impact.

The path forward requires collaboration between governments, private sector, educational institutions, and international organizations. By working together, we can build the infrastructure, develop the skills, and create the enabling environment necessary for AI to thrive in Africa.`,
    name: "Dr. Amara Okafor",
    industry: "AI Implementation",
    tags: ["africa", "ai-implementation", "challenges", "opportunities", "development"]
    },
    {
    id: "3",
    title: "What is Retrieval Augmented Generation (RAG) in AI?",
    description: "Exploring RAG technology that combines language models with external knowledge retrieval for enhanced AI capabilities.",
    details: `Retrieval Augmented Generation (RAG) represents a significant advancement in AI technology, combining the power of large language models with external knowledge retrieval systems.

Think of RAG like having a super-smart assistant who can help you find just the right information you need, exactly when you need it. Unlike traditional language models that rely solely on their training data, RAG systems can access and incorporate real-time information from external sources.

The RAG architecture consists of two main components: a retriever and a generator. The retriever searches through a knowledge base to find relevant information, while the generator uses this information to produce accurate and contextually appropriate responses.

This approach offers several advantages over traditional language models. First, it allows for more accurate and up-to-date information, as the system can access current data from external sources. Second, it reduces the likelihood of hallucinations, as responses are grounded in retrieved facts.

Building a RAG system involves several key steps. First, you need to create a comprehensive knowledge base containing relevant documents and information. This knowledge base is then indexed using vector embeddings to enable efficient similarity search.

When a user submits a query, the system first retrieves the most relevant documents or passages from the knowledge base. These retrieved documents are then provided as context to the language model, which generates a response based on both the query and the retrieved information.

The implementation of RAG systems has numerous practical applications, from customer support chatbots that can access company documentation to research assistants that can query scientific literature.`,
    name: "Prof. Michael Chen",
    industry: "Technical Deep Dive",
    tags: ["rag", "retrieval", "generation", "nlp", "llm", "tutorial"]
    },
    {
    id: "4",
    title: "The Future of MLOps: Bridging AI and Production",
    description: "How MLOps transforms machine learning from research to reliable production systems with DevOps principles.",
    details: `Machine Learning Operations (MLOps) has emerged as a critical discipline for organizations looking to successfully deploy and manage AI systems in production environments.

The traditional approach to machine learning development often resulted in models that performed well in research settings but failed to deliver value in real-world applications. MLOps addresses this challenge by applying DevOps principles to machine learning workflows.

MLOps encompasses the entire machine learning lifecycle, from data collection and model training to deployment, monitoring, and maintenance. This holistic approach ensures that models not only perform well but also remain reliable and valuable over time.

Key components of effective MLOps include continuous integration and deployment (CI/CD) for ML models, automated testing and validation, model versioning and lineage tracking, and comprehensive monitoring and alerting systems.

The benefits of implementing MLOps are substantial. Organizations report faster time-to-market for AI applications, improved model reliability and performance, better collaboration between data science and engineering teams, and more efficient resource utilization.

However, implementing MLOps is not without challenges. It requires significant changes to organizational processes, new tooling and infrastructure, and upskilling of teams. Cultural changes are often necessary to foster collaboration between traditionally separate teams.

Looking ahead, MLOps will continue to evolve with advances in automation, edge computing, and AI governance. Organizations that invest in MLOps capabilities today will be better positioned to realize the full potential of their AI initiatives.`,
    name: "Sarah Johnson",
    industry: "MLOps",
    tags: ["mlops", "devops", "machine-learning", "production", "automation"]
    },
    {
    id: "5",
    title: "Computer Vision in Healthcare: Revolutionizing Diagnosis",
    description: "AI-powered vision systems transforming medical diagnosis through advanced image analysis and pattern recognition.",
    details: `Computer vision technology is revolutionizing healthcare by enabling more accurate, efficient, and accessible medical diagnosis. From analyzing medical images to assisting in surgical procedures, AI-powered vision systems are transforming how healthcare professionals work.

In radiology, computer vision algorithms can detect subtle patterns in X-rays, MRIs, and CT scans that might be missed by human eyes. These systems can identify early signs of diseases such as cancer, helping to improve patient outcomes through earlier intervention.

Pathology is another area where computer vision is making significant impact. AI systems can analyze tissue samples and identify malignant cells with remarkable accuracy, supporting pathologists in making critical diagnoses.

Ophthalmology has seen particularly impressive advances, with AI systems capable of detecting diabetic retinopathy, glaucoma, and other eye conditions from retinal photographs. This technology is especially valuable in areas with limited access to specialist care.

The implementation of computer vision in healthcare requires careful consideration of regulatory requirements, data privacy, and integration with existing clinical workflows. Successful deployments often involve close collaboration between AI developers and healthcare professionals.

Despite the promise of this technology, challenges remain. Ensuring AI systems work effectively across diverse populations, maintaining data privacy and security, and gaining trust from healthcare professionals are ongoing concerns.

The future of computer vision in healthcare is bright, with emerging applications in areas such as surgical robotics, personalized treatment planning, and remote patient monitoring. As these technologies mature, they promise to make healthcare more effective and accessible worldwide.`,
    name: "Dr. Lisa Wang",
    industry: "Computer Vision",
    tags: ["computer-vision", "healthcare", "medical-ai", "diagnosis", "radiology"]
    },
    {
    id: "6",
    title: "Natural Language Processing: The Evolution of Human-AI Communication",
    description: "From keyword matching to sophisticated language models that understand context, emotion, and nuance in human communication.",
    details: `Natural Language Processing (NLP) has undergone remarkable evolution, transforming from simple keyword matching systems to sophisticated models that can understand context, emotion, and nuance in human communication.

The journey of NLP began with rule-based systems that relied on manually crafted linguistic rules. While effective for specific tasks, these systems lacked the flexibility to handle the complexity and variability of natural language.

The introduction of machine learning brought significant improvements, enabling systems to learn patterns from data rather than relying solely on predefined rules. Statistical models and later neural networks marked important milestones in NLP development.

The transformer architecture, introduced in 2017, revolutionized NLP by enabling models to process sequences more efficiently and capture long-range dependencies in text. This breakthrough laid the foundation for the large language models we see today.

Current NLP applications span a wide range of domains. Chatbots and virtual assistants help customers find information and complete tasks. Sentiment analysis helps businesses understand customer feedback. Machine translation breaks down language barriers in global communication.

The emergence of large language models like GPT has opened new possibilities for human-AI interaction. These models can engage in complex conversations, assist with creative writing, and even help with coding tasks.

However, challenges remain. Bias in language models, ensuring factual accuracy, and handling ambiguity in natural language are ongoing areas of research. Privacy and ethical considerations also play important roles in NLP development.

Looking forward, NLP will continue to evolve with advances in multimodal AI, enabling systems that can understand both text and visual information. The future promises more natural and intuitive human-AI interactions.`,
    name: "Prof. David Rodriguez",
    industry: "NLP",
    tags: ["nlp", "natural-language-processing", "chatbots", "transformers", "communication"]
    }
];

const benefits = [
    {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours and async collaboration"
    },
    {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Cutting-Edge Projects",
    description: "Work on innovative AI solutions that impact businesses globally"
    },
    {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Comprehensive Benefits",
    description: "Health insurance, learning budget, and wellness programs"
    },
    {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Diverse Team",
    description: "Join a global team of talented individuals from diverse backgrounds"
    }
];

const values = [
    {
    title: "Innovation First",
    description: "We push the boundaries of what's possible with AI and data science"
    },
    {
    title: "Inclusive Excellence",
    description: "We believe diverse perspectives drive better solutions"
    },
    {
    title: "Client Impact",
    description: "We measure success by the value we create for our clients"
    },
    {
    title: "Continuous Learning",
    description: "We invest in growth and learning for every team member"
    }
];

return (
    <div className="min-h-screen bg-background">
    <Header />

      {/* Hero Section */}
    <section className="pt-24 pb-16 bg-card">
        <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We Make Complexity  <span className="text-primary">Feel Effortless</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
            At Quantum Intelligence, our clients aren’t just customers—they’re collaborators in innovation.
            Whether you're a startup aiming to scale or a global enterprise seeking tech solutions,
            we tailor every project to your goals. Your success is our mission—and our measure.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Explore our Solutions
            </Button>
        </div>
        </div>
    </section>

      {/* Company Values */}
    <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How our clients are <span className="text-primary">leading the change</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We have helped 600+ companies accelerate their business with top-notch technology solutions.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-all duration-300 hover-scale">
                <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
            </Card>
            ))}
        </div>
        </div>
    </section>



    {/* Client Stories Section */}
    <section className="py-20">
    <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Client Success Stories</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how we help organizations unlock the power of data and AI through innovative solutions.
        </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, idx) => (
            <Card
                key={client.id}
                className="bg-card border-border hover:shadow-xl transition-all duration-500 cursor-pointer group hover-scale animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => {
                    setSelectedClient(client);
                    setIsModalOpen(true);
                }}
            >
                <CardContent className="p-0">
                    {/* Header with industry badge */}
                    <div className="p-6 pb-4">
                        <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline" className="text-xs font-medium">
                                {client.industry}
                            </Badge>
                            <div className="text-xs text-muted-foreground">
                                by {client.name}
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                            {client.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                            {client.description}
                        </p>
                    </div>

                    {/* Main Image Section */}
                    {client.imageUrl && (
                        <div className="px-6 pb-4">
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={`/uploads/${client.imageUrl.replace(/^\/+/,'')}`}
                                    alt={client.title}
                                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                            </div>
                        </div>
                    )}

                    {/* Footer with tags and CTA */}
                    <div className="p-6 pt-2">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {client.tags.slice(0, 3).map((tag, tagIdx) => (
                                <Badge key={tagIdx} variant="outline" className="text-xs">
                                    #{tag}
                                </Badge>
                            ))}
                            {client.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                    +{client.tags.length - 3} more
                                </Badge>
                            )}
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-primary p-0 h-auto font-medium group-hover:translate-x-1 transition-transform duration-300">
                            Read Story <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ))}
        </div>
        
        {/* Modal for client details */}
        <ClientModal client={selectedClient} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
    </section>

      {/* CTA Section */}
    <section className="py-20 bg-card/50 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Want to be our next <span className="text-primary">success story?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ready to transform your business with intelligent solutions? Let's collaborate to turn your vision into reality.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-scale">
            Estimate Project
            </Button>
        </div>
        </div>
    </section>

    <Footer />
    </div>
);
};

export default Clients;

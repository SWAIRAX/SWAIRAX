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
    industry: "Education",
    logoUrl: "pal-africa-logo.png",
    logoLinkUrl: "http://www.palafrica.com/",
    imageUrl: "palaafrica.png",
    tags: ["STEAM TALE", "STEAM KIT", "STEAM EVENT", "SCHOOL LAB","TOT TEACHERS"]
    },
    {
    id: "2",
    title: "Swahilies",
    description: "A suite of tools to help SME’s track, assess and manage the growth of their businesses.",
    details: `At Swahilies, we are building payments processing systems to digitize payments in Africa.
    We make it easy for businesses to accept digital payments from anyone, anywhere.
With our payments solutions, businesses can receive payments quicky and easily,
without having to worry about the hassle of traditiona methods.
Sell anything, anywhere Accept payments in seconds.
We enable you to easily accept payments from your international customers.
With our payment feature link, you can easily share a payment link with your customers through their preferred chanel -
whether that's Whatsapp, Facebook, Telegram or any other chanel.
Once your customer pays via the link, we'ill take care of transferring the money from their card to your bank or mobile money account.
Increase Sales by allowing your customers to pay in installments.
An offer that your customers can not deny. Let them layby for the things they love.
We offer you all the tools neccessary to digitally accept layaway payments from your customers.
Set the terms and we shall handle the payments..`,
    name: "Swahilies",
    industry: "Financial Service",
    logoUrl: "swahilies-logo.jpg",
    logoLinkUrl: "https://www.swahilies.com/",
    imageUrl: "swahilies.png",
    tags: ["swahilies app", "Swahilies pay", "Payment API", "virtual Card", "Foreign Bank Account"]
    },
    {
    id: "3",
    title: "NeuroTech",
    description: "We are a tech company that focuses on helping businesses thrive through AI and data-driven solutions.",
    details: `Neurotech Africa is a leading AI company dedicated to elevating customer experiences for businesses across various industries. Our conversational AI technology seamlessly integrates with popular messaging channels like WhatsApp, Messenger, and Telegram, enabling companies to serve their customers wherever they are.

Our comprehensive suite of ready-made chatbot solutions is tailored to meet the unique needs of businesses in diverse sectors, including Banking & Telecom, Insurance, Tourism & Travel, and Retail and Hospitality. Additionally, our API interface allows developers to integrate conversational intelligence into their applications with ease.

At Neurotech Africa, we're committed to empowering the African market, and we've prioritized supporting local languages like Swahili, Kinyarwanda, and Yoruba to facilitate effective communication between businesses and their customers.

We're currently operating in Tanzania and will soon be expanding to neighboring countries like Kenya and Uganda, with plans to explore additional markets in the near future..`,
    name: "NeuroTech Africa",
    industry: "Software Development",
    logoUrl: "neurotech-logo.jpg",
    logoLinkUrl: "https://neurotech.africa/",
    imageUrl: "neurotech.png",
    tags: ["Machine Learning", "Conversational AI", "Data driven solutions", "Big Data", "Chatbots", "Artificial Intelligence"]
    },
    {
    id: "4",
    title: "Tanzania AI Community",
    description: "Community of Problem Solvers Using AI in Tanzania.",
    details: `Tanzania AI Community aspires to empower anyone in Tanzania to access the potential of AI for the growth of themselves and the nation.

We exist to bring together and connect those passionate in AI and social impact to work together in facing the challenges around us.
Our Mission
Africa’s leading enabler of Responsible AI, through the provision of resources & networks for practitioners & enthusiasts.
Our Vision
A Future where Responsible AI Accelerates the Growth ofAfrican Economies..`,
    name: "Tanzania AI Community",
    industry: "IT Services and IT Consulting",
    logoUrl: "ai-logo.jpg",
    logoLinkUrl: "http://www.ai.or.tz",
    imageUrl: "AICommunity.jpg",
    tags: ["Artificial Intelligence", "Data Science", "machine-learning", "AI Policy", "Innovation"]
    },
    {
    id: "5",
    title: "Sartify Co. Ltd",
    description: "AI That Powers Your Business.",
    details: `ENABLING THE NEW BUSINESS INNOVATIONS WITH ARTIFICIAL INTELLIGENCE.

Sartify LLC is a deep AI technology company in consultation, research and products that delivers customized AI-powered decision-making solutions for the enterprises and consumers to help them with the new business innovations that drive exponential growth with our expertise in both machine intelligence, AI research, data, engineering and concrete business deployments of AI at scale.

We're the company behind Docipro (www.docipro.com), our flagship global technology product operating in $7.4 billions market of IDP that process documents intelligently (AI/ML) for companies with problem of hard reach data. It extracts, enrich, match, search organize unstructured data to structure at ease with no code, 100% accuracy, fast (Ms) and scalable (unlimited fields).

We have seen and solved complex business problems that have changed the status quo. Our proudly notable clients include Bosch, AwamuPay, iPF Softwares, Citi, Raytheon technologies, and others in various industries such as Healthcare, Finance, Logistics, Agriculture, Manufacturing Energy, Utilities, Legal etc...

Our customized services and activities include:
● Full stack enterprise AI development.
● Advanced data analytics.
● Data & AI strategy consultation.
● AI executives training.
● Sartify for startups and indiepreneurs.
● Developer and business AI-based products.
● Advanced AI research.`,
    name: "Sartify Co. Ltd",
    industry: "Technology, Information and Internet",
    logoUrl: "sartify-logo.jpg",
    logoLinkUrl: "https://www.sartify.com/",
    imageUrl: "sartify.png",
    tags: ["Artificial intelligence", "Advanced data analytics", "data strategy", "Deep learning", "Executive AI training"]
    },
    {
    id: "6",
    title: "Sinnovate",
    description: "From keyword matching to sophisticated language models that understand context, emotion, and nuance in human communication.",
    details: `SINNOVATE CHARTERD ACCOUNTANTS
is an auditing firm incorporated in 2023, under the Business Names (Registration) Act (Cap 213) with index of registration no. 546106. We are specializing in providing innovative high-quality, value-added Taxation, Accounting, Auditing, and Other Business consulting services

Our Vision
To be the undisputed first choice for businesses seeking exceptional Taxation, auditing and accounting services across the continent.

Our Mission
To consistently deliver innovative and exceptional Taxation, Auditing, and Accounting services with uncompromising quality and integrity.
Since its founding in 2023, Sinnovate Chartered Accountants (SVT) has contributed to improving the financial and accounting performance of Various Companies,
Non-Profit Making Organization and Business Entities in Tanzania. Furthermore,
SVT has always helped its clients in the face of the challenges posed by expansions of the scope of their work and activities at the local and international levels through providing quality Auditing and Assurance, Taxation, Business & Financial Consulting and Accounting services. Founder of SVT has the seasoned experience in providing expertise in their respective specialized fieldâ€™s i.e. taxation, auditing and financial consultancy as set out in this profile. Has also strong practical backgrounds and in-depth industry experience.
Together he brings to the firms the collective knowledge in financial matters in addition to a wide range of tax laws experience acquired from their previous professional careers..`,
    name: "Sinnovate",
    industry: "NL",
    logoUrl: "sinnovate-logo.png",
    logoLinkUrl: "https://www.sinnovate.co.tz/",
    imageUrl: "sinnovate.png",
    tags: ["Tax Planning", "Financial Statement Compilation", "Audit Solutions", "Forensic Accounting", "Fraud Examination"]
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
            <Button
              size="lg"
              onClick={() => window.location.href = '/services'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
            >
              Explore our Solutions
            </Button>
        </div>
        </div>
    </section>





    {/* Client Stories Section */}
    <section className="py-20">
    <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How our clients are <span className="text-primary">leading the change</span>
            </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We have helped 15+ companies accelerate their business with top-notch technology solutions.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {clients.map((client, idx) => (
            <Card
                key={client.id}
                className="relative bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50 hover:border-primary/30 overflow-hidden transition-all duration-500 cursor-pointer group hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => {
                    setSelectedClient(client);
                    setIsModalOpen(true);
                }}
            >
                <CardContent className="p-0 relative">
                    {/* Main Project Image */}
                    {client.imageUrl && (
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img
                                src={`/uploads/${client.imageUrl.replace(/^\/+/,'')}`}
                                alt={client.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                            
                            {/* Industry Badge - Overlay */}
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-primary/90 text-primary-foreground border-0 text-xs font-medium px-3 py-1">
                                    {client.industry}
                                </Badge>
                            </div>

                            {/* Client Logo - Clickable */}
                            {client.logoUrl && (
                                <div 
                                    className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer group/logo"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (client.logoLinkUrl) {
                                            window.open(client.logoLinkUrl, '_blank');
                                        }
                                    }}
                                    title={`Visit ${client.name} website`}
                                >
                                    <img
                                        src={`/uploads/${client.logoUrl.replace(/^\/+/,'')}`}
                                        alt={`${client.name} logo`}
                                        className="w-8 h-8 object-contain group-hover/logo:drop-shadow-lg transition-all duration-300"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Content Section */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 leading-tight text-white group-hover:text-primary transition-colors duration-300">
                            {client.title}
                        </h3>

                        <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
                            {client.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {client.tags.slice(0, 3).map((tag, tagIdx) => (
                                <Badge key={tagIdx} variant="outline" className="text-xs bg-slate-800/50 border-slate-600 text-slate-300 hover:border-primary/50">
                                    {tag}
                                </Badge>
                            ))}
                            {client.tags.length > 3 && (
                                <Badge variant="outline" className="text-xs bg-slate-800/50 border-slate-600 text-slate-300">
                                    +{client.tags.length - 3}
                                </Badge>
                            )}
                        </div>

                        {/* CTA Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedClient(client);
                            setIsModalOpen(true);
                          }}
                          className="text-primary hover:text-primary p-0 h-auto font-medium group-hover:translate-x-1 transition-all duration-300 hover:bg-transparent"
                        >
                          Read Case Study <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </div>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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
            <Button
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-scale"
            >
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

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogModal from "@/components/BlogModal";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  imageUrl?: string;
  tags: string[];
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Digital Data is the new software code",
      excerpt: "Drawing inspiration from the profound words of British Mathematician Clive Humby that 'Data is the new oil', we embark on a journey to discover the secrets of successful AI development.",
      content: `Drawing inspiration from the profound words of British Mathematician Clive Humby that 'Data is the new oil', we embark on a journey to discover the secrets of successful AI development, where data takes center stage.

In today's rapidly evolving technological landscape, data has become the cornerstone of innovation. Just as software code revolutionized the digital age, data now serves as the fundamental building block for artificial intelligence and machine learning applications.

The paradigm shift from traditional software development to data-centric AI development represents a fundamental change in how we approach problem-solving. Instead of writing explicit rules and logic, we now train models on vast datasets to learn patterns and make predictions.

This transformation has profound implications for businesses, researchers, and society as a whole. Organizations that understand how to harness the power of their data will gain competitive advantages, while those that fail to adapt risk being left behind.

The quality, quantity, and diversity of data directly impact the performance of AI systems. Clean, well-labeled, and representative datasets are essential for building robust and reliable AI applications.

As we move forward, the ability to collect, process, and analyze data effectively will become increasingly important. Data engineering, data science, and MLOps will continue to be critical disciplines for organizations looking to leverage AI successfully.`,
      author: "Quantum Intelligence Team",
      date: "June 3, 2024",
      category: "AI & Data",
      readTime: "5 min read",
      imageUrl: "blog1.jpg",
      tags: ["artificial-intelligence", "data-science", "machine-learning", "innovation"]
    },
    {
      id: "2",
      title: "Overcoming the Barriers: AI Implementation in Africa",
      excerpt: "Implementing AI in Africa is not without its challenges. We explore the key challenges and discuss how they can be addressed to realize the full potential of AI in the region.",
      content: `Implementing AI in Africa is not without its challenges. In this comprehensive analysis, we explore the key challenges of implementing AI in Africa and discuss how these challenges can be addressed to realize the full potential of AI in the region.

Africa represents one of the most promising frontiers for AI adoption and innovation. With a young, tech-savvy population and rapidly growing economies, the continent is poised to benefit significantly from AI technologies.

However, several barriers must be overcome to fully realize this potential. Infrastructure challenges, including limited internet connectivity and unreliable power supply, pose significant obstacles to AI implementation.

Skills gap is another critical challenge. While Africa has talented individuals in technology, there's a need for more specialized AI and machine learning expertise. Educational institutions and training programs must adapt to meet this growing demand.

Data availability and quality remain persistent challenges. Many African organizations lack the structured data necessary for effective AI implementation. Additionally, privacy and regulatory frameworks are still evolving.

Despite these challenges, numerous success stories demonstrate the transformative potential of AI in Africa. From healthcare applications that diagnose diseases to agricultural solutions that optimize crop yields, AI is already making a positive impact.

The path forward requires collaboration between governments, private sector, educational institutions, and international organizations. By working together, we can build the infrastructure, develop the skills, and create the enabling environment necessary for AI to thrive in Africa.`,
      author: "Quantum Intelligence Team",
      date: "May 15, 2024",
      category: "AI Implementation",
      readTime: "8 min read",
      imageUrl: "blog2.png",
      tags: ["africa", "ai-implementation", "challenges", "opportunities", "development"]
    },
    {
      id: "3",
      title: "What is Retrieval Augmented Generation (RAG) in AI?",
      excerpt: "Think of RAG like having a super-smart assistant who can help you find just the right information you need, exactly when you need it. Here we will teach you how to build one.",
      content: `Retrieval Augmented Generation (RAG) represents a significant advancement in AI technology, combining the power of large language models with external knowledge retrieval systems.

Think of RAG like having a super-smart assistant who can help you find just the right information you need, exactly when you need it. Unlike traditional language models that rely solely on their training data, RAG systems can access and incorporate real-time information from external sources.

The RAG architecture consists of two main components: a retriever and a generator. The retriever searches through a knowledge base to find relevant information, while the generator uses this information to produce accurate and contextually appropriate responses.

This approach offers several advantages over traditional language models. First, it allows for more accurate and up-to-date information, as the system can access current data from external sources. Second, it reduces the likelihood of hallucinations, as responses are grounded in retrieved facts.

Building a RAG system involves several key steps. First, you need to create a comprehensive knowledge base containing relevant documents and information. This knowledge base is then indexed using vector embeddings to enable efficient similarity search.

When a user submits a query, the system first retrieves the most relevant documents or passages from the knowledge base. These retrieved documents are then provided as context to the language model, which generates a response based on both the query and the retrieved information.

The implementation of RAG systems has numerous practical applications, from customer support chatbots that can access company documentation to research assistants that can query scientific literature.`,
      author: "Quantum Intelligence Team",
      date: "April 28, 2024",
      category: "Technical Deep Dive",
      readTime: "12 min read",
      imageUrl: "blog.jpg",
      tags: ["rag", "retrieval", "generation", "nlp", "llm", "tutorial"]
    },
    {
      id: "4",
      title: "The Future of MLOps: Bridging AI and Production",
      excerpt: "MLOps is transforming how organizations deploy and manage machine learning models in production environments. Discover the latest trends and best practices.",
      content: `Machine Learning Operations (MLOps) has emerged as a critical discipline for organizations looking to successfully deploy and manage AI systems in production environments.

The traditional approach to machine learning development often resulted in models that performed well in research settings but failed to deliver value in real-world applications. MLOps addresses this challenge by applying DevOps principles to machine learning workflows.

MLOps encompasses the entire machine learning lifecycle, from data collection and model training to deployment, monitoring, and maintenance. This holistic approach ensures that models not only perform well but also remain reliable and valuable over time.

Key components of effective MLOps include continuous integration and deployment (CI/CD) for ML models, automated testing and validation, model versioning and lineage tracking, and comprehensive monitoring and alerting systems.

The benefits of implementing MLOps are substantial. Organizations report faster time-to-market for AI applications, improved model reliability and performance, better collaboration between data science and engineering teams, and more efficient resource utilization.

However, implementing MLOps is not without challenges. It requires significant changes to organizational processes, new tooling and infrastructure, and upskilling of teams. Cultural changes are often necessary to foster collaboration between traditionally separate teams.

Looking ahead, MLOps will continue to evolve with advances in automation, edge computing, and AI governance. Organizations that invest in MLOps capabilities today will be better positioned to realize the full potential of their AI initiatives.`,
      author: "Quantum Intelligence Team",
      date: "March 22, 2024",
      category: "MLOps",
      readTime: "10 min read",
      imageUrl: "blog4.png",
      tags: ["mlops", "devops", "machine-learning", "production", "automation"]
    },
    {
      id: "5",
      title: "Computer Vision in Healthcare: Revolutionizing Diagnosis",
      excerpt: "Explore how computer vision and AI are transforming medical diagnosis, from radiology to pathology, improving accuracy and accessibility of healthcare.",
      content: `Computer vision technology is revolutionizing healthcare by enabling more accurate, efficient, and accessible medical diagnosis. From analyzing medical images to assisting in surgical procedures, AI-powered vision systems are transforming how healthcare professionals work.

In radiology, computer vision algorithms can detect subtle patterns in X-rays, MRIs, and CT scans that might be missed by human eyes. These systems can identify early signs of diseases such as cancer, helping to improve patient outcomes through earlier intervention.

Pathology is another area where computer vision is making significant impact. AI systems can analyze tissue samples and identify malignant cells with remarkable accuracy, supporting pathologists in making critical diagnoses.

Ophthalmology has seen particularly impressive advances, with AI systems capable of detecting diabetic retinopathy, glaucoma, and other eye conditions from retinal photographs. This technology is especially valuable in areas with limited access to specialist care.

The implementation of computer vision in healthcare requires careful consideration of regulatory requirements, data privacy, and integration with existing clinical workflows. Successful deployments often involve close collaboration between AI developers and healthcare professionals.

Despite the promise of this technology, challenges remain. Ensuring AI systems work effectively across diverse populations, maintaining data privacy and security, and gaining trust from healthcare professionals are ongoing concerns.

The future of computer vision in healthcare is bright, with emerging applications in areas such as surgical robotics, personalized treatment planning, and remote patient monitoring. As these technologies mature, they promise to make healthcare more effective and accessible worldwide.`,
      author: "Quantum Intelligence Team",
      date: "February 14, 2024",
      category: "Computer Vision",
      readTime: "7 min read",
      imageUrl: "blog5.jpg",
      tags: ["computer-vision", "healthcare", "medical-ai", "diagnosis", "radiology"]
    },
    {
      id: "6",
      title: "Natural Language Processing: The Evolution of Human-AI Communication",
      excerpt: "Discover how NLP is evolving to enable more natural and intuitive interactions between humans and AI systems, from chatbots to voice assistants.",
      content: `Natural Language Processing (NLP) has undergone remarkable evolution, transforming from simple keyword matching systems to sophisticated models that can understand context, emotion, and nuance in human communication.

The journey of NLP began with rule-based systems that relied on manually crafted linguistic rules. While effective for specific tasks, these systems lacked the flexibility to handle the complexity and variability of natural language.

The introduction of machine learning brought significant improvements, enabling systems to learn patterns from data rather than relying solely on predefined rules. Statistical models and later neural networks marked important milestones in NLP development.

The transformer architecture, introduced in 2017, revolutionized NLP by enabling models to process sequences more efficiently and capture long-range dependencies in text. This breakthrough laid the foundation for the large language models we see today.

Current NLP applications span a wide range of domains. Chatbots and virtual assistants help customers find information and complete tasks. Sentiment analysis helps businesses understand customer feedback. Machine translation breaks down language barriers in global communication.

The emergence of large language models like GPT has opened new possibilities for human-AI interaction. These models can engage in complex conversations, assist with creative writing, and even help with coding tasks.

However, challenges remain. Bias in language models, ensuring factual accuracy, and handling ambiguity in natural language are ongoing areas of research. Privacy and ethical considerations also play important roles in NLP development.

Looking forward, NLP will continue to evolve with advances in multimodal AI, enabling systems that can understand both text and visual information. The future promises more natural and intuitive human-AI interactions.`,
      author: "Quantum Intelligence Team",
      date: "January 30, 2024",
      category: "NLP",
      readTime: "9 min read",
      imageUrl: "blog6.png",
      tags: ["nlp", "natural-language-processing", "chatbots", "transformers", "communication"]
    }
  ];

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  const categories = ["All", "AI & Data", "AI Implementation", "Technical Deep Dive", "MLOps", "Computer Vision", "NLP"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & <span className="text-primary">Innovations</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the latest trends, research, and insights in AI, data science, and technology from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer hover-scale"
                onClick={() => handlePostClick(post)}
              >
                {post.imageUrl && (
                  <img
                    src={`/uploads/${post.imageUrl.replace(/^\/+/,'')}`}
                    alt={post.title}
                    className="w-full aspect-video object-cover"
                  />
                )}
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-tight">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => handlePostClick(post)}
                    className="text-foreground hover:text-primary p-0"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <BlogModal
        post={selectedPost}
        isOpen={isModalOpen}
        onClose={closeModal}
        renderImage={selectedPost && selectedPost.imageUrl ? (
          <img
            src={`/uploads/${selectedPost.imageUrl.replace(/^\/+/,'')}`}
            alt={selectedPost.title}
            className="w-full aspect-video object-cover rounded-t"
          />
        ) : null}
      />
    </div>
  );
};

export default Blog;

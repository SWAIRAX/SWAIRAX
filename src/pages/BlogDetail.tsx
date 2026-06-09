import { useParams } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, BookOpen } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import { useEffect, useState } from "react";
import { Eyebrow, Heading } from "@/components/ui/section";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { navigateToTop } = useNavigationWithScroll();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const post = blogPosts.find((p) => p.slug === slug);

  // Reading progress calculation
  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(scrollPercent, 100));
    };

    const handleScroll = () => {
      calculateProgress();
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    navigateToTop('/blog');
    return null;
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Reading Progress Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="h-1 bg-border">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary transition-all duration-300 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-20 bg-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 holo-grid opacity-30" />

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Button
              variant="ghost"
              onClick={() => navigateToTop('/blog')}
              className="mb-8 group -ml-2"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm">Back to Blog</span>
            </Button>

            {/* Category Badge */}
            <div className="mb-6">
              <Badge variant="secondary" className="text-sm px-3 py-1.5 font-medium">
                {post.category}
              </Badge>
            </div>

            {/* Title */}
            <Heading as="h1" size="display" className="mb-6">
              {post.title}
            </Heading>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>

            {/* Enhanced Meta Information */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">{post.author}</span>
                  <p className="text-xs text-muted-foreground">AI & Data Science Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-secondary-foreground" />
                </div>
                <span className="font-medium">{post.readTime}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto border-border hover:bg-accent transition-all duration-300 hover:scale-105"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Featured Image */}
      {post.imageUrl && (
        <section className="py-16 bg-background relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 holo-grid opacity-30" />

          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={`/uploads/${post.imageUrl.replace(/^\/+/,'')}`}
                  alt={post.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ maxHeight: '600px' }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/10 pointer-events-none" />

                {/* Image Caption */}
                <div className="absolute bottom-6 left-6 right-6 hidden lg:block">
                  <div className="bg-background/90 backdrop-blur-md border border-border/50 rounded-xl px-4 py-3">
                    <p className="text-sm text-muted-foreground font-medium">
                      Featured illustration: {post.title.toLowerCase()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-16 bg-background">

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <article className="space-y-12 text-base md:text-lg leading-8 text-foreground max-w-4xl mx-auto">
              <div className="text-foreground/90 space-y-10" style={{ opacity: 1, transform: 'none' }}>
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Handle horizontal rules
                  if (paragraph.trim() === '---') {
                    return (
                      <div key={index} className="relative my-16">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-gradient-to-r from-transparent via-border to-transparent" />
                        </div>
                        <div className="relative flex justify-center">
                          <div className="bg-background px-6">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Handle H2 headings (##)
                  if (paragraph.startsWith('## ')) {
                    const text = paragraph.replace('## ', '');
                    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    return (
                      <div key={index} className="relative scroll-mt-24" id={id}>
                        <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8 text-foreground tracking-tight leading-tight hover:text-primary/90 transition-colors cursor-pointer">
                          {text}
                        </h2>
                        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary/60 to-primary/20 rounded-full" />
                      </div>
                    );
                  }

                  // Handle H3 headings (###)
                  if (paragraph.startsWith('### ')) {
                    const text = paragraph.replace('### ', '');
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-semibold mt-12 mb-6 text-foreground tracking-tight flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        {text}
                      </h3>
                    );
                  }

                  // Handle bullet points with better styling
                  if (paragraph.trim().startsWith('•')) {
                    const items = paragraph.split('\n').filter(line => line.trim().startsWith('•'));
                    return (
                      <div key={index} className="bg-card/30 border border-border/50 rounded-xl p-6 my-8 backdrop-blur-sm">
                        <ul className="space-y-4">
                          {items.map((item, itemIndex) => {
                            const text = item.replace(/^•\s*/, '').trim();
                            const parts = text.split(/(\*\*.*?\*\*)/g);
                            return (
                              <li key={itemIndex} className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-foreground/90">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0 animate-pulse-glow" />
                                <span className="flex-1">
                                  {parts.map((part, partIndex) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                      return <strong key={partIndex} className="font-semibold text-foreground bg-primary/10 px-1 py-0.5 rounded">{part.slice(2, -2)}</strong>;
                                    }
                                    return <span key={partIndex}>{part}</span>;
                                  })}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  }

                  // Handle special quotes/highlights (standalone bold statements only)
                  if (paragraph.includes('**') && paragraph.split('**').length === 3 && !paragraph.includes('\n') && paragraph.split('**')[2].trim() === '') {
                    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                    const quoteText = parts[1].slice(2, -2);
                    return (
                      <div key={index} className="my-12 md:my-16">
                        <div className="flex gap-6">
                          {/* Simple quote mark */}
                          <div className="flex-shrink-0 mt-2">
                            <div className="text-4xl text-primary/60 font-serif leading-none">"</div>
                          </div>

                          {/* Quote content */}
                          <div className="flex-1">
                            <blockquote className="text-xl md:text-2xl font-light text-foreground leading-relaxed italic">
                              {quoteText}
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  // Regular paragraphs with enhanced styling
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p
                      key={index}
                      className="text-base md:text-lg leading-9 text-foreground/90 font-normal tracking-normal hover:text-foreground transition-colors duration-300"
                    >
                      {parts.map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIndex} className="font-semibold text-foreground bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{part.slice(2, -2)}</strong>;
                        }
                        return <span key={partIndex}>{part}</span>;
                      })}
                    </p>
                  );
                })}
              </div>
            </article>


            {/* Divider */}
            <div className="my-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Enhanced Tags Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Tag className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Explore Related Topics</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm px-4 py-2.5 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 border-border group"
                  >
                    <span className="group-hover:text-primary transition-colors">#{tag}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enhanced Author Card */}
            <Card className="mb-12 border-border bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20 shadow-lg">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{post.author}</h3>
                    <p className="text-primary font-medium text-sm mb-3">Lead Data Scientist & AI Strategist</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Expert in transforming complex data challenges into actionable business insights.
                      Specializes in human-centered analytics and AI implementation across African enterprises.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection
        eyebrow="Article Complete"
        title="Ready for More Insights?"
        description="Join thousands of professionals who trust SWAIRAX for cutting-edge AI and data science solutions. Let's transform your data challenges into competitive advantages."
        primary={{ label: "Explore More Articles", href: "/blog" }}
        secondary={{ label: "Start Your Project", href: "/contact" }}
      />

      {/* Enhanced Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-card/30 to-background border-t border-border relative overflow-hidden" style={{ opacity: 1, transform: 'none' }}>
          {/* Background Elements */}
          <div className="absolute inset-0 holo-grid opacity-20" />

          <div className="container mx-auto px-6 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Eyebrow
                  variant="pill"
                  icon={<BookOpen className="h-5 w-5 text-primary" />}
                  className="border border-primary/20 mb-4"
                >
                  Continue Reading
                </Eyebrow>
                <Heading as="h2" size="h2" className="mb-4">You Might Also Like</Heading>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover more insights from our collection of articles on AI, data science, and business intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <Card
                    key={relatedPost.slug}
                    className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden cursor-pointer group hover:-translate-y-2"
                    onClick={() => navigateToTop(`/blog/${relatedPost.slug}`)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {relatedPost.imageUrl && (
                      <div className="relative overflow-hidden">
                        <img
                          src={`/uploads/${relatedPost.imageUrl.replace(/^\/+/,'')}`}
                          alt={relatedPost.title}
                          className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs px-3 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
                          {relatedPost.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-3 leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {relatedPost.date}
                        </div>
                        <div className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                          Read more →
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogDetail;

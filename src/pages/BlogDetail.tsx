import { useParams } from "react-router-dom";
import { useNavigationWithScroll } from "@/utils/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag, BookOpen } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogPosts";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { navigateToTop } = useNavigationWithScroll();

  const post = blogPosts.find((p) => p.slug === slug);

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

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-b border-border">
        <div className="container mx-auto px-6">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
              {post.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleShare}
                className="ml-auto border-border hover:bg-accent"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.imageUrl && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={`/uploads/${post.imageUrl.replace(/^\/+/,'')}`}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: '600px' }}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
              <div className="text-foreground/90 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Handle horizontal rules
                  if (paragraph.trim() === '---') {
                    return <hr key={index} className="my-8 border-border" />;
                  }

                  // Handle H2 headings (##)
                  if (paragraph.startsWith('## ')) {
                    const text = paragraph.replace('## ', '');
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
                        {text}
                      </h2>
                    );
                  }

                  // Handle H3 headings (###)
                  if (paragraph.startsWith('### ')) {
                    const text = paragraph.replace('### ', '');
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground">
                        {text}
                      </h3>
                    );
                  }

                  // Handle bullet points
                  if (paragraph.trim().startsWith('•')) {
                    const items = paragraph.split('\n').filter(line => line.trim().startsWith('•'));
                    return (
                      <ul key={index} className="list-none space-y-2 my-4">
                        {items.map((item, itemIndex) => {
                          const text = item.replace(/^•\s*/, '').trim();
                          // Process bold text in list items
                          const parts = text.split(/(\*\*.*?\*\*)/g);
                          return (
                            <li key={itemIndex} className="flex items-start gap-2 text-base md:text-lg leading-7 text-foreground/90">
                              <span className="text-primary mt-2">•</span>
                              <span>
                                {parts.map((part, partIndex) => {
                                  if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={partIndex} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
                                  }
                                  return <span key={partIndex}>{part}</span>;
                                })}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    );
                  }

                  // Regular paragraphs with bold text support
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p
                      key={index}
                      className="text-base md:text-lg leading-8 text-foreground/90 font-normal"
                    >
                      {parts.map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return <strong key={partIndex} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
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

            {/* Tags Section */}
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Tag className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Article Tags</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-sm px-4 py-2 hover:bg-accent transition-colors cursor-default border-border"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <Card className="mb-12 border-border bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{post.author}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Published on {post.date} • {post.readTime}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Expert insights and analysis from our team of AI and data science professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Explore more insights and innovations from our team of experts. Stay updated with the latest trends in AI, data science, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigateToTop('/blog')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
              >
                View All Articles
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigateToTop('/contact')}
                className="border-2 border-primary/20 hover:bg-accent px-8 py-6 text-base"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-card/30 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Related Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.slug}
                    className="bg-card border-border hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer group"
                    onClick={() => navigateToTop(`/blog/${relatedPost.slug}`)}
                  >
                    {relatedPost.imageUrl && (
                      <div className="relative overflow-hidden">
                        <img
                          src={`/uploads/${relatedPost.imageUrl.replace(/^\/+/,'')}`}
                          alt={relatedPost.title}
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {relatedPost.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {relatedPost.date}
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

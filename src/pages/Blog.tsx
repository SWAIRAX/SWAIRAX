import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { useNavigationWithScroll } from "@/utils/navigation";

const Blog = () => {
  const { navigateToTop } = useNavigationWithScroll();

  const handlePostClick = (postId: string) => {
    navigateToTop(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Blog Heading */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="w-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-left">
              <span className="text-foreground">Insights & </span>
              <span className="text-primary">Innovation</span>
            </h1>
            <div className="h-1 w-24 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-card border-border hover:shadow-card transition-all duration-300 overflow-hidden cursor-pointer hover-scale"
                onClick={() => handlePostClick(post.id)}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePostClick(post.id);
                    }}
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
    </div>
  );
};

export default Blog;

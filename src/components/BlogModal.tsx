import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

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

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  renderImage?: React.ReactNode;
}

const BlogModal = ({ post, isOpen, onClose }: BlogModalProps) => {
  if (!post) return null;

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-3xl max-h-[85vh] overflow-y-auto animate-scale-in"
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-start">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          </div>

          <DialogTitle id="modal-title" className="text-lg font-bold leading-tight">
            {post.title}
          </DialogTitle>

          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
          </div>

          <p id="modal-description" className="text-sm text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </DialogHeader>

        <div className="mt-4 space-y-4">
          {post.imageUrl && (
            <img
              src={`/uploads/${post.imageUrl.replace(/^\/+/,'')}`}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg mb-4 animate-scale-in"
              loading="lazy"
            />
          )}

          <div className="prose prose-sm max-w-none">
            <div className="text-foreground leading-relaxed space-y-3">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-sm leading-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BlogModal;

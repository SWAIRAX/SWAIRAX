
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


interface Client {
id: string;
name: string;
description: string;
details: string;
industry: string;
logoUrl?: string;
logoLinkUrl?: string; // URL to open when logo is clicked
imageUrl?: string; // Main card image (not logo)
tags: string[];
}


interface ClientModalProps {
client: Client | null;
isOpen: boolean;
onClose: () => void;
}

const ClientModal = ({ client, isOpen, onClose }: ClientModalProps) => {
  if (!client) return null;

  // Handle keyboard events
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent 
        className="max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700/50" 
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <DialogHeader className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            {client.logoUrl && (
                <div 
                    className="bg-white/90 p-3 rounded-lg hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer"
                    onClick={() => {
                        if (client.logoLinkUrl) {
                            window.open(client.logoLinkUrl, '_blank');
                        }
                    }}
                    title={`Visit ${client.name} website`}
                >
                    <img 
                        src={`/uploads/${client.logoUrl.replace(/^\/+/,'')}`} 
                        alt={`${client.name} logo`} 
                        className="h-12 w-12 object-contain" 
                    />
                </div>
            )}
            <Badge className="bg-primary/90 text-primary-foreground border-0 text-sm font-medium px-4 py-2">
                {client.industry}
            </Badge>
            </div>
            
            {client.logoLinkUrl && (
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(client.logoLinkUrl, '_blank')}
                    className="border-slate-600 text-slate-300 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                    Visit Website
                </Button>
            )}
        </div>

        <DialogTitle id="modal-title" className="text-3xl md:text-4xl font-bold leading-tight text-white">
            {client.name}
        </DialogTitle>

        <p id="modal-description" className="text-lg text-slate-300 leading-relaxed">
            {client.description}
        </p>
        </DialogHeader>

        <div className="mt-8 space-y-8">
        {client.imageUrl && (
            <div className="aspect-video rounded-xl overflow-hidden relative group">
                <img 
                    src={`/uploads/${client.imageUrl.replace(/^\/+/,'')}`} 
                    alt={client.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
        )}

        <div className="prose prose-lg max-w-none">
            <div className="text-slate-300 leading-relaxed space-y-6">
            {client.details.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base leading-7">
                {paragraph}
                </p>
            ))}
            </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-700/50">
            {client.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-sm bg-slate-800/50 border-slate-600 text-slate-300 hover:border-primary/50 px-4 py-2">
                {tag}
            </Badge>
            ))}
        </div>
        </div>
    </DialogContent>
    </Dialog>
);
};

export default ClientModal;

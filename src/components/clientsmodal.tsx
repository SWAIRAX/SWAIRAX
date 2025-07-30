
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";


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
return (

    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
            {client.logoUrl && (
                <img src={client.logoUrl} alt={client.name} className="h-10 w-10 object-contain rounded" />
            )}
            <Badge variant="secondary" className="text-xs">
                {client.industry}
            </Badge>
            </div>
            <Button
			aria-label="Close">
            <X className="h-8 w-8 p-0" />
            </Button>
        </div>

        <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight">
            {client.name}
        </DialogTitle>

        <p className="text-lg text-muted-foreground leading-relaxed">
            {client.description}
        </p>
        </DialogHeader>

        <div className="mt-8 space-y-6">
        <div className="aspect-video bg-gradient-secondary rounded-lg mb-8 flex items-center justify-center">
            {client.logoUrl && (
            <img src={client.logoUrl} alt={client.name} className="h-24 w-24 object-contain rounded" />
            )}
        </div>

        <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed space-y-4">
            {client.details.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-base leading-7">
                {paragraph}
                </p>
            ))}
            </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
            {client.tags.map((tag, index) => (
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

export default ClientModal;

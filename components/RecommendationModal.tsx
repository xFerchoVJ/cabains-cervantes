import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { type LucideIcon } from "lucide-react";

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  recommendation: {
    name: string;
    image: string;
    icon: LucideIcon;
    description: string;
  };
}

export function RecommendationModal({
  isOpen,
  onClose,
  recommendation,
}: RecommendationModalProps) {
  const { name, image, icon: Icon, description } = recommendation;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Icon className="w-6 h-6 text-brand-brown" />
            {name}
          </DialogTitle>
        </DialogHeader>
        <div className="relative h-48 mb-4">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <DialogDescription>{description}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

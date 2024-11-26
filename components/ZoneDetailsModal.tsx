"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Users, Bed } from "lucide-react";

interface Zone {
  id: string;
  name: string;
  description: string;
  images: string[];
  capacity: number;
  beds: string;
}

interface ZoneDetailsModalProps {
  zone: Zone;
  isOpen: boolean;
  onClose: () => void;
}

export function ZoneDetailsModal({
  zone,
  isOpen,
  onClose,
}: ZoneDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === zone.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? zone.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{zone.name}</DialogTitle>
          <DialogDescription>Detalles de la cabaña</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <div className="relative aspect-video mb-4">
            <Image
              src={zone.images[currentImageIndex]}
              alt={`${zone.name} - Imagen ${currentImageIndex + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">{zone.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Capacidad: {zone.capacity} personas</span>
              </div>
              <div className="flex items-center">
                <Bed className="w-5 h-5 mr-2" />
                <span>{zone.beds}</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

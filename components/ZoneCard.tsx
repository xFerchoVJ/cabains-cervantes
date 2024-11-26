"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Bed } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ZoneDetailsModal } from "./ZoneDetailsModal";

interface Zone {
  id: string;
  name: string;
  description: string;
  images: string[];
  capacity: number;
  beds: string;
}

export function ZoneCard({ zone }: { zone: Zone }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === zone.images.length - 1 ? 0 : prevIndex + 1
    );
  }, [zone.images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? zone.images.length - 1 : prevIndex - 1
    );
  }, [zone.images.length]);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <>
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-video">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={zone.images[currentImageIndex]}
                  alt={`${zone.name} - Imagen ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">{zone.name}</h3>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  <span>Capacidad: {zone.capacity}</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span>{zone.beds}</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white opacity-75 hover:opacity-100"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white opacity-75 hover:opacity-100"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4 line-clamp-3">
              {zone.description}
            </p>
            <Button
              className="w-full bg-brand-brown text-white hover:bg-brand-brown/90"
              onClick={() => setIsModalOpen(true)}
            >
              Ver detalles
            </Button>
          </div>
        </CardContent>
      </Card>
      <ZoneDetailsModal
        zone={zone}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

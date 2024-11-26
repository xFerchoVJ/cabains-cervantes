import { motion } from "framer-motion";
import Image from "next/image";
import { type LucideIcon } from "lucide-react";

interface RecommendationCardProps {
  name: string;
  image: string;
  icon: LucideIcon;
  description: string;
  onClick: () => void;
}

export function RecommendationCard({
  name,
  image,
  icon: Icon,
  description,
  onClick,
}: RecommendationCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
      </div>
      <div className="p-4 flex items-center">
        <Icon className="w-6 h-6 text-brand-brown mr-2" />
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
}

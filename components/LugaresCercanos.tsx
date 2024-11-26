"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { recommendations } from "@/lib/data";
import { RecommendationCard } from "./RecommendationCard";
import { RecommendationModal } from "./RecommendationModal";
import { type LucideIcon } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Definimos el tipo Recommendation
type Recommendation = {
  name: string;
  image: string;
  icon: LucideIcon;
  description: string;
};

export function LugaresCercanos() {
  // Actualizamos el tipo de estado para que pueda ser null o Recommendation
  const [selectedRecommendation, setSelectedRecommendation] =
    useState<Recommendation | null>(null);

  return (
    <section
      id="lugares"
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4 font-parisienne">
            Lugares Cercanos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tapalpa te espera con un sinfín de maravillas por descubrir. Desde
            paisajes naturales impresionantes hasta rincones llenos de historia
            y tradición. Aquí te dejamos nuestras recomendaciones imperdibles
            para explorar cerca de Morada de Cervantes.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
          initial="initial"
          animate="animate"
        >
          {recommendations.map((recommendation, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <RecommendationCard
                {...recommendation}
                onClick={() => setSelectedRecommendation(recommendation)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mt-12 text-center"
        >
          <p className="text-xl font-semibold text-brand-brown mb-4">
            🌟 ¡Tu aventura comienza aquí!
          </p>
          <p className="text-gray-600">
            Desde tu hogar en el corazón de Tapalpa, cada rincón está lleno de
            sorpresas. ¿Estás listo para explorar?
          </p>
        </motion.div>

        {selectedRecommendation && (
          <RecommendationModal
            isOpen={!!selectedRecommendation}
            onClose={() => setSelectedRecommendation(null)}
            recommendation={selectedRecommendation}
          />
        )}
      </div>
    </section>
  );
}

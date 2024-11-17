"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface OurHistoryProps {
  fadeInUp: Variants;
}

const OurHistory: React.FC<OurHistoryProps> = ({ fadeInUp }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#7a5c47] mb-4">
          Nuestra Historia
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Descubre cómo nació Morada de Cervantes y nuestra pasión por la
          hospitalidad
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div variants={fadeInUp} className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            Morada de Cervantes nació del sueño de crear un espacio único donde
            la literatura, el confort y la naturaleza se encuentran. Inspirados
            en la obra maestra de Miguel de Cervantes, cada rincón de nuestras
            cabañas cuenta una historia.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Desde nuestra apertura, nos hemos dedicado a ofrecer una experiencia
            premium que combina la rusticidad de Tapalpa con el lujo y la
            comodidad que nuestros huéspedes merecen.
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            src="https://images.unsplash.com/photo-1636225131799-e5d0ebd697e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Morada de Cervantes - Nuestra Historia"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurHistory;

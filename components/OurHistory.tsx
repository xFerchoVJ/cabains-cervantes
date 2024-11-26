"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Separator } from "@/components/ui/separator";

interface OurHistoryProps {
  fadeInUp: Variants;
}

const OurHistory: React.FC<OurHistoryProps> = ({ fadeInUp }) => {
  return (
    <section className="py-16 bg-[#f8f5f1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7a5c47] font-parisienne mb-4">
            Nuestra Historia
          </h2>
          <Separator className="w-24 h-1 bg-[#7a5c47] mx-auto mb-6" />
          <p className="text-gray-600 text-xl max-w-2xl mx-auto font-parisienne">
            Descubre Tapalpa: el corazón vibrante de Jalisco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 text-justify">
              Morada de Cervantes nació de un sueño: crear un espacio donde la
              magia de la literatura se fundiera con la tranquilidad de la
              naturaleza. Inspirados en la obra inmortal de Miguel de Cervantes,
              cada rincón de nuestras cabañas tiene alma propia, como si narrara
              historias que esperan ser descubiertas por quienes buscan un
              refugio lejos del bullicio de la ciudad.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              Ubicados en el corazón de Tapalpa, nuestro hogar no solo es un
              lugar para descansar, sino un escape para reconectar contigo
              mismo, con tus seres queridos y con la belleza que nos rodea.
              Aquí, el confort moderno se encuentra con la calidez rústica,
              mientras las montañas y los paisajes se convierten en
              protagonistas de tu experiencia.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 text-justify">
              Desde el primer día, nuestro propósito ha sido claro: ofrecerte
              más que una estancia, darte un hogar, un lugar donde cada detalle
              está pensado para que vivas momentos que perduren en tu memoria.
            </p>
            <p className="text-xl font-semibold text-[#7a5c47] italic text-justify">
              Bienvenido a Morada de Cervantes. Un hogar en el corazón de
              Tapalpa, donde cada amanecer es una invitación a vivir tu mejor
              historia.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl"
          >
            <Image
              src="https://www.gob.mx/cms/uploads/image/file/509611/vista-de-calle-tapalpa.aspectos-web.jpg"
              alt="Morada de Cervantes - Nuestra Historia"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-semibold mb-2">Tapalpa, Jalisco</h3>
              <p className="text-sm">
                Un pueblo mágico lleno de encanto y tradición
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;

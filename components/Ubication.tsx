"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Share2, MapPin, Copy, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

type Props = {
  fadeInUp: Variants;
};

const Ubication = ({ fadeInUp }: Props) => {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const address = "Miguel Hidalgo 517, 49340 Tapalpa, México";
  const mapUrl = "https://maps.app.goo.gl/j9snBkbxV4JPV8Ub8";

  const copyAddress = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(address);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setShowCopiedMessage(true);
      setTimeout(() => setShowCopiedMessage(false), 2000);
    }
  };

  const shareLocation = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Morada de Cervantes - Ubicación",
          text: "Visítanos en Morada de Cervantes, Tapalpa",
          url: mapUrl,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      window.open(mapUrl, "_blank");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#e5dac3] to-[#f5f0e5]">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7a5c47] mb-4 font-parisienne">
            Nuestra Ubicación
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Encuéntranos en el corazón de Tapalpa, donde la tradición y la
            comodidad se encuentran
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#7a5c47] mb-4">
                Dirección
              </h3>
              <div className="flex items-start space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-[#9fb59f] mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-lg">{address}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-[#9fb59f] text-white hover:bg-[#8fa58f] transition-colors duration-300"
                  onClick={() => window.open(mapUrl, "_blank")}
                >
                  Cómo llegar
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-[#9fb59f] text-[#7a5c47] hover:bg-[#9fb59f]/10 transition-colors duration-300"
                        onClick={copyAddress}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar dirección
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Haz clic para copiar la dirección</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <AnimatePresence>
                {showCopiedMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[#9fb59f] mt-2 font-semibold"
                  >
                    ¡Dirección copiada!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#7a5c47] mb-4">
                Comparte nuestra ubicación
              </h3>
              <Button
                variant="outline"
                className="border-[#9fb59f] text-[#7a5c47] hover:bg-[#9fb59f]/10 transition-colors duration-300"
                onClick={shareLocation}
              >
                <Share2 className="w-4 h-4 mr-2" />
                Compartir ubicación
              </Button>
            </div>
          </motion.div>
          <div className="space-y-6">
            <motion.div
              variants={imageVariants}
              className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg group"
            >
              <Image
                src="/images/PAISAJE (19).jpg"
                alt="Morada de Cervantes"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-2xl font-semibold">
                  Morada de Cervantes
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1875.1605991911308!2d-103.76828966152972!3d19.952989916566388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84259af3a9e7220f%3A0x6a9fb7bce17c93e2!2sMiguel%20Hidalgo%20517%2C%2049340%20Tapalpa%2C%20Jal.!5e0!3m2!1sen!2smx!4v1731787894213!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Ubication;

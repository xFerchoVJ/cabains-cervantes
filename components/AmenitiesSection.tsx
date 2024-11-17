"use client";

import { useEffect, useRef } from "react";
import { amenities } from "@/lib/data";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AmenitiesSection() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="amenities" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={itemVariants}
          className="text-3xl font-bold text-brand-brown text-center mb-12"
        >
          Lo que ofrece este lugar
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {amenities.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={index.toString()}>
                  <AccordionTrigger>{category.title}</AccordionTrigger>
                  <AnimatePresence>
                    {category.items.map((item, itemIndex) => (
                      <AccordionContent key={itemIndex}>
                        {item}
                      </AccordionContent>
                    ))}
                  </AnimatePresence>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

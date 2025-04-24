"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { zones } from "@/lib/data";
import { Hero } from "@/components/Hero";
import { ZoneCard } from "@/components/ZoneCard";
import { Navigation } from "@/components/Navigation";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { motion, useAnimation, Variants } from "framer-motion";
import Ubication from "@/components/Ubication";
import OurHistory from "@/components/OurHistory";
import Spinner from "@/components/ui/spinner";
import { RulesSection } from "@/components/RulesSection";
import { LugaresCercanos } from "@/components/LugaresCercanos";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simula una carga de datos o una operación asíncrona
  useEffect(() => {
    const loadPage = async () => {
      // Simula una operación de carga
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 2 segundos
      setLoading(false); // Una vez que termine la carga, cambia el estado a false
    };

    loadPage();
  }, []);

  if (loading) {
    return <Spinner />; // Muestra el spinner mientras `loading` es true
  }

  return (
    <main className="min-h-screen bg-brand-beige/20">
      <Navigation />

      {/* Hero */}
      <section id="inicio">
        <Hero />
      </section>

      {/* Historia */}
      <section className="py-16 bg-[#e5dac3]" id="history">
        <AnimatedSection className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <OurHistory fadeInUp={fadeInUp} />
        </AnimatedSection>
      </section>

      {/* Zonas */}
      <section id="zonas">
        <AnimatedSection
          className="py-16 px-4 md:px-8 max-w-7xl mx-auto"
          id="zonas"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-brown mb-4 font-parisienne">
              Cabañas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre los espacios únicos que tenemos para ti
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {zones.map((zone) => (
              <motion.div key={zone.id} variants={fadeInUp}>
                <ZoneCard zone={zone} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Reglas */}
      <RulesSection />

      {/* Lo que ofrece este lugar */}
      <AmenitiesSection />

      {/* Recomendaciones */}
      <LugaresCercanos />

      {/* Ubicación */}
      <section id="ubicacion">
        <AnimatedSection className="py-16 bg-white" id="ubicacion">
          <Ubication fadeInUp={fadeInUp} />
        </AnimatedSection>
      </section>

      {/* CTA */}
      <AnimatedSection className="py-16 green-bg-color text-custom-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            ¿Listo para una experiencia única?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg mb-8 opacity-90">
            Reserva tu estancia en Morada de Cervantes
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-brand-beige text-brand-brown hover:bg-brand-beige/90"
            >
              Reservar Ahora
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <AnimatedSection className="bg-gray-100 py-8 flex-grow">
        <footer className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-brand-brown mb-4">
                Contacto
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Teléfono: 343 109 0009 Teléfono: 312 320 2246
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email: minaglezcervantes17@gmail.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Tapalpa, Jalisco, México
                </li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="text-sm text-gray-600">
              <p>
                © {new Date().getFullYear()} Morada de Cervantes. Todos los
                derechos reservados.
              </p>
            </motion.div>
          </div>
        </footer>
      </AnimatedSection>
    </main>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScrollText,
  Home,
  Users,
  Shield,
  AlertTriangle,
  Clock,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ruleCategories = [
  {
    title: "Horarios de Entrada y Salida",
    icon: <Clock className="w-6 h-6 text-brand-brown" />,
    rules: [
      "Entrada: De las 15:00 a las 23:00",
      "Salida: De las 8:00 a las 12:00",
    ],
  },
  {
    title: "Cuidado del Espacio",
    icon: <Home className="w-6 h-6 text-brand-brown" />,
    rules: [
      "Al ingresar, revisa el inventario de la cabaña. Antes de partir, se verificará nuevamente. En caso de faltantes o daños, será necesario reponer el artículo o cubrir su costo.",
      "Si notas algún desperfecto o daño en las instalaciones o artefactos, avísanos de inmediato. ¡Estamos aquí para ayudarte!",
      "Te pedimos que no fumes dentro de las cabañas. Por favor, evita dejar colillas en jardines o terrazas.",
      "Por respeto a otros huéspedes, no se permiten mascotas. Si llegas con una sin previo aviso, lamentablemente no podremos admitir tu ingreso, y no se hará reembolso.",
    ],
  },
  {
    title: "Convivencia y Buenas Costumbres",
    icon: <Users className="w-6 h-6 text-brand-brown" />,
    rules: [
      "Deposita la basura en los contenedores correspondientes. ¡Ayúdanos a mantener este espacio limpio y hermoso!",
      "Respeta las normas de convivencia y disfruta del espacio en armonía con otros huéspedes.",
      "Apaga luces, TV, chimeneas, grifos y otros aparatos si no los estás utilizando. Evita desperdiciar agua en duchas o lavabos.",
    ],
  },
  {
    title: "Cuidado de las Instalaciones",
    icon: <Shield className="w-6 h-6 text-brand-brown" />,
    rules: [
      "Evita clavar objetos, rayar o escribir en las paredes. ¡Cada rincón de Morada de Cervantes tiene su encanto y queremos preservarlo!",
      "Serás responsable por cualquier daño causado por ti o tus acompañantes.",
      "Si enciendes la chimenea, asegúrate de que un adulto esté al pendiente en todo momento.",
    ],
  },
  {
    title: "Restricciones y Condiciones",
    icon: <AlertTriangle className="w-6 h-6 text-brand-brown" />,
    rules: [
      "No está permitido ingresar con casas rodantes, instalar carpas o estructuras en el jardín sin previa autorización.",
      "Los implementos como toallas, sábanas o frazadas son exclusivos para uso dentro de la cabaña. Si se detectan pérdidas o daños, el costo será cargado a tu cuenta.",
      "La administración se reserva el derecho de admisión y permanencia. Cualquier incumplimiento del reglamento puede llevar a un retiro inmediato sin reembolso.",
      "No nos hacemos responsables por la pérdida de objetos personales o equipaje, ni por accidentes ocurridos dentro de las instalaciones.",
    ],
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function RulesSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(value)
        ? prevOpenItems.filter((item) => item !== value)
        : [...prevOpenItems, value]
    );
  };

  return (
    <section id="reglas" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-brown mb-4 font-parisienne">
            Reglamento Morada de Cervantes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            ¡Bienvenido a tu hogar en el corazón de Tapalpa! Para que disfrutes
            al máximo de tu estancia, te invitamos a leer este reglamento,
            pensado para mantener la armonía y cuidar de este lugar especial.
          </p>
        </motion.div>

        <Accordion
          type="multiple"
          value={openItems}
          onValueChange={setOpenItems}
        >
          {ruleCategories.map((category, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="mb-4">
              <AccordionTrigger className="hover:no-underline">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInUp}
                  className="flex items-center w-full"
                >
                  <div className="flex items-center flex-1">
                    {category.icon}
                    <h3 className="ml-2 text-xl font-semibold text-brand-brown">
                      {category.title}
                    </h3>
                  </div>
                </motion.div>
              </AccordionTrigger>
              <AccordionContent>
                <AnimatePresence>
                  {openItems.includes(`item-${index}`) && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 mt-2"
                    >
                      {category.rules.map((rule, ruleIndex) => (
                        <motion.li
                          key={ruleIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: ruleIndex * 0.1 }}
                          className="flex items-start"
                        >
                          <ScrollText className="w-5 h-5 text-brand-brown mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 text-sm">{rule}</p>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <motion.p
          variants={fadeInUp}
          className="text-center mt-8 text-gray-600 italic"
        >
          Gracias por ser parte de Morada de Cervantes y ayudarnos a cuidar este
          espacio especial. ¡Esperamos que vivas una experiencia inolvidable en
          Tapalpa! 🌿
        </motion.p>
      </div>
    </section>
  );
}

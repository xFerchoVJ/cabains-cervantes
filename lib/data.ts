import {
  Bath,
  Bed,
  Tv,
  Flame,
  Shield,
  Wifi,
  UtensilsCrossed,
  MapPin,
  ParkingMeterIcon as Parking,
  ComputerIcon as Blender,
  TreePine,
  Droplets,
  Mountain,
  Building,
  Music,
  Utensils,
} from "lucide-react";

export const zones = [
  {
    id: "cabaña-don-quijote",
    name: "Cabaña Don Quijote",
    description: `Un espacio acogedor y amplio para grupos grandes.
    Con capacidad para 9 personas, cuenta con 3 camas matrimoniales y 3 individuales.
    Perfecta para disfrutar en familia o con amigos, rodeados de la magia de Tapalpa y vistas impresionantes.`,
    images: [
      "/images/cabañas/cabaña/13.jpg",
      "/images/cabañas/cabaña/9.jpg",
      "/images/cabañas/cabaña/6.jpg",
      "/images/cabañas/cabaña/3.jpg",
    ],
    capacity: 9,
    beds: "3 matrimoniales, 3 individuales",
  },
  {
    id: "suite-dulcinea",
    name: "Suite Dulcinea",
    description:
      "Una suite diseñada para dos personas con acceso fácil para personas con discapacidad. Equipada con 2 camas queen, combina comodidad y elegancia, ideal para una escapada íntima y tranquila.",
    images: [
      "/images/cabañas/dulcinea/SUITE (1).jpg",
      "/images/cabañas/dulcinea/SUITE (2).jpg",
      "/images/cabañas/dulcinea/SUITE (4).jpg",
      "/images/cabañas/dulcinea/SUITE (9).jpg",
    ],
    capacity: 2,
    beds: "2 queen",
  },
  {
    id: "bungalow-clavileño",
    name: "Bungalow Clavileño",
    description:
      "Un refugio para tres personas, con 1 cama matrimonial y 1 cama individual. Perfecto para parejas pequeñas o pequeños grupos que buscan relajarse y disfrutar de un espacio acogedor con todas las comodidades.",
    images: [
      "/images/cabañas/clavileño/B. CLAVILEÑO (5) (1).jpg",
      "/images/cabañas/clavileño/B. CLAVILEÑO (5).jpg",
    ],
    capacity: 3,
    beds: "1 matrimonial, 1 individual",
  },
  {
    id: "bungalow-rocinante",
    name: "Bungalow Rocinante",
    description:
      "Este encantador espacio para tres personas ofrece 1 cama matrimonial y 1 cama individual. Un lugar íntimo y cómodo que invita a disfrutar de momentos inolvidables junto a los hermosos paisajes de Tapalpa.",
    images: [
      "/images/cabañas/rocinante/B. ROCINANTE (1).jpg",
      "/images/cabañas/rocinante/B. ROCINANTE (4).jpg",
    ],
    capacity: 3,
    beds: "1 matrimonial, 1 individual",
  },
];

export const recommendations = [
  {
    name: "Cascada El Salto",
    image:
      "https://cdn.milenio.com/uploads/media/2022/06/25/cascada-salto-nogal-tapalpa-twitter.jpg",
    icon: Droplets,
    description:
      "🌿 Aventura y frescura: Déjate maravillar por la imponente caída de agua de 105 metros, rodeada de un paisaje boscoso que parece sacado de un cuento. Ideal para los amantes de la naturaleza y el senderismo. No olvides llevar tu cámara, ¡los paisajes son de postal!",
  },
  {
    name: "Las Piedrotas",
    image:
      "https://cdn.milenio.com/uploads/media/2020/08/16/formaciones-rocosas-tamanos-enormes-inusuales.jpg",
    icon: Mountain,
    description:
      "🪨 El Valle de los Enigmas: Misteriosas y majestuosas, estas formaciones rocosas están llenas de historias. Desde leyendas indígenas hasta teorías extraterrestres, las Piedrotas son un lugar perfecto para conectar con la energía del lugar, hacer un picnic o simplemente maravillarte con su enigma.",
  },
  {
    name: "Centro Histórico de Tapalpa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Templo_de_la_Inmaculada_Concepci%C3%B3n_Tapalpa_1.JPG",
    icon: Building,
    description:
      "🏛️ Tradición en cada esquina: Camina entre calles empedradas, casas de adobe con techos de teja roja y el vibrante corazón del pueblo. Visita la Parroquia de San Antonio y disfruta de los antojitos típicos en la plaza principal. El encanto de Tapalpa te envolverá desde el primer paso.",
  },
  {
    name: "La Calle de los Músicos",
    image:
      " https://i0.wp.com/viajoconestilo.com/wp-content/uploads/2017/03/rutatequilamontana.jpg?resize=1170%2C700&ssl=1",
    icon: Music,
    description:
      "🎶 Donde la melodía nunca falta: Una calle que vibra con arte y tradición. Escucha a los músicos locales llenando el aire con acordes nostálgicos y alegres, y vive la magia de la música en su forma más auténtica.",
  },
  {
    name: "Sabores de Tapalpa",
    image:
      "https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2020/10/la-mezcalera-tapalpa.jpg",
    icon: Utensils,
    description:
      "🍴 Delicias que conquistan: Después de explorar, disfruta de un borrego al pastor o una deliciosa carne asada en los restaurantes locales. Y, por supuesto, no te vayas sin probar los típicos borrachitos de Tapalpa, un dulce recuerdo que te llevará de vuelta con cada bocado.",
  },
];
export const amenities = [
  {
    title: "Baño",
    icon: Bath,
    items: [
      "Productos de limpieza",
      "Shampoo",
      "Acondicionador",
      "Agua caliente",
    ],
  },
  {
    title: "Habitación y lavandería",
    icon: Bed,
    items: ["Ropa de cama", "Almohadas y cobijas adicionales"],
  },
  {
    title: "Entretenimiento",
    icon: Tv,
    items: ["TV"],
  },
  {
    title: "Calefacción y refrigeración",
    icon: Flame,
    items: ["Chimenea interior", "Calentador portátil", "Calefacción radiante"],
  },
  {
    title: "Seguridad en el hogar",
    icon: Shield,
    items: ["Extintor de incendios", "Botiquín"],
  },
  {
    title: "Internet y oficina",
    icon: Wifi,
    items: ["Wifi", "Área para trabajar"],
  },
  {
    title: "Cocina y comedor",
    icon: UtensilsCrossed,
    items: [
      "Cocina disponible para el uso de los huéspedes",
      "Refrigerador",
      "Microondas",
      "Artículos básicos de cocina: Ollas y sartenes, aceite, sal y pimienta",
      "Platos y cubiertos: Platos hondos, palillos chinos, platos, tazas, etc.",
      "Mini refrigerador",
      "Estufa de gas",
      "Horno",
      "Cafetera: cafetera de filtro, prensa francesa",
      "Copas de vino",
      "Licuadora",
      "Utensilios para hacer parrillada: Parrilla, carbón, palillos de bambú/hierro, etc.",
      "Mesa de comedor",
    ],
  },
  {
    title: "Características de la ubicación",
    icon: MapPin,
    items: ["Entrada privada"],
  },
  {
    title: "Exterior",
    icon: TreePine,
    items: [
      "Patio o balcón privado",
      "Lugar para hacer fogata",
      "Muebles exteriores",
      "Asador",
    ],
  },
  {
    title: "Estacionamiento e instalaciones",
    icon: Parking,
    items: ["Estacionamiento gratuito en las instalaciones"],
  },
];

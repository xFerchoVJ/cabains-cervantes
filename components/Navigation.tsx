"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItemsType = {
  label: string;
  href: string;
};

const navItems: NavItemsType[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#history" },
  { label: "Zonas", href: "#zonas" },
  { label: "Reglas", href: "#reglas" },
  { label: "Amenidades", href: "#amenities" },
  { label: "Lugares Cercanos", href: "#lugares" },
  { label: "Ubicación", href: "#ubicacion" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h2>Morada de Cervantes</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-brand-brown transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button className="bg-brand-brown text-white hover:bg-brand-brown/90">
              Reservar
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-brown"
            >
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-4 pt-4 pb-6 bg-white shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-brand-brown hover:bg-gray-100 rounded-md"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-4">
            <Button className="w-full bg-brand-brown text-white hover:bg-brand-brown/90">
              Reservar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

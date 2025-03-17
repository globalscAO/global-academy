import { LinkItemInterface } from "../interfaces/LinkItemInterface";
import { scrollToSection } from "../utils/scrollToSection";

export const linkItems: LinkItemInterface[] = [
  {
    id: "#about",
    name: "Sobre nós",
    url: "/",
    onclick: () => scrollToSection("about"),
  },
  {
    id: "#courses",
    name: "Cursos",
    url: "/courses",
    onclick: () => scrollToSection("courses"),
  },
  {
    id: "iniciative",
    name: "Iniciativas",
    url: "/",
    onclick: () => scrollToSection("iniciative"),
  },
  {
    id: "contact",
    name: "Contactos",
    url: "/",
    onclick: () => scrollToSection("contact"),
  },
];

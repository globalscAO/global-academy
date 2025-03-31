import { LinkItemInterface } from "../interfaces/LinkItemInterface";
import { scrollToSection } from "../utils/scrollToSection";

export const linkItems: LinkItemInterface[] = [
  {
    id: "#about",
    title: "Sobre nós",
    items: [
      {
        id: 1,
        title: "Mensagem do CEO",
        url: "/ceo-msg",
      },
      {
        id: 2,
        title: "Clientes",
        url: "/clients",
      },
      {
        id: 3,
        title: "Iniciativas",
        url: "/iniciatives",
      },
      /*  {
        id: 4,
        title: "Publicações",
        url: "/publications",
      }, */
    ],
    onclick: () => scrollToSection("about"),
  },
  {
    id: "#courses",
    title: "Cursos",
    items: [
      {
        id: 1,
        title: "Ver todos",
        url: "/courses",
      },
    ],
    onclick: () => scrollToSection("courses"),
  },
  /* {
    id: "#teaching",
    title: "Ensino",
    items: [
      {
        id: 1,
        title: "Formação Complementar",
        url: "/",
      },
      {
        id: 2,
        title: "Formação Executiva",
        url: "/",
      },
    ],
    onclick: () => scrollToSection("courses"),
  }, */
];

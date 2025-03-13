import { LinkItemInterface } from "../interfaces/LinkItemInterface";

export const linkItems: LinkItemInterface[] = [
    {
      name: "Sobre nós",
      url: "/",
      onclick: () => console.log("Sobre Nós clicado"),
    },
    {
      name: "Cursos",
      url: "/",
      onclick: () => console.log("Cursos clicado"),
    },
    {
      name: "Iniciativas",
      url: "/",
      onclick: () => console.log("Iniciativas clicado"),
    },
    {
      name: "Contactos",
      url: "/",
      onclick: () => console.log("Contactos clicado"),
    },
  ];
import { Dispatch, SetStateAction } from "react";
import { scrollToSection } from "./scrollToSection";

export const handleMenuToggle = ({
  id,
  setMenuOpen,
  isMenuOpen,
}: {
  isMenuOpen: boolean;
  id: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  scrollToSection(id);
  setMenuOpen(!isMenuOpen);
};

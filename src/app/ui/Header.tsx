"use client";

import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { linkItems } from "../data/linkItems";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { scrollToSection } from "../utils/scrollToSection";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = (id: string) => {
		scrollToSection(id)
		setMenuOpen(!isMenuOpen)
	}

  return (
    <header className="sticky top-0 z-50 flex bg-primary/90 text-white justify-center items-center w-full py-4 px-12 max-lg:px-8 shadow shadow-black/25">
      <div className="justify-between flex items-center w-full lg:max-w-6xl relative ">
        <Link href={"/"}>
          <Image
            src={"/logo-white.png"}
            alt={"Logotipo Global Services Corporation"}
            width={80}
            height={34}
            className="object-contain w-14"
          />
        </Link>

        <div className="flex items-center">
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden text-2xl text-white cursor-pointer ${
              isMenuOpen && "hidden"
            }`}>
            <FiMenu />
          </button>

          <button
            onClick={() => setMenuOpen(false)}
            className={`lg:hidden text-2xl text-white cursor-pointer ${
              !isMenuOpen && "hidden"
            }`}>
            <IoMdClose />
          </button>

          <div className="hidden gap-2 items-center w-full bg-white max-w-72 text-gray-400 px-4 py-2 rounded-md">
            <CiSearch className="text-2xl" />

            <input
              type="text"
              placeholder="Pesquisar cursos"
              className="w-full outline-none"
            />
          </div>
        </div>

        <ul
          className={`p-2 max-lg:absolute max-lg:rounded-b-lg left-0 max-lg:top-10 text-sm font-semibold flex gap-2 max-lg:flex-col transition-all duration-500 ease-in-out transform max-lg:bg-primary/90 max-lg:w-full ${
            isMenuOpen
              ? "max-lg:translate-y-0 max-lg:opacity-100 max-lg:visible"
              : "max-lg:-translate-y-5 max-lg:opacity-0 max-lg:invisible"
          }`}>

          {linkItems.map((item, index) => (
            <li
              key={index}
              onClick={item.onclick}
              className="hover:bg-secondary/10 py-2 px-4 max-lg:text-center rounded-md cursor-pointer">
              {item.name}
            </li>
          ))}

          <Link
            href={"/"}
            className="flex justify-center lg:hidden font-semibold gap-2 items-center px-4 py-2 rounded-md bg-white  border border-white text-primary hover:bg-primary hover:text-white transition-colors duration-300">
            Inscrever-se <MdArrowOutward />
          </Link>
        </ul>

        <Link
          href={"/"}
          className="flex max-lg:hidden font-semibold gap-2 items-center px-4 py-2 rounded-md bg-white  border border-white text-primary hover:bg-primary hover:text-white transition-colors duration-300">
          Inscrever-se <MdArrowOutward />
        </Link>
      </div>
    </header>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { MdArrowOutward } from "react-icons/md";
import { linkItems } from "../data/linkItems";

export default function Header() {
  return (
    <header className="flex bg-primary text-white justify-center items-center w-full py-4 px-12">
      <div className="justify-between flex items-center w-full max-w-6xl">
        <div className="max-w-md w-full justify-between items-center flex">
          <Link href={"/"}>
            <Image
              src={"/logo-white.png"}
              alt={"Logotipo Global Services Corporation"}
              width={80}
              height={34}
              className="object-contain"
            />
          </Link>

          <div className="flex gap-2 items-center w-full bg-white max-w-72 text-gray-400 px-4 py-2 rounded-md">
            <CiSearch className="text-2xl" />

            <input
              type="text"
              placeholder="Pesquisar cursos"
              className="w-full outline-none"
            />
          </div>
        </div>

        <nav className="flex items-center justify-between max-w-xl w-full">
          <ul className="text-sm font-semibold flex gap-2">
            {linkItems.map((item, index) => (
              <li
                key={index}
                onClick={item.onclick}
                className="hover:bg-secondary/10 py-2 px-4 rounded-md cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>

          <Link
            href={"/"}
            className="flex font-semibold gap-2 items-center px-4 py-2 rounded-md bg-white  border border-white text-primary hover:bg-primary hover:text-white transition-colors duration-300">
            Inscrever-se <MdArrowOutward />
          </Link>
        </nav>
      </div>
    </header>
  );
}

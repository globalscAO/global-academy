import Image from "next/image";
import Link from "next/link";
import { linkItems } from "../data/linkItems";
import { LuSendHorizontal } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-primary-500 w-full flex justify-center items-center px-20 py-20">
      <div className="max-w-6xl flex flex-col w-full  text-white text-sm">
        <ul className="flex flex-wrap w-full justify-between gap-4">
          <li className="py-11 w-72.75 flex flex-col gap-3.5">
            <Image
              src={"/logo-white.png"}
              alt={"Global Services Corporation"}
              width={100}
              height={42}
            />

            <p>
              Global Academy – Onde o conhecimento abre portas para o sucesso.
            </p>
          </li>

          <li className="flex flex-col gap-3.5 py-11">
            <h2 className="font-semibold">Links Rápidos</h2>

            {linkItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}>
                {item.name}
              </Link>
            ))}
          </li>

          <li className="flex flex-col gap-3.5 py-11">
            <h2 className="font-semibold">Contactos</h2>

            <Link href={"tel:+244222731031"}>+244 222 731 031</Link>
            <Link href={"tel:+244941064919"}>+244 941 064 919</Link>
            <Link href={"mailto:academy@globalsc.ao"}>academy@globalsc.ao</Link>
          </li>

          <li className="flex flex-col gap-3.5 py-11 w-63.25">
            <h2 className="font-semibold">Newsletter</h2>

            <p>Fique por dentro do conhecimento que transforma</p>

            <form
              action=""
              className="bg-white rounded-md justify-between flex">
              <input
                type="text"
                className="w-full outline-none px-4 py-2 placeholder:text-gray-400 text-black"
                placeholder="Insira o seu email"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md">
                <LuSendHorizontal />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </footer>
  );
}

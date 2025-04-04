import { iniciativesData } from "@/app/data/iniciativesData";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { use } from "react";
import IniciativeCard from "../components/IniciativeCard";

export default function Page({
  params,
}: {
  params: Promise<{ iniciativeId: string }>;
}) {
  const { iniciativeId } = use(params);
  const iniciative = iniciativesData.find(
    (item) => item.id === parseInt(iniciativeId)
  );

  if (!iniciative) {
    return (
      <div className="flex flex-col space-y-3 px-14 pb-8">
        <Skeleton
          height={200}
          className="w-[100%] h-[100%] rounded-xl"
        />
        <div className="space-y-2">
          <Skeleton
            className="h-4 w-[90%]"
            style={{ marginBottom: 10 }}
          />
          <Skeleton className="h-4 w-[100%]" />
          <Skeleton className="h-4 w-[100%]" />
        </div>
      </div>
    );
  }

  // Filtrar a iniciativa atual
  const outrasIniciativas = iniciativesData.filter(
    (item) => item.id !== parseInt(iniciativeId)
  );

  // Escolher uma iniciativa aleatória
  const iniciativaAleatoria =
    outrasIniciativas.length > 0
      ? outrasIniciativas[Math.floor(Math.random() * outrasIniciativas.length)]
      : null;

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Image
          src={iniciative?.coverImgUrl}
          alt={iniciative.name}
          width={1000}
          height={350}
          className="w-full object-cover  h-100 object-top"
        />
      </div>

      <div className="max-w-6xl w-full flex flex-col py-8 max-lg:p-6 gap-4 max-lg:gap-2">
        <h1 className="text-3xl max-lg:text-xl font-bold text-primary-500">
          O que é o {iniciative.name}?
        </h1>

        <p className="text-gray-500 max-lg:text-justify">
          {iniciative.description}
        </p>
      </div>

      <div className=" bg-secondary w-full flex justify-center items-center p-8">
        <div className="w-full max-w-6xl flex flex-col gap-2">
          <h1 className="text-lg font-bold text-primary-500 w-full text-left">
            Outras iniciativas
          </h1>

          {iniciativaAleatoria && (
            <IniciativeCard
              title={iniciativaAleatoria.name}
              description={iniciativaAleatoria.description}
              imgUrl={iniciativaAleatoria.coverImgUrl}
              link={`/iniciatives/${iniciativaAleatoria.id}`}
            />
          )}
        </div>
      </div>
    </section>
  );
}

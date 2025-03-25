import HeroTitle from "@/app/ui/HeroTitle";
import IniciativeCard from "./components/IniciativeCard";
import { iniciativesData } from "@/app/data/iniciativesData";

export default function Iniciatives() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8">
      <HeroTitle
        description={
          "Nossos cursos são projetados para formar líderes, impulsionar carreiras e transformar negócios. Com conteúdos exclusivos e instrutores de referência, conectamos você às melhores práticas globais."
        }
        title={"Iniciativas"}
      />

      <div className="max-w-6xl flex flex-col justify-center gap-8 pb-8 max-lg:px-8">
        {iniciativesData.map((item, index) => (
          <IniciativeCard
            key={index}
            title={item.name}
            description={item.description}
            imgUrl={item.coverImgUrl}
            link={`/iniciatives/${item.id}`}
          />
        ))}
      </div>
    </section>
  );
}

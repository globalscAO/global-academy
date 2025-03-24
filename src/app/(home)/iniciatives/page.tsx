import HeroTitle from "@/app/ui/HeroTitle";
import IniciativeCard from "./components/IniciativeCard";

export default function Iniciatives() {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-8">
      <HeroTitle
        description={
          "Nossos cursos são projetados para formar líderes, impulsionar carreiras e transformar negócios. Com conteúdos exclusivos e instrutores de referência, conectamos você às melhores práticas globais."
        }
        title={"Iniciativas"}
      />

      <div className="max-w-6xl flex max-lg:flex-col justify-center gap-8 pb-8 max-lg:px-8">
        <IniciativeCard
          title={"Business After Work"}
          description={
            "Nossos cursos são projetados para formar líderes, impulsionar carreiras e transformar negócios. Com conteúdos exclusivos e instrutores de referência, conectamos você às melhores práticas globais."
          }
          imgUrl={
            "https://global-services-corporation.github.io/images/baw-jul-2024/3.jpg"
          }
          link={""}
        />
      </div>
    </section>
  );
}

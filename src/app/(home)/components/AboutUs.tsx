import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="bg-secondary py-18 px-24 w-full flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-wrap gap-12 items-center justify-between">
        <Image
          src={"/about-us.png"}
          alt={"About Global Academy"}
          width={500}
          height={300}
        />

        <div className="max-w-lg w-full flex flex-col px-4 py-3 gap-4">
          <h2 className="primary-title">Sobre nós</h2>
          <h3 className="text-2xl font-bold">
            Por que fazer um curso na Global Academy?
          </h3>
          {[
            "A Global Academy, uma divisão da Global Services Corporation, oferece cursos exclusivos para capacitação de líderes e profissionais que buscam excelência no mercado. Com uma metodologia inovadora e conteúdos alinhados às tendências globais, preparamos você para os desafios do futuro.",
            "Nossos cursos são projetados para formar líderes, impulsionar carreiras e transformar negócios. Com conteúdos exclusivos e instrutores de referência, conectamos você às melhores práticas globais.",
          ].map((text, index) => (
            <p
              key={index}
              className="text-gray-400">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

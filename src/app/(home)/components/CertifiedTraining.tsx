import Image from "next/image";

export default function CertifiedTraining() {
  return (
    <section className="flex justify-center items-center px-24 py-24 bg-secondary">
      <div className="max-w-6xl w-full flex justify-between gap-12 text-primary">
        <h1 className="text-4xl font-bold mx-auto">Formação Certificada</h1>

        <div className="flex flex-col gap-6 max-w-128.75">
          <h2 className="font-semibold">Cursos de grande impacto profissional.</h2>
          <p className="text-gray-400">
            A Global Academy, uma divisão da Global Services Corporation,
            oferece cursos exclusivos para capacitação de líderes e
            profissionais que buscam excelência no mercado.{" "}
          </p>
          <h2 className="font-semibold">Somos certficados por:</h2>
          <Image
            src={"/inefop.png"}
            alt={""}
            width={100}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}

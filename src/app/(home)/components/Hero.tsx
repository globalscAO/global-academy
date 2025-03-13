import EffectFadePictures from "./EffectFadePics";

export default function Hero() {
  return (
    <section className="flex justify-center items-center gap-24 px-24 py-18">
      <div className="w-full max-w-6xl flex flex-wrap justify-between max-lg:justify-center items-center gap-12">
        <EffectFadePictures />

        <div className="flex flex-col gap-4 w-full max-w-lg">
          <h1 className="text-5xl font-bold">
            Global Academy – O Conhecimento que Transforma
          </h1>

          <p className="text-gray-500">
            Cursos de excelência para profissionais de alto nível.
          </p>

          <button className="animate-pulse bg-primary cursor-pointer hover:bg-white border border-primary hover:text-primary text-white rounded-md px-4 py-2 transition-colors duration-300">
            Quero me inscrever
          </button>
        </div>
      </div>
    </section>
  );
}

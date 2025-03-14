import { productsData } from "@/app/data/productsData";
import ProductsCaroussel from "./ProductsCaroussel";

export default function OurProducts() {
  return (
    <section className="px-24 py-20 bg-primary w-full  flex justify-center">
      <div className="text-center text-white items-center flex flex-col gap-6 max-w-6xl">
        <h1 className="text-2xl font-bold">Confira os nossos cursos</h1>
        <p className="max-w-225">
          Nossos cursos são projetados para capacitar profissionais e líderes
          com conhecimentos estratégicos e práticos, alinhados às demandas do
          mercado global.
        </p>

        <hr className="border border-white/50 w-80" />

        <ProductsCaroussel productsData={productsData} />
      </div>
    </section>
  );
}

import { IoIosArrowDropright } from "react-icons/io";

export default function ContactUs() {
  return (
    <section className="flex justify-center items-center bg-primary py-20 px-6">
      <div className="max-w-6xl w-full flex justify-between text-white items-center">
        <div className="max-w-130 w-full flex flex-col text-center items-center px-5 py-6 gap-2">
          <h2 className="text-lg font-semibold">
            Preencha o formulário para entrar em contacto.
          </h2>
          <p>
            Nossos cursos são projetados para capacitar profissionais e líderes
            com conhecimentos estratégicos e práticos, alinhados às demandas do
            mercado global.
          </p>
          <IoIosArrowDropright className="text-3xl" />
        </div>

        <form className="flex flex-col justify-center bg-white px-8 py-12.5 gap-6 rounded-xl text-gray-500 w-116">
         <h1 className="font-bold text-center text-primary">
            ENTRE EM CONTACTO
         </h1>
         
          <input
            type="text"
            placeholder="Nome completo"
            className="primary-input"
          />

          <input
            type="email"
            placeholder="Email"
            className="primary-input"
          />

          <input
            type="tel"
            placeholder="Contacto"
            className="primary-input"
          />

          <textarea
            rows={4}
            placeholder="Assunto "
            className="primary-input resize-none"
          />

          <button className="primary-btn py-2 px-4 rounded-md ">Enviar</button>
        </form>
      </div>
    </section>
  );
}

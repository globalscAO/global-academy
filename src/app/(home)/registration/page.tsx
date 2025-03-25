import HeroTitle from "@/app/ui/HeroTitle";

export default function Registration() {
  return (
    <section className="flex flex-col justify-center items-center">
      <HeroTitle
        title={"Formulário de Inscrição"}
        description={
          "Nossos cursos são projetados para formar líderes, impulsionar carreiras e transformar negócios. Com conteúdos exclusivos e instrutores de referência, conectamos você às melhores práticas globais."
        }
      />

      <div className="max-w-6xl w-full py-8 max-lg:px-8">
        <form className="w-full flex flex-col gap-4">
          <label className="primary-label">
            Nome completo
            <input
              type="text"
              className="primary-input"
              placeholder="Insira o seu nome completo"
            />
          </label>

          <div className="flex w-full gap-3 max-lg:flex-col">
            <label className="primary-label">
              Data de nascimento
              <input
                type="date"
                className="primary-input"
              />
            </label>

            <label className="primary-label">
              Documento de identificação
              <input
                type="text"
                className="primary-input"
                placeholder="Insira o seu documento de identificação"
              />
            </label>
          </div>

          <div className="flex w-full gap-3 max-lg:flex-col">
            <label className="primary-label">
              Email
              <input
                type="email"
                className="primary-input"
                placeholder="Insira o seu email"
              />
            </label>

            <label className="primary-label">
              Número de telefone
              <input
                type="tel"
                placeholder="Insira o seu número de telefone"
                className="primary-input"
              />
            </label>
          </div>

          <div className="flex w-full gap-3 max-lg:flex-col">
            <label className="primary-label">
              País
              <div className="primary-input">
                <select className="w-full outline-none">
                  <option value="">Selecione o seu país</option>
                </select>
              </div>
            </label>

            <label className="primary-label">
              Província
              <input
                type="text"
                placeholder="Insira o nome da sua província"
                className="primary-input"
              />
            </label>
          </div>

          <label className="primary-label">
            Endereço
            <input
              type="text"
              placeholder="Ex.: São Paulo, Luanda, Angola"
              className="primary-input"
            />
          </label>

          <label className="primary-label">
            Curso
            <div className="primary-input">
              <select className="w-full outline-none">
                <option value="">Selecione o curso</option>
              </select>
            </div>
          </label>

          <button className="primary-btn rounded-md py-2 px-4">Enviar</button>
        </form>
      </div>
    </section>
  );
}

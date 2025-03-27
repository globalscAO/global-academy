"use client";

import { coursesData } from "@/app/data/coursesData";
import HeroTitle from "@/app/ui/HeroTitle";
import countries from "world-countries";
import { SubmitHandler, useForm } from "react-hook-form";

type InputValues = {
  fullname: string;
  birthdate: Date;
  docId: string;
  country: string;
  province: string;
  email: string;
  address: string;
  course: string;
  phone: string;
};

const angolaPhoneRegex = /^\+2449\d{8}$/;
const minAge = 18;
const currentYear = new Date().getFullYear();

function isValidBirthdate(dateString: Date) {
  const birthYear = new Date(dateString).getFullYear();
  return currentYear - birthYear >= minAge;
}

export default function Registration() {
  const formattedCountries = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValues>();

  const onSubmit: SubmitHandler<InputValues> = async (data) => {
    console.log(data);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <HeroTitle
        title={"Formulário de Inscrição"}
        description={
          "Nossos cursos são projetados para formar líderes, impulsionar carreiras e transformar negócios. Com conteúdos exclusivos e instrutores de referência, conectamos você às melhores práticas globais."
        }
      />

      <div className="max-w-6xl w-full py-8 max-lg:px-8">
        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}>
          <label className="primary-label">
            Nome completo
            <input
              type="text"
              {...register("fullname", {
                required: "Nome é obrigatório",
                minLength: {
                  value: 3,
                  message: "Nome deve ter pelo menos 3 caracteres",
                },
              })}
              className="primary-input"
              placeholder="Insira o seu nome completo"
            />
            <span className="text-xs text-red-600">
              {errors.fullname && errors.fullname.message}
            </span>
          </label>

          <div className="flex w-full gap-3 max-lg:flex-col">
            <label className="primary-label">
              Data de nascimento
              <input
                type="date"
                {...register("birthdate", {
                  required: "Data de nascimento é obrigatória",
                  validate: (value) =>
                    isValidBirthdate(value) || "Deve ter pelo menos 18 anos",
                })}
                className="primary-input"
              />
              <span className="text-xs text-red-600">
                {errors.birthdate && errors.birthdate.message}
              </span>
            </label>

            <label className="primary-label">
              Documento de identificação
              <input
                type="text"
                {...register("docId", {
                  required: "Documento é obrigatório",
                  minLength: { value: 7, message: "Documento inválido" },
                })}
                className="primary-input"
                placeholder="Insira o seu documento de identificação"
              />
              <span className="text-xs text-red-600">
                {errors.docId && errors.docId.message}
              </span>
            </label>
          </div>

          <div className="flex w-full gap-3 max-lg:flex-col">
            <label className="primary-label">
              Email
              <input
                type="email"
                {...register("email", {
                  required: "E-mail é obrigatório",
                })}
                className="primary-input"
                placeholder="Insira o seu email"
              />
              <span className="text-xs text-red-600">
                {errors.email && errors.email.message}
              </span>
            </label>

            <label className="primary-label">
              Número de telefone
              <input
                type="tel"
                {...register("phone", {
                  required: "Número de telefone é obrigatório",
                  pattern: {
                    value: angolaPhoneRegex,
                    message: "Número inválido. Use o formato +2449XXXXXXXX",
                  },
                })}
                placeholder="Insira o seu número de telefone"
                className="primary-input"
              />
              <span className="text-xs text-red-600">
                {errors.phone && errors.phone.message}
              </span>
            </label>
          </div>

          <div className="flex w-full gap-3 max-lg:flex-col">
            <label className="primary-label">
              País
              <div className="primary-input">
                <select
                  className="w-full outline-none"
                  {...register("country", {
                    required: "País é obrigatório",
                  })}>
                  <option value="">Selecione o seu país</option>
                  {formattedCountries.map((country) => (
                    <option value={country.value}>{country.label}</option>
                  ))}
                </select>
              </div>
              <span className="text-xs text-red-600">
                {errors.country && errors.country.message}
              </span>
            </label>

            <label className="primary-label">
              Província
              <input
                type="text"
                {...register("province", {
                  required: "Província é obrigatório",
                })}
                placeholder="Insira o nome da sua província"
                className="primary-input"
              />
              <span className="text-xs text-red-600">
                {errors.province && errors.province.message}
              </span>
            </label>
          </div>

          <label className="primary-label">
            Endereço
            <input
              type="text"
              {...register("address", {
                required: "Endereço é obrigatório",
              })}
              placeholder="Ex.: São Paulo, Luanda, Angola"
              className="primary-input"
            />
            <span className="text-xs text-red-600">
              {errors.address && errors.address.message}
            </span>
          </label>

          <label className="primary-label">
            Curso
            <div className="primary-input">
              <select
                {...register("course", {
                  required: "Curso é obrigatório",
                })}
                className="w-full outline-none">
                <option value="">Selecione o curso</option>
                {coursesData.map((item) => (
                  <option
                    key={item.id}
                    value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <span className="text-xs text-red-600">
              {errors.course && errors.course.message}
            </span>
          </label>

          <button
            type="submit"
            className="primary-btn rounded-md py-2 px-4">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

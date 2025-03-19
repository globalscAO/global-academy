"use client";

import { useState } from "react";
import { productsData } from "@/app/data/productsData";
import HeroTitle from "@/app/ui/HeroTitle";
import Product from "../components/ProductCard";
import { Pagination } from "@mui/material";
import AboutCourseModal from "@/app/ui/AboutCourseModal";

const ITEMS_PER_PAGE = 6;

export default function Courses() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);

  const displayedCourses = productsData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <section
      id="courses"
      className="flex flex-col justify-center items-center w-full">
      <HeroTitle
        description={
          "Transforme seu futuro com os cursos da Global Academy! Conhecimento de alto nível para líderes e profissionais que querem ir além."
        }
        title={"Cursos"}
      />

      <ul className="flex flex-wrap gap-x-3 gap-y-8 items-center px-8 py-12 justify-start max-lg:justify-center max-w-5xl w-full">
        {displayedCourses.map((product, index) => (
          <li key={index}>
            <Product
              coverImg={product.coverImg}
              title={product.title}
              description={product.description}
              id={product.id}
              modality={product.modality}
              certificate={product.certificate}
              locale={product.locale}
              startDate={product.startDate}
              language={product.language}
              country={product.country}
              workload={product.workload}
            />
          </li>
        ))}
      </ul>

      <Pagination
        count={totalPages}
        page={page}
        onChange={(_: React.ChangeEvent<unknown>, value: number) =>
          setPage(value)
        }
        color="primary"
        className="pb-8"
      />
    </section>
  );
}

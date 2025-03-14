"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Product from "./Product";
import { Navigation } from "swiper/modules";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { ProductsInterface } from "@/app/interfaces/ProductsInterface";

export default function ProductsCaroussel({
  productsData,
}: {
  productsData: ProductsInterface[];
}) {
  return (
    <div className="w-full flex items-center justify-center">
      <button className="swiper-button-prev">
        <IoIosArrowDropleftCircle className="text-4xl" />
      </button>
      <Swiper
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        speed={1000}
        modules={[Navigation]}>
        {productsData.map((product, index) => (
          <SwiperSlide
            key={index}
            className="py-8">
            <Product
              imgSrc={product.coverImg}
              title={product.title}
              description={product.description}
              onclick={() => console.log("Clicado")}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-button-next">
        <IoIosArrowDroprightCircle className="text-4xl" />
      </button>
    </div>
  );
}

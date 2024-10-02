import { useState, useEffect } from "react";

import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Slider() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function getProducts() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false
      }}
      className="max-w-[90%]"
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15
        }
      }}
    >
      {products.slice(0, 4).map((product) => (
        <SwiperSlide key={product.id}>
          <div className="relative w-full h-[500px] flex justify-center items-center">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-md filter opacity-70"
              style={{ backgroundImage: `url(${product.image})` }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

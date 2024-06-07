import React from "react";
import { Cars } from "./Cars.js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarCard from "./CarCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CarList = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        {/* heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Nuestros vehículos
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facere
          enim doloribus.
        </p>

        {/* Car Listing cards */}
        <div>
          <div className="w-[100%] mx-auto">
            <Carousel
              additionalTransfrom={0}
              arrows={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              centerMode={false}
              infinite
              responsive={responsive}
              itemClass="item"
              showDots={false}
            >
              {/* CarCard */}
              {Cars.map((car) => (
                <div key={car.id}>
                  <CarCard
                    name={car.name}
                    price={car.price}
                    km={car.km}
                    image={car.image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="grid place-content-center mt-4">
          <button data-aos="fade-up" className="button-outline">
            Ver vehículos
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;

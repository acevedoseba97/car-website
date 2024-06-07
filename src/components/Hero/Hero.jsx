import React from "react";
import carPng from "../../assets/car.png";
import bannerCar from "../../assets/banner-car.png";

const Hero = ({ theme }) => {
  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : bannerCar}
              alt="Banner car img"
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p data-aos="fade-up" className="text-primary text-2xl font-serif">
              Encuentra el auto de tus sueños
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
            >
              Web Cars
            </h1>
            <p data-aos="fade-up" data-aos-delay="1000">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              id earum fuga eveniet alias voluptas. Nam praesentium ut
              perferendis optio eum vel.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1200"
              className="rounded-md bg-primary hover:bg-primary/80 transition duration-500 py-2 px-6 text-black"
            >
              Ver vehículos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

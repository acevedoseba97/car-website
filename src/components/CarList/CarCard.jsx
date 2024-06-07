import React from "react";

const CarCard = ({ name, km, price, image }) => {
  return (
    <div className="bg-gray-100 text-black dark:bg-white/20 dark:text-white p-6 rounded-lg m-3 md:h-[50%] flex flex-col justify-center items-center gap-8">
      <div className="md:w-full flex justify-center">
        <img
          src={image}
          alt={name}
          className="max-w-[100%] h-[150px] md:h-[140px] object-cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-primary font-semibold">{name}</h1>
        <p>{km} Km</p>
        <p>$ {price}</p>
      </div>
    </div>
  );
};

export default CarCard;

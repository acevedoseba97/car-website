import React from "react";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Mejor precio",
    icon: (
      <FaMoneyBill1Wave className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Rápido y seguro",
    icon: (
      <IoShieldCheckmark className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Reservas online",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            ¿Por qué elegirnos?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-300 text-white hover:text-black rounded-lg"
            >
              <div className="grid place-items-center">{skill.icon}</div>
              <h1 className="text-xl font-bold">{skill.name}</h1>
              <p>{skill.description}</p>
              <button className="button-outline bg-dark hover:border-black hover:bg-primary/80">
                Más información
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import img1 from "../../assets/person1.jpg";
import img2 from "../../assets/person2.jpg";
import img3 from "../../assets/person3.jpg";

const testimonialsData = [
  {
    name: "John Doe",
    image: img1,
    description:
      "Recomiendo Web Cars a cualquier persona en busca de un vehículo de alta calidad con un excelente servicio al cliente.",
    aosDelay: "0",
  },
  {
    name: "Vanessa Hanson",
    image: img2,
    description:
      "El personal estaba bien informado y servicial durante todo el proceso de compra, abordando cualquier pregunta o preocupación que tenía.",
    aosDelay: "300",
  },
  {
    name: "Francisco Barnett",
    image: img3,
    description:
      "El auto no solo tiene un aspecto estupendo, sino que también se comporta excepcionalmente bien. Muy conforme.",
    aosDelay: "600",
  },
];

const Testimonial = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* header */}
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold font-serif text-center sm:text-4xl"
          >
            Nuestros Clientes
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black dark:text-white">
          {testimonialsData.map((data) => {
            return (
              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={data.image}
                    alt="User img"
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

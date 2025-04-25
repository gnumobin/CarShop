import React from "react";
import Pic1 from '../assets/img/featured.jpg';
import Pic2 from '../assets/img/behind.jpg';

const FeaturedCar = () => {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-6xl font-semibold mb-[5rem] text-center md:text-left">
          Destaque semanal
        </h2>

        {/* Featured Car Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[4rem]">
          {/* Image */}
          <div className="w-full md:w-2/3 rounded-[2.5rem] overflow-hidden">
            <img
              src={Pic1}
              alt="Porsche Macan GTS"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="w-full md:w-1/3 bg-custom py-[7.4rem] px-[6rem] rounded-[2.5rem]">
            <h3 className="text-base text-white md:text-[2.2rem] font-semibold mb-[3rem]">
              Novo Porsche Macan GTS
            </h3>
            <p className="text-sm md:text-4xl text-white font-bold text-justify">
              Novo Macan GTS: destaque nos aspectos em que os outros escondem na multidão. Jovem dinâmico e urbano, com equipamentos de série completos, características de design exclusivas do modelo e, é claro, o tradicional desempenho Porsche.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCar;
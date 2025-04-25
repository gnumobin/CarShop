import React from "react";

import Pic from "../assets/img/models/1.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

const ModelCards = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl lg:text-6xl font-semibold mb-[5rem] text-center md:text-left">
          Modelos
        </h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1: A combustão */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden h-[25rem] md:h-[30rem] relative">
            <img
              src={Pic}
              alt="Car Image"
              className="w-full md:h-full object-cover"
            />
            <div className="px-[4rem] pb-[2rem] absolute bottom-0 flex items-center justify-between w-full">
              <h3 className="text-base md:text-lg lg:text-4xl font-semibold text-white mb-2 ">
                A combustão
              </h3>
              <Link className="text-white text-[3rem]">
                <FaChevronRight />
              </Link>
            </div>
          </div>

          {/* Card 2: Híbridos */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden h-[25rem] md:h-[30rem] relative">
            <img
              src={Pic}
              alt="Car Image"
              className="w-full md:h-full object-cover"
            />
            <div className="px-[4rem] pb-[2rem] absolute bottom-0 flex items-center justify-between w-full">
              <h3 className="text-base md:text-lg lg:text-4xl font-semibold text-white mb-2 ">
                A combustão
              </h3>
              <Link className="text-white text-[3rem]">
                <FaChevronRight />
              </Link>
            </div>
          </div>

          {/* Card 3: Elétrico */}
          <div className="bg-white rounded-[2.5rem] overflow-hidden h-[25rem] md:h-[30rem] relative">
            <img
              src={Pic}
              alt="Car Image"
              className="w-full md:h-full object-cover"
            />
            <div className="px-[4rem] pb-[2rem] absolute bottom-0 flex items-center justify-between w-full">
              <h3 className="text-base md:text-lg lg:text-4xl font-semibold text-white mb-2 ">
                A combustão
              </h3>
              <Link className="text-white text-[3rem]">
                <FaChevronRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelCards;

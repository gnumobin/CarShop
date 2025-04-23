import React from "react";

const Aside = () => {
  return (
    <div className="p-4 md:p-8 md:w-1/3">
      {/* Brand Name */}
      <h2 className="text-sm sm:text-lg md:text-[2.4rem] font-bold uppercase text-line tracking-widest mb-[1rem]">Toyota</h2>

      {/* Model Name */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[4rem] tracking-wide font-extrabold mb-6 md:mb-[5rem]">
        SW4 Diamond
      </h1>

      {/* Navigation Menu */}
      <ul className="space-y-[1rem] sm:space-y-[3rem] text-sm sm:text-base md:text-[2.4rem]">
        {/* Imagens */}
        <li className="flex items-center space-x-2 sm:space-x-3">
          <span className="text-primary font-semibold">
            •
          </span>
          <span className="text-primary font-extrabold">Imagens</span>
        </li>

        {/* Ficha técnica */}
        <li className="text-thin ">Ficha técnica</li>

        {/* Detalhes */}
        <li className="text-thin ">Detalhes</li>
      </ul>
    </div>
  );
};

export default Aside;

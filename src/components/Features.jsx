import React from "react";

const Features = ({ data }) => {
  const {
    seats,
    motor,
    torque,
    zero_to_hundred,
    fuel,
    max_speed,
    color,
    trunk_space,
    interior,
    traction,
  } = data;
  return (
    <div className=" p-4 md:p-[8rem] rounded-l-[2.5rem] border border-[rgba(0,0,0,.2)] md:w-2/3">
      {/* Ensure Full Width with Grid Layout */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-[5rem]">
        {/* Motor */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            MOTOR
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {motor}
          </span>
        </div>

        {/* CV */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            CV
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            204CV
          </span>
        </div>

        {/* Torque */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            TORQUE
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {torque}
          </span>
        </div>

        {/* Transmissão */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            TRANSMISSÃO
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            AUTOMÁTICA DE 6 VELOCIDADES
          </span>
        </div>

        {/* Tração */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            TRAÇÃO
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {traction}
          </span>
        </div>

        {/* 0-100KM/H */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            0-100KM/H
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {zero_to_hundred}
          </span>
        </div>

        {/* Velocidade Máxima */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            VELOCIDADE MÁXIMA
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {max_speed}
          </span>
        </div>

        {/* Cor */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            COR
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {color}
          </span>
        </div>

        {/* Bancos */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            {interior}
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            COURO CARAMELO
          </span>
        </div>

        {/* Lugares */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            LUGARES
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {seats}
          </span>
        </div>

        {/* Combustível */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            COMBUSTÍVEL
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {fuel}
          </span>
        </div>

        {/* Porta-Malas */}
        <div className="flex flex-col space-y-1 sm:space-y-2 w-full">
          <span className="text-sm sm:text-base md:text-[1.5rem] text-line font-semibold">
            PORTA-MALAS
          </span>
          <span className="text-base sm:text-lg md:text-4xl font-extrabold w-full">
            {trunk_space}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;

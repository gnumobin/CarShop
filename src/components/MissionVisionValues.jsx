import React from "react";

const MissionVisionValues = () => {
  return (
    <section className="py-6 md:py-8 container">
      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Mission */}
        <div className="bg-primary text-white p-[5rem] rounded-[2.5rem] shadow-md">
          <h2 className="text-lg md:text-[3.6rem] font-semibold mb-[3rem]">
            Missão
          </h2>
          <p className="text-sm md:text-4xl text-white font-bold">
            Ser a melhor escolha em automóvel premium e fazer parte dos momentos
            especiais da vida das pessoas.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-primary text-white p-[5rem] rounded-[2.5rem] shadow-md">
          <h2 className="text-lg md:text-[3.6rem] font-semibold mb-[3rem]">
            Visão
          </h2>
          <p className="text-sm md:text-4xl text-white font-bold">
            Ser referência nacional como a empresa mais surpreendente na conexão
            entre pessoas, veículos, bens e serviços afins.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-6 md:mt-8 bg-primary text-white rounded-[2.5rem] shadow-md p-[5rem] bg-custom-2">
        <h2 className="text-lg md:text-[3.6rem] font-semibold mb-[3rem]">
          Valores
        </h2>
        <ul className="list-disc pl-5 text-sm md:text-4xl text-white space-y-5">
          <li>Inspirar pessoas</li>
          <li>Antecipar demandas</li>
          <li>Relacionamento transparente</li>
          <li>Clientes plenamente satisfeitos</li>
          <li>Ajustes éticos constantes</li>
          <li>Sustentabilidade</li>
        </ul>
      </div>
    </section>
  );
};

export default MissionVisionValues;

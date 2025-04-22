import React from "react";
import useFilterStore from "../store/useFilterStore";

const FilterForm = () => {
  // Extract state and actions from the Zustand store
  const { formData, updateField, resetForm } = useFilterStore();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateField(name, type === "checkbox" ? checked : value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Filter Data:", formData);
    // You can add validation or API calls here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border px-[5rem] pt-[3rem] pb-[10rem] rounded-[2.5rem] border-[rgba(0,0,0,.2)] md:w-1/3 md:text-2xl space-y-[2rem]"
    >
      {/* Header */}
      <div className="flex justify-between mb-4">
        <span className="text-primary font-semibold text-xl">MARCAS</span>
        <span className="text-primary font-semibold text-xl">MODELOS</span>
      </div>

      {/* Dropdowns for Marcas and Modelos */}
      <div className="grid grid-cols-1 gap-4 md:gap-[4.5rem] sm:grid-cols-2 items-center">
        <select
          name="marcas"
          value={formData.marcas}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl focus:outline-none focus:border-blue-500 md:text-2xl"
        >
          <option value="Todas">Todas</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
        </select>
        <select
          name="modelos"
          value={formData.modelos}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl focus:outline-none focus:border-blue-500"
        >
          <option value="Todas">Todas</option>
          <option value="Corolla">Corolla</option>
          <option value="Civic">Civic</option>
          <option value="Focus">Focus</option>
        </select>
      </div>

      {/* Header */}
      <div className="flex justify-between mb-4">
        <span className="text-primary font-semibold text-xl">MARCAS</span>
        <span className="text-primary font-semibold text-xl">MODELOS</span>
      </div>

      {/* Dropdowns for Marcas and Modelos */}
      <div className="grid grid-cols-1 gap-4 md:gap-[4.5rem] sm:grid-cols-2 items-center">
        <select
          name="marcas"
          value={formData.marcas}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl focus:outline-none focus:border-blue-500"
        >
          <option value="Todas">Todas</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
        </select>
        <select
          name="modelos"
          value={formData.modelos}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl focus:outline-none focus:border-blue-500"
        >
          <option value="Todas">Todas</option>
          <option value="Corolla">Corolla</option>
          <option value="Civic">Civic</option>
          <option value="Focus">Focus</option>
        </select>
      </div>

      {/* Ano Range */}
      <div className="grid grid-cols-1 gap-4 sm:flex items-center">
        <div>
          <label
            htmlFor="anoInicial"
            className="text-primary font-semibold text-xl block mb-2"
          >
            ANO
          </label>
          <input
            type="number"
            name="anoInicial"
            value={formData.anoInicial}
            onChange={handleChange}
            placeholder="2020"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-gray-500 md:h-full md:mt-8">ATÉ</div>
        <div>
          <label htmlFor="#" className="hidden sm:block">
            &nbsp;
          </label>
          <input
            type="number"
            name="anoFinal"
            value={formData.anoFinal}
            onChange={handleChange}
            placeholder="2025"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Valor Range */}
      <div className="grid grid-cols-1 gap-4 sm:flex items-center">
        <div>
          <label
            htmlFor="valorMinimo"
            className="text-primary font-semibold text-xl block mb-2"
          >
            VALOR
          </label>
          <input
            type="number"
            name="valorMinimo"
            value={formData.valorMinimo}
            onChange={handleChange}
            placeholder="100.000"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-gray-500 md:h-full md:mt-8">ATÉ</div>
        <div>
          <label htmlFor="#" className="hidden sm:block">
            &nbsp;
          </label>
          <input
            type="number"
            name="valorMaximo"
            value={formData.valorMaximo}
            onChange={handleChange}
            placeholder="4.250.000"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Quilometragem Range */}
      <div className="grid grid-cols-1 gap-4 sm:flex items-center">
        <div>
          <label
            htmlFor="quilometragemMinima"
            className="text-primary font-semibold text-xl block mb-2"
          >
            QUILOMETRAGEM
          </label>
          <input
            type="number"
            name="quilometragemMinima"
            value={formData.quilometragemMinima}
            onChange={handleChange}
            placeholder="0km"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-gray-500 md:h-full md:mt-8">ATÉ</div>
        <div>
          <label htmlFor="#" className="hidden sm:block">
            &nbsp;
          </label>
          <input
            type="number"
            name="quilometragemMaxima"
            value={formData.quilometragemMaxima}
            onChange={handleChange}
            placeholder="50.000km"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Clear and Filter Buttons */}
      <div className="mt-[5rem] space-y-[2rem] md:text-4xl">
        <button
          type="button"
          onClick={resetForm}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-[1.5rem] py-[1.6rem] rounded-xl transition duration-300"
        >
          Limpar
        </button>
        <button
          type="submit"
          className="w-full bg-black text-white px-[1.5rem] py-[1.6rem] rounded-xl hover:bg-gray-800 transition duration-300"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
};

export default FilterForm;

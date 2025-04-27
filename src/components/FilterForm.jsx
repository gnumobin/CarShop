import React from "react";
import useFilterStore from "../store/useFilterStore";

const FilterForm = () => {
  // Extract state and actions from the Zustand store
  const { formData, updateField, resetForm } = useFilterStore();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    updateField(name, (type === "checkbox" ? checked : value) || null);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Filter Data:", formData);
    // You can add validation or API calls here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-12 rounded-[2.5rem] border-[rgba(0,0,0,.2)] md:w-1/3 md:min-w-1/3 md:text-2xl space-y-[2rem]"
    >
      {/* Header */}
      <div className="flex justify-between mb-4">
        <span className="text-primary font-semibold text-xl">MARCA</span>
        <span className="text-primary font-semibold text-xl">MODELO</span>
      </div>

      {/* Dropdowns for Make and Model */}
      <div className="grid grid-cols-1 gap-4 md:gap-[4.5rem] sm:grid-cols-2 items-center">
        <select
          name="make"
          value={formData.make}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl focus:outline-none focus:border-blue-500 md:text-2xl"
        >
          <option value="">-- Todas --</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>
        </select>
        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl focus:outline-none focus:border-blue-500"
        >
          <option value="">-- Todos --</option>
          <option value="Corolla">Corolla</option>
          <option value="Civic">Civic</option>
          <option value="Focus">Focus</option>
        </select>
      </div>

      {/* Motor Type */}
      <div className="mb-4">
        <label
          htmlFor="motor"
          className="text-primary font-semibold text-xl block mb-2"
        >
          MOTORIZAÇÃO
        </label>
        <select
          name="motor"
          value={formData.motor}
          onChange={handleChange}
          className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
        >
          <option value="">-- Todos --</option>
          <option value="V6">V6</option>
          <option value="V8">V8</option>
          <option value="Electric Motor">Motor Elétrico</option>
        </select>
      </div>

      {/* Checkboxes for Electric and Bulletproof */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_electric"
            name="is_electric"
            checked={formData.is_electric}
            onChange={handleChange}
            className="w-5 h-5 mr-2"
          />
          <label htmlFor="is_electric" className="text-primary font-semibold">
            ELÉTRICO
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_bulletproof"
            name="is_bulletproof"
            checked={formData.is_bulletproof}
            onChange={handleChange}
            className="w-5 h-5 mr-2"
          />
          <label
            htmlFor="is_bulletproof"
            className="text-primary font-semibold"
          >
            BLINDADO
          </label>
        </div>
      </div>

      {/* Year Range */}
      <div className="grid grid-cols-1 gap-4 sm:flex items-center">
        <div>
          <label
            htmlFor="min_year"
            className="text-primary font-semibold text-xl block mb-2"
          >
            ANO
          </label>
          <input
            type="number"
            name="min_year"
            value={formData.min_year}
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
            name="max_year"
            value={formData.max_year}
            onChange={handleChange}
            placeholder="2025"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Price Range */}
      <div className="grid grid-cols-1 gap-4 sm:flex items-center">
        <div>
          <label
            htmlFor="min_price"
            className="text-primary font-semibold text-xl block mb-2"
          >
            VALOR
          </label>
          <input
            type="number"
            name="min_price"
            value={formData.min_price}
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
            name="max_price"
            value={formData.max_price}
            onChange={handleChange}
            placeholder="4.250.000"
            className="border border-thin px-[1.5rem] py-[.8rem] rounded-xl w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Speed Range */}
      <div className="grid grid-cols-1 gap-4 sm:flex items-center">
        <div>
          <label
            htmlFor="min_speed"
            className="text-primary font-semibold text-xl block mb-2"
          >
            VELOCIDADE
          </label>
          <input
            type="number"
            name="min_speed"
            value={formData.min_speed}
            onChange={handleChange}
            placeholder="0 km/h"
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
            name="max_speed"
            value={formData.max_speed}
            onChange={handleChange}
            placeholder="300 km/h"
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

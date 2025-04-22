import { create } from "zustand";

// Define the Zustand store for the filter form
const useFilterStore = create((set) => ({
  // Initial state
  formData: {
    marcas: "Todas",
    modelos: "Todas",
    blindado: false,
    motorizacao: "Todas",
    anoInicial: "",
    anoFinal: "",
    valorMinimo: "",
    valorMaximo: "",
    quilometragemMinima: "",
    quilometragemMaxima: "",
  },

  // Action to update form fields
  updateField: (name, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [name]: value,
      },
    })),

  // Action to reset the form
  resetForm: () =>
    set(() => ({
      formData: {
        marcas: "Todas",
        modelos: "Todas",
        blindado: false,
        motorizacao: "Todas",
        anoInicial: "",
        anoFinal: "",
        valorMinimo: "",
        valorMaximo: "",
        quilometragemMinima: "",
        quilometragemMaxima: "",
      },
    })),
}));

export default useFilterStore;
import { create } from "zustand";

const initialState = {
  make: null,
  model: null,
  is_bulletproof: null,
  motor: null,
  min_year: null,
  max_year: null,
  min_price: null,
  max_price: null,
  min_speed: null,
  max_speed: null,
  is_electric: null,
};

// Define the Zustand store for the filter form
const useFilterStore = create((set) => ({
  // Initial state
  formData: { ...initialState },

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
      formData: { ...initialState },
    })),
}));

export default useFilterStore;

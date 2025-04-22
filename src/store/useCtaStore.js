'use strict';

import { create } from "zustand";

// Define the Zustand store
const useCtaStore = create((set) => ({
  // Initial state
  formData: {
    modelo: "",
    nome: "",
    email: "",
    numero: "",
    acceptTerms: false,
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
        modelo: "",
        nome: "",
        email: "",
        numero: "",
        acceptTerms: false,
      },
    })),
}));

export default useCtaStore;
'use strict';

import { create } from "zustand";

// Define the Zustand store for the mobile menu
const useMenuStore = create((set) => ({
  // Initial state
  isMenuOpen: false,

  // Action to toggle the menu
  toggleMenu: () =>
    set((state) => ({
      isMenuOpen: !state.isMenuOpen,
    })),

  // Action to close the menu
  closeMenu: () =>
    set(() => ({
      isMenuOpen: false,
    })),
}));

export default useMenuStore;
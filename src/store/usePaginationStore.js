import { create } from "zustand";

const usePaginationStore = create((set) => ({
  // Initial state
  currentPage: 1,
  totalPages: 1,

  // Action to update the current page
  setCurrentPage: (newPage) =>
    set((state) => {
      if (newPage >= 1 && newPage <= state.totalPages) {
        return { currentPage: newPage };
      }
      return null; // Do nothing if the new page is out of bounds
    }),

  // Action to update the total pages
  setTotalPages: (totalPages) => set({ totalPages }),

  // Action to reset the pagination state
  resetPagination: () =>
    set(() => ({
      currentPage: 1,
      totalPages: 1,
    })),
}));

export default usePaginationStore;
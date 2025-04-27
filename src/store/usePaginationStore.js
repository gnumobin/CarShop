import { create } from "zustand";

const initialState = {
  currentPage: 1,
  totalPages: 1,
};

const usePaginationStore = create((set) => ({
  ...initialState,

  // Action to update the current page
  setCurrentPage: (newPage) =>
    set((state) => {
      if (newPage >= 1 && newPage <= state.totalPages) {
        return { currentPage: newPage };
      }
      return initialState.currentPage; // Do nothing if the new page is out of bounds
    }),

  // Action to update the total pages
  setTotalPages: (totalPages) => set({ totalPages: totalPages || 1 }),

  // Action to reset the pagination state
  resetPagination: () => set(() => ({ ...initialState })),
}));

export default usePaginationStore;

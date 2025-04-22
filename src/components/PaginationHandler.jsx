import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import usePaginationStore from "../store/usePaginationStore";
import { fetchPaginationData } from "../conf/api";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PaginationHandler = () => {
  // Extract state and actions from the Zustand store
  const { currentPage, totalPages, setCurrentPage } = usePaginationStore();

  // Fetch pagination data using TanStack Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["pagination"], // Unique key for the query
    queryFn: fetchPaginationData, // API function
    refetchOnWindowFocus: false, // Prevent unnecessary refetching
  });

  // Handle page change
  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= (data?.totalPages || totalPages)) {
      setCurrentPage(newPage);
    }
  };

  // Previous Page Button
  const handlePrevPage = () => {
    handleChangePage(currentPage - 1);
  };

  // Next Page Button
  const handleNextPage = () => {
    handleChangePage(currentPage + 1);
  };

  // Loading State
  if (isLoading) {
    return <div className="text-gray-500">Carregando...</div>;
  }

  // Error State
  if (isError) {
    return (
      <div className="text-red-500">
        Erro ao carregar dados: {error.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 mt-[5rem] justify-center text-4xl open-sans text-line">
      <div className="bg-forground px-[1.8rem] py-[1.35rem] rounded-[2.5rem] flex items-center gap-[2.5rem]">
        {/* Current Page Info */}
        <span className="text-gray-500">
          Página <strong className="text-primary">{currentPage}</strong> de{" "}
          <strong>{data?.totalPages || totalPages}</strong>
        </span>

        {/* Navigation Buttons */}
        <div className="flex space-x-2 text-[3rem]">
          {/* Previous Page Button */}
          <button
            className=" border-gray-300 px-2 py-1 rounded hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          {/* Next Page Button */}
          <button
            className=" border-gray-300 px-2 py-1 rounded hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNextPage}
            disabled={currentPage === (data?.totalPages || totalPages)}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationHandler;

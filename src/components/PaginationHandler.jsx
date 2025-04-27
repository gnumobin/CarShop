import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import usePaginationStore from "../store/usePaginationStore";

const PaginationHandler = () => {
  // Extract state and actions from the Zustand store
  const { currentPage, totalPages, setCurrentPage } = usePaginationStore();

  console.log(totalPages);

  // Handle page change
  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  // Previous Page Button
  const handlePrevPage = () => {
    handleChangePage(currentPage - 1);
  };

  // Next Page Button
  const handleNextPage = () => {
    handleChangePage(currentPage + 1);
  };

  return (
    <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 justify-center text-4xl open-sans mt-[5.2rem]">
      <div className="flex gap-[2.5rem] items-center justify-between bg-forground px-[1.8rem] py-[1.35rem] rounded-[2.5rem]">
        <span className="text-line">
          Página <strong className="text-primary">{currentPage}</strong> de{" "}
          <strong>{totalPages}</strong>
        </span>
        <div className="flex space-x-2 text-5xl">
          <button
            className=" px-2 py-1 rounded hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed mr-[2.5rem]"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <FaChevronLeft />
          </button>
          <button
            className="px-2 py-1 rounded hover:bg-gray-100 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginationHandler;

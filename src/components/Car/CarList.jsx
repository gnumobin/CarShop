import CarCard from "./CarCard";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCarData } from "../../conf/api";
import usePaginationStore from "../../store/usePaginationStore";
import PaginationHandler from "../PaginationHandler";
import Loading from '../../assets/img/loading.gif'

const CarList = () => {
  // Extract state and actions from the Zustand store
  const { currentPage, totalPages, setCurrentPage, setTotalPages } =
    usePaginationStore();

  // Fetch car data using TanStack Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cars", currentPage], // Include currentPage in the query key
    queryFn: () => fetchCarData({ page: currentPage, limit: 9 }), // Fetch 10 items per page
  });

  // Log the fetched data for debugging
  console.log("Fetched Data:", data);

  // Update total pages when data is fetched
  useEffect(() => {
    if (data?.totalPages) {
      setTotalPages(data.totalPages);
    }
  }, [data?.totalPages, setTotalPages]);

  // Loading State
  if (isLoading) {
    return <div className="flex justify-center w-full text-center">
      <img src={Loading} alt="loading effect" />
    </div>;
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
    <div>
      {/* Car List */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data?.cars?.map((car) => (<CarCard car={car} key={car.id}/>))}
      </div>

      {/* Pagination Handler */}
      <PaginationHandler />
    </div>
  );
};

export default CarList;

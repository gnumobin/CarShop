import CarCard from "./CarCard";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCarData } from "../../conf/api";
import usePaginationStore from "../../store/usePaginationStore";
import PaginationHandler from "../PaginationHandler";
import Loading from "../../assets/img/loading.gif";
import useFilterStore from "../../store/useFilterStore";

const CarList = () => {
  // Extract state and actions from the Zustand store
  const { currentPage, setTotalPages } = usePaginationStore();

  const { formData } = useFilterStore();

  // Fetch car data using TanStack Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["cars", currentPage, formData],
    queryFn: () => fetchCarData({ page: currentPage, limit: 10, ...formData }),
  });

  // Update total pages when data is fetched
  useEffect(() => {
    if (typeof data?.totalPages === "number") {
      setTotalPages(data.totalPages);
    }
  }, [data?.totalPages, setTotalPages]);

  // Loading State
  if (isLoading) {
    return (
      <div className="flex justify-center w-full text-center">
        <img src={Loading} alt="loading effect" />
      </div>
    );
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
    <div className="grow">
      {/* Car List */}
      {data?.cars && data.cars.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.cars.map((car) => (
            <CarCard car={car} key={car.id} />
          ))}
        </div>
      ) : (
        // show no result message if no cars are found
        <p className="text-center text-2xl text-amber-500 p-6 border border-amber-500 bg-amber-500/30 rounded-xl w-full my-12">
          Nenhum carro encontrado
        </p>
      )}

      {/* Pagination Handler */}
      <PaginationHandler />
    </div>
  );
};

export default CarList;

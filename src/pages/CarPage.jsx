import { useParams } from "react-router";
import Aside from "../components/Aside";
import Description from "../components/Description";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";
import { fetchCarDetailsById } from "../conf/api";
import { useQuery } from "@tanstack/react-query";
import CtaForm from "../components/CtaForm";
import Loading from '../assets/img/loading.gif'

function CarPage() {
  // Extract the car ID from the URL
  const { id } = useParams();

  // Fetch car details using TanStack Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["carDetails", id], // Include car ID in the query key
    queryFn: () => fetchCarDetailsById(id),
  });

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center w-full text-center">
        <img src={Loading} alt="loading effect" />
      </div>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <div className="text-red-500">
        Erro ao carregar dados: {error.message}
      </div>
    );
  }

  // Handle no data state
  if (!data) {
    return <div className="text-gray-500">Carro não encontrado.</div>;
  }

  // Extract car details
  const { make, name, images } = data;

  return (
    <div>
      <HeroSection data={data} />
      <div className="flex flex-col md:flex-row justify-between pl-[1rem] sm:pl-[2.5rem] pb-[5rem] sm:pb-[20rem]">
        <Aside brand={make} model={name} />
        <ImageSlider images={images} />
      </div>
      <div className="flex flex-col md:flex-row justify-between pl-[1rem] sm:pl-[2.5rem] pb-[5rem] sm:pb-[20rem]">
        <Aside brand={make} model={name} />
        <Features data={data} />
      </div>
      <div className="flex flex-col md:flex-row justify-between pl-[1rem] sm:pl-[2.5rem] pb-[5rem] sm:pb-[20rem]">
        <Aside brand={make} model={name} />
        <Description />
      </div>

      <CtaForm />
    </div>
  );
}

export default CarPage;

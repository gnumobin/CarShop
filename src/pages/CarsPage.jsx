import CarList from "../components/Car/CarList";
import FilterForm from "../components/FilterForm";

function CarsPage() {
  return (
    <>
      <h1 className="container text-5xl md:text-[4.2rem] font-semibold text-primary my-[4rem] md:my-[8rem] text-center md:text-left">
        Nossos modelos
      </h1>
      <div className="md:flex items-start gap-[3rem] container mb-[10rem] space-y-10 ">
        <FilterForm />
        <CarList />
      </div>
    </>
  );
}

export default CarsPage;

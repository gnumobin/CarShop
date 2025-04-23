import CarList from "../components/Car/CarList";
import FilterForm from "../components/FilterForm";

function HomePage() {
  return (
    <>
      <h1 className="container text-5xl md:text-[4.2rem] font-semibold text-primary my-[4rem] md:my-[8rem] text-center md:text-left">
        Nossos modelos
      </h1>
      <div className="md:flex items-start lg:gap-[3rem] container mb-[10rem] space-y-10 px-16 md:px-0">
        <FilterForm />
        <CarList />
      </div>
    </>
  );
}

export default HomePage;

import Pic from "../assets/img/main.png";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const HomeHero = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto md:pl-[6rem] flex flex-col-reverse md:flex-row items-center justify-between gap-[1rem]">
        {/* Left Side (Text and Button) */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl xl:text-[7.5rem] font-extrabold leading-tight mb-4">
            Qualidade, Segurança, Transparência.
          </h1>
          <button className="bg-primary text-white hover:bg-gray-500 md:text-[2.3rem] font-semibold hover:text-white py-[.8rem] px-[2rem] border border-gray-500 hover:border-transparent rounded-full flex items-center gap-3 mt-[3rem] mx-auto md:mx-0">
            Acessar estoque completo <FaChevronRight size={25} />
          </button>
        </div>

        {/* Right Side (Car Image) */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={Pic}
            alt="Car Image"
            className="w-full h-95 md:h-160 object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center text-[4.8rem] text-line mt-[3rem]">
        <FaChevronDown />
      </div>
    </section>
  );
};

export default HomeHero;

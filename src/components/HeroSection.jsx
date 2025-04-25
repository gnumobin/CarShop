import { FaChevronDown } from "react-icons/fa";

const HeroSection = ({data}) => {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row items-center justify-between sm:pl-[5.5rem] pt-20 px-10 xl:pt-0 mt-20 xl:mt-0">
        {/* Left Side - Text Information */}
        <div className="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg sm:text-[2.4rem] font-extrabold uppercase mb-[1rem] text-line tracking-widest">
            {data.make}
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-[4rem] font-extrabold mb-[5rem] tracking-wider">
            {data.name}
          </h1>
          <div className="flex justify-center md:justify-stretch gap-[3rem] items-center mb-[4.4rem]">
            {/* Ano */}
            <div className="space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-line text-2xl font-semibold">Ano</p>
              <p className="text-[2.4rem] font-extrabold">{data.year}</p>
            </div>

            {/* Km */}
            <div className="space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-line text-2xl font-semibold">Km</p>
              <p className="text-[2.4rem] font-extrabold">{data.max_speed}</p>
            </div>
          </div>
          <p className="text-xl sm:text-2xl lg:text-[3.2rem] font-semibold mb-[5rem] flex items-center gap-2 justify-center md:justify-stretch">
            <span className="text-line text-4xl">R$</span> {data.price}
          </p>
          <button className="bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 text-sm sm:text-base md:text-4xl font-medium py-[1.5rem] px-[3rem]">
            Entrar em contato
          </button>
        </div>

        {/* Right Side - Car Image */}
        <div className="w-full md:w-1/2 lg:w-7/12 relative">
          <img
            src={data.main_image}
            alt="Toyota SW4 Diamond"
            className="w-full h-[20rem] md:h-[45rem]  rounded-2xl object-cover"
          />
        </div>
      </div>
      <div className="text-line flex justify-center mt-[5rem] mb-[5rem] sm:mb-[20rem]">
        <FaChevronDown size={48} />
      </div>
    </section>
  );
};

export default HeroSection;

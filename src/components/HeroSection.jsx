import Pic from "../assets/img/car2.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 lg:p-16 bg-white">
      {/* Left Side - Text Information */}
      <div className="w-full md:w-1/2 lg:w-5/12 mb-6 md:mb-0 text-center md:text-left">
        <h2 className="text-lg sm:text-[2.4rem] font-extrabold uppercase mb-[1rem] text-line tracking-widest">
          Toyota
        </h2>
        <h1 className="text-2xl sm:text-3xl md:text-[4rem] font-extrabold mb-[5rem] tracking-wider">
          SW4 Diamond
        </h1>
        <div className="flex flex-col md:flex-row gap-[3rem] items-center mb-[3rem]">
          {/* Ano */}
          <div className="space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-line text-2xl font-semibold">Ano</p>
            <p className="text-[2.4rem] font-extrabold">2024/24</p>
          </div>

          {/* Km */}
          <div className="space-y-2 md:space-y-0 md:space-x-4">
            <p className="text-line text-2xl font-semibold">Km</p>
            <p className="text-[2.4rem] font-extrabold">7.587</p>
          </div>
        </div>
        <p className="text-xl sm:text-2xl lg:text-[3.2rem] font-semibold mb-[5rem] flex items-center gap-2 justify-center sm:justify-stretch">
          <span className="text-line text-4xl">R$</span> 390.000,00
        </p>
        <button className="bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 text-sm sm:text-base md:text-4xl font-medium py-[1.5rem] px-[3rem]">
          Entrar em contato
        </button>
      </div>

      {/* Right Side - Car Image */}
      <div className="w-full md:w-1/2 lg:w-7/12 relative translate-x-20">
        <img
          src={Pic}
          alt="Toyota SW4 Diamond"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;

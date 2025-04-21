import {
  FaArrowRight,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import Logo from "/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-[1.9rem] text-primary font-[500]">
      {/* Main Container */}
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between gap-25">
        {/* Left Column */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left space-y-[20px]">
          <div className="flex items-center justify-center md:justify-start">
            <img src={Logo} alt="website logo" />
          </div>
          <p>Qualidade, Segurança, Transparência.</p>
          <div className="flex justify-center md:justify-start space-x-[6.6rem] mt-[30px] text-[2.4rem]">
            <a href="#" className="hover:text-gray-800">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Middle Column */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-[3.2rem]">
          <h3 className="text-lg font-bold text-[2rem]">Contato</h3>
          <p>
            <a href="#">WhatsApp</a>
          </p>
          <p>
            <a href="#">contato@touringcars.com.br</a>
          </p>
          <p>
            <a href="#">(81) 3512-9411</a>
          </p>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/3 text-center md:text-left space-y-[3.8rem]">
          <h3 className="text-lg font-bold text-[2rem]">Inscreva-se</h3>
          <p>
            Informe seu email para receber as últimas novidades da Touring Cars.
          </p>
          <form className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-[2rem]">
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 p-4 rounded-2xl w-full md:w-1/2 text-[1.8rem]"
            />
            <button
              type="submit"
              className="bg-black text-white rounded-2xl w-full md:w-1/5 p-5 flex justify-center"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-[5rem] md:mt-[10rem] text-center text-[1.8rem] text-gray-600">
        <p>© 2024 Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;

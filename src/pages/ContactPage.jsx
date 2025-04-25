import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import Pic from "../assets/img/contact.png";
import { HiOutlineMail } from "react-icons/hi";
import CtaForm from "../components/CtaForm";

const ContactPage = () => {
  return (
    <>
      <section className="py-6 md:py-8 md:pb-[10rem]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Left Side (Contact Options) */}
          <div className="w-full md:w-1/3 space-y-4">
            <h2 className="text-3-5xl md:text-xl lg:text-[4.2rem] font-semibold mb-[6rem]">
              Contato
            </h2>
            <div className="space-y-[2.5rem]">
              {/* Fale Conosco Button */}
              <button className="bg-primary text-white p-[2rem] rounded-[2.5rem] hover:bg-gray-800 transition duration-300 w-full flex items-center gap-[2rem] text-4xl">
                <FaPhone />
                Fale conosco
              </button>

              {/* Enviar um email Button */}
              <button className="bg-primary text-white p-[2rem] rounded-[2.5rem] hover:bg-gray-800 transition duration-300 w-full flex items-center gap-[2rem] text-4xl">
                <HiOutlineMail />
                Enviar um email
              </button>

              {/* WhatsApp Button */}
              <button className="bg-primary text-white p-[2rem] rounded-[2.5rem] hover:bg-gray-800 transition duration-300 w-full flex items-center gap-[2rem] text-4xl">
                <FaWhatsapp />
                WhatsApp
              </button>

              {/* Instagram Button */}
              <button className="bg-primary text-white p-[2rem] rounded-[2.5rem] hover:bg-gray-800 transition duration-300 w-full flex items-center gap-[2rem] text-4xl">
                <FaInstagram />
                Instagram
              </button>
            </div>
          </div>

          {/* Right Side (Car Image) */}
          <div className="w-full md:w-2/3 mt-10 md:mt-35">
            <img
              src={Pic}
              alt="BMW Car"
              className="w-full h-full object-cover md:translate-x-[25%]"
            />
          </div>
        </div>
      </section>
      <CtaForm />
    </>
  );
};

export default ContactPage;

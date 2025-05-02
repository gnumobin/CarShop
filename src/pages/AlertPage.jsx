import Pic from "../assets/img/alert.png";
import CtaForm from "../components/CtaForm";
import MissionVisionValues from "../components/MissionVisionValues";

const AlertPage = () => {
  return (
    <>
      <section className=" py-6 md:py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Left Side (Description) */}
          <div className="w-full md:w-1/2 space-y-4 bg-forground p-[5rem] rounded-[2.5rem]">
            <h2 className="text-lg md:text-[3.6rem] font-semibold mb-[3rem]">
              Sobre nós
            </h2>
            <p className="text-sm md:text-4xl text-primary text-justify mb-14">
              A Touring Cars é especializada, principalmente, na venda de
              veículos de luxo e supersportivos. Com segurança, transparência e
              qualidade, nossos veículos são verificados e certificados para
              garantir ao cliente uma compra completamente segura.
            </p>
            <p className="text-sm md:text-4xl text-primary text-justify mb-14">
              Oferecemos exemplares especiais e exclusivos, além de um amplo
              estoque renovado diariamente para oferecer a melhor experiência e
              um alto padrão de qualidade.
            </p>
            <p className="text-sm md:text-4xl text-primary text-justify mb-14">
              Contamos com Detail Center, trata própria para entrega em todo o
              Brasil, além de um show room premium dedicado aos carros
              supersportivos, especiais, personalizados e exclusivos.
            </p>
            <p className="text-sm md:text-4xl text-primary text-justify mb-14">
              A Touring Cars se orgulha de firmar parcerias com os melhores
              fornecedores, lojas e centros técnicos do mundo, para juntos
              desenhar uma das melhores estruturas de comércio de carros de luxo
              no país.
            </p>
          </div>

          {/* Right Side (Car Image) */}
          <div className="w-full md:w-1/2 bg-forground rounded-[2.5rem] h-330 overflow-hidden">
            <img
              src={Pic}
              alt="Porsche Car"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <MissionVisionValues />
      </section>
      <CtaForm />
    </>
  );
};

export default AlertPage;

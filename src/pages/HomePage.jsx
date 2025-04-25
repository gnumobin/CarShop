import FeaturedCar from "../components/FeaturedCar";
import HomeHero from "../components/HomeHero";
import ModelCars from "../components/ModelCars";
// assets
import ModelPic1 from "../assets/img/models/1.jpg";
import ModelPic2 from "../assets/img/models/2.jpg";
import ModelPic3 from "../assets/img/models/3.jpg";
// assets
import VendasPic1 from "../assets/img/vendas/1.jpg";
import VendasPic2 from "../assets/img/vendas/2.jpg";
import VendasPic3 from "../assets/img/vendas/3.jpg";

import { FaCheck, FaChevronRight } from "react-icons/fa";
import CtaForm from "../components/CtaForm";

function HomePage() {
  const pictures = [
    {
      src: ModelPic1,
      link: "A combustão",
      icon: <FaChevronRight />,
    },
    {
      src: ModelPic2,
      link: "Híbrido",
      icon: <FaChevronRight />,
    },
    {
      src: ModelPic3,
      link: "Elétrico",
      icon: <FaChevronRight />,
    },
  ];

  const vendas = [
    {
      src: VendasPic1,
      link: "Ram 1500",
      icon: <FaCheck />,
    },
    {
      src: VendasPic2,
      link: "Toyota SW4",
      icon: <FaCheck />,
    },
    {
      src: VendasPic3,
      link: "Sea-Doo Gti",
      icon: <FaCheck />,
    },
  ];
  return (
    <div>
      <HomeHero />
      <ModelCars pictures={pictures} title={"Modelos"} />
      <CtaForm />
      <FeaturedCar />
      <ModelCars pictures={vendas} title={"Últimas vendas"} />
    </div>
  );
}

export default HomePage;

import Aside from "../components/Aside";
import Description from "../components/Description";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";

function CarPage() {
  return (
    <div>
      <HeroSection />
      <div className="grid grid-cols-2 container justify-between">
        <Aside />
        <Description />
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <Aside />
        <Features />
      </div>
    </div>
  );
}

export default CarPage;

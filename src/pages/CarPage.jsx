import Aside from "../components/Aside";
import Description from "../components/Description";
import HeroSection from "../components/HeroSection";

function CarPage() {
  return (
    <div>
      <HeroSection />
      <div className="grid grid-cols-2 container justify-between">
        <Aside />
        <Description />
      </div>
    </div>
  );
}

export default CarPage;

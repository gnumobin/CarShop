import Aside from "../components/Aside";
import Description from "../components/Description";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import ImageSlider from "../components/ImageSlider";

function CarPage() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col md:flex-row justify-between pl-[1rem] sm:pl-[2.5rem] pb-[5rem] sm:pb-[20rem]">
        <Aside />
        <ImageSlider />
      </div>
      <div className="flex flex-col md:flex-row justify-between pl-[1rem] sm:pl-[2.5rem] pb-[5rem] sm:pb-[20rem]">
        <Aside />
        <Features />
      </div>
      <div className="flex flex-col md:flex-row justify-between pl-[1rem] sm:pl-[2.5rem] pb-[5rem] sm:pb-[20rem]">
        <Aside />
        <Description />
      </div>
    </div>
  );
}

export default CarPage;

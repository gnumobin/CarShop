import FeaturedCar from "../components/FeaturedCar"
import HomeHero from "../components/HomeHero"
import ModelCars from "../components/ModelCars"

function HomePage() {
  return (
    <div>
        <HomeHero />
        <ModelCars />
        <FeaturedCar />
    </div>
  )
}

export default HomePage
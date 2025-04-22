import { FaChevronRight } from "react-icons/fa";
import Pic from "../../assets/img/car.png";
import Button from "../../utils/Button";

const CarCard = ({ car }) => {
  return (
    <div className="border border-line-super-light rounded-[2.5rem] overflow-hidden p-[2rem] pb-0">
      {/* Car Image */}
      <img
        src={Pic}
        alt={car.model}
        className="w-full h-48 sm:h-64 object-cover rounded-[1.5rem] mb-[3rem]"
      />

      {/* Car Details */}
      <div className="p-4 space-y-[2.6rem]">
        {/* Make and Model */}
        <h3 className="text-2xl font-extrabold mb-2 sm:text-2xl text-black">
          {car.make} {car.model}
        </h3>
        <p className="text-line text-sm sm:text-xl font-semibold">
          {car.year} | {car.mileage} km
        </p>

        {/* Price */}
        <p className=" font-semibold mt-2">
          <span className="text-md font-semibold text-line mr-1">R$</span>
          <span className="text-4xl font-extrabold tracking-custom">
            {car.price}
          </span>
        </p>

        {/* Action Button */}
        <div className="mt-4 flex justify-between gap-4">
          <button className="bg-transparent text-line hover:bg-blue-500 hover:text-white py-2 rounded transition duration-300 text-4xl font-normal">
            <FaChevronRight />
          </button>

          <div className="flex gap-2">
            {/* Blindado Button */}
            <Button text="BLINDADO" variant="blindado" />

            {/* Hibrido Button */}
            <Button text="HÍBRIDO" variant="hibrido" />

            {/* Eletrico Button */}
            <Button text="ELÉTRICO" variant="eletrico" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Import required modules
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Pic from "../assets/img/gallery.png";

const ImageSlider = ({images}) => {
  // Sample images for demonstration

  console.log(images)

  return (
    <div className="md:w-2/3 relative mb-[15rem]">
      {/* Swiper Container */}
      <Swiper
        spaceBetween={10} // Space between slides
        slidesPerView={1.05} // Number of slides visible at a time
        loop={true} // Enable infinite looping
        navigation={{
          nextEl: ".swiper-button-next", // Next button selector
          prevEl: ".swiper-button-prev", // Previous button selector
        }}
        modules={[Navigation]} // Attach required modules
        className="mySwiper"
      >
        {/* Slides */}
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={image.image_url}
              alt={`Image ${idx + 1}`}
              className="w-full h-full object-cover rounded-[1.5rem]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="translate-y-[3rem] flex left-1/2 -translate-x-1/2 px-4 bg-forground absolute items-center w-1/4 md:p-[2rem_4rem] open-sans text-4xl justify-between rounded-[2.5rem]">
        <p className="font-semibold text-4xl">
          1<span className="font-normal text-line text-2xl">/2</span>
        </p>
        {/* Previous Button */}
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 swiper-button-prev">
          <FaChevronLeft size={30} />
        </button>
        {/* Next Button */}
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition duration-300 swiper-button-next">
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

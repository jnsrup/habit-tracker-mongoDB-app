// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from "swiper/modules";
import { FaJoint, FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg"
import slider3 from "../../assets/slider-3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FiLogIn } from "react-icons/fi";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      //   navigation
      //   pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      className="swiper-1">
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${slider1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            
          }}
          className="py-20 md:py-50 pl-4 md:pl-10 lg:pl-25 text-start space-y-3 ">
          <h1 className=" text-xl md:text-4xl text-white font-bold ">
            Build Better Habits{" "}
          </h1>
          <p className="text-sm md:text-xl text-gray-200 font-medium">
           Track your daily routines and stay motivated every day.
          </p>
          <button className="btn btn-secondary">
            {" "}
            <FiLogIn />
            Join Now
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${slider2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-20 md:py-50 pl-4 md:pl-10 lg:pl-25 text-start space-y-3 ">
          <h1 className=" text-xl md:text-4xl text-white font-bold ">
            Achieve Your Goals
          </h1>
          <p className="text-sm md:text-xl text-gray-200 font-medium">
            Build a routine that leads to success every day.
          </p>
          <button className="btn btn-accent ">
            {" "}
             <FiLogIn />
            Join Now
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            backgroundImage: `url(${slider3})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-20 md:py-50 pl-4 md:pl-10 lg:pl-25 text-start space-y-3 ">
          <h1 className=" text-xl md:text-4xl text-white font-bold ">
            Organize Your Life{" "}
          </h1>
          <p className="text-sm md:text-xl text-gray-200 font-medium">
            Create custom habits and improve your productivity effortlessly.
          </p>
          <button className="btn btn-secondary">
            {" "}
             <FiLogIn />
            Join Now
          </button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;

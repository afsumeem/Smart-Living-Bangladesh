import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{ delay: 3000 }}
        className="mySwiper w-[100%] overflow-visible"
      >
        <SwiperSlide>
          <div className="background-div bg-cover rounded-3xl w-[100%] mx-auto grid grid-cols-1 gap-5">
            {/* content */}

            <div className="shadow-2xl bg-white rounded-xl  relative mb-5">
              <div
                className="overflow-hidden bg-black bg-cover w-full h-[500px]"
                style={{ backgroundImage: `url(/banner.png)` }}
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-div bg-cover rounded-3xl w-[100%] mx-auto grid grid-cols-1 gap-5">
            {/* content */}

            <div className="shadow-2xl bg-white rounded-xl  relative mb-5">
              <div
                className="overflow-hidden bg-black bg-cover w-full h-[500px]"
                style={{ backgroundImage: `url(/banner.png)` }}
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-div bg-cover rounded-3xl w-[100%] mx-auto grid grid-cols-1 gap-5">
            {/* content */}

            <div className="shadow-2xl bg-white rounded-xl  relative mb-5">
              <div
                className="overflow-hidden bg-black bg-cover w-full h-[500px]"
                style={{ backgroundImage: `url(/banner.png)` }}
              ></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-div bg-cover rounded-3xl w-[100%] mx-auto grid grid-cols-1 gap-5">
            {/* content */}

            <div className="shadow-2xl bg-white rounded-xl  relative mb-5">
              <div
                className="overflow-hidden bg-black bg-cover w-full h-[500px]"
                style={{ backgroundImage: `url(/banner.png)` }}
              ></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

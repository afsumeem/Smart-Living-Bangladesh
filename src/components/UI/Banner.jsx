import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className=" px-5 pt-5 ">
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView="auto"
        autoplay={{ delay: 4000 }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper w-[100%] overflow-visible block mx-auto rounded-2xl"
      >
        <SwiperSlide>
          <div className="background-div bg-cover w-[100%] mx-auto grid grid-cols-1 gap-5 rounded-2xl">
            {/* content */}

            <div className="shadow-2xl rounded-2xl bg-black   relative ">
              <div
                className="overflow-hidden  bg-cover w-full h-[600px] rounded-2xl banner-bg"
                // style={{
                //   background:
                //     "linear-gradient(90deg, rgba(0,53,148,1) 1%, rgba(115,180,208,1) 97%)",

                // }}
              >
                {" "}
                <p className="absolute left-16 bottom-36 text-6xl text-white font-light">
                  Smart Homes for <br /> Smarter Bangladesh
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-div bg-cover w-[100%] mx-auto grid grid-cols-1 gap-5 rounded-2xl">
            {/* content */}

            <div className="shadow-2xl rounded-2xl bg-black   relative ">
              <div
                className="overflow-hidden  bg-cover w-full h-[600px] rounded-2xl banner-bg"
                // style={{
                //   background:
                //     "linear-gradient(90deg, rgba(0,53,148,1) 1%, rgba(115,180,208,1) 97%)",

                // }}
              >
                {" "}
                <p className="absolute left-16 bottom-36 text-6xl text-white font-light">
                  Smart Homes for <br /> Smarter Bangladesh
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="background-div bg-cover w-[100%] mx-auto grid grid-cols-1 gap-5 rounded-2xl">
            {/* content */}

            <div className="shadow-2xl rounded-2xl bg-black   relative ">
              <div
                className="overflow-hidden  bg-cover w-full h-[600px] rounded-2xl banner-bg"
                // style={{
                //   background:
                //     "linear-gradient(90deg, rgba(0,53,148,1) 1%, rgba(115,180,208,1) 97%)",

                // }}
              >
                {" "}
                <p className="absolute left-16 bottom-36 text-6xl text-white font-light">
                  Smart Homes for <br /> Smarter Bangladesh
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="background-div bg-cover w-[100%] mx-auto grid grid-cols-1 gap-5 rounded-2xl">
          

            <div className="shadow-2xl bg-white relative rounded-2xl">
              <div
                className="overflow-hidden bg-black bg-cover w-full h-[620px] rounded-2xl"
                style={{ backgroundImage: `url(/banner-4.jpg)` }}
              ></div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import foto from "../../assets/aaaaaa.jpeg";
import useIsMobile from "../../hooks/useIsMobile";
import "../../index.css";

// import required modules

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Testimonial() {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="max-sm:text-[16px] max-sm:py-2 bg-[#F6D0B9] text-center text-[48px] text-[#4A335F] font-syne font-bold py-5">
        Apa Kata Customer?
      </div>
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div>
          <div>
            <SwiperSlide className="max-sm:px-5 flex w-full bg-[#F6D0B9] px-12">
              <div className="max-sm:w-full flex  flex-col w-1/2 bg-white p-2 py-2 mx-6 my-5 mb-12 rounded-lg shadow-2xl ">
                <div className="max-sm:pb-2 flex items-center border-b-2 pb-4">
                  <div className="">
                    <img
                      src={foto}
                      alt="foto"
                      className="max-sm:w-[20px] max-sm:h-[20px] rounded-full w-[100px] h-[100px] bg-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="max-sm:text-[6px] max-[900px]:text-[18px] text-[24px] text-[#4A335F] font-semibold ml-4">
                      Davin Ismatullah Faris
                    </div>
                    <div className="max-sm:text-[5px] max-[900px]:text-[13px] text-[16px] text-[#A67E99] font-semibold ml-4">
                      Pelanggan
                    </div>
                  </div>
                </div>
                <div className="max-sm:m-1 max-sm:text-[5px] max-[900px]:text-[7px] m-4 text-[#4A335F] text-left">
                  Pelayanan salon sangat memuaskan, saya disambut dengan ramah
                  dan service yang diberikan cukup baik. Sudah beberapa kali
                  datang ke salon ini selalu worth it!{" "}
                </div>
              </div>

              <div className="max-sm:w-full  flex flex-col w-1/2 bg-white p-2 py-2  mx-6 my-5 mb-12 rounded-lg shadow-2xl ">
                <div className="max-sm:pb-2 flex items-center border-b-2 pb-4">
                  <div className="">
                    <img
                      src={foto}
                      alt="foto"
                      className="max-sm:w-[20px] max-sm:h-[20px] rounded-full w-[100px] h-[100px] bg-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="max-sm:text-[6px] max-[900px]:text-[18px] text-[24px] text-[#4A335F] font-semibold ml-4">
                      Davin Ismatullah Faris
                    </div>
                    <div className="max-sm:text-[5px] max-[900px]:text-[13px] text-[16px] text-[#A67E99] font-semibold ml-4">
                      Pelanggan
                    </div>
                  </div>
                </div>
                <div className="max-sm:m-1 max-sm:text-[5px] max-[900px]:text-[7px] m-4 text-[#4A335F] text-left">
                  Pelayanan salon sangat memuaskan, saya disambut dengan ramah
                  dan service yang diberikan cukup baik. Sudah beberapa kali
                  datang ke salon ini selalu worth it!{" "}
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div>
            <SwiperSlide>Slide 2</SwiperSlide>
          </div>
        </div>
        <div className="swiper-button-next max-sm:h-3 text-white"></div>
        <div className="swiper-button-prev max-sm:h-3 text-white"></div>
      </Swiper>
    </>
  );
}

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import foto from "../../assets/aaaaaa.jpeg";

// import required modules

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Testimonial() {
  return (
    <>
      <div className="bg-[#F6D0B9] text-center text-3xl text-[#4A335F] font-bold ">
        Apa Kata Customer?
      </div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <div>
          <div>
            <SwiperSlide className="flex justify-evenly w-full bg-[#F6D0B9] ">
              <div className="flex justify-evenly flex-col w-1/2 bg-white p-5 mx-20 my-10 rounded-lg shadow-2xl">
                <div className="flex border-b-2 pb-4">
                  <div className="rounded-full w-32 h-32">
                    <img
                      src={foto}
                      alt="foto"
                      className="rounded-full w-32 h-32"
                    />
                  </div>
                  <div className=" text-2xl m-12 text-[#4A335F] font-semibold">
                    Davin Ismatullah Faris
                  </div>
                </div>
                <div className=" m-8 text-[#4A335F] ">
                  Pelayanan salon sangat memuaskan, saya disambut dengan ramah
                  dan service yang diberikan cukup baik. Sudah beberapa kali
                  datang ke salon ini selalu worth it!{" "}
                </div>
              </div>
              <div className="flex justify-evenly flex-col w-1/2 bg-white p-5 mx-20 my-10 rounded-lg shadow-2xl">
                <div className="flex border-b-2 pb-4">
                  <div className="rounded-full w-32 h-32">
                    <img
                      src={foto}
                      alt="foto"
                      className="rounded-full w-32 h-32"
                    />
                  </div>
                  <div className=" text-2xl m-12 text-[#4A335F] font-semibold">
                    Jifan Solideo Hakati
                  </div>
                </div>
                <div className=" m-8 text-[#4A335F]">
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
      </Swiper>
    </>
  );
}

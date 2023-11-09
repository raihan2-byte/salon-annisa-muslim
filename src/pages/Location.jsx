import Layout from "../components/Layout";
import Location from "../components/Location/Location";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";

export default function Home() {
  const slide = [
    {
      LocationName: "Griya Bandung Asri 2 Blok C5 NO.5",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 08.00 - 18.00 wib",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.334782136795!2d107.6522859733219!3d-6.969773668241756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9cd0f824c15%3A0x4d831356154167aa!2sJl.%20GBA%202%20Blok%20C5%2C%20Cipagalo%2C%20Kec.%20Bojongsoang%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040287!5e0!3m2!1sid!2sid!4v1699351086737!5m2!1sid!2sid",
    },
    {
      LocationName: "Jl. Margacinta No. 46c",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 09.00 - 19.00 wib",
    },
    {
      LocationName: "Ruko Metro Indah Mall (MIM) Blok A No. 22",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 08.00 - 18.00 wib",
    },
    {
      LocationName: "Jl. Raya Panyileukan Blok A1 No.2",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 08.00 - 18.00 wib",
    },
    {
      LocationName: "Ruko Simpang Mas, Jl. Jaksa Naranata",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 09.00 - 19.00 wib",
    },
  ];
  return (
    <Layout>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper p-7"
      >
        {slide.map((item, index) => {
          return (
            <SwiperSlide
              className="flex justify-between w-fit px-5"
              key={index}
            >
              <Location
                LocationName={item.TreatmentName}
                LocationPhoneNum={item.TreatmentDesc}
                OpenAt={item.TreatmentPrice}
                Maps={item.Maps}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Layout>
  );
}

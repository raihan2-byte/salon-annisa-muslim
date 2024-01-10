import Layout from "../components/Layout";
import Location from "../components/Location/Location";
import { Swiper, SwiperSlide } from "swiper/react";
import Griya from "../assets/griya-bandung-asri.png";
import Panyileukan from "../assets/panyileukan.png";
import SimpangMas from "../assets/simpang-mas.png";
import MetroIndah from "../assets/metro-indah.png";
import MargaCinta from "../assets/marga-cinta.png";
import Backround from "../assets/backgroundLokasi.png";
import ArrowNextLocation from "../assets/arrowNextLocation.svg";
import ArrowLeftLocation from "../assets/arrowLeftLocation.svg";

import Contact from "../components/Kontak";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import ArrowNext from "../components/icons/ArrowNext";
import ArrowLeft from "../components/icons/ArrowLeft";

export default function Home() {
  const slide = [
    {
      LocationName: "Griya Bandung Asri 2 Blok C5 NO.5",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 08.00 - 18.00 wib",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.334782136795!2d107.6522859733219!3d-6.969773668241756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9cd0f824c15%3A0x4d831356154167aa!2sJl.%20GBA%202%20Blok%20C5%2C%20Cipagalo%2C%20Kec.%20Bojongsoang%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040287!5e0!3m2!1sid!2sid!4v1699351086737!5m2!1sid!2sid",
      LocationImage: Griya,
    },
    {
      LocationName: "Jl. Margacinta No. 46c",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 09.00 - 19.00 wib",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4625232243493!2d107.64003737332179!3d-6.9546399680848525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8471b5677c7%3A0x98fd98d21bed7087!2sAnnisa%20Salon%20Muslimah%20-%20Margacinta!5e0!3m2!1sid!2sid!4v1699692631265!5m2!1sid!2sid",
      LocationImage: MargaCinta,
    },
    {
      LocationName: "Ruko Metro Indah Mall (MIM) Blok A No. 22",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 08.00 - 18.00 wib",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.306380015705!2d107.6410396455083!3d-6.941097942430132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e81a3185a8cd%3A0x1f2f66945414aea2!2sAnnisa%20Salon%20Muslimah!5e0!3m2!1sid!2sid!4v1699692556708!5m2!1sid!2sid",
      LocationImage: MetroIndah,
    },
    {
      LocationName: "Jl. Raya Panyileukan Blok A1 No.2",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 08.00 - 18.00 wib",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5957147612953!2d107.71126997332142!3d-6.938825567921258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2d8db8e33bd%3A0x750fb5853b39515d!2sAnnisa%20Salon%20Muslimah%20-%20Panyileukan!5e0!3m2!1sid!2sid!4v1699692695059!5m2!1sid!2sid",
      LocationImage: Panyileukan,
    },
    {
      LocationName: "Ruko Simpang Mas, Jl. Jaksa Naranata",
      LocationPhoneNum: "087738881510",
      OpenAt: "Buka setiap hari jam 09.00 - 19.00 wib",
      Maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0326621787203!2d107.62823617332253!3d-7.005436868613008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e958ba6958b7%3A0xbd7914f2ea3063d1!2sAnnisa%20Salon%20Muslimah!5e0!3m2!1sid!2sid!4v1699692764218!5m2!1sid!2sid",
      LocationImage: SimpangMas,
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
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        modules={[Keyboard, Navigation, Pagination]}
        className="max-sm:py-5 max-sm:px-0 mySwiper p-7 "
        style={{
          backgroundImage: `url(${Backround})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {slide.map((item, index) => {
          return (
            <SwiperSlide
              className="max-sm:px-0 flex justify-between w-fit px-5"
              key={index}
            >
              <Location
                LocationName={item.TreatmentName}
                LocationPhoneNum={item.TreatmentDesc}
                OpenAt={item.TreatmentPrice}
                Maps={item.Maps}
                LocationImage={item.LocationImage}
                isGenap={index % 2 != 0 ? true : false}
                isTextGenap={index % 2 != 0 ? true : false}
              />
            </SwiperSlide>
          );
        })}
        <div>
          <button className="next absolute top-[50%] z-30 right-0">
            <ArrowNext className="max-sm:w-5 max-sm:h-5 w-[18px] h-[26px]" />
          </button>
          <button className="prev absolute top-[50%] z-30 left-0">
            <ArrowLeft className="max-sm:w-5 max-sm:h-5 w-[18px] h-[26px]" />
          </button>
        </div>
      </Swiper>
      <style>
        {`
         .next, .prev {
          padding-left : 40px;
          padding-right : 40px;
          
        }
  @media (max-width: 600px) {
    .next, .prev {
      display: none;
      
    }
    
  `}
      </style>
      <Contact />
    </Layout>
  );
}

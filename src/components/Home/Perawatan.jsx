import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Navigation } from "swiper/modules";
import useIsMobile from "../../hooks/useIsMobile";

const Perawatan = () => {
  const [show, setShow] = useState("Perawatan Rambut");

  const PerawatanWajah = [
    {
      TreatmentName: "Facial",
      TreatmentDesc:
        "Facial wajah merupakan salah satu jenis perawatan kulit yang umum dilakukan. Metode perawatan ini dianggap efektif untuk meremajakan kulit wajah dan mengatasi masalah tertentu pada wajah, misalnya jerawat dan komedo",
      TreatmentPrice: "Rp. 60.000",
    },
    {
      TreatmentName: "Facial Galvanic",
      TreatmentDesc:
        "Facial galvanic adalah salah satu prosedur perawatan wajah non operasi yang dapat memberikan anda kulit yang lebih kencang. Perawatan ini bekerja dengan menggunakan arus listrik tingkat rendah untuk memasukkan bahan aktif kedalam kulit",
      TreatmentPrice: "Rp. 275.000",
    },
    {
      TreatmentName: "Facial Detox",
      TreatmentDesc:
        "Penggunaan kosmetik dan seringnya kulit wajah terpapar sinar matahari membuat kulit kusam, pembersihan secara biasa kadang belum mendatangkan hasil maximal. Maka Facial Detox merupakan cara untuk membersihkan kulit dengan sempurna",
      TreatmentPrice: "Rp. 275.000",
    },
    {
      TreatmentName: "Facial Anti Aging",
      TreatmentDesc:
        "Apakah sudah terdapat kerutan pada kulit anda ? atau mungkin wajah anda terlihat lebih tua dari umur anda sebenarnya ? ada baiknya anda mencoba facial anti aging ini. Karena emas ternyata mampu mengembalikan keelastisan wajah anda",
      TreatmentPrice: "Rp. 150.000",
    },
    {
      TreatmentName: "Totok Wajah",
      TreatmentDesc:
        "Totok wajah merupakan treatment yang sangat bermanfaat bagi kecantikan dengan meremajakan kulit dan membuat kulit wajah lebih bercahaya",
      TreatmentPrice: "Rp. 65.000",
    },
    {
      TreatmentName: "Setrika Wajah",
      TreatmentDesc:
        "Setrika wajah adalah salah satu metode non bedah untuk mengencangkan wajah. Cara kerjanya adalah memanaskan kulit wajah hingga lapisan terdalam. Panas yang dihasilkan ini berfungsi untuk mengencangkan wajah dengan pembentukan colagen",
      TreatmentPrice: "Rp. 80.000",
    },
  ];

  const PerawatanRambut = [
    {
      TreatmentName: "Creambath",
      TreatmentDesc:
        "Creambath bertujuan untuk memelihara kulit kepala dan batang rambut agar selalu dalam keadaan bersih dan sehat. Perawatan yang teratur dapat mencegah kerontokan, ketombe pada rambut, dan merangsang peredaran darah",
      TreatmentPrice: "Rp. 50.000",
    },
    {
      TreatmentName: "Hair Mask",
      TreatmentDesc:
        "Hair mask adalah proses perawatan intensif yang cocok untuk mengatasi rambut rontok dan kondisi parah lainnya. Proses perawatan ini wajib dilakukan bagi rambut yang sering menggunakan alat styling rambut",
      TreatmentPrice: "Rp. 60.000",
    },
    {
      TreatmentName: "Hair Spa",
      TreatmentDesc:
        "Hair spa agak sedikit berbeda dengan creambath, perawatan terfokus pada jenis formula yang terkandung dalam cream, yang berguna untuk memaksimalkan akar rambut agar tidak mudah rontok dan kering",
      TreatmentPrice: "Rp. 60.000",
    },
    {
      TreatmentName: "Treatment Rontok",
      TreatmentDesc:
        "Treatment ini berguna untuk menghentikan rontok rambut dan merangsang pertumbuhan rambut. Perawatan berbahan dasar alami sehingga memberikan nutrisi pada kulit kepala dan rambut, terutama rambut yang rontok",
      TreatmentPrice: "Rp. 70.000",
    },
    {
      TreatmentName: "Treatment Kutu",
      TreatmentDesc:
        "Bila dibiarkan hidup di kepala makhluk ini akan berkembang dengan sangat cepat sekali dan akan bisa menyebabkan penyakit serius seperti eksim dan impetigo. Cara mereka berpindah dari kepala yang satu dengan kepala penderita bisa lewat baju, handuk, atau headset",
      TreatmentPrice: "Rp. 80.000",
    },
  ];

  const PerawatanTubuh = [
    {
      TreatmentName: "Body Massage",
      TreatmentDesc:
        "Body Massage memberikan banyak manfaat antara lain meremajakan kulit anda, melancarkan sirkulasi darah, dan meningkatkan sistem kekebalan tubuh ",
      TreatmentPrice: "Rp. 90.000",
    },
    {
      TreatmentName: "Body Scrub",
      TreatmentDesc:
        "Body Scrub adalah perawatan tubuh yang memberi manfaat seperti membuat kulit lebih cerah, mengangkat sel kulit mati, dan menyamarkan selulit. ",
      TreatmentPrice: "Rp. 150.000",
    },
    {
      TreatmentName: "Refleksi Kaki",
      TreatmentDesc:
        "Refleksi Kaki adalah metode pengobatan tradisional yang dapat membantu pengobatan kanker, meredakan sakit kepala, dan melancarkan peredaran darah",
      TreatmentPrice: "Rp. 50.000",
    },
    {
      TreatmentName: "Steam / Sauna",
      TreatmentDesc:
        "Sauna membuat sirkulasi darah menjadi lancar sehingga kesehatan kardiovaskularpun meningkat. Beberapa penelitian menunjukkan bahwa orang yang sering melakukan steam beresiko lebih rendah terkena serangan jantung",
      TreatmentPrice: "Rp. 50.000",
    },
    {
      TreatmentName: "Body Bleaching",
      TreatmentDesc:
        "Body Bleaching sangatlah bermanfaat untuk memutihkan kulit, memudarkan bekas luka yang berwarna gelap, dan menyamarkan bekas jerawat",
      TreatmentPrice: "Rp. 100.000",
    },
    {
      TreatmentName: "Ratus",
      TreatmentDesc:
        "Ratus vagina adalah perawatan vagina tradisional dengan cara pengasapan langsung di organ intim wanita. Perawatan ini memiliki banyak manfaat seperti mengatasi keputihan dan membersihkan organ reproduksi wanita",
      TreatmentPrice: "Rp. 40.000",
    },
    {
      TreatmentName: "Scrub Punggung",
      TreatmentDesc:
        "Scrub pada bagian punggung sangat bermanfaat untuk mengangkat sel kulit mati dan menghilangkan jerawat punggung. ",
      TreatmentPrice: "Rp. 40.000",
    },
    {
      TreatmentName: "Bleaching Punggung",
      TreatmentDesc:
        "Treatment ini sangatlah bermanfaat bagi wanita yang memiliki bintik hitam di bagian punggung, bekas jerawat maupun ingin mencerahkan warna kulit ",
      TreatmentPrice: "Rp. 40.000",
    },
  ];

  const isMobile = useIsMobile();
  return (
    <div className="font-syne">
      <div className="text-center text-4xl mt-10">Perawatan & Layanan</div>
      <div className="flex justify-center gap-3 ">
        <button
          className={`max-sm:w-[25%] max-sm:px-1 px-2 py-1 border border-[#E4C9EB] w-[12%] ${
            show == "Perawatan Rambut" ? "bg-[#7E587D]" : "bg-white"
          }  rounded-lg mt-6 text-sm text-black`}
          onClick={() => setShow("Perawatan Rambut")}
        >
          Perawatan Rambut
        </button>

        <button
          className={` max-sm:w-[25%] px-2 py-1 border border-[#E4C9EB] w-[12%] ${
            show == "Perawatan Wajah" ? "bg-[#7E587D]" : "bg-white"
          }  rounded-lg mt-6 text-sm text-black`}
          onClick={() => setShow("Perawatan Wajah")}
        >
          Perawatan Wajah
        </button>

        <button
          className={`max-sm:w-[25%] px-2 py-1 border border-[#E4C9EB] w-[12%] ${
            show == "Perawatan Tubuh" ? "bg-[#7E587D]" : "bg-white"
          }  rounded-lg mt-6 text-sm text-black`}
          onClick={() => setShow("Perawatan Tubuh")}
        >
          Perawatan Tubuh
        </button>
      </div>
      <div className="bg-white px-6">
        {show == "Perawatan Wajah" && (
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={10}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Navigation]}
            className="mySwiper"
          >
            <div>
              {PerawatanWajah.map((item, index) => {
                return (
                  <SwiperSlide
                    className="flex justify-between w-full"
                    key={index}
                  >
                    <div className="px-12 py-5 ">
                      <div className="">
                        <Card
                          isGenap={index % 2 != 0 ? true : false}
                          TreatmentName={item.TreatmentName}
                          TreatmentDesc={item.TreatmentDesc}
                          TreatmentPrice={item.TreatmentPrice}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        )}

        {show == "Perawatan Tubuh" && (
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Navigation]}
            className="mySwiper"
          >
            <div>
              {PerawatanTubuh.map((item, index) => {
                return (
                  <SwiperSlide
                    className="flex justify-between w-full "
                    key={index}
                  >
                    <div className="px-12 py-5 ">
                      <div className="">
                        <Card
                          isGenap={index % 2 != 0 ? true : false}
                          TreatmentName={item.TreatmentName}
                          TreatmentDesc={item.TreatmentDesc}
                          TreatmentPrice={item.TreatmentPrice}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        )}

        {show == "Perawatan Rambut" && (
          <Swiper
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Keyboard, Navigation]}
            className="mySwiper"
          >
            <div>
              {PerawatanRambut.map((item, index) => {
                return (
                  <SwiperSlide
                    className="flex justify-between w-fit "
                    key={index}
                  >
                    <div className="">
                      <div className="">
                        <Card
                          isGenap={index % 2 != 0 ? true : false}
                          TreatmentName={item.TreatmentName}
                          TreatmentDesc={item.TreatmentDesc}
                          TreatmentPrice={item.TreatmentPrice}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Perawatan;

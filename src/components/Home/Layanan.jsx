import React from "react";
import LayananFoto from "../../assets/layanan.png";
import HairService from "../../assets/hair-service.svg";
import FaceCare from "../../assets/face-care.svg";
import BodyCare from "../../assets/body-care.svg";

const Layanan = () => {
  return (
    <div className="flex justify-between w-full bg-white max-w-[1750px] m-auto font-syne">
      <div className="max-sm:hidden w-1/2 flex justify-start mr-auto items-start">
        <img src={LayananFoto} alt="no photo" className="h-[525px]" />
      </div>
      <div className="max-sm:w-full w-1/2 text-center mt-10 flex flex-col gap-[12px]">
        <div className="max-sm:text-[16px] text-[48px] font-bold">
          Layanan Kami
        </div>
        <div className="items-center text-left ml-10  flex justify-start">
          <img
            src={HairService}
            alt="no photo"
            className="max-sm:h-[22px] max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col h-[61px] mr-3"
          />
          <div className=" max-sm:w-[60%] w-[60%]  ml-2">
            <div className="max-sm:text-[12px] text-[24px] font-semibold">
              Perawatan Rambut
            </div>
            <div className="max-sm:text-[10px] text-[20px] font-medium">
              Merawat kesehatan dan keindahan rambut para muslimah
            </div>
          </div>
        </div>
        <div className="items-center text-right mr-10  flex justify-end">
          <div className=" max-sm:w-[60%] w-[60%] text-[10px] mr-2">
            <div className="max-sm:text-[12px] text-[24px] font-semibold">
              Perawatan Wajah
            </div>
            <div className="max-sm:text-[10px] text-[20px] font-medium">
              menyediakan produk - produk facial yang insyaallah dijamin halal
              dan sudah mendapat izin POM
            </div>
          </div>
          <img
            src={FaceCare}
            alt="no photo"
            className="max-sm:h-[22px] h-[60px] ml-3"
          />
        </div>
        <div className="items-center text-left ml-10  flex justify-start">
          <img
            src={BodyCare}
            alt="no photo"
            className="max-sm:h-[22px] h-[60px] mr-3"
          />
          <div className=" max-sm:w-[60%] w-[60%] text-[10px] mr-2">
            <div className="max-sm:text-[12px] text-[24px] font-semibold">
              Perawatan Tubuh
            </div>
            <div className="max-sm:text-[10px] text-[20px] font-medium">
              Memberi perawatan tubuh demi mencerahkan kulit anda dan menjaga
              kesehatan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layanan;

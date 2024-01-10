import React from "react";
import Foto from "../../assets/hero-layanan.png";
import next from "../../assets/next.svg";

import BackgroundHero from "../../assets/background.png";

const Hero = () => {
  return (
    <div
      className="max-sm:flex-col max-sm:pb-10 flex justify-between w-full"
      style={{
        backgroundImage: `url(${BackgroundHero})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-sm:w-full max-sm:p-2 w-1/2 m-auto text-center ">
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-5 max-sm:p-3">
          <div className="max-sm:text-3xl text-5xl font-syne font-bold text-[#4A335F]">
            SALON
          </div>
          <div className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:gap-3 w-[65%] m-auto">
            <div className="max-sm:text-2xl text-4xl text-[#E4C9EB] font-syne font-bold">
              ANNISA MUSLIMAH
            </div>
            <div className="font-syne w-[80%] m-auto">
              Memenuhi kebutuhan para muslimah sesuai dengan syariat Islam
            </div>
          </div>
        </div>
        <div className="max-sm:mt-10 flex items-center justify-center mt-20">
          <button className="bg-[#4A335F] text-[15px] flex items-center justify-center text-white rounded-sm w-[212px] h-[49px]">
            Layanan Kami
            <img src={next} alt="no foto" className="ml-2" />
          </button>
        </div>
      </div>
      <div className="max-sm:hidden w-1/2 flex justify-end">
        <img src={Foto} alt="no photo" className="h-[525px] " />
      </div>
    </div>
  );
};

export default Hero;

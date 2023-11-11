import React from "react";
import WAP from "../assets/wa-purple.svg";
import IGP from "../assets/ig-purple.svg";
import Logo from "../assets/log.svg";

function Footer() {
  return (
    <div className="max-sm:py-4 flex justify-between py-5 items-center">
      <div className="w-1/2">
        <img
          src={Logo}
          alt=""
          className="max-sm:w-[135px] max-sm:h-[15px] ml-[8px]"
        />
      </div>

      <div className="w-1/2">
        <div className="max-sm:gap-[12px] w-[75%] m-auto flex justify-end gap-[24px]">
          <div className="max-sm:w-[7px] max-sm:h-[7px]">
            <img src={WAP} alt="" />
          </div>
          <div className="max-sm:w-[7px] max-sm:h-[7px] ml-[8px]">
            <img src={IGP} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

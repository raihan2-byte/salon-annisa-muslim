import React from "react";
import WAP from "../assets/wa-purple.svg";
import IGP from "../assets/ig-purple.svg";
import Logo from "../assets/log.svg";

function Footer() {
  return (
    <div className="flex justify-between p-10 ">
      <div className="flex-shrink-0">
        <img src={Logo} alt="" />
      </div>

      <div>
        <div className="flex justify-evenly">
          <div className="mt-6">
            <img src={WAP} alt="" />
          </div>
          <div className="mt-6 ">
            <img src={IGP} alt="" />
          </div>
        </div>

        <div className="mt-4 text-[#4A335F]">Proudly Powered by DavinDONK</div>
      </div>
    </div>
  );
}

export default Footer;

import WAIcon from "../assets/wa-icon.svg";
import IGIcon from "../assets/ig-icon.svg";
import foto from "../assets/foto.png";

export default function Kontak() {
  return (
    <div className="flex justify-between bg-white">
      <div className="max-sm:pl-10 max-sm:p-0 p-20 my-auto font-syne">
        <div className="max-sm:mb-4 mb-8 ">
          <div className="max-sm:text-[10px] text-[#7E587D] mt-4 text-[24px]">
            ingin tau lebih lanjut?
          </div>
          <div className="max-sm:text-[12px] text-[48px] text-[#4A335F]">
            Hubungi Kami
          </div>
        </div>
        <div className="max-sm:p-1 max-sm:px-[5px] flex items-center gap-2 bg-[#E4C9EB] rounded-full my-2 p-2 px-6 w-fit">
          <div>
            <img
              src={WAIcon}
              alt=""
              className="max-sm:w-[8px] max-sm:h-[8px]"
            />
          </div>
          <div className="max-sm:text-[8px] text-white text-[20px] font-poppins">
            0877 3888 1510
          </div>
        </div>

        <div className="max-sm:p-1 max-sm:px-[5px] flex items-center gap-2 bg-[#E4C9EB] rounded-full p-2 px-6">
          <div>
            <img
              src={IGIcon}
              alt=""
              className="max-sm:w-[10px] max-sm:h-[8px]"
            />
          </div>
          <div className="max-sm:text-[8px] text-white text-[20px] font-poppins">
            annisa_salonmuslimah
          </div>
        </div>

        <div className="max-sm:text-[10px] mt-3 text-[24px] text-[#7E587D] ">
          Atau, Kunjungi kami di <span className="underline">sini</span>
        </div>
      </div>

      <div className="w-1/2 h-full">
        <img src={foto} alt="" className="" />
      </div>
    </div>
  );
}

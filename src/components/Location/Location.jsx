import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Backround from "../../assets/backgroundLokasi.png";

const Lokasi = ({
  LocationName,
  LocationPhoneNum,
  OpenAt,
  Maps,
  LocationImage,
  isGenap,
  isTextGenap,
}) => {
  return (
    <div className="max-w-screen-2xl m-auto ">
      {/* <div
        className={`"max-sm:m-2 max-sm:p-2 flex justify-between m-5 p-5 gap-10"  ${
          isGenap == true ? "flex-row-reverse" : "flex-row"
        }`}
      > */}
      <div
        className={`max-sm:m-2 max-sm:p-2 flex justify-between m-3 p-2 gap-10 ${
          isGenap ? "flex-row-reverse" : "flex-row"
        }`}
        style={{ gap: "20px" }}
      >
        <div
          className={`"max-sm:gap-2 flex flex-col gap-5 " ${
            isTextGenap == true ? "text-right" : "text-left"
          } `}
        >
          <div className="text-[24px]">
            <div className="max-sm:text-[10px] font-syne font-bold">Alamat</div>
            <div className="max-sm:text-[8px] font-poppins text-[#7E587D] font-medium">
              Griya Bandung Asri 2 Blok C5 NO.5
              {LocationName}
            </div>
          </div>
          <div className="text-[24px]">
            <div className="max-sm:text-[10px] font-syne font-bold">
              No Telp
            </div>
            <div className="max-sm:text-[8px] font-poppins text-[#7E587D] font-medium">
              087738881510 {LocationPhoneNum}{" "}
            </div>
            <div className="max-sm:text-[7px] font-poppins text-[16px] text-[#7E587D] font-normal">
              {OpenAt}
              Buka setiap hari jam 08.00 - 18.00 wib
            </div>
          </div>
          <div>
            <div className="max-sm:text-[10px] font-syne text-[24px] font-bold">
              Titik Peta
            </div>
            <div>
              <iframe
                className="max-sm:w-[166px] max-sm:h-[44px] max-[768px]:w-[270px] max-[768px]:h-[150px] max-[900px]:w-[350px] max-[900px]:h-[200px]  w-[550px] h-[300px]"
                src={Maps}
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <img src={LocationImage} alt="no foto" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default Lokasi;

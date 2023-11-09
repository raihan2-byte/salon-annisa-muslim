import LokasiGriyaPict from "../../assets/griya-bandung-asri.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Lokasi = ({ LocationName, LocationPhoneNum, OpenAt, Maps }) => {
  return (
    <div className="bg-white max-w-screen-2xl m-auto">
      <div className="flex justify-between m-5 p-5 gap-2">
        <div className="flex flex-col gap-5 ">
          <div>
            <div className="font-syne">Alamat</div>
            <div className="font-poppins">
              Griya Bandung Asri 2 Blok C5 NO.5
              {LocationName}
            </div>
          </div>
          <div>
            <div className="font-syne">No Telp</div>
            <div className="font-poppins">087738881510 {LocationPhoneNum} </div>
            <div className="font-poppins text-[10px]">
              {OpenAt}
              Buka setiap hari jam 08.00 - 18.00 wib
            </div>
          </div>
          <div>
            <div className="font-syne">Titik Peta</div>
            <div>
              <iframe
                src={Maps}
                width="600"
                height="310"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <img src={LokasiGriyaPict} alt="no foto" />
        </div>
      </div>
    </div>
  );
};

export default Lokasi;

import Layout from "../components/Layout";
import AB1 from "../assets/aboutUs1.svg";
import AB2 from "../assets/aboutUs2.svg";
import AB3 from "../assets/aboutUs3.svg";
import AB4 from "../assets/aboutUs4.svg";

{
  /* Tentang Kami */
}
export default function AboutUs() {
  return (
    <Layout>
      <div className="text-center ">
        <div className="max-sm:w-[338px] max-sm:h-[203px] max-sm:p-[12px] rounded-md border-[#E4C9EB] border-4 w-[95%] h-full p-[32px] mx-auto my-6 ">
          <div className="max-sm:text-[16px] text-[48px]  text-[#4A335F] font-semibold">
            Kami Hadir Untuk Anda
          </div>
          <div className="max-sm:p-3 max-sm:text-[10px] text-[#525252]  p-10  text-[20px]">
            Annisa Salon Muslimah merupakan salon khusus wanita yang berdiri
            sejak tahun 2010. Salon ini didedikasikan untuk memenuhi kebutuhan
            para muslimah akan perawatan rambut, wajah dan tubuh khususnya bagi
            para hijaber dan wanita pada umumnya. Salon ini menerapkan suasana
            dan layanan yang syari bagi para muslimah sehingga semua layanan
            yang kami sediakan hanya layanan yang halal dan yang dibolehkan saja
            oleh syariat islam.
          </div>
        </div>
      </div>

      {/* Pelayanan */}
      <div className="text-center">
        <div className="max-sm:text-[16px] max-sm:m-2 text-[48px] text-[#4A335F] font-semibold">
          Kepuasan Anda Terjamin
        </div>
        <div className=" max-sm:hidden text-[#525252] px-32 pt-4 text-xl ">
          Selain memberikan perawatan dan pelayanan yang berkualitas kami juga
          menjamin kepuasan anda dengan memberikan fasilitas terbaik
        </div>
      </div>

      {/* ALL GRID */}
      <div className="max-sm:grid-cols-1 max-sm:m-2  text-center  grid grid-cols-2 gap-4 m-16 place-items-center">
        {/* Box Grid 1 */}
        <div className="max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px] rounded-xl border-[#E4C9EB] border-4  w-full h-full text-center p-[32px]">
          <div className="flex flex-row items-center">
            <img src={AB1} alt="" className="max-sm:w-[40px] max-sm:h-[40px]" />
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
              Keamanan Bagi Wanita
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2 ">
            Keamanan di Salon Annisa terjaga dengan baik, pintu masuk selalu
            dikunci untuk menghindari laki - laki yang masuk.{" "}
          </div>
        </div>

        {/* Box Grid 2 */}
        <div className="max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px] max-sm:mr-0 rounded-xl border-[#E4C9EB] border-4 mr-4 w-full h-full text-center p-[32px] ">
          <div className="flex flex-row items-center">
            <img src={AB2} alt="" className="max-sm:w-[40px] max-sm:h-[40px]" />
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
              Protokol Kesehatan
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2 ">
            Disamping protokol normal yang sudah menjadi standar, kami juga
            menerapkan protokol new normal
          </div>
        </div>
        {/* Box Grid 3 */}
        <div className="max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px]  rounded-xl border-[#E4C9EB] border-4 w-full h-full text-center p-[32px]">
          <div className="flex flex-row items-center ">
            <img src={AB3} alt="" className="max-sm:w-[40px] max-sm:h-[40px]" />
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
              Ulasan Positive Pelanggan
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2">
            Keamanan di Salon Annisa terjaga dengan baik, pintu masuk selalu
            dikunci untuk menghindari laki - laki yang masuk.
          </div>
        </div>
        {/* Box Grid 4 */}
        <div className=" max-sm:w-[338px] max-sm:h-[134px] max-sm:p-[10px] max-sm:mr-0 rounded-xl border-[#E4C9EB] border-4 mr-4 w-full h-full text-center p-[32px]">
          <div className="flex flex-row items-center">
            <img src={AB4} alt="" className="max-sm:w-[40px] max-sm:h-[40px]" />
            <div className="max-sm:text-[12px] text-2xl text-[#4A335F] font-bold  pl-2">
              Layanan Terbaik
            </div>
          </div>
          <div className="max-sm:text-[9px] text-[#525252] text-xl text-left justify-center pt-2">
            Pegawai kami selalu berusaha untuk memberikan pengalaman terbaik
            bagi anda.
          </div>
        </div>
      </div>
    </Layout>
  );
}

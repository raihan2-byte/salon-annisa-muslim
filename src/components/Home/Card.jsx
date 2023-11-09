import next from "../../assets/next.svg";

const Card = ({ TreatmentName, TreatmentDesc, TreatmentPrice, isGenap }) => {
  return (
    <div
      className={`w-full font-poppins text-center border-4 border-[#E4C9EB] flex justify-center m-auto h-[100vh] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ${
        isGenap == true ? "bg-[#E4C9EB]" : "bg-white"
      }`}
    >
      <div className="py-[52px] px-[22px] flex flex-col ">
        <div className="max-sm:text-xl text-2xl font-bold text-[#4A335F]">
          {TreatmentName}
        </div>
        <div className="max-sm:text-[16px] w-full m-auto ">
          {" "}
          {TreatmentDesc}
        </div>
        <div className="flex flex-col justify-between gap-2">
          <div>Mulai dari</div>
          <div className="text-[#7E587D] text-2xl font-bold">
            {TreatmentPrice}
          </div>
          <div className="flex justify-center items-center">
            <button className="text-sm bg-[#4A335F] p-3 flex items-center justify-center text-white rounded-sm h-[50px]">
              Pesan Sekarang
              <img
                src={next}
                alt="no foto"
                className=" max-w-[12px] max-h-[28px] ml-3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

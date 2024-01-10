import next from "../../assets/next.svg";

const Card = ({ TreatmentName, TreatmentDesc, TreatmentPrice, isGenap }) => {
  return (
    <div
      className={`max-sm:h-[200px] w-full font-poppins text-center border-4 border-[#E4C9EB] flex justify-center m-auto lg:h-[750px] h-[650px] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ${
        isGenap == true ? "bg-[#E4C9EB]" : "bg-white"
      }`}
    >
      <div className="max-sm:py-[10px] max-sm:gap-2 py-[52px] px-[22px] flex flex-col gap-10">
        <div className="max-sm:text-[8px] text-[32px] h-24 font-bold text-[#4A335F]">
          {TreatmentName}
        </div>
        <div className="max-sm:text-[5px] mb-auto"> {TreatmentDesc}</div>
        <div className="flex flex-col justify-between gap-2">
          <div className="max-sm:text-[6px] text-[16px]">Mulai dari</div>
          <div className="max-sm:text-[8px] text-[#7E587D] text-[32px] font-bold">
            {TreatmentPrice}
          </div>
          <div className="flex justify-center items-center">
            <button className="max-sm:text-[6px] max-sm:h-[21px] max-sm:p-0 max-sm:w-[70px] text-[20px] font-poppins bg-[#4A335F] flex items-center justify-center text-white  w-[223px] h-[67px]">
              More Info
              <img
                src={next}
                alt="no foto"
                className="max-sm:w-[3px] max-sm:h-[6px] max-sm:ml-2 w-[6] h-[14px] ml-3"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

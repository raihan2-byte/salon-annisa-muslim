import React from "react";
import { FaPlus } from "react-icons/fa";

export default function TopArea({ title, buttonTitle, onClick }) {
  return (
    <div className="pr-10 md:pl-14 pl-10 py-16 flex md:flex-row flex-col md:gap-0 gap-5 md:justify-between justify-center items-center  border-b border-gray-700">
      <p className="text-center text-gray-700 text-4xl font-bold ">{title}</p>
      <button
        className="flex items-center gap-2 rounded-[22px] border-2 border-gray-700 px-3 py-1"
        onClick={onClick}
      >
        <p>{buttonTitle}</p>
        <FaPlus />
      </button>
    </div>
  );
}

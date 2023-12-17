import clsx from "clsx";
import React from "react";

export default function Button({
  type,
  children,
  danger,
  disable,
  fullWidth,
  onClick,
  secondary,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disable}
      className={clsx(
        `flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        disable && "opacity-80 cursor-not-allowed",
        fullWidth && "w-full",
        secondary ? "text-green-900" : "text-black",
        danger && "bg-rose-500 hover:bg-red-600 focus-visible:outline-rose-600",
        !secondary &&
          !danger &&
          "bg-purple-200 hover:bg-purple-300 focus-visible:outline-sky-600 "
      )}
    >
      {children}
    </button>
  );
}

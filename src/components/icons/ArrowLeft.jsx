import React from "react";

const ArrowLeft = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="92"
      viewBox="0 0 57 92"
      fill="none"
    >
      <g filter="url(#filter0_d_41_283)">
        <path
          d="M52.48 7.08L45.127 0L4 39.6L45.127 79.2L52.48 72.12L18.706 39.6L52.48 7.08Z"
          fill="#4A335F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_41_283"
          x="0"
          y="0"
          width="56.48"
          height="91.2"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_41_283"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_283"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowLeft;

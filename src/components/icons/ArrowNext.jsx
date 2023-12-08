import React from "react";

const ArrowNext = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="92"
      viewBox="0 0 57 92"
      fill="none"
    >
      <g filter="url(#filter0_d_41_282)">
        <path
          d="M4 8.48L35.52 40L4 71.52L12.48 80L52.48 40L12.48 0L4 8.48Z"
          fill="#4A335F"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_41_282"
          x="0"
          y="0"
          width="56.48"
          height="92"
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
            result="effect1_dropShadow_41_282"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_41_282"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default ArrowNext;

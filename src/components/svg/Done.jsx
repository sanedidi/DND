import React from "react";

const Done = ({svgFill}) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2816_556)">
        <path
          d="M8.00006 13.5001L5.08339 10.5834C4.75839 10.2584 4.24172 10.2584 3.91672 10.5834C3.59172 10.9084 3.59172 11.4251 3.91672 11.7501L7.40839 15.2418C7.73339 15.5668 8.25839 15.5668 8.58339 15.2418L17.4167 6.41676C17.7417 6.09176 17.7417 5.5751 17.4167 5.2501C17.0917 4.9251 16.5751 4.9251 16.2501 5.2501L8.00006 13.5001Z"
          fill={svgFill}
        />
      </g>
      <defs>
        <clipPath id="clip0_2816_556">
          <rect
            width="20"
            height="20"
            fill={svgFill}
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Done;

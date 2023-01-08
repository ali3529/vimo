import React from "react";

function ChevronLeftSVG({ chevronColor }) {
    return (
        <svg className="cursor-none sm-500:cursor-pointer z-50"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="22"
            fill="none"
            viewBox="0 0 12 22"
        >
            <path
                fill={chevronColor ? chevronColor : "#5E46F8"}
                fillRule="evenodd"
                d="M9.482 1a1.25 1.25 0 011.768 1.768l-7.348 7.348a1.25 1.25 0 000 1.768l7.348 7.348A1.25 1.25 0 019.482 21L.366 11.884a1.25 1.25 0 010-1.768L9.482 1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );
}

export default ChevronLeftSVG;
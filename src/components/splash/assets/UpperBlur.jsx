import React from "react";

function UpperBlur() {
    return (
        <svg className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            width="557"
            height="610"
            fill="none"
            viewBox="0 0 557 610"
        >
            <g filter="url(#filter0_f_1_3)">
                <path
                    fill="#5E46F8"
                    d="M297.133 302.6c0 52.429 74.298 106.613 21.869 106.613-52.428 0-118.002-61.93-118.002-114.358C201 242.427 287.988 201 340.416 201s-43.283 49.172-43.283 101.6z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_f_1_3"
                    width="556.047"
                    height="609.147"
                    x="0.533"
                    y="0.533"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_1_3"
                        stdDeviation="100.234"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
}

export default UpperBlur;

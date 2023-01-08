import React from "react";

function DownerBlur() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="557"
            height="615"
            fill="none"
            viewBox="0 0 557 615"
        >
            <g filter="url(#filter0_f_1_2)">
                <path
                    fill="#C03EFE"
                    d="M355.843 378.231c0 52.429-49.707 30.982-102.135 30.982-52.428 0-15.867-44.161-15.867-96.589S168.1 201 220.528 201s135.315 124.803 135.315 177.231z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_f_1_2"
                    width="555.778"
                    height="613.49"
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
                        result="effect1_foregroundBlur_1_2"
                        stdDeviation="100.234"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
}

export default DownerBlur;

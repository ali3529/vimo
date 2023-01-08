import React from "react";

function SplashBlur() {
    return (
        <svg className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"

            fill="none"
            viewBox="0 0 680 681"
        >
            <g filter="url(#filter0_f_1_5)">
                <path
                    fill="#5E46F8"
                    d="M297.133 302.08c0 52.428 74.298 106.612 21.869 106.612-52.428 0-118.002-61.929-118.002-114.357 0-52.429 86.988-93.856 139.416-93.856s-43.283 49.173-43.283 101.601z"
                ></path>
            </g>
            <g filter="url(#filter1_f_1_5)">
                <path
                    fill="#C03EFE"
                    d="M478.858 444.786c0 52.428-49.708 30.981-102.136 30.981s-15.867-44.161-15.867-96.589-69.741-111.624-17.313-111.624 135.316 124.803 135.316 177.232z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_f_1_5"
                    width="556.047"
                    height="609.147"
                    x="0.533"
                    y="0.012"
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
                        result="effect1_foregroundBlur_1_5"
                        stdDeviation="100.234"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter1_f_1_5"
                    width="555.778"
                    height="613.49"
                    x="123.547"
                    y="67.087"
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
                        result="effect1_foregroundBlur_1_5"
                        stdDeviation="100.234"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
}

export default SplashBlur;

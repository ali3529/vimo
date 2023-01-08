
function BackgroundBlurSVG() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="672"
            height="674"
            fill="none"
            viewBox="0 0 672 674"
        >
            <g filter="url(#filter0_f_2_181)">
                <path
                    fill="#5E46F8"
                    d="M294.464 299.779c0 50.973 72.234 103.652 21.262 103.652-50.973 0-114.726-60.209-114.726-111.182C201 241.277 285.572 201 336.545 201c50.972 0-42.081 47.807-42.081 98.779z"
                ></path>
            </g>
            <g filter="url(#filter1_f_2_181)">
                <path
                    fill="#C03EFE"
                    d="M471.143 438.523c0 50.972-48.327 30.121-99.3 30.121-50.972 0-15.426-42.935-15.426-93.907 0-50.973-67.805-108.525-16.833-108.525 50.973 0 131.559 121.338 131.559 172.311z"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_f_2_181"
                    width="551.74"
                    height="603.366"
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
                        result="effect1_foregroundBlur_2_181"
                        stdDeviation="100.234"
                    ></feGaussianBlur>
                </filter>
                <filter
                    id="filter1_f_2_181"
                    width="551.479"
                    height="607.588"
                    x="120.131"
                    y="65.745"
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
                        result="effect1_foregroundBlur_2_181"
                        stdDeviation="100.234"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
}

export default BackgroundBlurSVG;

import React from "react";

function SliderPlaceHolderSvg({height}) {
    return (
        <svg
            className="rounded-[15px]  w-full h-full "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 346 200"
            preserveAspectRatio="none"

        >
            <path fill="#310E58" d="M0 0H346V200H0z"></path>
            {
                height >= 130 &&
                <path
                    fill="#561F94"
                    d="M229.28 119.888v6.042c0 5.561-4.509 10.07-10.07 10.07h-92.14c-5.561 0-10.07-4.509-10.07-10.07v-14.098l27.692-20.14a11.413 11.413 0 0114.602.671l18.461 16.112a11.918 11.918 0 0013.763 1.175l37.762-22.154v32.392zM184.133 85.483c5.932 0 10.742-4.81 10.742-10.742 0-5.932-4.81-10.741-10.742-10.741-5.932 0-10.741 4.81-10.741 10.741 0 5.933 4.809 10.742 10.741 10.742z"
                ></path>
            }

        </svg>
    );
}

export default SliderPlaceHolderSvg;

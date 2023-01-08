import React from 'react';

function PlayerFullScreenSvg(props) {
    return (
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 26 26"
        >
            <path
                stroke="#B8B8B8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 1.75V5.5A2.5 2.5 0 015.5 8H1.75m22.5 0H20.5A2.5 2.5 0 0118 5.5V1.75m0 22.5V20.5a2.5 2.5 0 012.5-2.5h3.75m-22.5 0H5.5A2.5 2.5 0 018 20.5v3.75"
            ></path>
        </svg>
    );
}

export default PlayerFullScreenSvg;

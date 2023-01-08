import React from 'react';

function PlusSvg(props) {
    return (
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                fill="#FAFAFA"
                d="M10 20a10 10 0 1110-10 10.01 10.01 0 01-10 10zm0-18.605A8.605 8.605 0 1018.605 10 8.614 8.614 0 0010 1.395zm0 13.024a.707.707 0 01-.698-.698v-3.023H6.28a.697.697 0 110-1.396h3.023V6.28a.698.698 0 111.396 0v3.023h3.023a.698.698 0 110 1.396h-3.023v3.023a.707.707 0 01-.698.698z"
            ></path>
        </svg>
    );
}

export default PlusSvg;

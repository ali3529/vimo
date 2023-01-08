import React from 'react';

function PlayerInfoSvg(props) {
    return (
        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
        >
            <path
                fill="#5E46F8"
                d="M10 0C4.473 0 0 4.473 0 10s4.473 10 10 10 10-4.473 10-10S15.527 0 10 0zm0 18.438A8.433 8.433 0 011.562 10 8.433 8.433 0 0110 1.562 8.433 8.433 0 0118.438 10 8.433 8.433 0 0110 18.438z"
            ></path>
            <path
                fill="#5E46F8"
                d="M10.047 8.044a.776.776 0 00-.776.776v4.994a.776.776 0 101.552 0V8.82a.776.776 0 00-.776-.776zM10.047 7.094a1.047 1.047 0 100-2.094 1.047 1.047 0 000 2.094z"
            ></path>
        </svg>
    );
}

export default PlayerInfoSvg;

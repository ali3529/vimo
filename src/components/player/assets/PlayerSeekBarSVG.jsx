import React from 'react';

function PlayerSeekBarSvg(props) {
    return (

        <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 768 4">
            <path stroke="#9D9DB6" d="M2.5 2H766"></path>
            <path stroke="#212127" d="M3 2h322" opacity="0.5"></path>
            <path stroke="#fff" d="M2 2h162"></path>
        </svg>
    );
}

export default PlayerSeekBarSvg;

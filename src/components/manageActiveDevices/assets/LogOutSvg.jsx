import React from "react";

function LogOutSvg({color}) {
    return (
        <svg
            className='w-full h-full '
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <path
                fill={`${color}`}
                d="M7.973 14.618h-5.98a.665.665 0 01-.664-.665V1.993c0-.366.298-.664.664-.664h5.98a.664.664 0 100-1.329h-5.98A1.996 1.996 0 000 1.993v11.96c0 1.1.894 1.994 1.993 1.994h5.98a.664.664 0 100-1.329z"
            ></path>
            <path
                fill={`${color}`}
                d="M15.802 7.5l-4.04-3.986a.664.664 0 00-.933.946l2.887 2.85H5.98a.664.664 0 100 1.328h7.736l-2.887 2.85a.664.664 0 10.933.945l4.04-3.986a.666.666 0 000-.947z"
            ></path>
        </svg>
    );
}

export default LogOutSvg;

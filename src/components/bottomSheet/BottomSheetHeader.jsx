import React from "react";

function BottomSheetHeader({ title }) {
    return (
        <div className="flex items-center justify-center text-[1.8rem] !fa-format-300 text-white ">
            <p className="text-accent">{title}</p>
        </div>
    );
}

export default BottomSheetHeader;

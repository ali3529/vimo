import React from "react";
import ChevronLeftSVG from "../common/assets/ChevronLeftSVG";
import PlayerMoreOptionSVG from "./assets/PlayerMenuSVG";

function PlayerTollBar({ onOpenBottomSheet }) {
    return (
        <div
            dir="rtl"
            className="w-full flex justify-between items-center px-[22px] pt-[16px] "
        >
            <div onClick={onOpenBottomSheet} className="w-[5px] h-[23px]">
                <PlayerMoreOptionSVG />
            </div>
            <div className="text-[1.8rem]  fa-format-500 leading-10 text-white">
                پوست شیر
            </div>
            <div className="w-[12px] h-[20px]">
                <ChevronLeftSVG />
            </div>
        </div>
    );
}

export default PlayerTollBar;

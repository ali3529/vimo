import React from "react";
import CameraIconSVG from "../../common/assets/CameraIconSVG";
import ShareIconSVG from "../../common/assets/ShareIconSVG";
import PlayerAlertSVG from "../assets/PlayerAlertSVG";
import PlayerInfoSVG from "../assets/PlayerInfoSVG";

function PlayerSettingBottomSheet(props) {
    return (
        <div dir="rtl" className="flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
                <div className="flex gap-[12px] items-center justify-start">
                    <div className="w-[24px] h-[16px]">
                        <CameraIconSVG />
                    </div>

                    <p className="text-white fa-format-400 text-[1.4rem] leading-[16px]">
                        کیفیت پخش
                    </p>
                </div>
                <div className="flex">
                    <p
                        dir="ltr"
                        className="text-gray-A fa-format-400 text-[1.4rem] leading-[16px]"
                    >
                        1080 p
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-[16px] items-center justify-start">
                    <div className="w-[20px] h-[20px]">
                        <PlayerInfoSVG />
                    </div>
                    <p className="text-white fa-format-400 text-[1.4rem] leading-[16px]">
                        {" "}
                        اطلاعات
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-[16px] items-center justify-start">
                    <div className="w-[20px] h-[22px]">
                        <ShareIconSVG />
                    </div>

                    <p className="text-white fa-format-400 text-[1.4rem] leading-[16px] flex">
                        اشتراک گذاری
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex gap-[15px] items-center justify-start">
                    <div className="w-[24px] h-[22px]">
                        <PlayerAlertSVG />
                    </div>
                    <p className="text-white fa-format-400 text-[1.4rem] leading-[16px]">
                        گزارش خطا
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PlayerSettingBottomSheet;

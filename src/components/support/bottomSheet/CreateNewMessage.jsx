import React from "react";
import { Button } from "@mui/material";
import PaperclipSVG from "../../common/PaperclipSVG";

function CreateNewMessage(props) {
    return (
        <div className="flex flex-col">
      <textarea
          dir="rtl"
          className="bg-transparent w-full !text-white !text-[1.6rem] !leading-[22px] !fa-format-300 h-[187px] p-[16px] resize-none !border-[1px] border-blue rounded-[15px] focus:outline-none mb-[12px]"
      />
            <div className="flex flex-col mb-[32px]">
                <p className="text-gray-A text-[1.4rem] leading-[22px] mb-[6px] text-right  fa-format-400">
                    افزودن فایل
                </p>
                <input type="file" className="w-0 h-0 d-none " />
                <Button
                    variant="outlined"
                    className="!flex !w-full !bg-transparent !justify-center !items-center !border-1 !border-blue !border-dashed !rounded-[15px] h-[48px]"
                >
                    <p className="!text-white  text-[1.4rem] leading-[22px]  fa-format-300">
                        افزودن فایل
                    </p>
                    <div className="w-[20px] h-[18px]  ml-[8px] ">
                        <PaperclipSVG />
                    </div>
                </Button>
            </div>
            <div className="w-full">
                <Button className="!rounded-[100px] !bg-blue h-[48px] w-full !flex !align-items-center cursor-none !md:cursor-pointer  !text-white !text-[1.6rem] !leading-[22px] !fa-format-400 ">
                    <p className="!text-white"> ارسال</p>
                </Button>
            </div>
        </div>
    );
}

export default CreateNewMessage;

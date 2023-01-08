import React from "react";
import {Button} from "@mui/material";
import LampSVG from "../assets/SupportLampSVG";
import {useImperativeHandle} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function FaqBottomSheet({onCloseBottomSheet}, ref) {
    const [SubCategory, setSubCategory] = useState({})
    const navigate = useNavigate()
    useImperativeHandle(ref, () => ({
        setData(item) {
            console.log("Svdsdvsdvsdv", item);
            setSubCategory(item)
        },
    }));

    const gotToCreateTicket = (item) => {
        navigate("/support/create-ticket", {state: {item}})
    }
    return (
        <div>
            <div className="w-full max-w-[480px]    bg-black-box mx-auto " dir="rtl">
                <div className="flex flex-col  ">
                    <p className="flex text-gray-A text-[1.4rem] leading-[24px] fa-format-400 text-right  ">
                        {SubCategory?.question}
                    </p>
                    <div className="flex items-center w-full justify-center mt-[18px]">
                        <div className="w-[24px] h-[26px] ml-[9px] ">
                            <LampSVG/>
                        </div>
                        <p className="flex text-yellow text-[1.6rem] leading-[16px] fa-format-500 ">
                            پاسخ
                        </p>
                    </div>
                    <p className="flex text-white text-[1.4rem] leading-[24px] fa-format-300 mt-[14px] text-right"
                       dangerouslySetInnerHTML={{__html: SubCategory?.answer}}>
                    </p>
                    <div className="flex items-center justify-between mt-[24px]">
                        <Button
                            onClick={onCloseBottomSheet}
                            className="!rounded-[100px] !bg-blue h-[44px] w-[36%] !flex !align-items-center cursor-none !md:cursor-pointer  !text-white !text-[1.4rem] !leading-[22px] !fa-format-300 "
                        >
                            <p className="!text-white"> متوجه شدم</p>
                        </Button>
                        <Button
                            variant="outlined"
                            className="!rounded-[100px] !bg-[rgba(94,70,248,0.2)] h-[44px] w-[61.5%] !flex !align-items-center !border-[1px] !border-blue cursor-none !md:cursor-pointer !text-white !text-[1.4rem] !leading-[22px] !fa-format-300"
                            onClick={() => gotToCreateTicket(SubCategory)}
                        >
                            <p className="!text-white"> جواب را نگرفتم / ثبت تیکت</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.forwardRef(FaqBottomSheet);

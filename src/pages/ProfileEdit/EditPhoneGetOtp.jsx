import React from 'react';
import EditSvg from "../../components/login/assets/EditSvg";
import OtpComponent from "../login/OtpComponent";
import {CustomButton} from "../../components/customButton/CustomButton";
import {ToolBar} from "../../components/ToolBar/ToolBar";
import {Link} from "react-router-dom";
import BackgroundBlurSVG from '../../components/common/assets/BackgroundBlurSVG';

function EditPhoneGetOtp(props) {
    return (
        <div className=" w-full h-full bg-[#0F0817] overflow-scroll pb-11 " dir="rtl">
            <div className="w-full h-full relative z-1 container max-w-[640px] mx-auto ">
                <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-10">
                    <BackgroundBlurSVG/>
                </div>
                <ToolBar title="ویرایش شماره"/>
                <div className="h-full md:overflow-scroll  w-full bg-black-BG  ">
                    <div className="flex max-w-[640px]  mx-auto flex-col   justify-center  items-center">
                        <div className="flex flex-col  mt-[68px] z-10  w-full justify-center items-center">
                            <p className="text-white text-[2rem] z-10 fa-format-300"> تایید شماره موبایل</p>
                            <Link
                                to={'/edit-phone-number'}
                                className="!text-gray-B !text-[1.6rem] !p-[1px] mt-4  bg-edit-phone-number-box-background  !w-[296px] !h-[88px] !z-10 !fa-format-500">
                                <div
                                    className='w-full  h-full  rounded-[10px] flex flex-col justify-start items-center'>
                                    <p className='text-[#FAFAFA] fa-format-200 text-[1.4rem] mt-8'>
                                        <span>کد تایید برای شماره</span>
                                        <span className='ss03 mx-2'>۰۹۱۷۰۰۰۰۰۰۰ </span>
                                        <span>ارسال شد</span>
                                    </p>
                                    <div className='flex flex-row gap-3 mt-4'>
                                        <span>
                                            <EditSvg/>
                                        </span>
                                        <p className='text-blue fa-format-300 text-[1.2rem] '>
                                            ویرایش شماره
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="w-auto  flex flex-col justify-center items-end pt-5 pb-6">
                                <p className="w-[88%] text-right mx-auto text-gray-A text-[1.4rem] mt-1 z-10 fa-format-300">
                                    کد تایید
                                </p>
                                <div
                                    dir="ltr"
                                    className="w-full  rounded-[15px] mt-1 mb-7 flex h-[48px] flex-row justify-center p-3 items-center">
                                    <OtpComponent
                                        otpStyle="cursor-none shadow-otp-shadow  flex flex-row-reverse text-left justify-center bg-black-box  rounded-[12px] fa-format-600 text-[2rem] w-[48px] h-[48px] m-[4px] text-center mt-[10px] text-gray2 fa-num"
                                    />
                                </div>
                            </div>
                            <CustomButton
                            >
                                تایید
                            </CustomButton>
                            <div className='text-[1.4rem] mt-10 text-[#BBB8C2] fa-format-300'>
                                <span>ارسال مجدد کد تایید</span>
                                <span
                                    className='text-blue mr-4 fa-num text-[1.4rem] fa-format-400'>
                                    01:26
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPhoneGetOtp;

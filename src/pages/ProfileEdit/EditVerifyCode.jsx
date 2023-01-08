import React, { useCallback, useEffect, useState } from 'react'
import TriangleLoginSvg from '../../components/login/assets/TriangleLoginSvg'
import { editPhoneNumber, getOtp, verifyCode } from '../../service/ApiClient';
import { toast } from "react-toastify";
import { CustomButton } from '../../components/customButton/CustomButton';
import { Button, CircularProgress } from '@mui/material';
import EditSvg from '../../components/login/assets/EditSvg';
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { login, userData } from '../../redux/login/LoginSlice';
import Resend from '../../components/login/assets/Resend';
import { Box } from '@mui/system';
import VimoIconSVG from '../../components/common/assets/VimoIconSVG';
// import TriangleLoginSVG from '../../components/common/assets/TriangleLoginSvg';
import OtpComponent from '../login/OtpComponent';


function EditVerifyCode() {
    const [error, setError] = useState()
    const { state } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [otp, setOtp] = useState(null);
    const [timer, setTimer] = useState(120);
    const [loading, setLoading] = useState(false);

    const mutateVerifyCode = useMutation((verifyData) => editPhoneNumber(verifyData), {
        onSuccess: (res) => {
            //distpach token when response true
            if (res?.data?.done) {
                        navigate("/setting", { replace: true });
            }
            setError(res?.data?.error?.message);
        }
    })
    const goToEditNumber = () => {
        navigate("/profile/edit-phone-number", { replace: true, state });
    };
    const handleVerifyCode = () => {
        mutateVerifyCode.mutate({ phone: state?.phone, code: otp });
    };
    const dispatchToken = (token) => {
        dispatch(
            login({
                token: token,
            })
        );
    };
    const dispatchUserData = (Data) => {
        dispatch(
            userData({
                user: Data,
            })
        );
    };
    // create resend timeout
    const otpTimeOut = useCallback(
        () => setTimer((currTimer) => currTimer - 1),
        []
    );
    //handle resend otp
    useEffect(() => {
        if (timer > 0) {
            setTimeout(otpTimeOut, 1000);
        } else {
            clearTimeout(otpTimeOut);
        }
    }, [timer, otpTimeOut]);

    const resetOTpTimer = function () {
        if (!timer) {
            // call api for resend otp
            setLoading(true)
            getOtp(state?.phone).then((res) => {
                setTimer(120)
                setLoading(false)
            }
            );
        }
    };
    const handleSubmitWithEnter = (event) => {
        if (event.key === 'Enter') {
            handleVerifyCode()
        }
    }
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="relative h-[237px]">
                <div className="absolute overflow-hidden">
                    <div className="bg-svg-gradient">
                        <div className="bg-svg-gradient2">
                            <div className="w-screen h-[237px] relative">
                                {/* <TriangleLoginSVG /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full  w-full bg-black-BG">
                <div className="flex max-w-[640px] mx-auto flex-col justify-center mt-[-9rem] items-center">
                    <div className="z-10">
                        <VimoIconSVG />
                    </div>
                    <div className="flex flex-col mt-[2.5rem] z-10 w-full justify-center items-center">
                        <p className="text-white text-[2rem] z-10 fa-format-300"> تایید شماره موبایل</p>
                        <Button
                            className="!text-gray-B !text-[1.6rem] !p-[1px] !rounded-[10px] !mt-4 !border-1 !bg-gradient-to-r !from-border-gradiant-2 !to-border-gradiant-1 !w-[296px] !h-[88px] !z-10 !fa-format-500"

                        >
                            <div
                                className='w-full bg-gradient-to-r from-bg-gradiant-1 to-bg-gradiant-2 h-full bg-black-BG rounded-[10px] flex flex-col justify-start items-center'
                            >
                                <p className='text-[#FAFAFA] fa-format-200 text-[1.4rem] mt-8'>
                                    کد تایید برای شماره
                                    <span className='ss03 mx-2'>
                                        {state?.phone}
                                    </span>
                                    ارسال شد
                                </p>
                                <div
                                    onClick={goToEditNumber}
                                    className='flex flex-row gap-3 mt-4'
                                >
                                    <p className='text-blue fa-format-300 text-[1.2rem]'>
                                        ویرایش شماره
                                    </p>
                                    <span>
                                        <EditSvg />
                                    </span>
                                </div>
                            </div>
                        </Button>
                        <div className="w-auto flex flex-col justify-center items-end pt-5 pb-8">
                            <p
                                className="w-[88%] text-right mx-auto text-gray-A text-[1.4rem] mt-2 z-10 fa-format-300"
                            >
                                کد تایید
                            </p>

                            <div
                                onKeyPress={(e) => handleSubmitWithEnter(e)}
                                className="w-full rounded-[15px] mt-1 mb-3 flex h-[48px] flex-row justify-center p-3 items-center"
                            >
                                <OtpComponent
                                    setOtp={setOtp}
                                    otp={otp}
                                    otpStyle="sm-500:cursor-pointer cursor-none shadow-otp-shadow flex flex-row-reverse text-left justify-center bg-black-box rounded-[12px] fa-format-600 text-[2rem] w-[48px] h-[48px] m-[4px] text-center mt-[10px] text-gray2 fa-num"
                                />
                            </div>
                            <div className='h-[10px]'>
                                {
                                    error &&
                                    <div className='text-[#EB5757] mr-3 text-[1.2rem]'>
                                        {error}
                                    </div>
                                }
                            </div>
                        </div>
                        <CustomButton
                            Loading={mutateVerifyCode.isLoading}
                            onClick={handleVerifyCode}
                        >
                            تایید
                        </CustomButton>
                        {/* resend otp */}
                        <div
                            dir="rtl"
                            className="flex flex-row-reverse justify-end mt-[10px] space-x-2 text-[#BBB8C2]"
                        >
                            {timer > 0 ? (
                                loading ?
                                    <Box sx={{ display: "flex" }}>
                                        <CircularProgress color="primary" size={30} />
                                    </Box>
                                    :
                                    <div className="flex flex-row-reverse space-x-2">
                                        <div
                                            className="text-[1.4rem]  items-center text-center leading-[30px] fa-format-300  text-blue fa-num gap-1 flex flex-row-reverse"
                                        >

                                            <span> {minutes < 2 ? `0${minutes}` : minutes}</span>
                                            <span>:</span>
                                            <span className='w-6'>{seconds < 10 ? `0${seconds}` : seconds}</span>
                                            <span className='hidden'> {timer}</span>

                                        </div>
                                        <span
                                            className="text-[1.4rem] leading-[30px] text-right fa-format-300 text-gray-A"
                                        >
                                            ارسال مجدد کد تایید
                                        </span>
                                    </div>
                            ) : (
                                <span
                                    className="fa-format-300 items-center gap-4 text-[1.4rem] text-center text-gray-A mr-[10px] flex min-w-fit z-10"
                                    onClick={resetOTpTimer}
                                >
                                    {
                                        loading ?
                                            <Box sx={{ display: "flex" }}>
                                                <CircularProgress color="inherit" size={30} />
                                            </Box>
                                            :
                                            <>
                                                <Resend />
                                                {" "}
                                                ارسال مجدد کد تایید
                                            </>
                                    }
                                </span>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditVerifyCode

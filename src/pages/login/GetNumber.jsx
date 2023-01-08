import {useFormik} from "formik";
import React, {useEffect} from "react";
import {useState} from "react";
import {CustomButton} from "../../components/customButton/CustomButton";
import Privacy from "../../components/privacy/Privacy";
import {PHONE_VALIDATION_SCHEMA} from "../../constant/Validation";
import {getOtp} from "../../service/ApiClient";
import {useMutation} from "@tanstack/react-query";
import {useLocation, useNavigate} from "react-router-dom";
import {checkPhoneWhitRegex, fixedPhone} from "../../utils/helper/NumberFormatter";
import VimoIconSVG from "../../components/common/assets/VimoIconSVG";
import TriangleLoginSVG from "../../components/common/assets/TriangleLoginSvg";

function GetNumber(props) {
    const [showError, setShowError] = useState(false);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const {state} = useLocation();
    const mutateOtp = useMutation(["getOtp"], (phone) => getOtp(phone), {
        onSuccess: (res) => {
            if (res?.data?.done) {
                navigate("/login/verification-code", {
                    replace: true,
                    state: {phone: fixedPhone(formik.values.phone.toEnglishDigits())},
                });
            }
            setError(res?.data?.error?.message)
        },
    });

    const formik = useFormik({
        initialValues:
            {
                phone: '',
            },
        validationSchema: PHONE_VALIDATION_SCHEMA,
        onSubmit: (values) => {
            handleSendPhoneNumber(values.phone.toEnglishDigits())
        }
    })
    //   get phone number if come from edit number
    useEffect(() => {
        if (state?.phone !== undefined) {
            formik.setFieldValue("phone", state?.phone);
        }
    }, []);

    // send phone number to web service
    const handleSendPhoneNumber = (phone) => {
        mutateOtp.mutate(formatPhone(phone))
    }

    const formatPhone = (phone) => {
        // check number validation
        if (checkPhoneWhitRegex(phone)) {
            return fixedPhone(phone);
        }
    };


    return (
        <div className="w-full h-full flex flex-col">
            <div className="relative h-[237px] mb-[100]">
                <div className="absolute overflow-hidden">
                    <div className="bg-svg-gradient">
                        <div className="bg-svg-gradient2">
                            <div className="w-screen h-[237px] relative">
                                <TriangleLoginSVG/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full  md:pt-[86px] md:overflow-scroll w-full bg-black-BG">
                <div className="flex max-w-[640px] mx-auto flex-col justify-center  items-center pt-[48px]">
                    <div className="z-10">
                        <VimoIconSVG/>
                    </div>
                    <div className="flex flex-col  z-10 w-full justify-center items-center">
                        <p className="text-white text-[2rem] z-10 fa-format-400 mt-28">ثبت نام</p>
                        <p className="text-gray-B text-[1.6rem] mt-6 z-10 fa-format-500">
                            شماره موبایل خود را وارد کنید
                        </p>

                        <div className="w-full flex flex-col justify-center items-end p-6">
                            <p className="text-gray-A text-[1.4rem] mt-2 z-10 fa-format-400">شماره موبایل</p>
                            <div
                                className={`w-full bg-black-box rounded-[15px] mt-4 flex h-[48px] flex-row justify-start p-3 items-center ${(formik.isValid === false && showError) || !!error ? "border-b-2 border-[#EB5757]" : ""} `}
                            >
                                <span className="text-[#FAFAFA] fa-format-300 text-[1.6rem] px-6 fa-num">+98</span>
                                <div className="h-[24px] bg-gray-icon w-[1px]"></div>
                                <input
                                    onKeyPress={(e) => e.key === 'Enter' && formik.handleSubmit()}
                                    autoComplete="off"
                                    type="tel"
                                    name="phone"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone}
                                    maxLength="13"
                                    className="w-full h-full text-[#FAFAFA] fa-num fa-format-400 mx-6 text-[1.6rem] !bg-black-box outline-none !bg-transparent"
                                />

                            </div>
                            <div className="h-[6px]">
                                {formik.isValid === false && showError &&
                                    (
                                        <p className="text-[#EB5757] text-[1.2rem] fa-format-400 mt-2">
                                            شماره تلفن را وارد کنید
                                        </p>
                                    )
                                }
                                {error && !(formik.isValid === false && showError) &&
                                    <div>
                                        <p className="text-[#EB5757] text-[1.2rem] fa-format-400 mt-2">{error}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="mt-5">
                            <CustomButton
                                Loading={mutateOtp.isLoading}
                                onClick={() => {
                                    formik.handleSubmit()
                                    setShowError(true)
                                }}>
                                دریافت کد
                            </CustomButton>
                        </div>

                        <Privacy/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetNumber;

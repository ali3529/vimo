import * as React from 'react';
import style from "./VerificationCode.module.css";
import {CustomButton} from "../../customButton/CustomButton";
import chevronLeftIcon from "../../../assets/icons/chevronLeftIcon.svg";
import editPenIcon from "../../../assets/icons/editPenIcon.svg"
import OtpInput from "react-otp-input";
import {useEffect, useState} from "react";
import {PhoneNumberInput} from "../../phoneNumberInput/PhoneNumberInput";

export const VerificationCodes = () => {

    const [otpValue, setOtpValue] = useState("")
    const [isReady, setIsReady] = useState(false)
    const [isShowEdit, setIsShowEdit] = useState(false)

    const otpChangHandler = (otp) => {
        setOtpValue(otp)
    }
    useEffect(() => {
        otpValue && console.log('otp:', otpValue)
    }, [otpValue]);


    return (
        <div className={style.verificationCodesContainer}>
            <div className={style.formHeader}>
                <div id={'backBtn'} className={style.backBtn}>
                    <img className={style.backIcon} src={chevronLeftIcon} alt={"chevronLeftIcon"}/>
                </div>
                <div className={style.formTitleContainer}>
                    <div className={style.formTitle}>تایید شماره موبایل</div>
                    <div className={style.formDescription}>کد تایید پیامک شده را وارد کنید...</div>
                </div>
            </div>

            <div className={style.editPhoneBtnContainer}>
                <div className={style.editPhoneBtn}>
                    <div className={style.penIconContainer}><img src={editPenIcon} alt={'editPenIcon'}/></div>
                    <div className={style.editTitle}>ویرایش</div>
                    <div className={`${style.editPhoneNumber} faNum`}>09366800203</div>
                </div>
            </div>

            {
                isShowEdit
                &&
                <PhoneNumberInput
                    id={"verificationCodesInput"}
                />
            }

            {
                !isShowEdit
                &&
                <div className={style.otpMainContainer}>
                    <div className={`${style.formDescription} ${style.otpDescription}`}>کد تایید:</div>
                    <OtpInput
                        value={otpValue}
                        onChange={otpChangHandler}
                        placeholder={"----"}
                        containerStyle={style.otpContainer}
                        inputStyle={`faNum ${style.otpInput}`}
                        errorStyle={style.wrongCodeInput}
                        isInputNum={true}
                        hasErrored={true}
                    ></OtpInput>
                    <div className={`${style.formDescription} ${style.otpWrongDescription} WrongText`}>کد تایید اشتباه است</div>
                </div>
            }

            {
                isShowEdit
                &&
                <CustomButton
                    id={"editPhoneNumberBtn"}
                    isReady={isReady}
                >
                    {/*color={`${isReady ? "#B1FF74" : "#9D9DB6"}`}*/}
                    تایید
                </CustomButton>
            }

            {
                !isShowEdit
                &&
                <CustomButton
                    id={"verificationCodesBtn"}
                    isReady={isReady}
                >
                    {/*color={`${isReady ? "#B1FF74" : "#9D9DB6"}`}*/}
                    تایید
                </CustomButton>
            }
            <div className={style.resendCodeContainer}>
                <div className={style.resendCodeTitle}>پیامکی دریافت نکردید؟</div>
                <div className={style.resendCountDownContainer}>
                    <div className={`${style.counterContainer}`}>
                        <div className={`${style.counterSecond2}  faNum`}>0</div>
                        <div className={`${style.counterSeconds1} faNum`}>6</div>
                    </div>
                    <div className={style.countDownTitle}> ثانیه تا دریافت مجدد</div>
                </div>
                <div className={style.resendBtn}>دریافت مجدد پیامک</div>
            </div>
        </div>
    );
};
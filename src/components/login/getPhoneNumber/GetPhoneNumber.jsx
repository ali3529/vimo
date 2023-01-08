import * as React from 'react';
import {PhoneNumberInput} from "../../phoneNumberInput/PhoneNumberInput";
import {CustomButton} from "../../customButton/CustomButton";

export const GetPhoneNumber = () => {
    return (
        <div className={style.getPhoneNumberContainer}>
            <div className={style.formHeader}>
                <div className={style.formTitle}>ایجاد حساب کاربری</div>
                <div className={style.formDescription}>لطفا شماره موبایل خود را وارد کنید...</div>
            </div>
            <PhoneNumberInput
                id={"loginInput"}
            />
            <CustomButton id={"loginBtn"}>
                {/*color={`${isReady ? "#B1FF74" : "#9D9DB6"}`}*/}
                دریافت کد
            </CustomButton>
        </div>
    );
};
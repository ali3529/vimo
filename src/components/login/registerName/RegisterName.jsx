import * as React from 'react';
import style from "./RegisterName.module.css";
import {CustomButton} from "../../customButton/CustomButton";
import chevronLeftIcon from "../../../assets/icons/chevronLeftIcon.svg";
import {CustomInput} from "../../customInput/CustomInput";

export const RegisterName = () => {
    return (
        <div className={style.registerNameContainer}>
            <div className={style.formHeader}>
                <div id={'backBtn'} className={style.backBtn}>
                    <img className={style.backIcon} src={chevronLeftIcon} alt={"chevronLeftIcon"}/>
                </div>
                <div className={style.formTitleContainer}>
                    <div className={style.formTitle}>وارد کردن نام</div>
                    <div className={style.formDescription}>یک نام برای اکانت خودتان وارد کنید</div>
                </div>
            </div>
            <CustomInput id={"registerInput"} />
            <CustomButton id={"registerBtn"}>
                {/*color={`${isReady ? "#B1FF74" : "#9D9DB6"}`}*/}
                دریافت کد
            </CustomButton>
        </div>
    );
};
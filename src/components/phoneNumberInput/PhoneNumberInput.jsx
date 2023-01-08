import * as React from 'react';
import style from "./PhoneNumberInput.module.css";
import {useState} from "react";

export const PhoneNumberInput = ({id, setPhoneNumber}) => {

    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(null)


    return (
        <div id={`${id}`} className={style.mainInputContainer}>
            <div className={style.inputTitle}>شماره موبایل:</div>
            <div className={style.inputContainer}>
                <input autoFocus type={'tel'} maxLength={'15'} className={[style.inputNumber, 'faNum'].join(" ")}/>
                <div className={style.preNumber}>+۹۸</div>
            </div>
            <div className={`${style.wrongNumberNotification}`}>شماره اشتباه است</div>
            {/*style={{display: `${isValidPhoneNumber === false ? "block" : "none"}`}}*/}
        </div>
    )
};
import * as React from 'react';
import style from './CustomInput.module.css'

export const CustomInput = ({id,setName}) => {
    return (
        <div className={style.mainInputContainer} >
            <div className={style.inputTitle}>نام:</div>
            <div className={style.nameInputContainer}>
                <input id={`${id}`} autoFocus type={'text'}  className={style.nameInput}/>
            </div>
            <div className={`${style.wrongNameNotification}`}>تعداد حروف باید بیش از ۲ باشد</div>
            {/*style={{display: `${isValidPhoneNumber === false ? "block" : "none"}`}}*/}
        </div>
    );
};
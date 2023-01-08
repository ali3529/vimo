import { toast } from "react-toastify"

export const fixedPhone = (_phone) => {
    let phone = _phone
    switch (phone?.length) {
        case 13: {
            return `0${phone.substring(3, phone.length)}`
        }
        case 12: {
            return `0${phone.substring(2, phone.length)}`
        }
        case 11: {
            return `0${phone.substring(1, phone.length)}`
        }
        default: {
            return `0${phone}`
        }
    }
}


export const checkPhoneWhitRegex = (phone) => {
    const regEX = /^(\98|0)?9\d{9}$/;
    if (regEX.test(phone)) {
        return true;
    }
};

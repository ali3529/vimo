import * as Yup from 'yup';

export const PHONE_VALIDATION_SCHEMA = () => {
    return Yup.object({
        phone: Yup.string().required("لطفا شماره خود را وارد کنید")
    })
}


export const DESCRIPTION_NEW_MESSAGE_VALIDATION_SCHEMA = () => {
    return Yup.object({
        description: Yup.string().required("لطفا متن پیام را وارد کنید ")
    })
}



export const ADD_NEW_TICKET_VALIDATION_SCHEMA = () => {
    return Yup.object({
        description: Yup.string().required("لطفا توضیحات پیام را وارد کنید "),
        subject: Yup.string().required("لطفا موضوع   پیام را وارد کنید "),
        category_faq_id: Yup.string().required(""),
    })
}

export const EDIT_PROFILE_VALIDATION_SCHEMA = () => {
    return Yup.object({
        full_name : Yup.string().required("نام را وارد کنید"),
    })
}
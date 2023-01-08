import { Button } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import * as React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import BackgroundBlurSVG from '../../../components/common/assets/BackgroundBlurSVG';
import ChevronDownSVG from '../../../components/common/assets/ChevronDownSVG';
import LottieLoading from '../../../components/common/LottieLoading';
import UploadFile from '../../../components/common/uploadFile/UploadFile';
import SelectCategoryBottomSheetContainer
    from '../../../components/support/bottomSheet/SelectCategoryBottomSheetContainer';
import { ToolBar } from '../../../components/ToolBar/ToolBar';
import { ADD_NEW_TICKET_VALIDATION_SCHEMA } from '../../../constant/Validation';
import { selectCategory } from '../../../redux/ticket/SelectedTicketSlice';
import { addNewTicket, sendCompleteRequest } from '../../../service/ApiClient';

let replyId = null
export const CreateTicket = () => {
    const [subCategoryData, setSubCategoryData] = useState({})
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState({})
    const categorySelector = useSelector(selectCategory)
    const location = useLocation()
    const navigate = useNavigate()
    const uploadFileRef = useRef()
    const selectCategoryBottomSheetRef = useRef()

    const addNewTicketMutation = useMutation((data) => addNewTicket(data), {
        onSuccess: (res) => {
            replyId = (res?.data?.result?.ticket_reply?.id)
            uploadFiles(res?.data?.result?.ticket_reply?.id)
        }
    })

    const formik = useFormik({
        initialValues: {
            faq_id: subCategoryData?.id ? subCategoryData?.id : null,
            category_faq_id: category?.id,
            subject: subCategoryData?.question ? subCategoryData?.question : "",
            description: "",
        },
        enableReinitialize: true,
        validationSchema: ADD_NEW_TICKET_VALIDATION_SCHEMA,
        onSubmit: (data) => {
            setLoading(true)
            addNewTicketMutation.mutate(data)
        }
    })

    const sendCompleteRequestMutation = useMutation((replyId) => sendCompleteRequest(replyId), {
        onSuccess: res => {
            setLoading(false)
            handleBackSteps(res?.data?.result?.ticket_reply?.ticket)
            formik.resetForm()
            uploadFileRef.current.resetData()
        }
    })

    const handleBackSteps = (ticket) => {
        ticket.is_new = true
        navigate(-3)
        setTimeout(() => {
            navigate("/support/message/show", { state: ticket });

        }, 10);
    }

    useEffect(() => {
        setSubCategoryData(location?.state?.item)
    }, [location?.state])

    useEffect(() => {
        setCategory(categorySelector)
    }, [categorySelector])

    const handleChangeCategory = () => {
        selectCategoryBottomSheetRef.current.setOpen(category)
    }

    //start upload File
    const uploadFiles = (replyID) => {
        uploadFileRef.current.uploadFiles(replyID)
    }
    //event for send complete request when file upload Done
    const CompleteRequestEvent = () => {
        sendCompleteRequestMutation.mutate(replyId)
    }

    const publishVideo = true
    return (
        <div dir="rtl" className='bg-[#0F0817] h-full w-full relative overflow-scroll '>
            <div className='h-full w-full relative max-w-[480px] container mx-auto overflow-scroll'>
                <ToolBar title="ثبت تیکت" />
                <div>
                    <div className="fixed top-[-27%] left-[50%] translate-x-[-50%] z-0 ">
                        <BackgroundBlurSVG />
                    </div>
                    {publishVideo &&
                        <>
                            <p className='text-gray-A text-[1.4rem] fa-format-300 mt-32  w-[88%] mx-auto'>
                                {subCategoryData?.ticket_title}
                            </p>
                            <div className='flex flex-col gap-5 w-[85%] mx-auto mt-4 text-[1.4rem] text-white fa-format-100 leading-6'
                                dangerouslySetInnerHTML={{ __html: subCategoryData?.ticket_description }}
                            >
                            </div>
                        </>
                    }
                    <div>
                        <div
                            className={`text-gray-A  w-[88%] mx-auto text-[1.6rem] fa-format-300 pt-10 ${publishVideo ? "" : "mt-24"}`}
                        >
                            دسته بندی
                        </div>
                        <Button
                            className='!bg-blue !w-[88%] !mx-auto !h-[56px] !flex !items-center !justify-between !rounded-[15px] !mt-2 !px-8'
                            onClick={handleChangeCategory}
                        >
                            <div className='flex items-center justify-between gap-5'>
                                <img className='w-[30px] h-[30px]' src={category?.enable_icon} />
                                <p className='text-[1.4rem] text-white fa-format-300'>
                                    {category?.title}
                                </p>
                            </div>
                            <ChevronDownSVG />
                        </Button>
                    </div>
                    <div
                        className='mt-6 mb-[10px] bg-[#28242D] w-[88%] mx-auto flex flex-col gap-4 rounded-[20px] p-[14px] !z-30 relative'
                    >
                        <p className="text-[1.4rem] mt-2 text-gray-A fa-format-300 -mb-[4px]">
                            عنوان
                        </p>
                        <input
                            className={`!py-5 !px-8 !pr-4 !pl-7 outline-none bg-transparent text-white text-[1.2rem] fa-format-300 text-right !border-[1px] !rounded-[15px] ${formik.errors.subject ? "!border-red" : "!border-blue"}   !flex !justify-start`}
                            name="subject"
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                        />
                        <p className="text-[1.2rem] mb-4 text-red h-1 fa-format-300 ">
                            {formik.errors.subject && formik.errors.subject}
                        </p>
                        <p className="text-[1.4rem]  text-gray-A fa-format-300 mt-[4px] -mb-[4px]">
                            توضیحات
                        </p>
                        <textarea
                            resize="none"
                            rows={11}
                            name="description"
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            className={`bg-transparent border-[1px] ${formik.errors.description ? "border-red" : "border-blue"}  rounded-[15px] focus:outline-none py-4 px-8 text-white text-[1.2rem] fa-format-300 text-right`}
                        />
                        <p className="text-[1.2rem] mb-4 text-red h-1 fa-format-300 ">
                            {formik.errors.description && formik.errors.description}
                        </p>
                        <UploadFile ref={uploadFileRef} sendCompleteRequest={() => CompleteRequestEvent()} />
                        <Button
                            className='!bg-blue !w-full !rounded-[33px] !flex !items-center !justify-center !h-[48px]'
                            type='submit'
                            onClick={!loading && formik.handleSubmit}
                        >
                            {
                                loading
                                    ? <LottieLoading width={"32px"} height={"32px"} />
                                    : <p className='text-white text-[1.6rem] fa-format-300'>ارسال</p>
                            }
                        </Button>
                    </div>
                </div>
                <SelectCategoryBottomSheetContainer ref={selectCategoryBottomSheetRef} />
            </div>
        </div>
    );
};
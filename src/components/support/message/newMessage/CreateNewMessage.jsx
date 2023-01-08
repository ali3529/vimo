import {Button, Skeleton} from '@mui/material';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useFormik} from 'formik';
import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import {useRef} from 'react';
import {useImperativeHandle} from 'react';
import {DESCRIPTION_NEW_MESSAGE_VALIDATION_SCHEMA} from '../../../../constant/Validation';
import {addMessageReply, sendCompleteRequest} from '../../../../service/ApiClient';
import SwipeBottomSheet from '../../../bottomSheet/SwipeBottomSheet';
import SpinnerLoadingSVG from '../../../common/assets/SpinnerLoadingSVG';
import LottieLoading from '../../../common/LottieLoading';
import UploadFile from '../../../common/uploadFile/UploadFile';

let replyId = null

function CreateNewMessage({}, ref) {
    const [openAddFile, setOpenAddFile] = React.useState(false);
    const [ticketId, setTicketId] = useState(null)
    const [loading, setLoading] = useState(false)
    const uploadFileRef = useRef()
    const queryClient = useQueryClient()

    //close SwipeBottomSheet
    const toggleOpenAddFileDrawer = (newOpen) => () => {
        setOpenAddFile(newOpen);
    };

    //open SwipeBottomSheet with ref
    useImperativeHandle(ref, () => ({
        openNewMessageSwipeBottomSheet(id) {
            setTicketId(id)
            setOpenAddFile(true)
        },
    }));

    //start upload File
    const uploadFiles = (replyID) => {
        uploadFileRef.current.uploadFiles(replyID)
    }

    //send message to endpoint
    const addMessageReplyMutation = useMutation((data) => addMessageReply(data), {
        onSuccess: (res) => {
            replyId = (res?.data?.result?.ticket_reply?.id)
            uploadFiles(res?.data?.result?.ticket_reply?.id)
        }
    })

    //send complete request when file and message uploaded
    const sendCompleteRequestMutation = useMutation((replyId) => sendCompleteRequest(replyId), {
        onSuccess: res => {
            queryClient.invalidateQueries(["getTicketMessageQuery"])
            setOpenAddFile(false)
            formik.resetForm()
            uploadFileRef.current.resetData()
            setLoading(false)
        }
    })

    //event for send complete request when file upload Done
    const CompleteRequestEvent = () => {
        sendCompleteRequestMutation.mutate(replyId)
    }

    const formik = useFormik({
        initialValues: {
            description: ""
        },
        validationSchema: DESCRIPTION_NEW_MESSAGE_VALIDATION_SCHEMA,
        onSubmit: (data) => {
            data.ticket_id = ticketId
            setLoading(true)
            addMessageReplyMutation.mutate(data)
        }
    })

    return (
        <SwipeBottomSheet
            Content={
                <div
                    dir="rtl"
                    className=' bg-[#28242D] w-[100%] mx-auto flex flex-col gap-4  rounded-[20px] !z-30 relative'
                >
                    <div className="w-full flex flex-row justify-center items-center">
                        <p className="text-white text-[1.6rem] fa-format-400 -mb-[4px]">
                            متن پیام
                        </p>
                    </div>
                    <textarea
                        resize="none"
                        rows={6}
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        className='bg-transparent border-[1px] border-blue text-white text-[14px]  rounded-[15px] focus:outline-none py-4 px-8'
                    />
                    <p className="text-[1.2rem] mb-4 text-red h-1 fa-format-300 ">
                        {formik.errors.description && formik.errors.description}
                    </p>
                    <UploadFile ref={uploadFileRef} sendCompleteRequest={() => CompleteRequestEvent()}/>
                    <Button
                        type='submit'
                        // disabled={loading}
                        onClick={!loading&&formik.handleSubmit}
                        className='!bg-blue !w-full !rounded-[33px] !flex !items-center !justify-center !h-[48px]'
                    >
                        {loading 
                        ?<LottieLoading width={"32px"} height={"32px"}/>
                        : <p className='text-white text-[1.6rem] fa-format-300'>ارسال</p>
                        }
                    </Button>
                </div>
            }
            open={openAddFile}
            toggleDrawer={toggleOpenAddFileDrawer}
        />
    )
}

export default React.forwardRef(CreateNewMessage)
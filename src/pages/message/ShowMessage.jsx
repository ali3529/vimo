import React, {useEffect, useState} from "react";
import {CustomButton} from "../../components/customButton/CustomButton";
import MessageDetail from "../../components/support/message/showMessage/MessageDetail";
import SenderMessageItem from "../../components/support/message/showMessage/SenderMessageItem";
import ReceiveMessageItem from "../../components/support/message/showMessage/RecieveMessageItem";
import SupportMainPageButtonLogoSVG from "../../components/support/assets/SupportMainPageButtonLogoSVG";
import {ToolBar} from "../../components/toolBar/ToolBar";
import {useLocation, useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getTicketsMessage} from "../../service/ApiClient";
import RecieveMessageItemShimmer from "../../components/support/message/showMessage/RecieveMessageItemShimmer";
import SwipeBottomSheet from "../../components/bottomSheet/SwipeBottomSheet";
import {Button} from "@mui/material";
import CreateTicketPlusSVG from "../../components/support/assets/CreateTicketPlusSVG";
import CreateTicketPictureSVG from "../../components/support/assets/CreateTicketPictureSVG";
import CreateTicketExclamationPoint from "../../components/support/assets/CreateTicketExclamationPoint";
import CreateTicketTrashCanSVG from "../../components/support/assets/CreateTicketTrashCanSVG";
import CreateTicketGreenTickSVG from "../../components/support/assets/CreateTicketGreenTickSVG";
import CreateTicketMultiplySVG from "../../components/support/assets/CreateTicketMultiplySVG";
import CreateTicketPauseButtonSVG from "../../components/support/assets/CreateTicketPauseButtonSVG";
import PaperclipSVG from "../../components/common/assets/PaperclipSVG";
import UploadFile from "../../components/common/uploadFile/UploadFile";
import { useRef } from "react";
import CreateNewMessage from "../../components/support/message/newMessage/CreateNewMessage";
import MessageNotification from "../../components/support/message/showMessage/MessageNotification";

function ShowMessage() {
    const [ticket, setTicket] = useState({});
    const [message, setMessage] = useState([]);
    const location = useLocation();
    const navigate=useNavigate()
    const CreateNewMessageRef=useRef()

    const handleOpenAddFile = () => {
        CreateNewMessageRef.current.openNewMessageSwipeBottomSheet(ticket?.id)
    }

    useEffect(() => {
        setTicket(location?.state);
    }, [location?.state]);

    const getTicketMessageQuery = useQuery(
        ["getTicketMessageQuery"],
        () => getTicketsMessage(location?.state?.ticket_code),
        {
            onSuccess: (res) => {
                setMessage(res?.data?.result?.ticket?.ticket_replies);
            },
            refetchOnWindowFocus:false
        }
    );

    useEffect(() => {
       
    }, [])
    

    return (
        <div dir="rtl" className="w-full h-full bg-support-background">
            <div className="w-full h-full relative flex flex-col bg-support-background max-w-[480px] mx-auto">
                <ToolBar
                    title="مشاهده تیکت"
                    chevronColor="white"
                    style={"bg-[#261B5B]"}
                    ContainerStyle={"bg-[#261B5B]"}
                />
                <div className=" w-full flex overflow-scroll flex-col mt-[60px] pb-6 bg-support-background">
                    <MessageDetail ticket={ticket}/>
                    <div
                        className="w-full o flex bg-support-background  pb-[140px] flex-col px-[22px] pt-[22px] gap-10">
                        {getTicketMessageQuery.isFetching ?
                            <>
                                <RecieveMessageItemShimmer/>
                                <RecieveMessageItemShimmer/>
                                <RecieveMessageItemShimmer/>
                            </>
                            : message?.map((item) =>
                                item?.admin == null ? (
                                    <SenderMessageItem messageDetail={item}/>
                                ) : (
                                    <ReceiveMessageItem messageDetail={item}/>
                                )
                            )}

                    </div>
                    {
                        ticket?.is_new&&
                        <div className="mb-[25px] w-[90%] mx-auto">
                        <MessageNotification/>
                    </div>
                    }
                   
                </div>
                <div className="absolute float-button right-[6%] z-50">
                    <CustomButton onClick={handleOpenAddFile}>
                        <div className="flex w-full gap-4 items-center justify-center">
                            <p className="!text-[1.4rem] !fa-format-400"> پیام جدید</p>
                            <SupportMainPageButtonLogoSVG className="ml-3"/>
                        </div>
                    </CustomButton>
                </div>

               <CreateNewMessage ref={CreateNewMessageRef}/>
            </div>
        </div>
    );
}

export default ShowMessage;

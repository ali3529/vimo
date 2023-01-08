import React, {useEffect, useState} from "react";
import {CustomButton} from "../../../components/customButton/CustomButton";
import SupportMainPageEmptyTicketListSVG from "../../../components/support/assets/SupportMainPageEmptyTicketListSVG";
import SupportMainPageCrownSVG from "../../../components/support/assets/SupportMainPageCrownSVG";
import SupportMainPageTicketCardSVG from "../../../components/support/assets/SupportMainPageTicketCardSVG";
import SupportMainPageButtonLogoSVG from "../../../components/support/assets/SupportMainPageButtonLogoSVG";
import SupportMainPageSupportAllDaySvg from "../../../components/support/assets/SupportMainPageSupportAllDaySvg";
import {useQuery} from "@tanstack/react-query";
import {getTickets} from "../../../service/ApiClient";
import {useSelector} from "react-redux";
import {selectInitialData} from "../../../redux/initialize/InitializeSlice";
import {Link, useNavigate} from "react-router-dom";
import SupportMainPageShimmer from "../../../components/support/SupportMainPageShimmer";

function SupportMainPage() {
    const {ticket_page_settings,user} = useSelector(selectInitialData);
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    const getTicketsQuery = useQuery(["getTicketsQuery"], () => getTickets(), {
        onSuccess: (res) => {
            setTickets(res?.data?.result?.tickets);
        },
        refetchOnWindowFocus: false,
    });

    useEffect(() => {
        setTickets(getTicketsQuery?.data?.data?.result?.tickets);
    }, []);

    const handleClickTicket = (ticket) => {
        navigate("/support/message/show", {state: ticket});
    };

    return (
        <div className="bg-support-background w-full h-full">
            <div className="h-full overflow-hidden relative mx-auto max-w-[480px]">
                <div className="w-full h-full container  mx-auto  overflow-scroll">
                    <div className="text-white text-[2rem] mt-4 fa-format-300 flex items-center justify-center w-full">
                        پشتیبانی
                    </div>
                    <div
                        dir="ltr"
                        className="flex w-full items-center justify-around mt-[4px] py-10"
                    >
                        {/* condition for showing different svg base on user */}
                        <div className="flex flex-col items-end">
                            {user?.is_premium ? (
                                <>
                                    <div className=" w-[70px] h-[12px]  relative" style={{backgroundColor:ticket_page_settings?.not_premium_color}}>
                                        <p className="text-white text-[1.6rem] fa-format-300 flex items-center justify-center absolute right-3 -bottom-1">
                                        {ticket_page_settings?.not_premium_h1}
                                        </p>
                                    </div>
                                    <p className="text-[1.2rem] fa-format-300 text-gray-text-A mt-4">
                                        {ticket_page_settings?.not_premium_h2}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className=" w-[121px] h-[12px]  relative" style={{backgroundColor:ticket_page_settings?.premium_color}}>
                                        <p className="text-white text-[1.6rem] fa-format-300 flex items-center justify-center absolute right-2 -bottom-1">
                                        {ticket_page_settings?.premium_h1}
                                        </p>
                                        <SupportMainPageCrownSVG className="mb-2"/>
                                    </div>
                                    <p className="text-[1rem] min-[350px]:pl-2 min-[350px]:text-[1.2rem]  fa-format-300 text-gray-text-A mt-4 text-right">
                                    {ticket_page_settings?.premium_h2}
                                    </p>
                                </>
                            )}
                        </div>
                        <img  src={ticket_page_settings?.header_image}/>
                    </div>
                    {/* Tickets Card Base on have tickets or not */}
                    {tickets?.length === 0 && !getTicketsQuery.isLoading ? (
                        <>
                            <div className="flex w-full items-center justify-center mt-[5.5rem]">
                                <SupportMainPageEmptyTicketListSVG/>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <div
                                    className="w-[50%] flex items-center justify-center text-[1.4rem] fa-format-300 text-gray-text-A text-center mt-12"
                                >
                                    شما هنوز تیکتی ثبت نکرده اید برای ثبت اولین تیکت
                                    <br/>
                                    دکمه ی تیکت جدید را لمس کنید
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="w-full flex flex-col items-center justify-center mb-[50px] pb-[84px]">
                            <p className="text-[1.6rem] text-white fa-format-300 text-center mb-6 mt-3">
                                لیست تیکت ها
                            </p>
                            <div className="flex flex-col gap-[2.1rem]">
                                {getTicketsQuery.isLoading ? (
                                    <SupportMainPageShimmer/>
                                ) : (
                                    tickets?.map((ticket) => (
                                        <div
                                            className="relative"
                                            onClick={() => handleClickTicket(ticket)}
                                        >
                                            <SupportMainPageTicketCardSVG/>
                                            <div
                                                className="absolute top-20 -right-2 -rotate-90 text-gray-text-A text-[1.4rem] fa-format-400 fa-num">
                                                کد: {ticket?.ticket_code}
                                            </div>
                                            <div
                                                dir="rtl"
                                                className="text-[1.4rem] fa-format-300 text-white absolute top-[20px] right-40 w-[65%] truncate"
                                            >
                                                {ticket?.subject}
                                            </div>
                                            <div
                                                className="text-[1.2rem] fa-format-200 text-gray-text-A absolute top-20 right-40">
                                                آخرین رویداد:
                                                <span className="mr-4 !tracking-[0.2rem] fa-format-400 fa-num">
                                                    {ticket?.changed_at}
                                                 </span>
                                            </div>
                                            <div
                                                className={` w-[102px] flex items-center justify-center h-[30px] rounded-[15px] absolute top-32 right-40`}
                                                style={{backgroundColor: ticket?.ticket_status?.background_color}}
                                            >
                                                <p
                                                    className={` text-[1.2rem] fa-format-400`}
                                                    style={{color:ticket?.ticket_status?.foreground_color}}
                                                >
                                                    {ticket?.ticket_status?.title}
                                                </p>
                                            </div>
                                            {ticket?.unread_count != 0 ? (
                                                <div
                                                    className="w-[77px] flex items-center justify-center h-[18px] bg-red text-[#F2F2F2] text-[1rem] fa-format-300 rounded-[12px] -top-3 absolute left-6">
                                                    پیام جدید
                                                    <span className="fa-num ml-2">
                                                          {ticket?.unread_count}
                                                     </span>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                    {/* add ticket button with fixed position */}
                    <Link to={"/support/ticket-category"} className="absolute float-button right-[6%] min-[400px]:right-[12%]">
                        <CustomButton>
                            <div className="flex w-full gap-4 items-center justify-center">
                                <p className="!text-[1.4rem] !fa-format-400">تیکت جدید</p>
                                <SupportMainPageButtonLogoSVG className="ml-3"/>
                            </div>
                        </CustomButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SupportMainPage;

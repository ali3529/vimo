import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {ToolBar} from "../../../components/ToolBar/ToolBar";
import SupportGearwheelSVG from "../../../components/support/assets/SupportGearwheelSVG";
import PlusSVG from "../../../components/common/PlusSVG";
import TicketCategoryItem from "../../../components/support/TicketCategoryItem";
import SupportProfileSVG from "../../../components/support/assets/SupportProfileSVG";
import SupportCreditCardSVG from "../../../components/support/assets/SupportCreditCardSVG";
import SupportPlaySVG from "../../../components/support/assets/SupportPlaySVG";
import {Button, Skeleton} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {getFAQ} from "../../../service/ApiClient";
import {useState} from "react";
import {useEffect} from "react";
import TicketCategoryItemShimmer from "../../../components/support/TicketCategoryItemShimmer";

function TicketCategory(props) {
    const [FAQ, setFAQ] = useState([])

    const getFaqQuery = useQuery(["getFaqQuery"], () => getFAQ(), {
        onSuccess: (res) => {
            setFAQ(res?.data?.result?.faq_categories)
        }
    })

    useEffect(() => {
        setFAQ(getFaqQuery?.data?.data?.result?.faq_categories)
    }, [])

   
    return (<div
        className=" w-full h-full   overflow-scroll pb-11 bg-black-BG "
        dir="rtl"
    >
        <div className="w-full h-full container relative z-1 max-w-[480px] mx-auto  ">
            <ToolBar title="ثبت تیکت"/>
            <div className="flex flex-col justify-center-items-center px-[22px] overflow-scroll">
                <p className="fa-format-400 text-[1.6rem] leading-[25px] text-gray-A mt-[68px]">
                    دسته بندی تیکت خود را انتخاب کنید
                </p>
                <div className="flex flex-col gap-[12px] mt-[23px] mb-[24px]">
                    {
                        getFaqQuery.isLoading ?
                            <>
                                {
                                    Array.from([1, 2, 3, 4, 5, 6]).map(item =>
                                        <div dir='rtl'>
                                            <TicketCategoryItemShimmer/>
                                        </div>
                                    )
                                }
                            </>
                            :
                            FAQ?.map(item =>
                                <TicketCategoryItem
                                    item={item}
                                >
                                    <img src={item?.disable_icon}/>
                                </TicketCategoryItem>
                            )
                    }
                </div>
            </div>
        </div>
    </div>);
}

export default TicketCategory;

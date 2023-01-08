import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {setCategory} from "../../redux/ticket/SelectedTicketSlice";
import PlusSVG from "../../components/common/PlusSVG";

function TicketCategoryItem({item, children}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //send data to state management
    const handleClickFaqItem = () => {
        dispatch(setCategory({category: item}))
        if (item?.direct_ticket) {
            localStorage.setItem("direct_ticket", true)
            navigate("/support/ticket-subcategory")
        } else {
            navigate("/support/ticket-subcategory")
        }
    }
    return (
        <>
            {
                item?.is_other ?
                    <div
                        className="!flex mt-4  rounded-[100px] cursor-none lg:cursor-pointer !items-center !mb-36 !w-[110px] !h-[44px] !justify-center"
                        onClick={handleClickFaqItem}
                    >
                        <Button className="w-full h-full !bg-blue !gap-[12px] !rounded-[100px] ">
                            <div className="w-[20px] h-[20px]">
                                <PlusSVG/>
                            </div>
                            <div className="fa-format-400 text-[1.6rem] leading-[25px] text-white">
                                دیگر
                            </div>
                        </Button>
                    </div>
                    : <div className="flex bg-black-box !cursor-none !lg:cursor-pointer w-full rounded-[15px] h-[56px]"
                           onClick={handleClickFaqItem}
                    >
                        <Button
                            className="!flex !w-full !h-full  !items-center !justify-start  !p-[16px]  !rounded-[15px] !gap-[15px] ">
                            <div className="w-[24px] h-[24px]">{children}</div>
                            <div className="fa-format-400 text-[1.4rem] leading-[25px] text-white">
                                {item?.title}
                            </div>
                        </Button>
                    </div>
            }
        </>

    );
}

export default TicketCategoryItem;

import React from "react";
import NavBarContainer from "../../../navBar/NavBarContainer";
import ShowTicketBackChevronkSvg from "../../assets/ShowTicketBackChevronkSvg";


function MessageNavBar() {
    return (
        <NavBarContainer style={"pb-[72px] bg-show-ticket-detail-bg"}>
            <div className="flex flex-col justify-between items-center bg text-white w-full ">
                <div className="flex flex-row justify-between items-center text-white w-full">
                    <p className="fa-format-400 text-[20px] leading-8">مشاهده تیکت </p>
                    <ShowTicketBackChevronkSvg/>
                </div>
            </div>
        </NavBarContainer>

    );
}

export default MessageNavBar;

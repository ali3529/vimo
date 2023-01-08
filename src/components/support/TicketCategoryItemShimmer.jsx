import React from "react";
import {Button, Skeleton} from "@mui/material";
function TicketCategoryItemShimmer() {
    return (
        <>
            <div className="flex bg-black-box !cursor-none !lg:cursor-pointer w-full rounded-[15px] h-[56px]"
            >
                <Button
                    className="!flex !w-full !h-full  !items-center !justify-start  !p-[16px]  !rounded-[15px] !gap-[15px] ">
                    <div className="w-[30px] h-[40px] rounded-full overflow-hidden">
                        {<Skeleton
                            className="after:!animate-spin-slow !w-full !h-full  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[8px] "
                            animation="wave"
                            variant="text"

                            sx={{animationDuration: "0.80s !important"}}
                        />}
                    </div>
                    <div className="fa-format-400 text-[1.4rem] w-full leading-[25px] text-white">
                        {<Skeleton
                            className="after:!animate-spin-slow !w-[80%] !h-[20px]  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[5px] "
                            animation="wave"
                            variant="text"

                            sx={{animationDuration: "0.80s !important"}}
                        />}
                    </div>
                </Button>
            </div>
           
        </>
    );
}

export default TicketCategoryItemShimmer;

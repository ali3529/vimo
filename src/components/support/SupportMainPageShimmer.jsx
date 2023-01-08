import {Skeleton} from '@mui/material'
import React from 'react'
import SupportMainPageTicketCardSVG from './assets/SupportMainPageTicketCardSVG'

function SupportMainPageShimmer({ticket}) {
    return (
        <div className="flex flex-col gap-[2.1rem]">
            {Array.from([1, 2, 3, 4])?.map(() => (
                <div className="relative">
                    <SupportMainPageTicketCardSVG/>
                    <div
                        className="absolute -top-4 right-11  text-gray-text-A text-[1.4rem] fa-format-400 fa-num"
                    >
                        <Skeleton
                            className="after:!animate-spin-slow after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[12px] "
                            animation="wave"
                            variant="text"
                            width={15}
                            height={140}
                            sx={{animationDuration: "0.80s !important"}}
                        />
                    </div>
                    <div
                        dir="rtl"
                        className="text-[1.4rem] fa-format-300 text-white absolute top-[20px] right-40 w-[65%] truncate"
                    >
                        <Skeleton
                            className="after:!animate-spin-slow !w-full after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[4px] "
                            animation="wave"
                            variant="text"
                            sx={{animationDuration: "0.80s !important"}}
                        />
                    </div>
                    <div
                        className="text-[1.2rem] fa-format-200 text-gray-text-A absolute top-20 right-40 flex flex-row justify-between">
                        <Skeleton
                            className="after:!animate-spin-slow mr-10 !w-[90px] after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[4px] "
                            animation="wave"
                            variant="text"
                            sx={{animationDuration: "0.80s !important"}}
                        />
                        <Skeleton
                            className="after:!animate-spin-slow !w-[80px] after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[4px] "
                            animation="wave"
                            variant="text"
                            sx={{animationDuration: "0.80s !important"}}
                        />
                    </div>
                    <div
                        className={` w-[102px] flex items-center justify-center h-[30px] rounded-[15px] absolute top-32 right-40`}
                    >
                        <Skeleton
                            className="after:!animate-spin-slow !w-full !h-[40px] after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[15px] "
                            animation="wave"
                            variant="text"
                            sx={{animationDuration: "0.80s !important"}}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SupportMainPageShimmer
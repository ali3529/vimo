import {Skeleton} from '@mui/material'
import React from 'react'

function VideoCardSkeleton() {
    return (
        <div>
            <div className="w-full  relative mt-4">
                <div className="w-full bg-black-box rounded-[15px]  flex gap-5 h-[92px] items-center">
                    <div className=" flex flex-row  ">
                        <Skeleton
                            className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg !mr-10 shadow-none rounded-[10px] "
                            animation="wave"
                            variant="rounded"
                            width={100}
                            height={68}
                            sx={{animationDuration: "0.80s !important"}}
                        />
                    </div>
                    <div className="w-full ">
                        {
                            <Skeleton
                                className="after:!animate-spin-slow !mb-2  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                                animation="wave"
                                variant="rounded"
                                height={21}
                                width={75}
                                sx={{animationDuration: "0.80s !important"}}
                            />
                        }
                        <Skeleton
                            className="after:!animate-spin-slow  !mb-4 after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                            animation="wave"
                            variant="rounded"
                            height={18}
                            width={65}
                            sx={{animationDuration: "0.80s !important"}}
                        />
                        <Skeleton
                            className="after:!animate-spin-slow    after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-[2px] "
                            animation="wave"
                            variant="rounded"
                            height={15}
                            width={50}
                            sx={{animationDuration: "0.80s !important"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCardSkeleton
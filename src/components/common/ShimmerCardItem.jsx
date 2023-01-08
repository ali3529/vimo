import {Skeleton} from '@mui/material'
import React from 'react'

function ShimmerCardItem({imageSize, titleSize, cartImage}) {
    return (
        <div className={` flex flex-col justify-start  `}>

            <Skeleton
                className="after:!animate-spin-slow !w-[100%] aspect-square  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-2xl "
                animation="wave" variant="text" sx={{animationDuration: "0.80s !important"}}/>


            <div className={`  flex flex-col items-end justify-start -mt-3 `}>
                <Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded "
                    animation="wave" variant="text" width={130} height={18}
                    sx={{animationDuration: "0.80s !important"}}/>
                <Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded !mt-2 "
                    animation="wave" variant="text" width={110} height={14}
                    sx={{animationDuration: "0.80s !important"}}/>
                <Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded !mt-5"
                    animation="wave" variant="text" width={50} height={11}
                    sx={{animationDuration: "0.80s !important"}}/>

            </div>
        </div>
    )
}

export default ShimmerCardItem
import {Skeleton} from '@mui/material'
import React from 'react'

function ShimmerCardITemSlider() {
    return (
        <div dir='rtl' className='w-full gap-3 flex flex-row overflow-hidden'>
            <div className={`  flex flex-col justify-between !w-2/3 h-full `}>
                <div className={`relative rounded-xl overflow-hidden card-shadow -mt-16`}>

                    <Skeleton
                        className="after:!animate-spin-slow !w-full !h-full  aspect-square   after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-2xl "
                        animation="wave" variant="text" sx={{animationDuration: "0.80s !important"}}/>

                </div>

                <div className='px-3 -mt-14'>
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
            <div className={` -ml-28 flex flex-col justify-between  !w-2/3 `}>
                <div className={`relative rounded-xl overflow-hidden card-shadow  -mt-16`}>

                    <Skeleton
                        className="after:!animate-spin-slow !w-full !h-full  aspect-square   after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-2xl "
                        animation="wave" variant="text" sx={{animationDuration: "0.80s !important"}}/>


                </div>
                <div className='px-3 -mt-14'>
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
        </div>
    )
}

export default ShimmerCardITemSlider
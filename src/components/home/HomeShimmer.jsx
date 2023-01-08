import {Skeleton} from '@mui/material'
import React from 'react'
import HomeShimmerSectionOne from './HomeShimmerSectionOne'
import HomeShimmerSectionTwo from './HomeShimmerSectionTwo'

function HomeShimmer() {
    return (
        <>
            <div className="w-full h-fit -mt-8 min-[510px]:-mt-28">
                <Skeleton
                    className=" after:!animate-spin-slow !rounded-[15px] after:!bg-shimmer-gradient !mx-auto !aspect-square  w-[87%]   max-[400px]:max-h-[310px] max-[590px]:max-h-[493px] max-h-[463px] !bg-shimmer-bg  shadow-none"
                    animation="wave"
                    variant="text" width={'90%'}
                    sx={{animation: 'ease-in-out', animationDuration: "0.4s !important"}}/>
            </div>
            <div className="w-full  -mt-12    flex flex-col justify-start items-center ">
                <div className="px-8 w-full">
                    <HomeShimmerSectionOne/>
                </div>
                <div className="  w-full">
                    <HomeShimmerSectionTwo/>
                </div>
                <div className="px-8 w-full">
                    <HomeShimmerSectionOne/>
                </div>
                <div className="  w-full">
                    <HomeShimmerSectionTwo/>
                </div>
            </div>
        </>
    )
}

export default HomeShimmer
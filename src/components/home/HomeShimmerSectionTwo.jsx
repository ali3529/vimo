import React from 'react'
import "swiper/css";
import "swiper/css/pagination";

import {Skeleton} from '@mui/material';
import ShimmerCardITemSlider from '../common/ShimmerCardITemSlider';

function HomeShimmerSectionTwo() {
    return (
        <>
            <div className=' flex flex-row w-full justify-between mt-16 px-8 '>
                <Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded "
                    animation="wave" variant="text" width={80} height={20}
                    sx={{animationDuration: "0.80s !important"}}/>
                <Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded "
                    animation="wave" variant="text" width={125} height={30}
                    sx={{animationDuration: "0.80s !important"}}/>
            </div>
            <ShimmerCardITemSlider/>
        </>
    )
}

export default HomeShimmerSectionTwo
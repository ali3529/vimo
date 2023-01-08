import React, {useEffect, useState} from 'react'
import {Skeleton} from '@mui/material';
import ShimmerCardItem from '../common/ShimmerCardItem';

function HomeShimmerSectionOne() {

    return (
        <div className='flex flex-col w-full mt-1'>
            <div className=' flex flex-row w-full justify-between items-center'>
                {<Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-lg "
                    animation="wave" variant="text" width={80} height={20}
                    sx={{animationDuration: "0.80s !important"}}/>}
                {<Skeleton
                    className="after:!animate-spin-slow  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none !rounded-lg "
                    animation="wave" variant="text" width={125} height={30}
                    sx={{animationDuration: "0.80s !important"}}/>}
            </div>
            {<div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-4 -mt-10 '>
                {Array.from([1, 2, 3, 4]).map(item =>
                    <div dir='ltr'>
                        <ShimmerCardItem/>
                    </div>
                )}
            </div>}
        </div>
    )
}

export default HomeShimmerSectionOne
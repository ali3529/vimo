import {Skeleton} from '@mui/material'
import React from 'react'
import ShimmerCardItem from './ShimmerCardItem'

function VideoCartItemShimmer() {
    return (
        <div className='flex flex-col w-full mt-1'>
            {<div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-4 -mt-10 '>
                {Array.from([1, 2, 3, 4, 5, 6]).map(item =>
                    <div dir='ltr'>
                        <ShimmerCardItem/>
                    </div>
                )}
            </div>}
        </div>
    )
}

export default VideoCartItemShimmer
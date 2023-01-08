import {Skeleton} from '@mui/material'
import React from 'react'

function FavoriteArtistsShimmer() {
    return (
        <div className='flex items-center justify-center'>
            <div className='flex items-center max-[340px]:gap-1 gap-5'>
                <div className='relative'>
                    <Skeleton
                        className="after:!animate-spin-slow !w-[80px] !h-[80px]  !object-cover !rounded-full absolute top-0 left-0  after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none "
                        animation="wave" variant="circular"
                        sx={{animationDuration: "0.80s !important"}}/>
                </div>
                <p className='text-white text-[1.4rem] fa-format-400'>
                    <Skeleton
                        className="after:!animate-spin-slow !w-[60px] !h-[20px]  !object-cover !rounded-lg   after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none "
                        animation="wave" variant="text"
                        sx={{animationDuration: "0.80s !important"}}/> <Skeleton
                    className="after:!animate-spin-slow !w-[35px] !h-[20px]  !object-cover !rounded-lg   after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none "
                    animation="wave" variant="text"
                    sx={{animationDuration: "0.80s !important"}}/>
                </p>
            </div>
        </div>
    )
}

export default FavoriteArtistsShimmer
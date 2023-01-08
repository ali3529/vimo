import {Skeleton} from '@mui/material';
import React from 'react'
import banner from '../../assets/images/The-Batman-2022-Sunset-Poster-Featured-01.webp'
import {ConvertImageRatio} from '../../utils/helper/ImageResizeFormat'
import useWindowDimensions from '../../utils/helper/ScreenSize';

function LastPopularArtistShimmer() {
    const {height, width} = useWindowDimensions();
    return (
        <div className={` flex flex-col justify-between  `}>
            <div className={`relative rounded-[12px]  overflow-hidden card-shadow e bg-contain bg-no-repeat`}
                 style={{aspectRatio: '1/1', height: ConvertImageRatio(width, 4)}}>
                <Skeleton
                    className="after:!animate-spin-slow !w-full !h-full  !object-cover !rounded-lg   after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none "
                    animation="wave" variant="rectangular"
                    sx={{animationDuration: "0.80s !important"}}/>
                <div
                    className='w-full h-2/6 absolute bottom-0 bg-popular-artist-bg z-20 text-[1.4rem] fa-format-400 text-white flex flex-row justify-center items-center'>
                    <Skeleton
                        className="after:!animate-spin-slow !w-3/6 !h-[15px]  !object-cover !rounded-lg   after:!bg-shimmer-gradient !bg-shimmer-bg  shadow-none "
                        animation="wave" variant="text"
                        sx={{animationDuration: "0.80s !important"}}/>
                </div>
            </div>
        </div>
    )
}

export default LastPopularArtistShimmer
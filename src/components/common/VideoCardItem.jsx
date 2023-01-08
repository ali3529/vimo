import {Skeleton} from '@mui/material'
import React from 'react'
import placeHolder from "../../assets/images/Group 8200.svg";
import {Img} from 'react-image'
import VideoPlaceHolderSVG from './assets/VideoPlaceHolderSVG';
import {useState} from 'react';

function VideoCardItem({item}) {
    const [loadingError, setLoadingError] = useState(false)
    return (
        <div className={` flex flex-col justify-between  `}>
            <div
                className={`relative rounded-xl overflow-hidden card-shadow max-[500px]:max-h-[135px] max-h-[193px] e bg-contain bg-no-repeat`}
            >
                {item?.cover?.optimized &&
                    <img
                        src={item?.cover?.optimized}
                        className={`w-full h-full object-cover absolute top-0 ${loadingError && "hidden"}`}
                        onError={(e) => setLoadingError(true)}
                    />}
                <div className='ab top-0 left-0 bottom-0 right-0  '><VideoPlaceHolderSVG/></div>
                <div className='absolute top-4 fa-num right-4 bg-card-time  z-10 text-white fa-format-200 text-[9px] flex pt-[3px] w-[37px] h-[14]
                                justify-center items-center  rounded-[3px]'>
                    {item?.duration}
                </div>
            </div>
            <div className={`  flex flex-col items-end justify-start mt-1`}>
                <p className='fa-format-500 max-[380px]:text-[11px] text-[14px]  text-white mt-[9px]'>
                    {item?.video_title}
                </p>
                <p className='fa-format-300 text-[12px] max-[380px]:text-[10px]  text-gray-A mt-[3px]'>
                    {item?.description}
                </p><p className='fa-format-300 text-[10px] text-gray-B mt-[6px]'>
                پخش {item?.view_count}
            </p>
            </div>
        </div>
    )
}

export default VideoCardItem

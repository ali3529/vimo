import React, { useState } from 'react'
import placeHolder from "../../assets/images/Group 9200.svg";
import placeHoldedddr from "/Group 9200.png";
import {Img} from 'react-image'

function VideoCardItemSlider({cover,item}) {
  const [loadingError, setLoadingError] = useState(false)
  return (
    <div className={` flex flex-col justify-between  `}>
        <div className={`relative rounded-xl overflow-hidden card-shadow min-h-[120px] min-w-[210px] `}>
            {/* <img className='w-screen h-full' src={cartImage}/> */}
            {cover&&<img  src={cover} className={`w-screen h-full absolute object-cover ${loadingError && "hidden"}`}
             onError={(e) => setLoadingError(true)}
            />}
            <img   src={placeHolder} className='w-screen  h-full ' />
            <div className='absolute top-4 fa-num right-4 bg-card-time  z-10 text-white fa-format-200 text-[9px] flex pt-[3px] w-[37px] h-[14]
             justify-center items-center  rounded-[3px]'>
            {item?.duration}
            </div>
        </div>

        <div className={`  flex flex-col items-end justify-start `}>
            <p className='fa-format-500 max-[380px]:text-[11px] text-[14px]  text-white mt-[9px]'>
           {item?.video_title}
            </p>
            <p className='fa-format-300 text-[12px] max-[380px]:text-[10px]  text-gray-A mt-[3px]'>
            {item?.description}
            </p><p className='fa-format-300 text-[10px] text-gray-B mt-[6px]'>
            پخش    {item?.view_count}
            </p>
        </div>
    </div>
  )
}

export default VideoCardItemSlider

import {Skeleton} from '@mui/material'
import React from 'react'
import placeHolder from "../../assets/images/Group 8200.svg";
import {Img} from 'react-image'

function ArtistCardItem({item}) {
    return (
        <div className={` flex flex-col justify-between  `}>
            <div
                className={`relative rounded-full overflow-hidden card-shadow w-[100px] h-[100px]  bg-contain bg-no-repeat`}>
                <Img src={item?.cover?.optimized} className='w-full h-full object-cover rounded-full'/>
            </div>
            <div className={`  flex flex-col items-center justify-center mt-[8px]`}>
                <p className='fa-format-500 text-[14px] max-[380px]:text-[10px]  text-gray-A mt-[3px]'>
                    {item?.name}
                </p>
            </div>
        </div>
    )
}

export default ArtistCardItem

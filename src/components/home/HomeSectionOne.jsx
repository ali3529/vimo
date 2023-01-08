import React, {useEffect, useState} from 'react'
import VideoCardItem from '../common/VideoCardItem'
import cartImage from "../../assets/images/home-item.png"
import HomeMorItemChevronSVG from './assets/HomeMorItemChevronSVG'
import HomeChildMetaData from './HomeChildMetaData'

function HomeSectionOne({items, metaData}) {
    console.log("dvsdvsdvsdvsdvs", items);
    return (
        <div className='flex flex-col w-full '>
            <HomeChildMetaData metaData={metaData}/>

            <div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-8 mt-4'>
                {items?.map(item =>
                    <div dir='ltr'>
                        <VideoCardItem item={item}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default HomeSectionOne

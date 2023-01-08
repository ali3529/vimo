import React from 'react'
import VideoCardItem from '../common/VideoCardItem'
import cartImage from "../../assets/images/home-item.png";
import HomeMorItemChevronSVG from './assets/HomeMorItemChevronSVG';

function HomeSectionThree() {
    return (<div className='flex flex-col w-full mt-12'>
            <div className=' flex flex-row w-full justify-between'>
            <span className='text-gray-A fa-format-500 text-[16px] flex flex-row-reverse items-center gap-4'>
                    دیدن همه
                    <span>
                        <HomeMorItemChevronSVG/>
                    </span>
            </span>
                <p className='text-white fa-format-600 text-[18px]'>جدید ترین ایرانی</p>
            </div>
            <div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-4 mt-6'>
                {Array.from([1, 2, 3, 4]).map(item => <div dir='ltr'>
                    <VideoCardItem cartImage={cartImage} titleSize="w-[167px]" imageSize=" w-[167px] h-[110px]"/>
                </div>)}
            </div>
        </div>)
}

export default HomeSectionThree

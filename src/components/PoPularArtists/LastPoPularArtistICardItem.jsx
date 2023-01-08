import React from 'react'
import banner from '../../assets/images/The-Batman-2022-Sunset-Poster-Featured-01.webp'
import {ConvertImageRatio} from '../../utils/helper/ImageResizeFormat'
import useWindowDimensions from '../../utils/helper/ScreenSize';

function LastPopularArtistICardItem({item}) {
    const {height, width} = useWindowDimensions();
    return (
        <div className={` flex flex-col justify-between `}>
            <div className={`relative rounded-[12px]  overflow-hidden card-shadow e bg-contain bg-no-repeat`}
                 style={{
                     aspectRatio: '1/1',
                     backgroundImage: `url("/Group 8200.svg")`,
                     height: ConvertImageRatio(width, 4)
                 }}>
                <img src={item?.cover?.optimized} className='w-full h-full object-cover'/>
                <div
                    className='w-full h-2/6 absolute bottom-0 bg-popular-artist-bg z-20  truncate text-[1.4rem] overflow-hidden fa-format-400 text-white flex flex-row justify-center items-center'
                >
                      <span dir='ltr' className=' h-[25px] w-full'>
                           {item?.name}
                      </span>
                </div>
            </div>
        </div>
    )
}

export default LastPopularArtistICardItem
import React from 'react'
import HomeMorItemChevronSVG from './assets/HomeMorItemChevronSVG'

function HomeChildMetaData({metaData}) {
    return (
        <div className={`flex flex-row w-full px-8 justify-between ${!metaData?.show_more ? "" : " my-10"}`}>
            {
                metaData?.show_more &&
                <span className='text-gray-A fa-format-500 text-[16px] flex flex-row-reverse items-center gap-4'
                      style={{color: metaData?.show_more_color}}
                >
                         {metaData?.show_more_title}
                    <span>
                         <HomeMorItemChevronSVG/>
                    </span>
                 </span>
            }
            {metaData?.title &&
                <p className='text-white fa-format-600 text-[18px]'
                   style={{color: metaData?.title_color}}
                >{metaData?.title}
                </p>}
        </div>
    )
}

export default HomeChildMetaData
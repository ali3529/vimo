import React from 'react'
import HomeMorItemChevronSVG from './assets/HomeMorItemChevronSVG'

function HomeSectionContainer({children, metaData}) {
    return (
        <div className='flex flex-col w-full '>
            <div className='px-6  flex flex-row w-full justify-between'>
                {
                    metaData?.show_more &&
                    <span
                        className='text-gray-A  my-3 fa-format-500 text-[16px] flex flex-row-reverse items-center gap-4'
                        style={{color: metaData?.show_more_color}}>
                        {metaData?.show_more_title}
                        <span>
                              <HomeMorItemChevronSVG/>
                        </span>
                    </span>
                }
                {metaData?.title &&
                    <p className='text-white my-3 fa-format-600 text-[18px]'
                       style={{color: metaData?.title_color}}
                    >
                        {metaData?.title}
                    </p>}
            </div>
            {children}
        </div>
    )
}

export default HomeSectionContainer
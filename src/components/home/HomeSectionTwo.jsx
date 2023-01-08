import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import cartImage from "../../assets/images/Rectangle 1006.png";
import VideoCardItemSlider from '../common/VideoCardItemSlider';
import HomeMorItemChevronSVG from './assets/HomeMorItemChevronSVG';
import HomeChildMetaData from './HomeChildMetaData';

function HomeSectionTwo({items, metaData}) {
    return (
        <>
            <HomeChildMetaData metaData={metaData}/>
            <Swiper
                className="!w-full mt-12"
                spaceBetween={10}
                slidesPerView={1.5}
                initialSlide={items?.length-1}
                dir="ltr"
                cssMode={true}
            >
                <div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-4 mt-6 !mr-[30px] '>
                    {items?.map((item, index) =>
                        <SwiperSlide className='  first:!ml-[20px] last:!mr-[20px] first:!pl-[10px] '>
                            <div>
                                <VideoCardItemSlider item={item} cover={item?.cover?.optimized}/>
                            </div>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </>
    )
}

export default HomeSectionTwo

import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import LastPopularArtistICardItem from './LastPopularArtistICardItem';
import LastPopularArtistShimmer from './LastPopularArtistShimmer';


function LastPopularArtist({items, loading}) {
    return (
        <>
            <div className={`flex flex-row w-full  justify-between px-[22px]`}>
                <p className='text-white fa-format-500 mt-2 text-[18px]'>
                    هنرمندان اخیرا دیده شده
                </p>
            </div>
            <Swiper
                className="!w-full mt-[12px] "
                spaceBetween={10}
                slidesPerView={3.5}
                dir="rtl"
                cssMode={true}
            >
                <div className='w-full grid grid-cols-2  m-auto  gap-x-6  gap-y-4 mt-6 !pl-[10px] '>
                    {loading
                        ? Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) =>
                            <SwiperSlide className='!mr-0  last:!ml-[20px]  !pr-[32px] '>
                                <div>
                                    <LastPopularArtistShimmer/>
                                </div>
                            </SwiperSlide>))
                        : items?.map(item =>
                            <SwiperSlide
                                className='!mr-0  last:!pl-[26px]  !pr-[32px] '><LastPopularArtistICardItem
                                item={item}/>
                            </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </>
    )
}

export default LastPopularArtist